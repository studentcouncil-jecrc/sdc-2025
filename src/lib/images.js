// Vite can't resolve dynamic `import(variable)` paths, so we eagerly glob
// everything under src/assets once and look files up by their relative path
// (the same strings used in src/data/content.js, e.g. "clubs/adaa.png").
const modules = import.meta.glob("../assets/**/*.{png,jpg,jpeg,webp,svg}", {
  eager: true,
  import: "default",
});

const map = {};
for (const path in modules) {
  const key = path.replace("../assets/", "");
  map[key] = modules[path];
}

export function img(relativePath) {
  return map[relativePath] ?? "";
}
