import * as styles from "./selectImageLottie.css";
import { DotLottieSolid } from "@lottiefiles/dotlottie-solid";

const selectImageLottieSrc: string =
  "/LetterBox-Generator/lottie/selectImage.lottie";

export const SelectImageLottie = () => {
  return (
    <div class={styles.selectImageLottie} draggable={false}>
      <DotLottieSolid
        src={selectImageLottieSrc}
        autoplay
        loop
        draggable={false}
      />
    </div>
  );
};
