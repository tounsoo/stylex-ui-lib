import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import styleX from "vite-plugin-stylex";

export default defineConfig(({ command }) => ({
  plugins: [
    react(), // Use the React plugin for JSX transformation and React fast refresh
    dts({
      // Configuration options for vite-plugin-dts
      include: ['./src/**/*.ts', './src/**/*.tsx'],
      exclude: ['./src/**/*.stories.ts', './src/**/*.stories.tsx'],
      outDir: './dist/types',
      staticImport: true,
    }),
    ...(command !== 'build' ? [styleX()] : []), // Only use stylexPlugin when not building
  ],
  build: {
    copyPublicDir: false,
    lib: {
      entry: './src/index.ts', // Your library's entry point
      name: 'my-lib', // A name for your library, used in UMD builds
      fileName: (format) => `index.${format}.js`, // Naming pattern for output files
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        '@stylexjs/stylex',
        'vite-plugin-stylex',
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          '@stylexjs/stylex': 'Stylex',
          'vite-plugin-stylex': 'StylexPlugin',
        },
      },
    },
    sourcemap: true, // Optional: Enable source map generation for debugging
  },
}));