interface NakamaQuery {
  id: string
  idUser: string
  content: queryElement[]
  createat: string
  updateat: string
  state: string
}

interface queryElement {
  infoID: string
  note: null | string
}
