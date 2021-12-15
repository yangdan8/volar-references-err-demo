import { defineConfig, UserConfigExport } from 'vite';
import path from 'path';
import dts from 'vite-plugin-dts';

const config: UserConfigExport = {
  plugins: [
    dts(),
  ],
  build: {
    emptyOutDir: true,
    sourcemap: true,
    lib: {
      entry: path.resolve(__dirname, './src/main.ts'),
      name: 'VolarDemoLibs',
      fileName: (format: string) => `index.${format}.js`,
    },
  },
};

export default defineConfig(config);
