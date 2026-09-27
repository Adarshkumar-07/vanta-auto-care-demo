import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/vanta-auto-care-demo/',
  plugins: [react()]
});