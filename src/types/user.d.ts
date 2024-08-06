interface User {
  id: string

  nickname: string
  username: string
  lastname: string
  
  passw: string

  role: string

  email: string
  phone: string
  addres: string

  mi_list: null | MiList[]
  querys: null | Querys[]
}
