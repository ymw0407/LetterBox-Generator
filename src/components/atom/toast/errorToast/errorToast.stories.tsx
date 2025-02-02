import type { Meta, StoryObj } from "storybook-solidjs";
import { ErrorToast } from "./errorToast";

const meta: Meta<typeof ErrorToast> = {
  title: "Components/Atom/ErrorToast",
  component: ErrorToast,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof ErrorToast>;

export const Example: Story = {
  args: {
    title: "파일오류!",
    description: "지원되지 않는 포맷의 파일입니다!",
    sec: 3,
  },
};
