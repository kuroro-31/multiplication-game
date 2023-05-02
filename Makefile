dev:
	npm run dev
build:
	npm run build
lint:
	npm run lint
test:
	npm run test
update:
	 npx -p npm-check-updates  -c "ncu -u"
	@make package-clear-legacy
package-clear-legacy:
	npm install --legacy-peer-deps
	npm audit fix --force
