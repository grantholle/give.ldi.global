const path = require(`path`)
const glob = require(`glob`)

const PATHS = {
  src: path.join(__dirname, `src`),
}

module.exports = {
  paths: glob.sync(`${PATHS.src}/**/*.js`, { nodir: true }),
  extractors: [
    {
      // Custom extractor to allow special characters (like ":") in class names
      // See: https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css-with-purgecss
      extractor: class {
        static extract(content) {
          return content.match(/[A-Za-z0-9-_:/]+/g) || []
        }
      },
      extensions: [ `js`, `svg` ],
    },
  ],
  whitelist: [
    `error-message`,
    `xl\:pr-24`,
    `lg\:pl-16`,
    `pt-40`,
    `html`,
    `fill-white`,
    `pt-128`,
    `max-w-2xl`,
    `max-w-3xl`,
    `max-w-4xl`,
    `-mb-32`,
    `md\:text-2xl`,
    `lg\:text-2xl`,
    `leading-loose`,
    `md\:px-8`,
    `add-top-p`,
    `add-bottom-p`,
  ],
  whitelistPatterns: [
    /body/,
    /block-accordion/,
  ], // adjust for each project
}
