import { ExifTool } from 'exiftool-vendored';

const exiftool = new ExifTool();

export async function extractMetadata(filePath: string) {
    try {
        const tags = await exiftool.read(filePath);
        return tags
    } catch (error) {
        console.error('Error extracting metadata:', error);
    }
    return
}
