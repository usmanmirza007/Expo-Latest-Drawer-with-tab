module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
    ['react-native-worklets/plugin', {}, 'worklets'],
    'nativewind/babel',
    'react-native-reanimated/plugin',  // <-- must be last
  ],
  };
};
