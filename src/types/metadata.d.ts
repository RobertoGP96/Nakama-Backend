interface Metadata{
    id: number
    elementId: number | null

    storage: number
    duration: number
    fps: number

    resolution: string
    codec: string
    audio: string
    subtitle: string
    
}

type createMetadata = Omit<Metadata, 'id' | 'elementId'>