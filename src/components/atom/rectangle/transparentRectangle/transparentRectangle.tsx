import * as styles from "./transparentRectangle.css";

const transparentImageSrc = "/image/transparent.png";

export const TransparentRectangle = () => {
  return <img src={transparentImageSrc} class={styles.transparentRectangle} />;
};
