import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/tabbed-card.ts',
      formats: ['es'],
      fileName: 'tabbed-card',
    },
    rollupOptions: {
      external: [/^lit/, /^custom-card-helpers/],
    },
  },
  define: {
    'process.env': {},
  },
  plugins: [
    {
      name: 'add-polyfills',
      transform(code, id) {
        if (id.includes('tabbed-card.ts')) {
          return {
            code: `import '@webcomponents/scoped-custom-element-registry';\n${code}`,
            map: null,
          };
        }
        return null;
      },
    },
  ],
});
