import { ImageInfo } from "@/types/imageInfoType";
import { LetterBoxOptionType } from "@/types/letterBoxOptionType";
import { FrameDesign } from "./frameDesign";

export interface FrameDesignType {
  imageBitmap: ImageBitmap;
  imageInfo: ImageInfo;

  targetAspectRatio: number;

  letterBoxOption: LetterBoxOptionType;

  originalWidth: number;
  originalHeight: number;

  additionalWidth: number;
  additionalHeight: number;
}

export interface FrameCanvasType {
  ctx: OffscreenCanvasRenderingContext2D;
  canvas: OffscreenCanvas;
}

export const addLetterBoxWithCanvas = async (
  imageInfo: ImageInfo,

  letterBoxOption: LetterBoxOptionType
): Promise<Blob> => {
  const imageBitmap = await createImageBitmap(imageInfo.image);

  const originalWidth = imageBitmap.width;
  const originalHeight = imageBitmap.height;
  const targetAspectRatio = letterBoxOption.ratioX / letterBoxOption.ratioY;

  // 추가 크기 계산
  const additionalWidth = Math.round(
    (originalWidth * letterBoxOption.paddingPercent) / 100
  );
  const additionalHeight = Math.round(
    (originalHeight * letterBoxOption.paddingPercent) / 100
  );

  let frameDesignFunction: (
    frameDesignType: FrameDesignType
  ) => FrameCanvasType;

  switch (letterBoxOption.letterBoxFrame) {
    case 1:
      frameDesignFunction = FrameDesign.frame1Design;
      break;

    default:
      frameDesignFunction = FrameDesign.none;
      break;
  }

  try {
    const { canvas } = frameDesignFunction({
      imageBitmap,
      imageInfo,
      targetAspectRatio,
      letterBoxOption,
      originalWidth,
      originalHeight,
      additionalWidth,
      additionalHeight,
    });
    const blob = await canvas.convertToBlob({ type: "image/png" });
    return blob;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to get 2D context from OffscreenCanvas");
  }
};
