import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";

export default {
  input: "./index.tsx",
  output: {
    file: "bundle.js",
    format: "es",
  },
  plugins: [
    resolve(),
    commonjs(),
    typescript({
      tsconfig: "./tsconfig.json",
    }),
    postcss({
      modules: true,
      extract: true,
    }),
  ],
  external: ["react", "@ant-design/icons"],
};
