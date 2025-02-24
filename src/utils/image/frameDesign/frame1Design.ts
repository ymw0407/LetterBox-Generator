import { FrameCanvasType, FrameDesignType } from "../addLetterBox";

export const frame1Design = (
  frameDesignType: FrameDesignType
): FrameCanvasType => {
  const topContentHeightRatio = 0.06;
  const bottomContentWidthRatio = 0.1;

  let paddedWidth =
    frameDesignType.originalWidth + frameDesignType.additionalWidth;
  let paddedHeight =
    frameDesignType.originalHeight + frameDesignType.additionalHeight;

  let newWidth = paddedWidth;
  let newHeight = paddedHeight;

  if (paddedWidth / paddedHeight > frameDesignType.targetAspectRatio) {
    newHeight = Math.round(paddedWidth / frameDesignType.targetAspectRatio);
  } else {
    newWidth = Math.round(paddedHeight * frameDesignType.targetAspectRatio);
  }

  let newHeightWithContent =
    newHeight * (1 + topContentHeightRatio + bottomContentWidthRatio);

  const canvas = new OffscreenCanvas(newWidth, newHeightWithContent);
  const ctx = canvas.getContext("2d");

  if (ctx) {
    ctx.fillStyle = frameDesignType.letterBoxOption.letterBoxColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.drawImage(
      frameDesignType.imageBitmap,
      (newWidth - paddedWidth) / 2 + frameDesignType.additionalWidth / 2,
      (newHeight - paddedHeight) / 2 +
        frameDesignType.additionalHeight / 2 +
        newHeight * topContentHeightRatio
    );

    const letterBoxHeight = (newHeight - frameDesignType.originalHeight) / 2;

    const mainFontSize1 = newHeight * 0.0275;
    const mainFontSize2 = newHeight * 0.0225;
    const subFontSize = newHeight * 0.02;

    const watermarkText = "https://ymw0407.github.io/LetterBox-Generator/";
    ctx.font = `400 ${subFontSize}px Pretendard`;
    ctx.fillStyle =
      frameDesignType.letterBoxOption.letterBoxColor === "white"
        ? "black"
        : "white";
    ctx.textAlign = "center";
    ctx.fillText(
      watermarkText,
      newWidth / 2,
      (newHeightWithContent - frameDesignType.originalHeight) / 2 -
        newHeight * 0.04
    );

    const shotOnText = "Shot on ";
    ctx.font = `400 ${mainFontSize1}px Pretendard`;
    ctx.textAlign = "left";
    const shotOnTextMatrix = ctx.measureText(shotOnText);
    const shotOnTextWidth = shotOnTextMatrix.width;

    const modelText = frameDesignType.imageInfo.exif.model
      ? frameDesignType.imageInfo.exif.model
      : "UNKNOWN";
    ctx.font = `${mainFontSize1}px Pretendard`;
    const modelTextMatrix = ctx.measureText(modelText);
    const modelTextWidth = modelTextMatrix.width;
    const modelTextHeight =
      modelTextMatrix.fontBoundingBoxAscent +
      modelTextMatrix.fontBoundingBoxDescent;

    const mainTextX = (newWidth - (shotOnTextWidth + modelTextWidth)) / 2;
    const mainTextY =
      newHeightWithContent -
      letterBoxHeight -
      modelTextHeight +
      newHeight * 0.015;
    ctx.font = `400 ${mainFontSize1}px Pretendard`;
    ctx.fillText("Shot on ", mainTextX, mainTextY - modelTextHeight);
    ctx.font = `800 ${mainFontSize1}px Pretendard`;
    ctx.fillText(
      modelText,
      mainTextX + shotOnTextWidth,
      mainTextY - modelTextHeight
    );

    const exifText = `${
      frameDesignType.imageInfo.exif.focalLength
        ? frameDesignType.imageInfo.exif.focalLength + "   "
        : ""
    }${
      frameDesignType.imageInfo.exif.fNumber
        ? frameDesignType.imageInfo.exif.fNumber + "   "
        : ""
    }${
      frameDesignType.imageInfo.exif.parsedShutterSpeed
        ? frameDesignType.imageInfo.exif.parsedShutterSpeed + "   "
        : ""
    }${
      frameDesignType.imageInfo.exif.iso
        ? frameDesignType.imageInfo.exif.iso
        : ""
    }`;
    ctx.font = `300 ${mainFontSize2}px Pretendard`;
    ctx.textAlign = "center";
    ctx.fillText(exifText, newWidth / 2, mainTextY);

    return { ctx, canvas };
  }
  throw new Error("Failed to get 2D context from OffscreenCanvas");
};
