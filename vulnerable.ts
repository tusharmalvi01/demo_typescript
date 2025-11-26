// Example TypeScript file with potential vulnerabilities

// 1. Use of eval (dangerous)
function runUserCode(userInput: string) {
  // Vulnerability: eval can execute arbitrary code
  eval(userInput);
}

// 2. Hardcoded secret (bad practice)
const SECRET_KEY = '12345-SECRET-KEY';

// 3. Insecure HTTP request (no HTTPS)
fetch('http://example.com/api/data')
  .then(res => res.json())
  .then(data => console.log(data));

// Export for usage
export { runUserCode, SECRET_KEY };
