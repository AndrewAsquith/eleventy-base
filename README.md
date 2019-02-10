# eleventy-base
A basic starter project with my preferences for Eleventy (11ty.io)

To be successful, the following is required:

1. A .env file with ELEVENTY_ENV defined (or defined from the shell)
 * "production" indicates the production environment 
 * any other value is treated as a development environment
2. img folder in src or redefine the path in [_gulp/config.json](_gulp/_config.json)
3. js folder in src or redefine the path in [_gulp/config.json](_gulp/_config.json)

The gulp script will:
1. Use Eleventy to build the site in site/ [_gulp/generate.js](_gulp/generate.js)
 * If the environment is set to production resulting html files are minified [_11ty/transforms/html-minify.js](_11ty/transforms/html-minify.js)
 * Filters for things like dates are included in the _11ty/filters folder
2. Run sass on site.scss in the configured sass folder [_gulp/styles.js](_gulp/styles.js)
 * If the environment is set to production files are minified
 * If the environment is set to development sourcemaps are created
3. Concatenate all javascript files into a single site.js in the configured scripts folder [_gulp/scripts.js](_gulp/scripts.js)
 * If the environment is set to production files are minified
 * If the environment is set to development sourcemaps are created
4. Run imagemin on images in the configured images folder [_gulp/images.js](_gulp/images.js)
