// vite.config.ts
import path from "node:path";
import react from "file:///home/ferhat/blank-ui/Blank/node_modules/.pnpm/@vitejs+plugin-react@4.3.3_vite@5.4.9_@types+node@22.8.1_stylus@0.63.0_/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { defineConfig } from "file:///home/ferhat/blank-ui/Blank/node_modules/.pnpm/vite@5.4.9_@types+node@22.8.1_stylus@0.63.0/node_modules/vite/dist/node/index.js";
import dts from "file:///home/ferhat/blank-ui/Blank/node_modules/.pnpm/vite-plugin-dts@4.2.4_@types+node@22.8.1_rollup@4.24.0_typescript@5.6.3_vite@5.4.9_@types+node@22.8.1_stylus@0.63.0_/node_modules/vite-plugin-dts/dist/index.mjs";
var __vite_injected_original_dirname = "/home/ferhat/blank-ui/Blank/packages/react";
var vite_config_default = defineConfig({
  plugins: [react(), dts({
    outDir: "dist/types"
  })],
  build: {
    lib: {
      entry: path.resolve(__vite_injected_original_dirname, "core/index.ts"),
      name: "blank-react",
      formats: ["es", "umd"],
      fileName: (format) => `index.${format}.js`
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          "react": "React",
          "react-dom": "ReactDOM"
        }
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9mZXJoYXQvYmxhbmstdWkvQmxhbmsvcGFja2FnZXMvcmVhY3RcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ob21lL2ZlcmhhdC9ibGFuay11aS9CbGFuay9wYWNrYWdlcy9yZWFjdC92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS9mZXJoYXQvYmxhbmstdWkvQmxhbmsvcGFja2FnZXMvcmVhY3Qvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgcGF0aCBmcm9tICdub2RlOnBhdGgnXG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IGR0cyBmcm9tICd2aXRlLXBsdWdpbi1kdHMnXG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gICAgcGx1Z2luczogW3JlYWN0KCksIGR0cyh7XG4gICAgICAgIG91dERpcjogJ2Rpc3QvdHlwZXMnLFxuICAgIH0pXSxcbiAgICBidWlsZDoge1xuICAgICAgICBsaWI6IHtcbiAgICAgICAgICAgIGVudHJ5OiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnY29yZS9pbmRleC50cycpLFxuICAgICAgICAgICAgbmFtZTogJ2JsYW5rLXJlYWN0JyxcbiAgICAgICAgICAgIGZvcm1hdHM6IFsnZXMnLCAndW1kJ10sXG4gICAgICAgICAgICBmaWxlTmFtZTogZm9ybWF0ID0+IGBpbmRleC4ke2Zvcm1hdH0uanNgLFxuICAgICAgICB9LFxuICAgICAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICAgICAgICBleHRlcm5hbDogWydyZWFjdCcsICdyZWFjdC1kb20nXSxcbiAgICAgICAgICAgIG91dHB1dDoge1xuICAgICAgICAgICAgICAgIGdsb2JhbHM6IHtcbiAgICAgICAgICAgICAgICAgICAgJ3JlYWN0JzogJ1JlYWN0JyxcbiAgICAgICAgICAgICAgICAgICAgJ3JlYWN0LWRvbSc6ICdSZWFjdERPTScsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfSxcbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQWdULE9BQU8sVUFBVTtBQUNqVSxPQUFPLFdBQVc7QUFDbEIsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxTQUFTO0FBSGhCLElBQU0sbUNBQW1DO0FBS3pDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQ3hCLFNBQVMsQ0FBQyxNQUFNLEdBQUcsSUFBSTtBQUFBLElBQ25CLFFBQVE7QUFBQSxFQUNaLENBQUMsQ0FBQztBQUFBLEVBQ0YsT0FBTztBQUFBLElBQ0gsS0FBSztBQUFBLE1BQ0QsT0FBTyxLQUFLLFFBQVEsa0NBQVcsZUFBZTtBQUFBLE1BQzlDLE1BQU07QUFBQSxNQUNOLFNBQVMsQ0FBQyxNQUFNLEtBQUs7QUFBQSxNQUNyQixVQUFVLFlBQVUsU0FBUyxNQUFNO0FBQUEsSUFDdkM7QUFBQSxJQUNBLGVBQWU7QUFBQSxNQUNYLFVBQVUsQ0FBQyxTQUFTLFdBQVc7QUFBQSxNQUMvQixRQUFRO0FBQUEsUUFDSixTQUFTO0FBQUEsVUFDTCxTQUFTO0FBQUEsVUFDVCxhQUFhO0FBQUEsUUFDakI7QUFBQSxNQUNKO0FBQUEsSUFDSjtBQUFBLEVBQ0o7QUFDSixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
