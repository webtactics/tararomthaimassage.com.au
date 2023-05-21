const { DateTime } = require("luxon");
const CleanCSS = require("clean-css");
const UglifyJS = require("uglify-js");
const htmlmin = require("html-minifier");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const metagen = require('eleventy-plugin-metagen');

module.exports = function (eleventyConfig) {
  // Eleventy Navigation Plugin
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  // Merge data instead of overriding
  eleventyConfig.setDataDeepMerge(true);

  // Add support for maintenance-free post authors
  eleventyConfig.addCollection("authors", (collection) => {
    // Implementation for adding authors collection
  });

  // Date formatting filters
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    // Implementation for readableDate filter
  });

  eleventyConfig.addFilter("machineDate", (dateObj) => {
    // Implementation for machineDate filter
  });

  // Minify CSS
  eleventyConfig.addFilter("cssmin", function (code) {
    // Implementation for cssmin filter
  });

  // Minify JS
  eleventyConfig.addFilter("jsmin", function (code) {
    // Implementation for jsmin filter
  });

  // Minify HTML output
  eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
    // Implementation for htmlmin transform
  });

  // Metagen plugin
  eleventyConfig.addPlugin(metagen);

  // Layout aliases
  eleventyConfig.addLayoutAlias("default", "layouts/default.njk");
  eleventyConfig.addWatchTarget("./_includes/");

  // Passthrough copies
  eleventyConfig.addPassthroughCopy("favicon.ico");
  eleventyConfig.addPassthroughCopy("static/img");
  eleventyConfig.addPassthroughCopy("static/assets");
  eleventyConfig.addPassthroughCopy("admin/");
  eleventyConfig.addPassthroughCopy("_includes/assets/css/tararom.css");
  eleventyConfig.addPassthroughCopy("_includes/assets/js/script.js");
  eleventyConfig.addPassthroughCopy("script.js");

  // Markdown plugins
  let markdownIt = require("markdown-it");
  let markdownItAnchor = require("markdown-it-anchor");
  let options = {
    breaks: true,
    linkify: true,
  };
  let opts = {
    permalink: false,
  };

  eleventyConfig.setLibrary("md", markdownIt(options).use(markdownItAnchor, opts));

  return {
    templateFormats: ["md", "njk", "liquid"],
    pathPrefix: "/",
    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
  };
};
