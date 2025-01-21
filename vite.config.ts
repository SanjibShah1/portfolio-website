export default defineConfig({
  plugins: [react()],
  base: '/', // Use root since a custom domain doesn't have a subpath
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
