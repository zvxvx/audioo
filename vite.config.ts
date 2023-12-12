import { defineConfig } from "vite";
import { imagetools } from "vite-imagetools";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    imagetools({
      defaultDirectives: (url) => {
        if (url.searchParams.has("icon")) {
          return new URLSearchParams("w=512&h=512&format=webp");
        }
        return new URLSearchParams();
      },
    }),
  ],
});
