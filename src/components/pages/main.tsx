import { ImageInfo, ProcessedImageInfo } from "@/types/imageInfoType";
import { RatioValueType } from "@components/molecule/selectorList/selectorList";
import {
  ImageTemplate,
  ImageTemplateProps,
} from "@components/template/imageTemplate/imageTemplate";
import { MainTemplate } from "@components/template/mainTemplate/mainTemplate";
import {
  OptionsTemplate,
  OptionsTemplateProps,
} from "@components/template/optionsTemplate/optionsTemplate";
import { createEffect, createSignal, Show } from "solid-js";
import * as styles from "./main.css";
import { Button } from "@components/atom/button/button";
import Worker from "@/utils/worker/worker.ts?worker";
import JSZip from "jszip";
import { createStore } from "solid-js/store";
import { ErrorToast } from "@components/atom/toast/errorToast/errorToast";

const title = {
  text: `레터박스 생성기`,
};

const description = {
  text: `lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
};

const color = ["white", "black"];

export const alloweFileTypes = ["image/png", "image/jpeg"];

export const Main = () => {
  const [imageInfoList, setImageInfoList] = createSignal<ImageInfo[]>([]);

  const [letterBoxStyleOption, setLetterBoxStyleOption] =
    createSignal<number>(0);
  const [imageRatioOption, setimageRatioOption] = createSignal<RatioValueType>({
    x: 4,
    y: 3,
  });
  const [letterBoxPaddingOption, setLetterBoxPaddingOption] =
    createSignal<number>(0);

  const optionsTemplateProps: OptionsTemplateProps = {
    letterBoxStyleOption: {
      getValue: letterBoxStyleOption,
      setValue: setLetterBoxStyleOption,
    },
    imageRatioOption: {
      getValue: imageRatioOption,
      setValue: setimageRatioOption,
    },
    letterBoxPaddingOption: {
      getValue: letterBoxPaddingOption,
      setValue: setLetterBoxPaddingOption,
    },
  };

  const imageTemplateProps: ImageTemplateProps = {
    getImageInfoList: imageInfoList,
    setImageInfoList: setImageInfoList,

    getImageRatioOption: imageRatioOption,

    getLetterBoxStyleOption: letterBoxStyleOption,

    getLetterBoxPaddingOption: letterBoxPaddingOption,
  };

  const [processedImageBase64List, setProcessedImageBase64List] = createStore<
    ProcessedImageInfo[]
  >([]);

  const workerHandler = (imageInfo: ImageInfo) => {
    const worker = new Worker();

    worker.postMessage({
      imageInfo: imageInfo,
      ratioX: imageRatioOption().x,
      ratioY: imageRatioOption().y,
      padding: letterBoxPaddingOption(),
      color: color[letterBoxStyleOption()],
    });

    worker.onmessage = (e) => {
      const { success, base64, fileName, error } = e.data;
      if (success) {
        setProcessedImageBase64List([
          ...processedImageBase64List,
          { fileName, base64 },
        ]);
      } else {
        setLetterBoxErrorToastOn(true);
        console.error(error);
      }

      worker.terminate();
    };
    //   // exifr.parse(file.image).then((exif) => {
    //   //   console.log(exif);
    //   // });
    // });
  };

  const [zipErrorToastOn, setZipErrorToastOn] = createSignal<boolean>(false);
  const [letterBoxErrorToastOn, setLetterBoxErrorToastOn] =
    createSignal<boolean>(false);

  const generateHandler = async (imageInfoList: ImageInfo[]) => {
    imageInfoList.map((imageInfo: ImageInfo) => workerHandler(imageInfo));
  };

  const onDragHandler = (e: DragEvent) => {
    e.preventDefault();
  };

  const onDragOverHandler = (e: DragEvent) => {
    e.preventDefault();
  };

  createEffect(async () => {
    if (
      processedImageBase64List.length == imageInfoList().length &&
      imageInfoList().length != 0
    ) {
      try {
        const zip = new JSZip();
        for await (let processedImageBase64 of processedImageBase64List) {
          zip.file(
            `${processedImageBase64.fileName}_${Date.now()}.png`,
            processedImageBase64.base64.replace(
              /^data:image\/[a-zA-Z]+;base64,/,
              ""
            ),
            { base64: true }
          );
        }

        const blob: Blob = await zip.generateAsync({ type: "blob" });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = `generated_image_${Date.now()}.zip`;
        link.click();
        link.remove();
        window.URL.revokeObjectURL(url);
        setImageInfoList([]);
        setProcessedImageBase64List([]);
      } catch {
        setZipErrorToastOn(true);
        setProcessedImageBase64List([]);
      }
    }
  }, [processedImageBase64List]);

  return (
    <label for="file" ondrop={onDragHandler} ondragover={onDragOverHandler}>
      <main class={styles.main}>
        <MainTemplate title={title} description={description} />
        <div class={styles.imageOptionContainer}>
          <div class={styles.flexContainer}>
            <ImageTemplate {...imageTemplateProps} />
          </div>
          <div class={styles.flexContainer}>
            <OptionsTemplate {...optionsTemplateProps} />
          </div>
        </div>

        <div style={{ "margin-top": "1.5rem" }} />

        <div class={styles.generateButtonContainer}>
          <div class={styles.gererateButton}>
            <Button
              text="Generate"
              onClick={() => {
                generateHandler(imageInfoList());
              }}
            />
          </div>
        </div>
        <Show when={!zipErrorToastOn}>
          <ErrorToast
            setToastOn={setZipErrorToastOn}
            title="Error"
            description="이미지 파일 압축 중에 오류가 발생했습니다."
            sec={5}
          />
        </Show>
        <Show when={!letterBoxErrorToastOn}>
          <ErrorToast
            setToastOn={setLetterBoxErrorToastOn}
            title="Error"
            description="레터박스 생성 중에 오류가 발생했습니다."
            sec={5}
          />
        </Show>
      </main>
    </label>
  );
};
