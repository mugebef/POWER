import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = process.env.PORT || 3002;

  // API routes can be added here
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", message: "Styn Love server is healthy" });
  });

  const distPath = path.join(__dirname, 'dist');
  const indexHtmlPath = path.join(distPath, 'index.html');
  const distExists = fs.existsSync(indexHtmlPath);
  
  // Force production if dist/index.html exists, unless explicitly set to development
  const isProduction = process.env.NODE_ENV === "production" || (distExists && process.env.NODE_ENV !== "development");

  console.log("-----------------------------------------");
  console.log(`Styn Love Startup Info:`);
  console.log(`NODE_ENV: ${process.env.NODE_ENV || 'not set'}`);
  console.log(`Checking for production build at: ${indexHtmlPath}`);
  console.log(`Production build found: ${distExists}`);
  console.log(`Mode: ${isProduction ? 'PRODUCTION' : 'DEVELOPMENT'}`);
  console.log("-----------------------------------------");

  // Vite middleware for development
  if (!isProduction) {
    console.log("Starting Vite development engine...");
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { 
        middlewareMode: true,
        hmr: false,
      },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    console.log("Serving production build from /dist...");
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(indexHtmlPath);
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
