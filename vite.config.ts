// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'
import styleX from "vite-plugin-stylex"
import react from '@vitejs/plugin-react'
import stylexPlugin from '@stylexjs/rollup-plugin'
import dts from 'vite-plugin-dts'

export default defineConfig(({command}) => {
  if (command === 'build') {
    return {
      build: {
        lib: {
          // Could also be a dictionary or array of multiple entry points
          entry: resolve(__dirname, 'src/index.ts'),
          name: 'stylex-ui-lib',
          // the proper extensions will be added
          fileName: 'index',
        },
        rollupOptions: {
          // make sure to externalize deps that shouldn't be bundled
          // into your library
          external: ['react'],
          output: {
            // Provide global variables to use in the UMD build
            // for externalized deps
            globals: {
              react: 'React',
            },
          },
          plugins: [stylexPlugin({
            // Required. File path for the generated CSS file.
            fileName: 'stylex.css',
            // default: false
            dev: false,
            // prefix for all generated classNames
            classNamePrefix: 'x',
            // Required for CSS variable support
            unstable_moduleResolution: {
              // type: 'commonJS' | 'haste'
              // default: 'commonJS'
              type: 'commonJS',
              // The absolute path to the root directory of your project
              rootDir: __dirname,
            },
          }), dts()],
        },
      },
    }
  }
  return {
    plugins: [react(), styleX(), dts()]
  }
})