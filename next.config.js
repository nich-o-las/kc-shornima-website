const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

/* eslint-disable import/no-extraneous-dependencies */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withPlugins([
  optimizedImages,
  withBundleAnalyzer({
    poweredByHeader: false,
    trailingSlash: true,
    basePath: '',
    baseUrl: '.',
    // TODO: Figure out how to properly set up this path for absolute imports
    paths: { '@': ['./src'] },
    // The starter code load resources from `public` folder with `router.basePath` in React components.
    // So, the source code is "basePath-ready".
    // You can remove `basePath` if you don't need it.
    reactStrictMode: true,
    webpack: (config) => {
      config.module.rules.push({
        test: /\.md$/,
        use: 'raw-loader',
      });
      return config;
    },
  }),
]);
