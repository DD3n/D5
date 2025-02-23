module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    "react-app",
    "eslint:recommended",
    "plugin:react/recommended",
    "prettier"
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module"
  },
  plugins: ["react"],
  rules: {
    // Add any custom ESLint rules here
  }
};
