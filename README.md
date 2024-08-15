# FALCON Example with Node.js

This project demonstrates the usage of the `falcon` library in Node.js to perform key pair generation, message signing, and signature verification using the FALCON+ algorithm. It also includes file reading operations using the `fs` and `path` modules.

## Libraries Used

- [`falcon`](https://www.npmjs.com/package/falcon-crypto): A library for FALCON post-quantum secure signatures.
- [`fs/promises`](https://nodejs.org/api/fs.html#fspromisesreadfilepath-options): Node.js File System module with Promises API.
- [`path`](https://nodejs.org/api/path.html): Node.js module for handling and transforming file paths.

## How to Run

1. **Install Node.js**: Ensure you have Node.js installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).

2. **Create a New Project Directory**: 
   ```sh
   mkdir falcon-example
   cd falcon-example
   npm init -y
   npm install falcon-crypto
   node index.js
   ```
