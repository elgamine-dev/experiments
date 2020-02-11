let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
.js('resources/assets/js/app.js', 'public/js')
.js('resources/assets/js/web-apis.js', 'public/js')
.js('resources/assets/js/screen.js', 'public/js')
   .sass('resources/assets/sass/app.scss', 'public/css')
    .browserSync({
        proxy:'https://experiments.ddev.site/',
        https: true,
        //open:false,
    });
