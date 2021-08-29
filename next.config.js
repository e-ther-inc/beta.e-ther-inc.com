const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

module.exports = withPlugins(
  [
    [
      optimizedImages,
      {
        optimizeImagesInDev: true,
        handleImages: ['jpeg', 'png'],
      }
    ]
  ], {
  images: {
    disableStaticImages: true,
  },
  reactStrictMode: true,
});
