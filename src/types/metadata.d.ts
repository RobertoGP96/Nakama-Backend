interface Metadata{
    id: number
    elementId: number

    path: string

    storage: number
    duration: number
    fps: number

    resolution: string
    codec: string
    audio: string
    subtitle: string
    
}

type createMetadata = Omit<Metadata, 'id'>
type tmpMetadata = Omit<Metadata, 'id'| 'elementId'>
type auxMetadata = Omit<Metadata, 'id'| 'elementId'| 'path'>
