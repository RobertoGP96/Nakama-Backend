type ApiKey ={
    id: string,
    name: string,
    status: boolean,
    createat: Date,
    updateat: Date,
    token: string
}
type createApiKey = Omit<ApiKey, 'id' | 'createat' | 'updateat'>
type newApiKey = Omit<ApiKey, 'id' | 'createat' | 'updateat'| 'token'>
