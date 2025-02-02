import { SelectImageLottie } from "@components/atom/lottie";
import { DottedLineRectangle } from "@components/atom/rectangle";
import { createSignal, Setter, Show } from "solid-js";
import * as styles from "./selectImageRectangle.css";
import { parseImageList } from "@/utils/image/imageInfo";
import { ImageInfo } from "@/types/imageInfoType";
import { themeVars } from "@styles/theme/themeContract.css";
import { alloweFileTypes } from "@components/pages/main";
import { ErrorToast } from "@components/atom/toast/errorToast/errorToast";

export interface SelectImageRectangleProps {
  setImageInfoList: Setter<ImageInfo[]>;
}

export const SelectImageRectangle = (props: SelectImageRectangleProps) => {
  const [element, setElement] = createSignal<HTMLInputElement | null>();
  const [isDragging, setIsDragging] = createSignal<boolean>(false);
  const [toastOn, setToastOn] = createSignal<boolean>(false);

  const onClickRectangle = () => {
    const elementClick = element();
    if (elementClick) {
      elementClick.click();
    }
  };

  const onChangeImageUpload = (target: HTMLInputElement) => {
    const fileList: FileList | null = target.files;
    if (fileList) {
      for (const file of fileList) {
        if (!alloweFileTypes.includes(file.type)) {
          setToastOn(true);
          props.setImageInfoList([]);
          break;
        }
      }

      parseImageList(Array.from(fileList)).then(
        (imageInfoList: ImageInfo[]) => {
          props.setImageInfoList(imageInfoList);
        }
      );
    }
  };

  const onDragEnterHandler = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();

    setIsDragging(true);
  };

  const onDragLeaveHandler = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (
      !e.relatedTarget ||
      (e.currentTarget &&
        !(e.currentTarget as Node).contains(e.relatedTarget as Node))
    ) {
      setIsDragging(false);
    }
  };

  const onDragOverHandler = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const onDropHandler = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();

    setIsDragging(false);

    if (e.dataTransfer && e.dataTransfer.files) {
      const fileList: FileList = e.dataTransfer.files;
      for (const file of fileList) {
        if (!alloweFileTypes.includes(file.type)) {
          setToastOn(true);
          props.setImageInfoList([]);
          break;
        }
      }

      parseImageList(Array.from(fileList)).then(
        (imageInfoList: ImageInfo[]) => {
          props.setImageInfoList(imageInfoList);
        }
      );
    }
  };

  return (
    <>
      <input
        type="file"
        accept="image/png, image/jpeg"
        ref={setElement}
        style={{ display: "none" }}
        multiple
        onchange={(e) => {
          onChangeImageUpload(e.target);
        }}
      />
      <Show when={toastOn()}>
        <ErrorToast
          title="에러가 발생했습니다!"
          description="지원되지 않는 파일이 업로드되었습니다."
          sec={5}
          setToastOn={setToastOn}
        />
      </Show>
      <label
        for="file"
        ondragenter={onDragEnterHandler}
        ondragleave={onDragLeaveHandler}
        ondragover={onDragOverHandler}
        ondrop={onDropHandler}
      >
        <div onclick={onClickRectangle} class={styles.selectImageRectangle}>
          <DottedLineRectangle
            style={
              !isDragging()
                ? {}
                : { "background-color": themeVars.color.primary[80] }
            }
          >
            <div class={styles.lottieContainer}>
              <SelectImageLottie />
            </div>
          </DottedLineRectangle>
        </div>
      </label>
    </>
  );
};
