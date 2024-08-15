interface Query {
  id: string;
  userId: string;
  elements: number[];
  state: string;
  description: string;
}
type editQuery = Omit<Query, 'id' | ''>
