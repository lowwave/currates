export default {
  singleQuote: true,
  importOrder: [
    '^react$',
    '<BUILTIN_MODULES>',
    '',
    '<THIRD_PARTY_MODULES>',
    '',
    '^(@)(/.*)$',
    '',
    '^[.]',
  ],
  plugins: ['@ianvs/prettier-plugin-sort-imports'],
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
  importOrderTypeScriptVersion: '5.0.0',
};
