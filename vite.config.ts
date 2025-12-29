import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const resendKey = env.RESEND_API_KEY;

  return {
    server: {
      host: "::",
      port: 8080,
      proxy: resendKey
        ? {
            "/api/resend": {
              target: "https://api.resend.com",
              changeOrigin: true,
              secure: true,
              rewrite: (p) => p.replace(/^\/api\/resend/, "/emails"),
              headers: {
                Authorization: `Bearer ${resendKey}`,
              },
            },
          }
        : undefined,
    },
    plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
