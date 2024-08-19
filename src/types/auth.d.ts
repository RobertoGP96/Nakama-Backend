type registerAuth = {
    username: string,
    lastname: string,
    nickname: string,
    email: string,
    phone: string,
    password: string
}

type loginAuth = Omit<registerAuth, 'lastname' | 'username'| 'nickname'|'phone' >