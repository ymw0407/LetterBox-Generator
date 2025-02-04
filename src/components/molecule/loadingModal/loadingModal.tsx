import { Portal } from "solid-js/web";
import * as styles from "./loadingModal.css";
import { CompleteLottie, LoadingLottie } from "@components/atom/lottie";
import {
  Accessor,
  createEffect,
  createSignal,
  onCleanup,
  onMount,
  Setter,
  Show,
} from "solid-js";
import { ProgressBar } from "@components/atom/progressBar/progressBar";

export interface LoadingModalProps {
  isGenerating: Accessor<boolean>;
  isCompressing: Accessor<boolean>;
  getPercent: Accessor<number>;
  setPercent: Setter<number>;
  setIsLoadingOn: Setter<boolean>;
}

export const LoadingModal = (props: LoadingModalProps) => {
  const loadingComment = "레터박스를 생성하고 있습니다";
  const zipComment = "이미지들을 압축하고 있습니다";

  const [getDot, setDot] = createSignal<string>(".");
  const [isUnmounted, setIsUnmounted] = createSignal<boolean>(false);
  const [isCompressFinished, setIsCompressFinished] =
    createSignal<boolean>(false);

  const changeDot = (count: number) => {
    if (++count < 3) {
      setDot(getDot() + ".");
    } else {
      count = 0;
      setDot(".");
    }

    if (!isUnmounted()) {
      setTimeout(() => {
        changeDot(count);
      }, 1000);
    }
  };

  onMount(() => {
    changeDot(0);
  });

  onCleanup(() => {
    props.setPercent(0);
    setIsUnmounted(true);
  });

  createEffect(() => {
    if (props.getPercent() == 100) {
      setIsCompressFinished(true);
    }
  });

  const CompleteModal = () => {
    return (
      <>
        <div style={{ height: "40%" }}>
          <CompleteLottie />
        </div>
        <div style={{ margin: "2vw" }} />
        <div
          style={{
            display: "flex",
            "align-items": "center",
            "justify-content": "center",
          }}
        >
          <div>
            <div class={styles.completeTitle}>{"Success"}</div>
            <div class={styles.completeDescription}>
              {"Thank you for using our service!"}
            </div>
          </div>
        </div>
        <div style={{ margin: "10%" }} />
        <div
          style={{
            display: "flex",
            "align-items": "center",
            "justify-content": "center",
            width: "100%",
          }}
        >
          <div
            style={{
              width: "80%",
            }}
            class={styles.button}
            onClick={() => {
              props.setIsLoadingOn(false);
            }}
          >
            <div class={styles.text}>{"Close"}</div>
          </div>
        </div>
      </>
    );
  };

  return (
    <Portal>
      <div class={styles.loadingModalContainer}>
        <div class={styles.loadingModal}>
          <Show when={!isCompressFinished()} fallback={<CompleteModal />}>
            <div style={{ height: "70%" }}>
              <LoadingLottie />
            </div>
            <div
              style={{
                display: "flex",
                "align-items": "center",
                "justify-content": "center",
                width: "100%",
              }}
            >
              <div style={{ height: "1.5vw", width: "75%" }}>
                <ProgressBar
                  borderRadius={"1.5vw"}
                  getPercent={props.getPercent}
                />
              </div>
            </div>
            <div style={{ margin: "1.5vw" }} />
            <div
              style={{
                display: "flex",
                "align-items": "center",
                width: "center",
                "justify-content": "center",
              }}
            >
              <div class={styles.loadingComment}>
                <Show
                  when={props.isCompressing()}
                  fallback={<>{loadingComment + getDot()}</>}
                >
                  {zipComment + getDot()}
                </Show>
              </div>
            </div>
          </Show>
        </div>
      </div>
    </Portal>
  );
};
