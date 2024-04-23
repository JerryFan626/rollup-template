import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";

export default () => {
  const isDev = process.env.NODE_ENV === "development";
  return {
    input: "src/index.ts", // 入口文件改为.ts
    output: [
      {
        file: "dist/bundle.esm.js",
        format: "es",
      },
      {
        file: "dist/bundle.umd.js",
        format: "umd",
        name: "web-excel",
      },
    ],
    plugins: [
      typescript(),
      resolve(),
      commonjs(),
      isDev && [
        terser(),
        serve({
          open: true, 
          contentBase: ["dist"],
          host: "localhost",
        }),
        livereload({

          watch: "dist",
        }),
      ],
    ].filter(Boolean),
  };
};
