import resolve from '@rollup/plugin-node-resolve'; // * 用来查找包的
import commonjs from '@rollup/plugin-commonjs'; // * 用来将 CommonJS 转换为 ES2015
import typescript from 'rollup-plugin-typescript2'; // * 用来处理 ts 的
import postcss from 'rollup-plugin-postcss'; // * 用来处理 css 的

export default {
  // input: './src/components/AudioControl/index.tsx',
  input: './src/utils/canvas/index.ts',
  output: {
    file: 'rollup/bundle.js',
    format: 'es',
  },
  plugins: [
    resolve(),
    commonjs(),
    typescript({
      tsconfig: './rollup.tsconfig.json',
    }),
    postcss({
      modules: true,
      extract: true,
    }),
  ],
  // external: ['react', '@ant-design/icons', '@douyinfe/semi-ui'], // * 包含什么包，不打包该内容，直接引用
};
