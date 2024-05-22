module.exports = {
  env: {
    node: true, // This ensures ESLint knows it's running in a Node.js environment
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  rules: {
    // Your custom rules go here
  },
};
