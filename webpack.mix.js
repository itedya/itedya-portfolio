const mix = require("laravel-mix");

mix.copy("src/index.html", "dist/index.html")
    .sass("src/sass/main.scss", "dist/style.css")
    .options({
        postCss: [require("tailwindcss")]
    });
