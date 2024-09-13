import { ExiftoolProcess } from "node-exiftool";

const ep = new ExiftoolProcess();

export async function getVideoMetadata(videoPath: string) {
  if (!videoPath) {
    throw new Error("No video path provided");
  }
  try {
    await ep.open();
    const metadata = await ep.readMetadata(videoPath, ["-File:all"]);
    await ep.close();
    return metadata.data[0];
  } catch (error) {
    if (ep.isOpen) {
      await ep.close();
    }
    console.error("Error reading video metadata:", error);
    throw new Error(
      "Error reading video metadata: " + (error as Error).message
    );
  }
}
