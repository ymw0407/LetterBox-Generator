import { ImageInfo } from "@/types/imageInfoType";
import {
  addLetterBoxWithCanvas,
  addLetterBoxWithJimp,
} from "@/utils/image/addLetterBox";

type MessageData = {
  imageInfo: ImageInfo;
  ratioX: number;
  ratioY: number;
  padding: number;
  color: string;
};

self.onmessage = async (e: MessageEvent) => {
  try {
    const messageData: MessageData = e.data;
    addLetterBoxWithCanvas(
      messageData.imageInfo,
      messageData.ratioX,
      messageData.ratioY,
      messageData.padding,
      messageData.color
    ).then((blob: Blob) => {
      self.postMessage({
        success: true,
        blob,
        fileName: messageData.imageInfo.fileName,
      });
    });
  } catch (error) {
    self.postMessage({ success: false, error });
  }
};
