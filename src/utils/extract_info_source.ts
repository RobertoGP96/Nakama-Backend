import { SourceMeta } from "../types/source";
import codec_list from "../utils/codec_format.json"

export function extractInfoSource( source: SourceMeta ): createMetadata {
    return {
        audio:"",
        codec: codec(source.CompressorID as string),
        duration: Number(((source.Duration as number)/60).toFixed(2)),
        fps: Number(source.VideoFrameRate as string),
        resolution: source.ImageSize as string,
        storage: Number((source.FileSize as string).split(" ")[0]),
        subtitle: "ES"
    }
}
function codec(id : string): string{
    const compress_format = codec_list.find((element)=>{
        element.format.includes(id)
    })
    return compress_format?compress_format.CodecID:"not found"
}