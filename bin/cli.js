#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { explain } = require("../src/explain");

const args = process.argv.slice(2);

const styles = {
  bold: (str) => `\x1b[1m${str}\x1b[22m`,
  dim: (str) => `\x1b[2m${str}\x1b[22m`,
  underline: (str) => `\x1b[4m${str}\x1b[24m`,
  cyan: (str) => `\x1b[36m${str}\x1b[39m`,
};

function printExplanation(file, showNeg=true) {
  const result = explain(file);
  if (!result && showNeg) {
    console.log(`🤷 ${file}: No explanation found (yet).`);
  } else {
    console.log("WTF is", styles.bold(path.basename(file)));
    console.log("→", result.description);
    if (result.url) {
      console.log(
        styles.dim("Want to know more?"),
        styles.underline(styles.cyan(result.url))
      );
    }
  }
  console.log(); // Extra newline between results
}

console.log(); // Newline at the start

if (args.length === 0) {
  // Auto-scan mode
  const files = fs.readdirSync(process.cwd(), { withFileTypes: true });
  files.forEach((file) => {
    if (file.isFile()) {
      printExplanation(file.name, false);
    }
  });
} else {
  args.forEach(printExplanation);
}
