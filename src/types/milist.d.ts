interface MiList {
  id: string

  userId: string
  elements: number[]
}
type editMilist = Omit<MiList, 'id' | 'userId'>