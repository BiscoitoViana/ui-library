import react from '@vitejs/plugin-react'

import { resolve } from "path"
import { defineConfig } from 'vite'
import dts from "vite-plugin-dts"
import tsConfigPaths from "vite-tsconfig-paths"
import tailwindcss from "tailwindcss"

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true
    }),
    tsConfigPaths()
  ],
  css: {
    postcss: {
      plugins: [tailwindcss("./tailwind.config.js")]
    }
  },
  root: "src",
  build: {
    lib: {
      name: "FFSConsultingUILibrary",
      entry: resolve(__dirname, "src/index.ts"),
      formats: ["es", "umd"],
      fileName: "index"
    },
    outDir: "../dist",
    sourcemap: true,
    rollupOptions: {
      external: [
        "react",
        "react-dom"
      ],
      output: {
        globals: {
          "react": "React",
          "react-dom": "ReactDOM",
        },
        assetFileNames: "ffsconsulting-ui-lib.[ext]",
      },
    }
  },
  base: 'https://biscoitoviana.github.io/ui-library/'
})
