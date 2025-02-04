import { themeVars } from "@styles/theme/themeContract.css";
import { createSignal, Match, Switch } from "solid-js";

export interface ColorIconProps {
  type: "white" | "black" | "transparent" | "blurHash";
}

export const ColorIcon = (props: ColorIconProps) => {
  const [type] = createSignal(props.type);

  const WhiteColorIcon = () => {
    return (
      <div
        style={{
          "background-color": "white",
          width: "100%",
          height: "100%",
          "aspect-ratio": "1",
        }}
      />
    );
  };

  const BlackColorIcon = () => {
    return (
      <div
        style={{
          "background-color": "black",
          width: "100%",
          height: "100%",
          "aspect-ratio": "1",
        }}
      />
    );
  };

  // const TransparentIcon = () => {
  //   return (
  //     <img
  //       src="/image/transparent.png"
  //       style={{
  //         "user-select": "none",
  //         width: "100%",
  //         height: "100%",
  //         "aspect-ratio": "1",
  //         "object-fit": "cover",
  //         display: "flex",
  //         "align-items": "center",
  //         "justify-content": "center",
  //       }}
  //     />
  //   );
  // };

  // const BlurHashIcon = () => {
  //   return (
  //     <img
  //       src="/image/blurHash.png"
  //       style={{
  //         "user-select": "none",
  //         width: "100%",
  //         height: "100%",
  //         "aspect-ratio": "1",
  //         "object-fit": "cover",
  //         display: "flex",
  //         "align-items": "center",
  //         "justify-content": "center",
  //       }}
  //     />
  //   );
  // };

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        border: `solid 2px ${themeVars.color.primary[60]}`,
      }}
    >
      <Switch>
        <Match when={type() === "white"}>
          <WhiteColorIcon />
        </Match>
        <Match when={type() === "black"}>
          <BlackColorIcon />
        </Match>
        {/* <Match when={type() === "transparent"}>
          <TransparentIcon />
        </Match>
        <Match when={type() === "blurHash"}>
          <BlurHashIcon />
        </Match> */}
      </Switch>
    </div>
  );
};
