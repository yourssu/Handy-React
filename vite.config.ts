import { defineConfig } from "vite";
import path from "path";
import dts from "vite-plugin-dts";
import tsconfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/

export default defineConfig({
    plugins: [
        react(),
        dts({
            insertTypesEntry: true,
        }),
        tsconfigPaths(),
    ],
    build: {
        lib: {
            entry: path.resolve(__dirname, "src/index.tsx"),
            name: "@yourssu/design-system-react",
            formats: ["es", "cjs"],
            fileName: (format) => `index.${format}.js`,
        },
        rollupOptions: {
            external: [
                "react",
                "react-dom",
                "styled-components",
                "@phosphor-icons/react",
                "**/*.stories.tsx",
            ],
            output: {
                globals: {
                    react: "React",
                    "react-dom": "ReactDOM",
                    "styled-components": "styled",
                },
                banner: '"use client";',
                interop: "compat",
            },
        },
        ssr: false,
    },
});
