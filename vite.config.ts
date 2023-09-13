import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // toda importação com @ vai ser direcionada para a pasta src
      '@': path.resolve(__dirname, './src'),
    },
  },
});
