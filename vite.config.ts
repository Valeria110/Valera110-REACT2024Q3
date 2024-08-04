/// <reference types="vitest" />

import { defineConfig } from 'vite';
import { vitePlugin as remix } from '@remix-run/dev';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    remix({
      appDirectory: './src/app',
      buildDirectory: 'dist',
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
      },
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
  },
});
