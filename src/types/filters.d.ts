export interface filters {
  category: [] | [{ name: string }]
  genre: [] | [{ name: string }]
  critic: [] | [{ name: string }]
  year: [number, number]
  rating: [number, number]
}
