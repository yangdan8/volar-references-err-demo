import vue from '@vitejs/plugin-vue';
import path from 'path';
import { defineConfig, UserConfigExport } from 'vite';

const config: UserConfigExport = {
  plugins: [vue()],
  build: {
    emptyOutDir: true,
    sourcemap: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, './index.html'),
      },
    },
  },
};

export default defineConfig(config);
