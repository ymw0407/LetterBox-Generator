import { ImageInfo } from "@/types/imageInfoType";
import { LetterBoxOptionType } from "@/types/letterBoxOptionType";
import { addLetterBoxWithCanvas } from "@/utils/image/addLetterBox";

type MessageData = {
  imageInfo: ImageInfo;
  ratioX: number;
  ratioY: number;
  padding: number;
  color: string;
  letterBoxFrame?: number;
};

self.onmessage = async (e: MessageEvent) => {
  try {
    const messageData: MessageData = e.data;
    const letterBoxOption: LetterBoxOptionType = {
      ratioX: messageData.ratioX,
      ratioY: messageData.ratioY,

      letterBoxColor: messageData.color,

      paddingPercent: messageData.padding,
      letterBoxFrame: messageData.letterBoxFrame,
    };
    addLetterBoxWithCanvas(messageData.imageInfo, letterBoxOption).then(
      (blob: Blob) => {
        self.postMessage({
          success: true,
          blob,
          fileName: messageData.imageInfo.fileName,
        });
      }
    );
  } catch (error) {
    self.postMessage({ success: false, error });
  }
};
