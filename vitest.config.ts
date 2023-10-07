import { defineConfig } from 'vitest/config';

export default defineConfig({
  resolve: {
    alias: {
      '@site': __dirname,
    },
  },
});
