import {
  DescriptionStyleText,
  DescriptionStyleTextProps,
  TitleStyleText,
  TitleStyleTextProps,
} from "@components/atom/text";
import * as styles from "./mainTemplate.css";
import { SelectImageRectangle } from "@components/molecule/selectImageRectangle/selectImageRectangle";
import { ImageCarousel } from "@components/molecule/imageCarousel/imageCarousel";
import { createSignal, Show } from "solid-js";
import { ImageInfo } from "@/types/imageInfoType";

export interface MainTemplateProps {
  title: TitleStyleTextProps;
  description: DescriptionStyleTextProps;
}

export const MainTemplate = (props: MainTemplateProps) => {
  const [imageInfoList, setImageInfoList] = createSignal<ImageInfo[]>([]);

  return (
    <main class={styles.mainTemplate}>
      <div class={styles.titleContainer}>
        <TitleStyleText {...props.title} />
      </div>
      <DescriptionStyleText {...props.description} />
      <Show
        when={imageInfoList().length === 0}
        fallback={<ImageCarousel {...{ imageInfoList: imageInfoList() }} />}
      >
        <SelectImageRectangle {...{ setImageInfoList: setImageInfoList }} />
      </Show>
    </main>
  );
};
