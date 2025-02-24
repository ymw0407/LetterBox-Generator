import { FrameCanvasType, FrameDesignType } from "../addLetterBox";

export const NoneFrameDesign = (
  frameDesignType: FrameDesignType
): FrameCanvasType => {
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

  const canvas = new OffscreenCanvas(newWidth, newHeight);
  const ctx = canvas.getContext("2d");

  if (ctx) {
    ctx.fillStyle = frameDesignType.letterBoxOption.letterBoxColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      frameDesignType.imageBitmap,
      (newWidth - paddedWidth) / 2 + frameDesignType.additionalWidth / 2,
      (newHeight - paddedHeight) / 2 + frameDesignType.additionalHeight / 2
    );

    return { ctx, canvas };
  }
  throw new Error("Failed to get 2D context from OffscreenCanvas");
};
