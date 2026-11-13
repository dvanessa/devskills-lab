import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['challenges/**/*.test.ts', 'challenges/**/*.test.tsx'],
    exclude: ['**/node_modules/**', '**/dist/**'],
  },
});
