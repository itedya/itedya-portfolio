const mix = require("laravel-mix");

mix.copy("src/index.html", "dist/index.html")
    .copy("src/images", "dist/images")
    .sass("src/sass/main.scss", "dist/style.css")
    .options({
        postCss: [require("tailwindcss")]
    });
