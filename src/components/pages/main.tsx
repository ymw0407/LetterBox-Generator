import { ImageInfo } from "@/types/imageInfoType";
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
import { createEffect, createSignal } from "solid-js";
import * as styles from "./main.css";
import { Button } from "@components/atom/button/button";
import { addLetterBoxWithJimp } from "@/utils/image/addLetterBox";

const title = {
  text: `레터박스 생성기`,
};

const description = {
  text: `lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
};

const color = ["white", "black"];

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

  createEffect(() => {
    console.log("------------------------");
    console.log(imageInfoList());
    console.log(letterBoxPaddingOption());
    console.log(color[letterBoxStyleOption()]);
    console.log("------------------------");
  });

  // const generateHandler = (imageInfoList: ImageInfo[]) => {
  //   imageInfoList.forEach((file) => {
  //     const worker = new Worker();

  //     worker.postMessage({
  // file,
  // ratioX: imageRatioOption().x,
  // ratioY: imageRatioOption().y,
  // padding: letterBoxPaddingOption(),
  // color: color[letterBoxStyleOption()],
  //     });

  //     worker.onmessage = (e) => {
  //       const { success, base64, error } = e.data;
  //       if (success) {
  //         const link = document.createElement("a");
  //         link.href = base64;
  //         link.download = `processed_image_${Date.now()}.png`;
  //         link.click();
  //       } else {
  //         console.error(error);
  //       }

  //       worker.terminate();
  //     };
  //     exifr.parse(file.image).then((exif) => {
  //       console.log(exif);
  //     });
  //   });
  // };

  const handleClick = () => {
    // const currentImageInfoList = imageInfoList();
    // console.log("Current imageInfoList on click:", currentImageInfoList);
    // generateHandler(copiedImageInfoList);
    imageInfoList().map((imageInfo: ImageInfo) => {
      // file,
      // ratioX: imageRatioOption().x,
      // ratioY: imageRatioOption().y,
      // padding: letterBoxPaddingOption(),
      // color: color[letterBoxStyleOption()],
      addLetterBoxWithJimp(
        imageInfo.image,
        imageRatioOption().x,
        imageRatioOption().y,
        letterBoxPaddingOption(),
        color[letterBoxStyleOption()]
      ).then((base64: string) => {
        const link = document.createElement("a");
        link.href = base64;
        link.download = `processed_image_${Date.now()}.png`;
        link.click();
      });
    });
  };

  return (
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
              // console.log(imageInfoList());
              handleClick();
            }}
          />
        </div>
      </div>
    </main>
  );
};
