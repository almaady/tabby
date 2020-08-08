import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import resolve from "rollup-plugin-node-resolve";
import scss from "rollup-plugin-scss";
import copy from "rollup-plugin-copy-glob";

import autoprefixer from "autoprefixer";
import postcss from "postcss";
import CleanCSS from "clean-css";
import { writeFileSync } from "fs";

import pkg from "./package.json";

export default {
  input: "src/index.js",
  external: ["fs"],
  output: [
    {
      file: pkg.main,
      format: "cjs",
      sourcemap: true
    },
    {
      file: pkg.module,
      format: "es",
      sourcemap: true
    }
  ],
  plugins: [
    external(),
    copy([
      {
        files: "src/font/*.*",
        dest: "dist/font"
      }
    ]),
    scss({
      output: function(styles, styleNodes) {
        postcss([autoprefixer])
          .process(styles, { from: undefined })
          .then(result =>
            writeFileSync(pkg.mainCss, new CleanCSS().minify(result.css).styles)
          );
      }
    }),
    babel({
      exclude: "node_modules/**"
    }),
    resolve(),
    commonjs()
  ]
};
