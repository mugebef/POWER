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

  const distPath = path.join(process.cwd(), 'dist');
  const distExists = fs.existsSync(distPath);
  
  // Robust production detection: 
  // 1. Explicitly set to "production"
  // 2. OR 'dist' folder exists and NODE_ENV is not "development"
  const isProduction = process.env.NODE_ENV === "production" || (distExists && process.env.NODE_ENV !== "development");

  console.log(`Current NODE_ENV: ${process.env.NODE_ENV || 'undefined'}`);
  console.log(`Dist folder exists: ${distExists}`);

  // Vite middleware for development
  if (!isProduction) {
    console.log("Running in development mode...");
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { 
        middlewareMode: true,
        hmr: false, // Disable HMR to prevent port conflicts
      },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    console.log("Running in production mode...");
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
