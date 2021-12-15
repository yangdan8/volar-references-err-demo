import { defineConfig, UserConfigExport } from 'vite';
import path from 'path';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';

const config: UserConfigExport = {
  plugins: [
    dts(),
    vue(),
  ],
  build: {
    emptyOutDir: true,
    sourcemap: true,
    lib: {
      entry: path.resolve(__dirname, './src/main.ts'),
      name: 'VolarDemoLibs',
      fileName: (format: string) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
};

export default defineConfig(config);
