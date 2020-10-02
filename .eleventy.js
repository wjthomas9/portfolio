const htmlmin = require("html-minifier");

module.exports = function (eleventyConfig) {
    eleventyConfig.setUseGitIgnore(false);

    eleventyConfig.addWatchTarget("./_tmp/style.css");

    eleventyConfig.addPassthroughCopy({
        "./_tmp/style.css": "./style.css",
        "./node_modules/alpinejs/dist/alpine.js": "./js/alpine.js",
    });

    eleventyConfig.addPassthroughCopy("img");

    eleventyConfig.addShortcode("version", function () {
        return String(Date.now());
    });

    eleventyConfig.addPairedShortcode("imageFigure", function(content, imageUrl, altText, imageClass='block w-full') {
        return `<figure class="relative py-8">
<img src="${imageUrl}" alt="${altText}" class="relative ${imageClass}" />
${content}
</figure>`;
    });

    eleventyConfig.addShortcode("imageCallout", function(calloutText) {
        return `<div class="absolute top-0 left-0 right-0 text-center -mt-8">
<div class="px-12 py-4 bg-pink-700 text-white border-2 border-white font-bold uppercase inline-block rounded-lg leading-none tracking-wider">${calloutText}</div>
</div>`;
    });

    eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
        if (
            process.env.ELEVENTY_PRODUCTION &&
            outputPath &&
            outputPath.endsWith(".html")
        ) {
            let minified = htmlmin.minify(content, {
                useShortDoctype: true,
                removeComments: true,
                collapseWhitespace: true,
            });
            return minified;
        }

        return content;
    });

    return {
        templateFormats: [
            "md",
            "njk",
            "html"
        ],

        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        dataTemplateEngine: "njk",
    }
};