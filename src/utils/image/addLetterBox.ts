import { ImageInfo } from "@/types/imageInfoType";
import { cssColorToHex, Jimp, JimpMime } from "jimp";

export const addLetterBoxWithJimp = async (
  imageInfo: ImageInfo,
  ratioX: number,
  ratioY: number,
  add: number = 0,
  color: string = "white"
): Promise<string> => {
  const buffer: ArrayBuffer = await imageInfo.image.arrayBuffer();
  const image = await Jimp.fromBuffer(buffer);

  const originalWidth = image.width;
  const originalHeight = image.height;
  const targetAspectRatio = ratioX / ratioY;

  const additionalWidth = Math.round((originalWidth * add) / 100);
  const additionalHeight = Math.round((originalHeight * add) / 100);

  let paddedWidth = originalWidth + additionalWidth;
  let paddedHeight = originalHeight + additionalHeight;

  let newWidth = paddedWidth;
  let newHeight = paddedHeight;

  if (paddedWidth / paddedHeight > targetAspectRatio) {
    newHeight = Math.round(paddedWidth / targetAspectRatio);
  } else {
    newWidth = Math.round(paddedHeight * targetAspectRatio);
  }

  const colorHex = cssColorToHex(color);

  const letterboxedImage = new Jimp({
    color: colorHex,
    width: newWidth,
    height: newHeight,
  });

  letterboxedImage.composite(
    image,
    (newWidth - paddedWidth) / 2 + additionalWidth / 2,
    (newHeight - paddedHeight) / 2 + additionalHeight / 2
  );

  return await letterboxedImage.getBase64(JimpMime.png);
};
