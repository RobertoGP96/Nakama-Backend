interface ExternalIds {
    id: number
    elementId: number
    
    imdb_id: string
    tmdb_id: string
    omdb_id: string
}

type createExternalIds = Omit<ExternalIds, 'id' | 'elementId'>