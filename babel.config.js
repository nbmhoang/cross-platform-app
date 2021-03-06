module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    env: {
      production: {
        plugins: ['react-native-paper/babel'],
      },
    },
    plugins: [
      [
        "module-resolver",
        {
          "root": ["./"],
          "alias": {
            "@components": "./components",
            // Use later
            "@reducers": "./reducers",
            "@config": "./db",
            "@utils": "./src/utils",
            "@services": "./src/services",
            "@assets": "./assets",
            "@constants": "./src/constants"
          }
        },
      ],
    ],
  };
};
