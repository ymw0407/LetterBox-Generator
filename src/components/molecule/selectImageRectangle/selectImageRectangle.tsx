import { SelectImageLottie } from "@components/atom/lottie";
import { DottedLineRectangle } from "@components/atom/rectangle";
import { createSignal, Setter } from "solid-js";
import * as styles from "./selectImageRectangle.css";
import exifr from "exifr";
import Worker from "@/utils/worker/worker.ts?worker";
import { parseImageList } from "@/utils/image/imageInfo";
import { ImageInfo } from "@/types/imageInfoType";

export interface SelectImageRectangleProps {
  setImageInfoList: Setter<ImageInfo[]>;
}

export const SelectImageRectangle = (props: SelectImageRectangleProps) => {
  const [element, setElement] = createSignal<HTMLInputElement | null>();

  const onClickRectangle = () => {
    const elementClick = element();
    if (elementClick) {
      elementClick.click();
    }
  };

  const onChangeImageUpload = (target: HTMLInputElement) => {
    const fileList: FileList | null = target.files;
    if (fileList) {
      parseImageList(Array.from(fileList)).then(
        (imageInfoList: ImageInfo[]) => {
          console.log(imageInfoList[0]);
          props.setImageInfoList(imageInfoList);
        }
      );

      // setFiles(Array.from(fileList));

      // files().forEach((file) => {
      //   const worker = new Worker();

      //   worker.postMessage({
      //     file,
      //     ratioX: 3,
      //     ratioY: 4,
      //     addX: 10,
      //     addY: 10,
      //   });

      //   worker.onmessage = (e) => {
      //     const { success, base64, error } = e.data;
      //     if (success) {
      //       const link = document.createElement("a");
      //       link.href = base64;
      //       link.download = `processed_image_${Date.now()}.png`;
      //       link.click();
      //     } else {
      //       console.error(error);
      //     }

      //     worker.terminate();
      //   };
      //   exifr.parse(file).then((exif) => {
      //     console.log(exif);
      //   });
      // });s
    }
  };

  return (
    <>
      <input
        type="file"
        accept="image/*"
        ref={setElement}
        style={{ display: "none" }}
        multiple
        onchange={(e) => {
          console.log(e.target.files);
          onChangeImageUpload(e.target);
        }}
      />
      <div onclick={onClickRectangle} class={styles.selectImageRectangle}>
        <DottedLineRectangle>
          <div class={styles.lottieContainer}>
            <SelectImageLottie />
          </div>
        </DottedLineRectangle>
      </div>
    </>
  );
};
