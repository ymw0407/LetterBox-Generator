import * as styles from "./loadingLottie.css";
import { DotLottieSolid } from "@lottiefiles/dotlottie-solid";

const loadingLottieSrc: string = "/LetterBox-Generator/lottie/loading.lottie";

export const LoadingLottie = () => {
  return (
    <div class={styles.loadingLottie} draggable={false}>
      <DotLottieSolid src={loadingLottieSrc} autoplay loop draggable={false} />
    </div>
  );
};
