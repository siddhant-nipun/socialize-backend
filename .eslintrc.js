module.exports = {
  env: {
    node: true,
  },
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  overrides: [],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "import"],
  ignorePatterns: ["db/**/*"],
  rules: {
    "import/no-unused-modules": [1, { unusedExports: true }],
    "no-console": ["error", { allow: ["info", "error"] }],
  },
};
