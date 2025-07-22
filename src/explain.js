const fs = require("fs");
const path = require("path");

const KNOWN_EXTENSIONS = [
  ".js",
  ".ts",
  ".json",
  ".yaml",
  ".yml",
  ".cjs",
  ".mjs",
];
const KNOWN_SUFFIXES = [
  ".build",
  ".config",
  ".local",
  ".example",
  ".dev",
  ".prod",
  ".test",
  ".rc",
  ".override",
  ".overrides",
];

function loadExplanations() {
  const filePath = path.join(__dirname, "../data/wtf.json");
  if (!fs.existsSync(filePath)) return {};
  const raw = fs.readFileSync(filePath, "utf8");
  return JSON.parse(raw);
}

function normalizeCandidates(fileName) {
  const base = path.basename(fileName).toLowerCase();
  const candidates = new Set();

  candidates.add(base);

  let stripped = base;

  for (const ext of KNOWN_EXTENSIONS) {
    if (stripped.endsWith(ext)) {
      stripped = stripped.slice(0, -ext.length);
      candidates.add(stripped);
    }
  }

  for (const suffix of KNOWN_SUFFIXES) {
    if (stripped.endsWith(suffix)) {
      stripped = stripped.slice(0, -suffix.length);
      candidates.add(stripped);
    }
  }

  // Also try just the first part before any `.` (e.g. `tsconfig.build` → `tsconfig`)
  if (stripped.includes(".")) {
    candidates.add(stripped.split(".")[0]);
  }

  return [...candidates];
}

function explain(fileName) {
  const explanations = loadExplanations();
  const candidates = normalizeCandidates(fileName);

  for (const key of candidates) {
    if (explanations[key]) {
      const entry = explanations[key];
      return typeof entry === "string"
        ? { description: entry }
        : entry;
    }
  }

  return null;
}

module.exports = { explain };
