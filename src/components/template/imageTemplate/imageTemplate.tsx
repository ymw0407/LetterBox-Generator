import { ImageCarousel } from "@components/organism/imageCarousel/imageCarousel";
import * as styles from "./imageTemplate.css";
import { SelectImageRectangle } from "@components/organism/selectImageRectangle/selectImageRectangle";
import { Accessor, Setter, Show } from "solid-js";
import { ImageInfo } from "@/types/imageInfoType";
import { RatioValueType } from "@components/molecule/selectorList/selectorList";

export interface ImageTemplateProps {
  getImageInfoList: Accessor<ImageInfo[]>;
  setImageInfoList: Setter<ImageInfo[]>;

  getImageRatioOption: Accessor<RatioValueType>;

  getLetterBoxStyleOption: Accessor<number>;

  getLetterBoxPaddingOption: Accessor<number>;
}

export const ImageTemplate = (props: ImageTemplateProps) => {
  return (
    <div class={styles.imageTemplate}>
      <div
        class={styles.imageConatiner}
        style={{
          "aspect-ratio": `${props.getImageRatioOption().x}/${
            props.getImageRatioOption().y
          }`,
        }}
      >
        <Show
          when={props.getImageInfoList().length === 0}
          fallback={
            <ImageCarousel
              {...{
                getImageInfoList: props.getImageInfoList,
                getLetterBoxStyleOption: props.getLetterBoxStyleOption,
                getLetterBoxPaddingOption: props.getLetterBoxPaddingOption,
              }}
            />
          }
        >
          <SelectImageRectangle
            {...{ setImageInfoList: props.setImageInfoList }}
          />
        </Show>
      </div>
    </div>
  );
};
