# GTAG PFP Maker

A self-contained, browser-based profile picture maker with original canvas vector artwork. It uses plain HTML, CSS, and JavaScript—no packages, build step, external fonts, analytics, accounts, or AI services.

> Fan-made project. Gorilla Tag and related names belong to their respective owners. This project is not affiliated with or endorsed by Another Axiom.

## Run locally

1. Download and unzip `gtag-pfp-maker.zip`.
2. Open `index.html` in a modern browser.
3. Pick a 3-digit color code, customize the character, and press **Download PFP (PNG)**.

All drawing and export happen locally in the browser. The canvas is rendered at **1024 × 1024** pixels regardless of the on-screen preview size.

## Color code

Each channel digit is clamped to an integer from 0 to 9 and converted with:

```js
Math.round((value / 9) * 255)
```

For example, `369` becomes `RGB(85, 170, 255)` / `#55AAFF`. Enable **Use custom hex override** to use the color picker instead.

## Deploy to GitHub Pages

1. Create a new GitHub repository (for example, `gtag-pfp-maker`).
2. Upload `index.html`, `style.css`, `app.js`, `cosmetics.js`, and `README.md` to the repository root.
3. Open the repository's **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)` folder, then save.
6. Wait for GitHub Pages to publish. Open the URL shown in the Pages settings.

No framework, npm install, compilation, or server configuration is required.

## iPad Safari notes

- The layout is responsive and controls have touch-friendly hit areas.
- PNG export uses `HTMLCanvasElement.toBlob()` and a temporary download link.
- If Safari previews the PNG instead of saving it, use the Share button in the preview and choose **Save to Files**.

## Project files

- `index.html` — interface and 1024×1024 canvas
- `style.css` — responsive dark UI
- `app.js` — state, color math, controls, layering, PNG export
- `cosmetics.js` — original canvas vector drawing functions
