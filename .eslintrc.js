module.exports = {
  parser: "@typescript-eslint/parser",

  plugins: ["@typescript-eslint", "prettier"],

  // parserOptions: {
  //   parser: "@typescript-eslint/parser",
  //   ecmaVersion: 2020,
  //   sourceType: "module",
  //   ecmaFeatures: {
  //     jsx: true,
  //   },
  // },

  extends: [
    "prettier",
    "plugin:prettier/recommended",
    "airbnb",
    "airbnb/hooks",
  ],

  settings: {
    "import/resolver": {
      alias: [
        ["@", "./src/"]
      ],
    },
  },

  rules: {
    "@typescript-eslint/rule-name": "error",
    "prettier/prettier": "error",
    "arrow-body-style": "off",
    "prefer-arrow-callback": "off",
    // override/add rules settings here, such as:
  },
};
