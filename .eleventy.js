const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");
const markdownIt = require("markdown-it");
const markdownItAttrs = require("markdown-it-attrs");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("code/css");
  eleventyConfig.addPassthroughCopy("code/js");
  eleventyConfig.addPassthroughCopy("code/img");
  eleventyConfig.addPassthroughCopy("code/blog");

  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

  //* plugin para poder leer id
  let options = { html: true };
  eleventyConfig.setLibrary("md", markdownIt(options).use(markdownItAttrs));

  return {
    dir: {
      input: "code",
      output: "docs",
    },
  };
};
