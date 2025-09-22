import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Detect if running in Replit environment
  const isReplit = process.env.REPLIT_URL || process.env.REPL_SLUG;
  const port = isReplit ? 5000 : 8080;
  
  return {
    server: {
      host: "::",
      port: port,
      allowedHosts: [".replit.dev"],
    },
    plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
