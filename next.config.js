const path = require("path");

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.resolve(__dirname, 'node_modules')],
  },
}
