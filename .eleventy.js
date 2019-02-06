const htmlmin = require('html-minifier');
require('dotenv').config();
const  env = process.env.ELEVENTY_ENV;


module.exports = function(config) {

    //layout aliases
    config.addLayoutAlias('base', 'layouts/base.njk')

    // Minify HTML Output
    config.addTransform('htmlmin', function(content, outputPath) {
        if (env === 'production' && outputPath.endsWith('.html')) {
            return htmlmin.minify(content, {
                useShortDoctype: true,
                removeComments: true,
                collapseWhitespace: true,
                minifyJS: true
            })
        }
        return content
    })

    // Base Config
    return {
        dir: {
            input: 'src/site',
            output: 'dist'
        },
        templateFormats: ['njk', 'md'],
        htmlTemplateEngine: 'njk',
        markdownTemplateEngine: 'njk',
        passthroughFileCopy: true
    }
}