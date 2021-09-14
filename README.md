# Next.js + Typescript + SnipCart + microCMS で EC サイトを作ってみた

## プロジェクトの作成 & git の初期化

```bash
npx create-next-app next-snipcart-ecsite --typescript
cd next-snipcart-ecsite
rm -rf .git
git init
git checkout -b main
git add .
git commit -m 'first-commit'
```

### リポジトリの作成

```bash
gh create repo
```

## 主要なフォルダを src ディレクトリに移動

```
mkdir src
```

- pages
- styles
  を src ディレクトリに移動する

## Prettier & Typescript の設定

### 対象を src いかに設定

tsconfig.json

```json
{
  "compilerOptions": {
    "baseUrl": "src"
    // 省略
  }
  // 省略
}
```

### Prettier 関連のインストール

```bash
npm install -D prettier eslint-config-prettier
```

### Prettier の設定

package.json

```json
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    //追加
    "lint": "next lint --dir src",
    "format": "prettier --write --ignore-path .gitignore './**/*.{js,jsx,ts,tsx,json,css}'"
  },
  "prettier": {
    "trailingComma": "all",
    "tabWidth": 2,
    "semi": true,
    "singleQuote": true,
    "jsxSingleQuote": true,
    "printWidth": 100
  }
```

## ESLint の設定

.eslintrc

```json
{
  "extends": ["next", "next/core-web-vitals", "prettier"]
}
```

## vscode の保存時に整形を実行

ワークスペースの settings.json に記述する

```json
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll": true
  }
```

## モジュールのインポート順をアルファベット順にする

.eslintrc

```json
{
  "extends": [
    "next",
    "next/core-web-vitals",
    "prettier",
    // 追記
    "plugin:import/recommended",
    "plugin:import/warnings"
  ],
  "rules": {
    "import/order": [
      "error",
      {
        "alphabetize": {
          "order": "asc"
        }
      }
    ]
  }
}
```
