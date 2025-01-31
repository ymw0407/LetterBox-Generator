import { TransparentRectangle } from "@components/atom/rectangle";
import { Accessor, createSignal, For } from "solid-js";
import * as styles from "./imageCarousel.css";
import { IoChevronBackOutline, IoChevronForwardOutline } from "solid-icons/io";
import { ImageInfo } from "@/types/imageInfoType";

export interface ImageCarouselProps {
  imageInfoList: ImageInfo[];
}

export const ImageCarousel = (props: ImageCarouselProps) => {
  const [carouselNumber, setCarouselNumber] = createSignal<number>(0);

  return (
    <div class={styles.carouselWrapper}>
      <div class={styles.carouselList}>
        <For each={props.imageInfoList}>
          {(imageInfo, index) => (
            <div
              class={styles.rectangleContainer}
              style={index() != carouselNumber() ? { display: "none" } : {}}
            >
              <TransparentRectangle />
              <img src={imageInfo.imageBlob} class={styles.carouselImage} />
              {/* <div>{image.fileName}</div> */}
            </div>
          )}
        </For>
        <button>
          <IoChevronBackOutline
            class={styles.backCarousel}
            onclick={() => {
              if (carouselNumber() != 0) {
                setCarouselNumber(carouselNumber() - 1);
              } else {
                setCarouselNumber(props.imageInfoList.length - 1);
              }
            }}
          />
        </button>
        <button>
          <IoChevronForwardOutline
            onclick={() => {
              if (carouselNumber() != props.imageInfoList.length - 1) {
                setCarouselNumber(carouselNumber() + 1);
              } else {
                setCarouselNumber(0);
              }
            }}
            class={styles.forwardCarousel}
          />
        </button>
      </div>
      <div class={styles.carouselDotList}>
        <For each={props.imageInfoList}>
          {(_, index: Accessor<number>) => (
            <div
              class={
                index() == carouselNumber()
                  ? styles.activateCarouselDot
                  : styles.carouselDot
              }
            />
          )}
        </For>
      </div>
    </div>
  );
};
