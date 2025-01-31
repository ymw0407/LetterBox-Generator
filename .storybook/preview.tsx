import { Preview } from "storybook-solidjs";
import { vishTheme } from "../src/styles/theme/vishTheme.css";
import { onMount } from "solid-js";
import { DecoratorFunction } from "storybook/internal/types";
import "@styles/global.css";
import "@styles/index.css";

const withThemeProvider: DecoratorFunction<any, any> = (Story) => {
  onMount(() => {
    document.body.classList.add(vishTheme);
  });

  return Story();
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [withThemeProvider],
};

export default preview;
