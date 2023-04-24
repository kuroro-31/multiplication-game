build-ts:
	npm run build:ts

minify-js: build-ts
	npm run minify:js

build-scss: minify-js
	npm run build:scss

minify-css: build-scss
	npm run minify:css

clean: minify-css
	rm main.js
	rm style.css

all: clean
