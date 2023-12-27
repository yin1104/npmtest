教程： https://www.youtube.com/watch?v=XHQi5a0TmMc

博客： https://dev.to/alexeagleson/how-to-create-and-publish-a-react-component-library-2oe

优化版本相关，超级牛逼实用： https://dev.to/nasheomirro/comment/239nj

这个老哥真的很负责

1. npm init
2. yarn add react typescript @types/react -dev
3. npx tsc --init  [用于Created a new tsconfig.json ]
4. yarn add @rollup/plugin-node-resolve @rollup/plugin-commonjs rollup rollup-plugin-terser rollup-plugin-dts @rollup/plugin-typescript tslib --dev
5. yarn add rollup-plugin-postcss postcss --dev
yarn add @rollup/plugin-babel --dev
6. yarn add rollup-plugin-peer-deps-external --dev
yarn add @testing-library/react jest @types/jest --dev  // 用于测试
7. git init
8. [publish]: NPM 发布登录相关； npm login  [403报错，426报错等可看 https://www.youtube.com/watch?v=J4b_T-qH3BY 视频学习]

403：需要修改一下，咱们的cnpm库是国内镜像，这里要重新改回仓库地址
426：upgrade npm。然后通过邮件确认登录的方式登录。

9. 需要建立一个 .npmrc 文件

registry=https://registry.npmjs.org/
@YOUR_GITHUB_USERNAME:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN

10. 成功发布但 404，解决问题：https://cloud.tencent.com/developer/ask/sof/113514068/answer/136451293

token 的获取：https://github.com/settings/tokens


11. 直接运行jest会报错，因为还需要额外处理 JSX  --> 添加 babel

依然报错： react/react-dom 引用的问题：由于放在了 "peerDependencies" 中，jest无法测试。
但是不这么放会导致项目中存在多个React版本的问题。因此，需要额外考虑开发环境测试环境生产环境。

不要将其react-dom作为对等依赖项，因为我们只需要它storybook，而

12. npx sb init --builder webpack5
│   Storybook was successfully installed in your project! 🎉                  │
│   To run Storybook manually, run yarn storybook. CTRL+C to stop.             │
│                                                                              │
│   Wanna know more about Storybook? Check out https://storybook.js.org/       │
│   Having trouble or want to chat? Join us at https://discord.gg/storybook/ 


rollup ---> building single bundler

