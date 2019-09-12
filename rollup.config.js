import babel  from 'rollup-plugin-babel';
import nodeResolve from 'rollup-plugin-node-resolve';
import { uglify } from 'rollup-plugin-uglify';

export default {
  input: 'src/index.js',
  output: {
    format: 'iife',
    name: 'template',
    file: 'template.js',
    sourceMap: true,
  },

  plugins: [
    nodeResolve(),
    babel(),
    uglify(),
  ],

  onwarn: function (warning, warn) {
    if (warning.code !== 'CIRCULAR_DEPENDENCY') warn(warning);
  }
};
