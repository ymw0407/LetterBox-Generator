import { ColorIcon } from "@components/atom/icon";
import { CommonOption } from "@components/organism/option/commonOption/commonOption";
import { Accessor, JSX, Setter } from "solid-js";
import * as styles from "./optionsTemplate.css";
import {
  RatioValueType,
  SelectorListType,
} from "@components/molecule/selectorList/selectorList";
import {
  ImageRatioOption,
  LetterBoxPaddingOption,
} from "@components/organism/option";
import { H1StyleText } from "@components/atom/text";
import { themeVars } from "@styles/theme/themeContract.css";

export interface OptionsTemplateProps {
  letterBoxStyleOption: {
    getValue: Accessor<number>;
    setValue: Setter<number>;
  };
  imageRatioOption: {
    getValue: Accessor<RatioValueType>;
    setValue: Setter<RatioValueType>;
  };
  letterBoxPaddingOption: {
    getValue: Accessor<number>;
    setValue: Setter<number>;
  };
}

const ColorIconContainer = (icon: JSX.Element) => {
  return <div class={styles.colorIconContainer}>{icon}</div>;
};

const letterBoxStyleOptionList: SelectorListType<number>[] = [
  {
    key: "White",
    value: 0,
    component: ColorIconContainer(ColorIcon({ type: "white" })),
  },
  {
    key: "Black",
    value: 1,
    component: ColorIconContainer(ColorIcon({ type: "black" })),
  },
  // {
  //   key: "Transparent",
  //   value: 2,
  //   component: ColorIconContainer(ColorIcon({ type: "transparent" })),
  // },
  // {
  //   key: "Blur Hash",
  //   value: 3,
  //   component: ColorIconContainer(ColorIcon({ type: "blurHash" })),
  // },
];

const imageRatioTextComponent = (ratioString: string) => {
  return (
    <H1StyleText
      text={ratioString}
      fontWeight={700}
      color={themeVars.color.neutral.black}
    />
  );
};

const imageRatioOptionList: SelectorListType<RatioValueType>[] = [
  {
    icon: {
      brand: "instagram",
    },
    key: "Instagram Post Size - Portrait",
    value: {
      x: 4,
      y: 5,
    },
    component: imageRatioTextComponent("4 : 5"),
  },
  {
    icon: {
      brand: "instagram",
    },
    key: "Instagram Post Size - Square",
    value: {
      x: 1,
      y: 1,
    },
    component: imageRatioTextComponent("1 : 1"),
  },
  {
    icon: {
      brand: "instagram",
    },
    key: "Instagram Post Size - Landscape",
    value: {
      x: 16,
      y: 9,
    },
    component: imageRatioTextComponent("16 : 9"),
  },
  {
    icon: {
      brand: "printer",
    },
    key: "Photo Paper - PostCard",
    value: {
      x: 4,
      y: 3,
    },
    component: imageRatioTextComponent("4 : 3"),
  },
  {
    icon: {
      brand: "printer",
    },
    key: "Photo Paper - PostCard",
    value: {
      x: 3,
      y: 4,
    },
    component: imageRatioTextComponent("3 : 4"),
  },
];

export const OptionsTemplate = (props: OptionsTemplateProps) => {
  return (
    <div class={styles.optionsTemplate}>
      <div class={styles.option}>
        <CommonOption
          title="레터박스 스타일"
          selectorList={letterBoxStyleOptionList}
          setValue={props.letterBoxStyleOption.setValue}
        />
      </div>
      <div class={styles.option}>
        <ImageRatioOption
          title="이미지 비율"
          selectorList={imageRatioOptionList}
          getValue={props.imageRatioOption.getValue}
          setValue={props.imageRatioOption.setValue}
        />
      </div>
      <div class={styles.option}>
        <LetterBoxPaddingOption
          title="레터박스 패딩"
          getValue={props.letterBoxPaddingOption.getValue}
          setValue={props.letterBoxPaddingOption.setValue}
        />
      </div>
    </div>
  );
};
