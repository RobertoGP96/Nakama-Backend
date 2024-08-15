interface User {
  id: string

  nickname: string
  username: string
  lastname: string
  
  password: string

  role: string

  email: string
  phone: string

  MiList: null | MiList[]
  querys: null | Query[]
}

type uniqueUser = Pick<User, 'nickname' | 'email' | 'phone' >
type editUser = Omit<User, 'MiList' | 'querys'>