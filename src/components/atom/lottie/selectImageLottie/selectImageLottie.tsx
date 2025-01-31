import * as styles from "./selectImageLottie.css";
import { DotLottieSolid } from "@lottiefiles/dotlottie-solid";

const selectImageLottieSrc: string = "/lottie/selectImage.lottie";

export const SelectImageLottie = () => {
  return (
    <div class={styles.selectImageLottie}>
      <DotLottieSolid src={selectImageLottieSrc} autoplay loop />
    </div>
  );
};
