const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  staticDirs: ['../public'],
  addons: [
    "@storybook/addon-links",
    '@storybook/addon-essentials',
    "@storybook/addon-interactions",
    "storybook-addon-pseudo-states",
    "storybook-tailwind-dark-mode"
  ],
  framework: "@storybook/react",
  core: {
    "builder": "webpack5"
  },
  
  webpackFinal: async (config) => {
    config.resolve.plugins = [
      ...(config.resolve.plugins || []),
      new TsconfigPathsPlugin({
        extensions: config.resolve.extensions,
      }),
    ];
    config.module.rules.push({
      test: /\.css$/i,
      use: ["postcss-loader"],
    })
    config.resolve.fallback = {
      ...config.resolve.fallback,
      "os": require.resolve("os-browserify/browser")
    }
    return config;
  },
}