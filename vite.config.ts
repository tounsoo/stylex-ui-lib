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
        minify: false,
        rollupOptions: {
          // make sure to externalize deps that shouldn't be bundled
          // into your library
          input: './src/index.ts',
          external: ['react'],
          preserveEntrySignatures: 'strict',
          output: [{
            preserveModules: true,
            preserveModulesRoot: 'src',
            dir: resolve('./dist'),
            format: 'cjs',
            entryFileNames: `[name].cjs`, 
            chunkFileNames: `[name].cjs`,
          },{
            preserveModules: true,
            preserveModulesRoot: 'src',
            dir: resolve('./dist'),
            format: "es",
            entryFileNames: `[name].js`, 
            chunkFileNames: `[name].js`,
          }],
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
          }), dts({insertTypesEntry: true})],
        },
      },
    }
  }
  return {
    plugins: [react(), styleX(), dts({insertTypesEntry: true})]
  }
})