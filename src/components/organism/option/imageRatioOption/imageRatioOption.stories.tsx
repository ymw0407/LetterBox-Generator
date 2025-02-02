import type { Meta, StoryObj } from "storybook-solidjs";
import { ImageRatioOption } from "./imageRatioOption";
import { H1StyleText } from "@components/atom/text";
import { themeVars } from "@styles/theme/themeContract.css";
import { createSignal } from "solid-js";
import { RatioValueType } from "@components/molecule/selectorList/selectorList";

const meta: Meta<typeof ImageRatioOption> = {
  title: "Components/Organism/ImageRatioOption",
  component: ImageRatioOption,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof ImageRatioOption>;

const textComponent = (text: string) => {
  return (
    <>
      <H1StyleText
        text={text}
        fontWeight={700}
        color={themeVars.color.neutral.black}
      />
    </>
  );
};

const [ratioValue, setRatioValue] = createSignal<RatioValueType>({
  x: 4,
  y: 3,
});

export const Example: Story = {
  args: {
    title: "이미지 비율",
    selectorList: [
      {
        icon: {
          brand: "instagram",
        },
        key: "Instagram Post Size - Portrait",
        value: {
          x: 4,
          y: 5,
        },
        component: textComponent("4 : 5"),
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
        component: textComponent("1 : 1"),
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
        component: textComponent("16 : 9"),
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
        component: textComponent("4 : 3"),
      },
    ],
    getValue: ratioValue,
    setValue: setRatioValue,
  },
};
