import { defineConfig } from "vite";

export default defineConfig({
    build: {
        lib: {
            entry: "./core/main.styl",
            name: "blank=styles",
            fileName: "stylus-package",
            formats: ["es", "cjs"],
        },
        rollupOptions: {
            external: [],
            output: {
                globals: {},
            },
        },
    },
    css: {
        preprocessorOptions: {
            stylus: {
            },
        },
    },
});
