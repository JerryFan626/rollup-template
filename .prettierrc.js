import pluginOrganizeImports from 'prettier-plugin-organize-imports';
import pluginPackagejson from 'prettier-plugin-packagejson';

export default {
  pluginSearchDirs: false,
  plugins: [pluginOrganizeImports, pluginPackagejson],
  printWidth: 80,
  proseWrap: 'never',
  singleQuote: true,
  trailingComma: 'all',
  overrides: [
    {
      files: '*.md',
      options: {
        proseWrap: 'preserve',
      },
    },
  ],
};
