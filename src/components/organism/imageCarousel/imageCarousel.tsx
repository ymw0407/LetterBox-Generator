import { Accessor, createEffect, createSignal, For } from "solid-js";
import * as styles from "./imageCarousel.css";
import { IoChevronBackOutline, IoChevronForwardOutline } from "solid-icons/io";
import { ImageInfo } from "@/types/imageInfoType";
import { themeVars } from "@styles/theme/themeContract.css";

export interface ImageCarouselProps {
  getImageInfoList: Accessor<ImageInfo[]>;
  getLetterBoxStyleOption: Accessor<number>;
  getLetterBoxPaddingOption: Accessor<number>;
}

export const ImageCarousel = (props: ImageCarouselProps) => {
  const [carouselNumber, setCarouselNumber] = createSignal<number>(0);
  // const [backgroundImage, setBackgroundImage] = createSignal<JSX.Element>(null);
  const [backgroundColor, setBackgroundColor] = createSignal<string>("");
  const [padding, setPadding] = createSignal<string>("0%");

  const applyLetterBoxStyle = (key: number) => {
    if (key == 0) {
      setBackgroundColor(themeVars.color.neutral.white);
      // setBackgroundImage(null);
    } else if (key == 1) {
      setBackgroundColor(themeVars.color.neutral.black);
      // setBackgroundImage(null);
    } else if (key == 2) {
      // setBackgroundImage();
      // <img
      //   src="/image/transparent.png"
      //   style={{
      //     position: "relative",
      //     top: 0,
      //     width: "100%",
      //     height: "100%",
      //   }}
      // />
    } else if (key == 3) {
      // setBackgroundImage();
    }
  };

  // 첫 번째 렌더링 시 상태를 초기화
  createEffect(() => {
    const letterBoxStyleOption = props.getLetterBoxStyleOption();
    applyLetterBoxStyle(letterBoxStyleOption);
  });

  // createEffect(() => {
  //   if (backgroundImage()) {
  //     // backgroundImage가 설정되었을 때에만 처리
  //   }
  // });

  createEffect(() => {
    const paddingValue = props.getLetterBoxPaddingOption();
    setPadding(`${paddingValue / 4}%`);
  });

  return (
    <div class={styles.carouselWrapper}>
      <div class={styles.carouselList}>
        <For each={props.getImageInfoList()}>
          {(imageInfo) => (
            <>
              {/* {backgroundImage()} */}
              <div
                class={styles.rectangleContainer}
                style={{
                  transform: `translateX(-${carouselNumber() * 100}%)`,
                  "background-color": backgroundColor(),
                }}
              >
                {/* {backgroundImage() ? (
                  <img
                    src="/image/transparent.png"
                    style={{
                      position: "relative",
                      top: 0,
                      width: "100%",
                      height: "100%",
                    }}
                  />
                ) : null} */}

                <div
                  style={{
                    display: "flex",
                    "align-items": "center",
                    "justify-content": "center",

                    width: `100%`,
                    height: `100%`,

                    // width: `calc(100%-${})`
                    // padding: `${padding()}`,
                  }}
                >
                  <img
                    src={imageInfo.imageBlob}
                    class={styles.carouselImage}
                    style={{
                      padding: `${padding()}`,
                      // width: `calc(100% - ${padding()})`,
                    }}
                  />
                </div>
              </div>
            </>
          )}
        </For>
        <button>
          <IoChevronBackOutline
            class={styles.backCarousel}
            color={themeVars.color.primary[30]}
            onclick={() => {
              if (carouselNumber() != 0) {
                setCarouselNumber(carouselNumber() - 1);
              } else {
                setCarouselNumber(props.getImageInfoList().length - 1);
              }
            }}
          />
        </button>
        <button>
          <IoChevronForwardOutline
            onclick={() => {
              if (carouselNumber() != props.getImageInfoList().length - 1) {
                setCarouselNumber(carouselNumber() + 1);
              } else {
                setCarouselNumber(0);
              }
            }}
            class={styles.forwardCarousel}
            color={themeVars.color.primary[30]}
          />
        </button>
      </div>
      <div class={styles.carouselDotList}>
        <For each={props.getImageInfoList()}>
          {(_, index: Accessor<number>) => (
            <div
              class={
                index() == carouselNumber()
                  ? styles.activateCarouselDot
                  : styles.carouselDot
              }
              onclick={() => setCarouselNumber(index())}
            />
          )}
        </For>
      </div>
    </div>
  );
};
