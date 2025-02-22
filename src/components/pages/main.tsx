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
import { LoadingModal } from "@components/molecule/loadingModal/loadingModal";
import { addLetterBoxWithCanvas } from "@/utils/image/addLetterBox";

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
      const { success, blob, fileName, error } = e.data;
      console.log(success);
      console.log(blob);
      console.log(fileName);
      console.log(error);
      if (success) {
        setProcessedImageBase64List([
          ...processedImageBase64List,
          { fileName, blob },
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
  const [nothingToGenerateToastOn, setNothingToGenerateToastOn] =
    createSignal<boolean>(false);

  const [isGenerating, setIsGenerating] = createSignal<boolean>(false);
  const [isLoadingOn, setIsLoadingOn] = createSignal<boolean>(false);
  const [isCompressing, setIsCompressing] = createSignal<boolean>(false);
  const [percent, setPercent] = createSignal<number>(0);

  const generateHandler = async (imageInfoList: ImageInfo[]) => {
    // imageInfoList.map(async (imageInfo: ImageInfo) => {
    //   await addLetterBoxWithCanvas(
    //     imageInfo,
    //     imageRatioOption().x,
    //     imageRatioOption().y,
    //     letterBoxPaddingOption(),
    //     color[letterBoxStyleOption()]
    //   );
    // });
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
      setIsCompressing(true);
      try {
        const zip = new JSZip();
        for await (let processedImageBase64 of processedImageBase64List) {
          zip.file(
            `${processedImageBase64.fileName}_${Date.now()}.png`,
            processedImageBase64.blob,
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
      } catch {
        setZipErrorToastOn(true);
        setProcessedImageBase64List([]);
        setIsGenerating(false);
        setIsCompressing(false);
      }
    }
  }, [processedImageBase64List]);

  createEffect(() => {
    if (isGenerating()) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  });

  createEffect(() => {
    if (imageInfoList().length != 0) {
      setPercent(
        Math.floor(
          (processedImageBase64List.length / imageInfoList().length) * 100
        )
      );
    }
  });

  createEffect(() => {
    if (!isLoadingOn()) {
      setImageInfoList([]);
      setProcessedImageBase64List([]);
      setIsGenerating(false);
      setIsCompressing(false);
    }
  });

  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <label for="file" ondrop={onDragHandler} ondragover={onDragOverHandler}>
      <main
        class={styles.main}
        style={isGenerating() ? { overflow: "hidden" } : {}}
      >
        <MainTemplate
          title={title}
          description={description}
          clickTitleFunction={() => {
            refreshPage();
          }}
        />
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
                if (imageInfoList().length != 0) {
                  setIsGenerating(true);
                  setIsLoadingOn(true);
                  generateHandler(imageInfoList());
                } else {
                  setNothingToGenerateToastOn(true);
                }
              }}
            />
          </div>
        </div>
        <Show when={zipErrorToastOn()}>
          <ErrorToast
            setToastOn={setZipErrorToastOn}
            title="Error"
            description="이미지 파일 압축 중에 오류가 발생했습니다."
            sec={5}
          />
        </Show>
        <Show when={letterBoxErrorToastOn()}>
          <ErrorToast
            setToastOn={setLetterBoxErrorToastOn}
            title="Error"
            description="레터박스 생성 중에 오류가 발생했습니다."
            sec={5}
          />
        </Show>
        <Show when={nothingToGenerateToastOn()}>
          <ErrorToast
            setToastOn={setNothingToGenerateToastOn}
            title="Error"
            description="생성할 이미지가 없습니다."
            sec={5}
          />
        </Show>
        <Show when={isLoadingOn()}>
          <LoadingModal
            isGenerating={isGenerating}
            isCompressing={isCompressing}
            getPercent={percent}
            setPercent={setPercent}
            setIsLoadingOn={setIsLoadingOn}
          />
        </Show>
      </main>
    </label>
  );
};
