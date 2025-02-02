import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import path from "path";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

export default defineConfig({
  base: "/letterboxGenerator",
  plugins: [
    solid(),
    vanillaExtractPlugin({
      identifiers: "debug",
    }),
  ],
  resolve: {
    alias: [
      {
        find: "@components",
        replacement: path.resolve(__dirname, "src/components"),
      },
      {
        find: "@styles",
        replacement: path.resolve(__dirname, "src/styles"),
      },
      { find: "@", replacement: path.resolve(__dirname, "src") },
    ],
  },
});
