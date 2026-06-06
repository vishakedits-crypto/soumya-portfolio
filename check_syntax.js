const fs = require('fs');
try {
    const code = fs.readFileSync('d:\\Antigravity\\Soumya portfolio\\app.js', 'utf8');
    // Check for syntax errors by parsing it
    new Function(code);
    console.log("Syntax is valid!");
} catch (e) {
    console.error("Syntax error found:", e.message);
}
