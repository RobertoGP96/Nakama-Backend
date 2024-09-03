import { ExifTool } from 'exiftool-vendored';
import { SourceMeta } from '../types/source';

const exiftool = new ExifTool();

export async function extractMetadata(filePath: string) {
    try {
        const tags : SourceMeta = await exiftool.read(filePath);
        return tags
    } catch (error) {
        console.error('Error extracting metadata:', error);
    }
    return
}
