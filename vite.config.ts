import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteStaticCopy } from "vite-plugin-static-copy";
import { VitePWA } from "vite-plugin-pwa";
import path from "path";
import fs from "fs";
const manifestContent = JSON.parse(fs.readFileSync("./public/manifest/manifest.json", "utf-8"));

const localhostRegex = /^http:\/\/localhost:4173/;

export default defineConfig({
  server: {
    port: 1995
  },
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: "src/assets/locales/*",
          dest: "locales"
        }
      ]
    }),
    VitePWA({
      manifest: manifestContent,
      registerType: "autoUpdate",
      injectRegister: "auto",
      devOptions: {
        enabled: true
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern: new RegExp(`^${localhostRegex.source}`),
            handler: "NetworkFirst"
          },
          {
            urlPattern: new RegExp(`^${localhostRegex.source}/assets/`),
            handler: "CacheFirst"
          },
          {
            urlPattern: new RegExp(`^${localhostRegex.source}/locales/`),
            handler: "StaleWhileRevalidate"
          }
        ]
      }
    })
  ],
  resolve: {
    alias: {
      src: path.resolve("src/")
    }
  }
});
