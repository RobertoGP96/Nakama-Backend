import { MediaInfo } from 'mediainfo-node';

async function getVideoMetadata(filePath: string) {
    const mediainfo = await new MediaInfo();
    const fileData = await mediainfo.getInfo(filePath);
    console.log(fileData);
}