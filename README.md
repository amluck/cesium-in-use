# 常用的 cesium 开发环境

> 刚开始使用的 cesium 踩过的坑，希望对你有用

## 分支介绍

> 不同的分支代表不同的环境

1. webpack
   参照 cesium 官方 GitHub 库[cesium-webpack-example](https://github.com/CesiumGS/cesium-webpack-example) ，添加了[@znemz/cesium-navigation](https://github.com/nmccready/cesium-navigation#readme)。

### 开箱即用

    git clone -b webpack https://github.com/amluck/cesium-in-use.git
    npm install
    npm start

### 脚本介绍

- `npm start` - Runs a webpack build with `webpack.config.js` and starts a development server
- `npm run build` - Runs a webpack build with `webpack.config.js`
- `npm run release` - Runs an optimized webpack build with `webpack.release.config.js`
- `npm run serve-release` - Runs an optimized webpack build with `webpack.release.config.js` and starts a development server

2. vuecli2
   使用`Vue Cli 2`构建，工程使用了 `eslint+prettier` 进行代码格式化

### 开箱即用

    git clone -b vuecli2 https://github.com/amluck/cesium-in-use.git
    npm install
    npm run dev

### 脚本介绍

- `npm run dev` - Runs a serve with hot reload at `localhost:8080`
- `npm run build` - Build for production with minification
- `npm run lint` - Lint code by eslint

3. vuecli3+
   使用`Vue Cli 4.05`构建，工程使用了 `eslint+prettier` 进行代码格式化

### 开箱即用

    git clone -b vuecli3+ https://github.com/amluck/cesium-in-use.git
    yarn install
    yarn serve

### 脚本介绍

- `yarn serve` - Runs a serve with hot reload at `localhost:9099`
- `yarn build` - Build for production with minification
- `yarn lint` - Lint code by eslint
