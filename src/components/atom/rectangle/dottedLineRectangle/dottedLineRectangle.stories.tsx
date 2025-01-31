import type { Meta, StoryObj } from "storybook-solidjs";
import { DottedLineRectangle } from "./dottedLineRectangle";
import { SelectImageLottie } from "@components/atom/lottie";

const meta: Meta<typeof DottedLineRectangle> = {
  title: "Components/Atom/Rectangle/DottedLineRectangle",
  component: DottedLineRectangle,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof DottedLineRectangle>;

export const Example: Story = {
  args: {
    children: <SelectImageLottie />,
  },
};
