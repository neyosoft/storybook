/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */

const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

const storybookSourceExt =
  process.env.STORYBOOK_VARIANT === 'true' ? ['storybook.tsx'] : [];

const config = {
  resolver: {
    sourceExts: [...storybookSourceExt, ...defaultConfig.resolver.sourceExts],
    resolverMainFields: ['react-native', 'browser', 'main'],
  },
};

module.exports = mergeConfig(defaultConfig, config);
