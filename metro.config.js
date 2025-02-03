const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const {
  wrapWithReanimatedMetroConfig,
} = require('react-native-reanimated/metro-config');
const path = require('path');
/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = {
  resolver: {
    // Add this to set up the root directories for absolute imports
    extraNodeModules: {
      // Define the base directory for absolute imports (usually the root of the project)
      src: path.resolve(__dirname, 'src'),
    },
  },
  watchFolders: [
    // This tells Metro to watch the 'src' folder as an external folder
    path.resolve(__dirname, 'src'),
  ],
};

module.exports = wrapWithReanimatedMetroConfig(mergeConfig(getDefaultConfig(__dirname), config));
