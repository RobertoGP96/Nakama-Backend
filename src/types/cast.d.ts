interface Cast {
    id: null | number
    name: string
    og_name: string
    character: string
    deparment: department
    credits_id: number
}

enum department {
    "Director",
    "Actor",
    "Escritor"
}