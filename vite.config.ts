import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const repoName = 'cognitive-decision-tree';

export default defineConfig(({ command }) => ({
  base: command === 'build' ? `/${repoName}/` : '/',
  plugins: [react()],
}));
