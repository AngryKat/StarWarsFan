module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: ['react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          // Set up your aliases for absolute imports
          '@': './src',
        },
      },
    ],
  ],
};
