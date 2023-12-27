教程： https://www.youtube.com/watch?v=XHQi5a0TmMc
博客： https://dev.to/alexeagleson/how-to-create-and-publish-a-react-component-library-2oe

这个老哥真的很负责

1. npm init
2. yarn add react typescript @types/react -dev
3. npx tsc --init  [用于Created a new tsconfig.json ]
4. yarn add @rollup/plugin-node-resolve @rollup/plugin-commonjs rollup rollup-plugin-terser rollup-plugin-dts @rollup/plugin-typescript tslib --dev
5. yarn add rollup-plugin-postcss postcss --dev
yarn add @rollup/plugin-babel --dev
6. yarn add rollup-plugin-peer-deps-external --dev
7. git init
8. [publish]: NPM 发布登录相关； npm login  [403报错，426报错等可看 https://www.youtube.com/watch?v=J4b_T-qH3BY 视频学习]

403：需要修改一下，咱们的cnpm库是国内镜像，这里要重新改回仓库地址
426：upgrade npm。然后通过邮件确认登录的方式登录。

9. 需要建立一个 .npmrc 文件

registry=https://registry.npmjs.org/
@YOUR_GITHUB_USERNAME:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN

token 的获取：https://github.com/settings/tokens







rollup ---> building single bundler

