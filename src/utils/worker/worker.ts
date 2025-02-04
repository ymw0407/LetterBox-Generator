import { ImageInfo } from "@/types/imageInfoType";
import { addLetterBoxWithJimp } from "@/utils/image/addLetterBox";

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
    const base64: string = await addLetterBoxWithJimp(
      messageData.imageInfo,
      messageData.ratioX,
      messageData.ratioY,
      messageData.padding,
      messageData.color
    );

    self.postMessage({
      success: true,
      base64,
      fileName: messageData.imageInfo.fileName,
    });
  } catch (error) {
    self.postMessage({ success: false, error });
  }
};
