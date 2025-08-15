import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 4000;
const METRICS_FILE = path.join(__dirname, "metrics.json");
const INITIAL_BASELINE = 0;

app.use(cors());
app.use(express.json());

function ensureFile() {
  if (!fs.existsSync(METRICS_FILE)) {
    fs.writeFileSync(METRICS_FILE, JSON.stringify({ total: INITIAL_BASELINE }, null, 2));
  }
}

function readTotal() {
  try {
    ensureFile();
    const raw = fs.readFileSync(METRICS_FILE, "utf-8");
    const json = JSON.parse(raw || "{}");
    const total = Number.isFinite(json.total) ? json.total : INITIAL_BASELINE;
    return Math.max(0, total);
  } catch {
    return INITIAL_BASELINE;
  }
}

function writeTotal(total) {
  try {
    fs.writeFileSync(METRICS_FILE, JSON.stringify({ total }, null, 2));
  } catch {}
}

app.get("/metrics/total", (req, res) => {
  const total = readTotal();
  res.json({ total });
});

app.post("/metrics/increment", (req, res) => {
  const increment = Number.isFinite(req.body?.increment) ? Number(req.body.increment) : 1;
  const safeInc = Math.max(0, increment);
  const current = readTotal();
  const next = current + safeInc;
  writeTotal(next);
  res.json({ total: next });
});

app.listen(PORT, () => {
  console.log(`Metrics server running on http://localhost:${PORT}`);
});


