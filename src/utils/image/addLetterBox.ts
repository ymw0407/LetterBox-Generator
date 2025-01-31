import { Jimp, JimpMime } from "jimp";

export const addLetterBoxWithJimp = async (
  file: File,
  ratioX: number,
  ratioY: number,
  addX: number = 0,
  addY: number = 0,
  color: number = 0xffffffff
) => {
  const buffer: ArrayBuffer = await file.arrayBuffer();
  const image = await Jimp.fromBuffer(buffer);

  const originalWidth = image.width;
  const originalHeight = image.height;
  const targetAspectRatio = ratioX / ratioY;

  const additionalWidth = Math.round((originalWidth * addX) / 100);
  const additionalHeight = Math.round((originalHeight * addY) / 100);

  let paddedWidth = originalWidth + additionalWidth;
  let paddedHeight = originalHeight + additionalHeight;

  let newWidth = paddedWidth;
  let newHeight = paddedHeight;

  if (paddedWidth / paddedHeight > targetAspectRatio) {
    newHeight = Math.round(paddedWidth / targetAspectRatio);
  } else {
    newWidth = Math.round(paddedHeight * targetAspectRatio);
  }

  const letterboxedImage = new Jimp({
    color: color,
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
