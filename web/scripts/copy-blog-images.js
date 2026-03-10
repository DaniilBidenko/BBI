const fs = require("fs");
const path = require("path");

const assetsBase = path.join(
  process.env.USERPROFILE || process.env.HOME,
  ".cursor",
  "projects",
  "c-Users-Hello-User-Desktop-BBI",
  "assets"
);

const destDir = path.join(__dirname, "..", "public", "blog");

const files = [
  { search: "64be1291", dest: "diagnostics-analysis.png" },
  { search: "d741f963", dest: "operations-autonomous.png" },
];

function findFile(dir, pattern) {
  if (!fs.existsSync(dir)) return null;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      const found = findFile(full, pattern);
      if (found) return found;
    } else if (e.name.includes(pattern)) return full;
  }
  return null;
}

for (const { search, dest } of files) {
  const src = findFile(assetsBase, search);
  if (src) {
    const dst = path.join(destDir, dest);
    fs.mkdirSync(destDir, { recursive: true });
    fs.copyFileSync(src, dst);
    console.log("OK:", dest);
  } else {
    console.log("Not found:", search);
  }
}
