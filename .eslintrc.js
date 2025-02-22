module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
  },
  extends: ["prettier", "plugin:react-hooks/recommended"],
  plugins: [
    "@typescript-eslint/eslint-plugin",
    "prettier",
    "json-format",
    "simple-import-sort",
  ],
  ignorePatterns: [
    ".eslintrc.js",
    "public",
    "node_modules",
    ".cache",
    ".vscode",
  ],
  rules: {
    "no-unused-vars": "error",
    "@typescript-eslint/consistent-type-imports": [
      "error",
      {
        prefer: "type-imports",
        disallowTypeAnnotations: false,
      },
    ],
    "prettier/prettier": [
      "error",
      {
        singleQuote: false,
        doubleQuote: true,
        semi: true,
        tabWidth: 2,
        useTabs: false,
        trailingComma: "all",
        printWidth: 100,
        arrowParens: "always",
      },
      {
        usePrettierrc: false,
      },
    ],
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
  },
};
