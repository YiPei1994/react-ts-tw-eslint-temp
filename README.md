Init project with Vite
npm init vite@latest vite-react -- --template react-ts
cd vite-react
npm install
Quick Install
mkdir .vscode
curl -o .vscode/extensions.json https://gist.githubusercontent.com/vdelacou/4584ed57e1f141290820ba389694d7dd/raw/.vscode_extensions.json
curl -o .vscode/settings.json https://gist.githubusercontent.com/vdelacou/4584ed57e1f141290820ba389694d7dd/raw/.vscode_settings.json

curl -o tsconfig.json https://gist.githubusercontent.com/vdelacou/4584ed57e1f141290820ba389694d7dd/raw/tsconfig.json

npm install @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-airbnb eslint-import-resolver-typescript eslint-plugin-etc eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-unicorn eslint-plugin-tailwindcss --save-dev

curl -o .eslintignore https://gist.githubusercontent.com/vdelacou/4584ed57e1f141290820ba389694d7dd/raw/.eslintignore
curl -o .eslintrc.json https://gist.githubusercontent.com/vdelacou/4584ed57e1f141290820ba389694d7dd/raw/.eslintrc.json
npm pkg set scripts.lint="eslint . --ext .js,.jsx,.ts,.tsx"
npm pkg set scripts.format="eslint . --ext .js,.jsx,.ts,.tsx --fix"

npm install vitest c8 --save-dev
curl -o vite.config.ts https://gist.githubusercontent.com/vdelacou/4584ed57e1f141290820ba389694d7dd/raw/vite.config.ts
npm pkg set scripts.test="vitest run"
npm pkg set scripts.watch="vitest watch"
npm pkg set scripts.coverage="vitest run --coverage"
curl -o ./src/example.test.ts https://gist.githubusercontent.com/vdelacou/4584ed57e1f141290820ba389694d7dd/raw/example.test.ts

npm install husky --save-dev
npm pkg set scripts.prepare="husky install"
git init
npm run prepare
npx husky add .husky/pre-commit "npm run lint && npm run test"
npx husky add .husky/pre-push "npm run lint && npm run test && npm run build"
npm pkg delete scripts.prepare

rm ./src/logo.svg
rm ./src/App.css
rm ./src/App.tsx
rm ./src/index.css
curl -o ./src/app.tsx https://gist.githubusercontent.com/vdelacou/4584ed57e1f141290820ba389694d7dd/raw/app.tsx
curl -o ./src/main.tsx https://gist.githubusercontent.com/vdelacou/4584ed57e1f141290820ba389694d7dd/raw/main.tsx

npm pkg set scripts.update-dependencies="npx -y npm-check-updates -u"
npm run update-dependencies
npm install

npm run format

echo .dccache >> .gitignore
git add .
git commit -m "init project"

// snippets
{
"Typescript React Function Component": [{
"prefix": "rfc",
"body": [

    		"type ${TM_FILENAME_BASE}Props = {",
    		"  $1",
    		"}",
    		"",
    		"const $TM_FILENAME_BASE = ({$2}:${TM_FILENAME_BASE}Props) => {",
    		"  return <div>$TM_FILENAME_BASE</div>",
    		"}",
    		"",
    		"export default $TM_FILENAME_BASE"
    	],
    	"description": "Typescript React Function Component"
    	 },
    	 {
    		"prefix": "irfc",
    		"body": [
    			"import { FC } from 'react'",
    			"",
    			"interface ${TM_FILENAME_BASE}Props {",
    			"  $1",
    			"}",
    			"",
    			"const $TM_FILENAME_BASE: FC<${TM_FILENAME_BASE}Props> = ({$2}) => {",
    			"  return <div>$TM_FILENAME_BASE</div>",
    			"}",
    			"",
    			"export default $TM_FILENAME_BASE"
    		],
    		"description": "Typescript React Function Component"
    		 },
    	]

}
