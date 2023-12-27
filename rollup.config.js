import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";
import terser from "@rollup/plugin-terser";
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

// import babel from "@rollup/plugin-babel";
// import { terser } from "rollup-plugin-terser"; 
// 对于 terser 的优化，rollup-plugin-terser似乎没有维护，并且在一些最新版本的 rollup 中不起作用
import pkg from './package.json' // 当前运行环境，可通过 cross-env 命令行设置

const env = process.env.NODE_ENV; // umd 模式的编译结果文件输出的全局变量名称

export default [
  {
    input: "src/index.ts",
    external: ['react-dom'],
    output: [
      {
        file: pkg.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: pkg.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      // NEW
      peerDepsExternal(),  // 优化，避免重复下载React

      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      // babel 配置
      // babel({
      //   // 编译库使用 runtime
      //   babelHelpers: "runtime",
      //   // 只转换源代码，不转换外部依赖
      //   exclude: "node_modules/**",
      //   // babel 默认不支持 ts 需要手动添加
      //   extensions: [...DEFAULT_EXTENSIONS, ".ts"],
      // }),
      // typescript({ tsconfig: "./tsconfig.json" }),
      postcss(),

      terser(), // 压缩优化
    ],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [
      {
        file: "dist/index.d.ts",
        format: "esm"
      }
    ],
    plugins: [
      dts()  // 处理 ts 类型，因为我们在 tsconfig文件中声明了
    ],
    // NEW
    external: [/\.css$/],
  },
];
