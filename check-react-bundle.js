import fs from "fs";
import path from "path";

// Path to your built dist folder
const DIST_DIR = path.resolve("./dist");

// Function to recursively read files
function readFiles(dir, callback) {
  fs.readdirSync(dir).forEach((file) => {
    const filepath = path.join(dir, file);
    const stat = fs.statSync(filepath);

    if (stat.isDirectory()) {
      readFiles(filepath, callback);
    } else {
      callback(filepath);
    }
  });
}

let reactFound = false;

readFiles(DIST_DIR, (file) => {
  if (file.endsWith(".js")) {
    const content = fs.readFileSync(file, "utf-8");

    // Check for full React code patterns
    if (
      content.includes("react.development.js") ||
      content.includes("react.production.min.js") ||
      content.includes("function createElement(") // React core function
    ) {
      console.log(`🚨 Possible bundled React found in: ${file}`);
      reactFound = true;
    }
  }
});

if (!reactFound) {
  console.log("✅ No bundled React detected — React is being externalized correctly.");
}
