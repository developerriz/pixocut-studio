import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { boneyardPlugin } from "boneyard-js/vite";

const enableBoneyardCapture = process.env.BONEYARD_CAPTURE === "true";

export default defineConfig({
  plugins: [react(), enableBoneyardCapture ? boneyardPlugin() : null].filter(
    Boolean,
  ),
});
