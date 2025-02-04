import type { Meta, StoryObj } from "storybook-solidjs";
import { LoadingModal } from "./loadingModal";
import { createSignal } from "solid-js";

const meta: Meta<typeof LoadingModal> = {
  title: "Components/Molecule/LoadingModal",
  component: LoadingModal,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof LoadingModal>;

const [isCompressing] = createSignal<boolean>(true);
const [getPercent] = createSignal<number>(100);
const [_, setIsLoadingOn] = createSignal<boolean>(true);

export const Example: Story = {
  args: {
    isCompressing,
    getPercent,
    setIsLoadingOn,
  },
};
