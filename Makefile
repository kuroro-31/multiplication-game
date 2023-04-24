all: build-ts minify-js build-css minify-css

build-ts:
	npm run build:ts

minify-js:
	npm run minify:js

build-css:
	npm run build:css

minify-css:
	npm run minify:css

clean:
	rm -f asset/main.js asset/public/main.min.js asset/style.css asset/public/style.min.css
