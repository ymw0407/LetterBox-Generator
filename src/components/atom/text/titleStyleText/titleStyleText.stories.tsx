import type { Meta, StoryObj } from "storybook-solidjs";
import { TitleStyleText } from "./titleStyleText";

const meta: Meta<typeof TitleStyleText> = {
  title: "Components/Atom/Text/TitleStyleText",
  component: TitleStyleText,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof TitleStyleText>;

export const Example: Story = {
  args: {
    text: `레터박스 생성기`,
  },
};
