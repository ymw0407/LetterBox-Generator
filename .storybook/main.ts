import type { StorybookConfig } from "storybook-solidjs-vite";
import { join, resolve } from "node:path";

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
const config: StorybookConfig = {
  core: {
    builder: "@storybook/builder-vite",
  },
  stories: ["../src/**/*.stories.tsx"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "storybook-solidjs-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  async viteFinal(config) {
    return {
      ...config,
      resolve: {
        alias: [
          {
            find: /^@components\//,
            replacement: join(
              resolve(__dirname, "..", "src", "components"),
              "./"
            ),
          },
          {
            find: /^@styles\//,
            replacement: join(resolve(__dirname, "..", "src", "styles"), "./"),
          },
          {
            find: /^@\//,
            replacement: join(resolve(__dirname, "..", "src"), "./"),
          },
        ],
      },
      define: {
        "process.env": {},
      },
    };
  },
};
export default config;
