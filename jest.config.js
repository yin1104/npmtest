module.exports = {
  testEnvironment: "jsdom", // 告诉 Jest 使用jsdom作为我们的 DOM 实现。
  // 默认情况下， jest 不再需要jsdom使用测试环境jest-environment-jsdom单独下载为开发依赖项。
  moduleNameMapper: {
    ".(css|less|scss)$": "identity-obj-proxy",
  },
};