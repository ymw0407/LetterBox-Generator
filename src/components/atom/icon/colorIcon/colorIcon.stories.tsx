import type { Meta, StoryObj } from "storybook-solidjs";
import { ColorIcon } from "./colorIcon";

const meta: Meta<typeof ColorIcon> = {
  title: "Components/Atom/Icon/ColorIcon",
  component: ColorIcon,
  tags: ["autodocs"],

  argTypes: {
    type: {
      options: ["black", "white", "transparent", "blurHash"],
      control: {
        type: "select",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof ColorIcon>;

export const Example: Story = {
  args: {
    type: "black",
  },
};
