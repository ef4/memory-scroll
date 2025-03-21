import { defineConfig } from 'vite';
import { extensions, ember } from '@embroider/vite';
import { babel } from '@rollup/plugin-babel';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

export default defineConfig({
  plugins: [
    ember(),
    babel({
      babelHelpers: 'inline',
      extensions,
      configFile: resolve(
        dirname(fileURLToPath(import.meta.url)),
        './babel.test.config.cjs',
      ),
    }),
  ],
});
