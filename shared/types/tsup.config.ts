import type { Options } from "tsup";

export default <Options> {
    entryPoints: ["src/index.ts"],
    outDir: "dist",
    format: ["esm", "cjs"],
    dts: true,
};
