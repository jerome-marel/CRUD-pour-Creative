import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Spécifiez les extensions de fichiers autorisées
    allowedFileExtensions: ['js', 'jsx', 'json', 'mjs', 'ts', 'tsx', 'html', 'css'],
    // Spécifiez les types MIME pour chaque extension de fichier
    mimeTypes: {
      'text/javascript': ['js', 'jsx'],
      'text/css': ['css'],
      'application/json': ['json'],
      'text/html': ['html'],
    },
  },
});
