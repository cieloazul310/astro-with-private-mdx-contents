module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    "airbnb-base",
    "airbnb-typescript/base",
    "plugin:astro/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
  },
  overrides: [
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
      rules: {
        "import/prefer-default-export": "off",
        "import/no-extraneous-dependencies": "off",
      },
    },
    {
      files: ["panda.config.ts", "astro.config.ts"],
      rules: {
        "import/no-extraneous-dependencies": "off",
      },
    },
    {
      files: ["src/content/config.ts"],
      rules: {
        "import/prefer-default-export": "off",
      },
    }
  ],
};
