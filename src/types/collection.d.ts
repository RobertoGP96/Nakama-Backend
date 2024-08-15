interface Collection {
  id: string
  title: string
  description: string
  contents: number[]
}

type createCollection = Omit<Collection, 'id'>
