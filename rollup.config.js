import babel from "@rollup/plugin-babel";
import typescript from '@rollup/plugin-typescript';
import external from "rollup-plugin-peer-deps-external";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import postcss from "rollup-plugin-postcss";
import url from "@rollup/plugin-url";

import pkg from "./package.json";

export default {
  input: "src/index.tsx",
  external: ["react"],
  output: [
    {
      file: pkg.main,
      format: "cjs",
      sourcemap: true,
      globals: {
        react: "React",
      },
    },
    {
      file: pkg.module,
      format: "es",
      sourcemap: true,
      globals: {
        react: "React",
      },
    },
    {
      file: pkg.browser,
      format: "umd",
      name: "react-json-grid",
      sourcemap: true,
      globals: {
        react: "React",
      },
    },
  ],
  plugins: [
    external(),
    typescript({
      declaration: true,
      declarationDir: "dist/types",
      emitDeclarationOnly: true,
      rootDir: "src",
    }),
    postcss({
      autoModules: false,
      modules: {
        generateScopedName: "[local]",
      },
    }),
    url(),
    babel({
      babelHelpers: "bundled",
      exclude: "node_modules/**",
    }),
    resolve(),
    commonjs(),
  ],
};
