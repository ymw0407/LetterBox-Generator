import type { Meta, StoryObj } from "storybook-solidjs";
import { CommonOption } from "./commonOption";
import { ColorIcon } from "@components/atom/icon";
import { JSX } from "solid-js/jsx-runtime";

const meta: Meta<typeof CommonOption> = {
  title: "Components/Organism/CommonOption",
  component: CommonOption,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof CommonOption>;

const ParseColorIcon = (icon: JSX.Element) => {
  return (
    <div
      style={{
        width: "1rem",
        height: "1rem",
      }}
    >
      {icon}
    </div>
  );
};

export const Example: Story = {
  args: {
    title: "레터박스 스타일",
    selectorList: [
      {
        key: "White",
        value: 1,
        component: ParseColorIcon(ColorIcon({ type: "white" })),
      },
      {
        key: "Black",
        value: 2,
        component: ParseColorIcon(ColorIcon({ type: "black" })),
      },
      {
        key: "Transparent",
        value: 3,
        component: ParseColorIcon(ColorIcon({ type: "transparent" })),
      },
      {
        key: "Blur Hash",
        value: 4,
        component: ParseColorIcon(ColorIcon({ type: "blurHash" })),
      },
    ],
  },
};
