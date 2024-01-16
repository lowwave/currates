export default {
  importOrder: [
    "^react$",
    "<BUILTIN_MODULES>",
    "",
    "<THIRD_PARTY_MODULES>",
    "",
    "^[.]",
  ],
  plugins: ["@ianvs/prettier-plugin-sort-imports"],
  singleQuote: true,
};
