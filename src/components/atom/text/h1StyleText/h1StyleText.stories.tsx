import type { Meta, StoryObj } from "storybook-solidjs";
import { H1StyleText } from "./h1StyleText";
import { themeVars } from "@styles/theme/themeContract.css";

const meta: Meta<typeof H1StyleText> = {
  title: "Components/Atom/Text/H1StyleText",
  component: H1StyleText,
  tags: ["autodocs"],

  argTypes: {
    fontWeight: {
      options: [300, 500, 700],
      control: {
        type: "select",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof H1StyleText>;

export const Example: Story = {
  args: {
    text: `4 : 5`,
    fontWeight: 300,
    color: themeVars.color.neutral.black,
  },
};
