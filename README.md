# 🌐 AVIF Image Converter (Node.js CLI)

A CLI script that automates a tedious task: batch-converting images to a modern, lightweight web format.

## What it does
- Scans a folder for `.jpg`, `.png`, `.gif`, `.webp` files
- Converts them to AVIF at quality 90
- Saves output to a separate folder
- Skips already-converted files on re-run (checks file existence first) — no redundant processing

## Impact
Reduces average asset weight by 40–60%, with a direct effect on Core Web Vitals and page load performance.

## Tech Stack
- JavaScript — conversion logic
- Node.js — file system operations, `sharp` and `glob` packages

## Usage
```bash
git clone https://github.com/greenexplorerdev/image-converter-in-avif-format.git
cd image-converter-in-avif-format
npm install sharp glob
```
1. Create a folder named `immagini` and add your images.
2. Run: `node index.js`
3. Converted files appear in `immagini/convertite`.

## Contact
Open to feedback and collaboration opportunities.
[LinkedIn](https://www.linkedin.com/in/cosimo-francesco-di-ruscio) · diruscio.cosimo@gmail.com
