import { addLetterBoxWithJimp } from "@/utils/image/addLetterBox";

self.onmessage = async (e: MessageEvent) => {
  const { file, ratioX, ratioY, add, color } = e.data;
  try {
    const base64: string = await addLetterBoxWithJimp(
      file,
      ratioX,
      ratioY,
      add,
      color
    );
    self.postMessage({ success: true, base64 });
  } catch (error) {
    self.postMessage({ success: false, error });
  }
};
