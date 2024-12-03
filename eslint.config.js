import globals from "globals";

export default [
  {
    ignores: ["node_modules/**", "input/**", "output/**"],
  },
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.node,
        ...globals.jest,
      },
    },
    rules: {
      "no-unused-vars": ["error"],
      "no-console": [
        "warn",
        {
          allow: ["error", "info"], // Allow console.error, and console.info
        },
      ],
      "prefer-const": "error",
      "no-var": "error",
      semi: ["error", "always"],
      quotes: ["error", "double", { avoidEscape: true }],
    },
  },
];
