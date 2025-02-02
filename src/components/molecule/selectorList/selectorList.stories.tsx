import type { Meta, StoryObj } from "storybook-solidjs";
import { SelectorList } from "./selectorList";
import { createSignal } from "solid-js";
import { H1StyleText } from "@components/atom/text";
import { themeVars } from "@styles/theme/themeContract.css";

const meta: Meta<typeof SelectorList> = {
  title: "Components/Molecule/SelectorList",
  component: SelectorList,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof SelectorList>;

const [selectedIndex, setSelectedIndex] = createSignal<number>(-1);

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

export const Example: Story = {
  args: {
    getSelectedIndex: selectedIndex,
    setSelectedIndex: setSelectedIndex,
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
  },
};
