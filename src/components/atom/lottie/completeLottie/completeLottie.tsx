import * as styles from "./completeLottie.css";
import { DotLottieSolid } from "@lottiefiles/dotlottie-solid";

const completeLottieSrc: string = "/LetterBox-Generator/lottie/complete.lottie";

export const CompleteLottie = () => {
  return (
    <div class={styles.completeLottie} draggable={false}>
      <DotLottieSolid src={completeLottieSrc} autoplay loop draggable={false} />
    </div>
  );
};
