import { ImageInfo } from "@/types/imageInfoType";

export const addLetterBoxWithCanvas = async (
  imageInfo: ImageInfo,
  ratioX: number,
  ratioY: number,
  add: number = 0,
  color: string = "white"
): Promise<Blob> => {
  const imageBitmap = await createImageBitmap(imageInfo.image);

  const originalWidth = imageBitmap.width;
  const originalHeight = imageBitmap.height;
  const targetAspectRatio = ratioX / ratioY;

  // 추가 크기 계산
  const additionalWidth = Math.round((originalWidth * add) / 100);
  const additionalHeight = Math.round((originalHeight * add) / 100);

  let paddedWidth = originalWidth + additionalWidth;
  let paddedHeight = originalHeight + additionalHeight;

  let newWidth = paddedWidth;
  let newHeight = paddedHeight;

  // 비율 맞추기
  if (paddedWidth / paddedHeight > targetAspectRatio) {
    newHeight = Math.round(paddedWidth / targetAspectRatio);
  } else {
    newWidth = Math.round(paddedHeight * targetAspectRatio);
  }

  // 캔버스 생성
  const canvas = new OffscreenCanvas(newWidth, newHeight);
  const ctx = canvas.getContext("2d");

  console.log(ctx);
  try {
    if (ctx) {
      ctx.fillStyle = color;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // 이미지 중앙 배치
      ctx.drawImage(
        imageBitmap,
        (newWidth - paddedWidth) / 2 + additionalWidth / 2,
        (newHeight - paddedHeight) / 2 + additionalHeight / 2
      );

      frame1Design(
        ctx,
        color,
        originalWidth,
        originalHeight,
        newWidth,
        newHeight,
        imageInfo
      );

      // // 텍스트 스타일 설정
      // const fontSize = paddedHeight * 0.25;
      // ctx.font = `${fontSize}px Pretendard`;
      // ctx.fillStyle = color === "white" ? "black" : "white";
      // ctx.textAlign = "left";

      // // 텍스트 크기 측정
      // const shotOnWidth = ctx.measureText("Shot on ").width;
      // ctx.font = `600 ${fontSize}px Pretendard`; // 살짝 크기 증가
      // const modelWidth = ctx.measureText(
      //   imageInfo.exif.model ? imageInfo.exif.model : "UNKNOWN"
      // ).width;

      // // 전체 텍스트 길이 계산
      // const totalTextWidth = shotOnWidth + modelWidth;

      // // 가운데 정렬을 위한 X 좌표 계산
      // const textStartX = (newWidth - totalTextWidth) / 2;
      // const textY = newHeight * 0.97; // y 위치 조정

      // // 텍스트 그리기
      // ctx.font = `${fontSize}px Pretendard`;
      // ctx.fillText("Shot on ", textStartX, textY);

      // ctx.font = `600 ${fontSize * 1.05}px Pretendard`; // 굵기 유지하되 크기 살짝 조정
      // ctx.fillText(
      //   imageInfo.exif.model ? imageInfo.exif.model : "UNKNOWN",
      //   textStartX + shotOnWidth + fontSize * 0.1,
      //   textY
      // ); // 간격 살짝 조정

      const blob = await canvas.convertToBlob({ type: "image/png" });

      return blob;
    }
  } catch {
    throw new Error("Failed to get 2D context from OffscreenCanvas2");
  }
  throw new Error("Failed to get 2D context from OffscreenCanvas");
};

const frame1Design = (
  ctx: OffscreenCanvasRenderingContext2D,
  color: string,

  originalWidth: number,
  originalHeight: number,

  newWidth: number,
  newHeight: number,

  imageInfo: ImageInfo
) => {
  const letterBoxWidth = (newWidth - originalWidth) / 2;
  const letterBoxHeight = (newHeight - originalHeight) / 2;
  const mainFontSize = (Math.min(letterBoxWidth, letterBoxHeight) / 8) * 3;
  const subFontSize = (Math.min(letterBoxWidth, letterBoxHeight) / 8) * 2;

  // Shot On Text
  const shotOnText = "Shot on ";
  ctx.font = `${600} ${mainFontSize}px Pretendard`;
  ctx.fillStyle = color === "white" ? "black" : "white";
  ctx.textAlign = "left";

  const shotOnTextMatrix = ctx.measureText(shotOnText);
  const shotOnTextWidth = shotOnTextMatrix.width;
  const shotOnTextHeight =
    shotOnTextMatrix.fontBoundingBoxAscent +
    shotOnTextMatrix.fontBoundingBoxDescent;

  // Model Text
  const modelText = imageInfo.exif.model ? imageInfo.exif.model : "UNKNOWN";
  ctx.font = `${800} ${mainFontSize}px Pretendard`;
  ctx.fillStyle = color === "white" ? "black" : "white";
  ctx.textAlign = "left";
  const modelTextMatrix = ctx.measureText(modelText);
  const modelTextWidth = modelTextMatrix.width;
  const modelTextHeight =
    modelTextMatrix.fontBoundingBoxAscent +
    modelTextMatrix.fontBoundingBoxDescent;

  const mainTextX = (newWidth - (shotOnTextWidth + modelTextWidth)) / 2;
  const mainTextY = newHeight - letterBoxHeight * 0.6;

  ctx.font = `${mainFontSize}px Pretendard`;
  ctx.fillText("Shot on ", mainTextX, mainTextY);

  ctx.font = `800 ${mainFontSize}px Pretendard`;
  ctx.fillText(
    imageInfo.exif.model ? imageInfo.exif.model : "UNKNOWN",
    mainTextX + shotOnTextWidth,
    mainTextY
  );
};
