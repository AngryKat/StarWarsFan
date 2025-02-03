module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: ['react-native-reanimated/plugin', [
    'module-resolver',
    {
      alias: {
        src: './src',
        '@/assets': './src/assets',
        '@/components': './src/components',
        '@/config': './src/config',
        '@/hooks': './src/hooks',
        '@/navigation': './src/navigation',
        '@/store': './src/store',
        '@/screens': './src/screens',
        '@/utils': './src/utils',
      },
    },
  ],
  ],
};
