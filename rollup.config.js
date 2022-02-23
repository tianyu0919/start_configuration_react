import resolve from '@rollup/plugin-node-resolve'; // * 用来查找包的
import commonjs from '@rollup/plugin-commonjs'; // * 用来将 CommonJS 转换为 ES2015
import typescript from 'rollup-plugin-typescript2'; // * 用来处理 ts 的
import postcss from 'rollup-plugin-postcss'; // * 用来处理 css 的
import { babel } from '@rollup/plugin-babel'; // * 转换代码到 es5
import { terser } from 'rollup-plugin-terser'; // * 压缩代码

export default {
  input: './src/components/AudioControl/index.tsx',
  // input: './src/utils/canvas/index.ts',
  output: {
    file: 'rollup/bundle.js',
    format: 'es', // * [cjs(CommonJS), amd(异步模块化定义), umd(通用模块化定义), es(esModule), system(原生格式), iif(自执行函数)]
  },
  plugins: [
    resolve(),
    commonjs(),
    babel({ // * 必须在 commonjs 后面写
      babelHelpers: 'bundled',
    }),
    typescript({
      tsconfig: './rollup.tsconfig.json',
    }),
    postcss({
      modules: true,
      extract: true,
    }),
    terser(),
  ],
  // external: ['react', '@ant-design/icons', '@douyinfe/semi-ui'], // * 包含什么包，不打包该内容，直接引用
};
