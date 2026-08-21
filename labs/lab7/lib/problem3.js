// problem3.js

// ==========================================
// 3.1 Refactor ES5 -> ES6
// ==========================================

const greet = (name = "Guest") => {
  const msg = `Hi ${name}, welcome back`;
  return msg;
};

console.log("=== 3.1 Output ===");
console.log(greet());         // Empty argument uses default "Guest"
console.log(greet("Manee"));  // Argument uses "Manee"


// ==========================================
// 3.2 Config reader
// ==========================================

const buildSettings = (opts = {}) => {
  // Destructuring fontSize with a default value of 16
  const { fontSize = 16 } = opts;

  return {
    // Optional chaining and nullish coalescing for fallback
    theme: opts?.theme ?? "light",
    fontSize,
    // Spread operator and nullish coalescing to create a new array
    plugins: [...(opts?.plugins ?? []), "core"]
  };
};

console.log("\n=== 3.2 Output ===");
console.log(buildSettings());
console.log(buildSettings({ theme: "dark", plugins: ["md"] }));