import sharp from "sharp";
import pngToIco from "png-to-ico";
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, "..", "public");
const svg = readFileSync(join(publicDir, "favicon.svg"));

const sizes = [16, 32, 48, 180];

const pngBuffers = await Promise.all(
  sizes.map((size) =>
    sharp(svg)
      .resize(size, size, { fit: "contain", background: "#0a0e14" })
      .png()
      .toBuffer(),
  ),
);

writeFileSync(join(publicDir, "apple-touch-icon.png"), pngBuffers[3]);

const icoBuffer = await pngToIco(
  await Promise.all(
    [16, 32, 48].map((size) =>
      sharp(svg)
        .resize(size, size, { fit: "contain", background: "#0a0e14" })
        .png()
        .toBuffer(),
    ),
  ),
);

writeFileSync(join(publicDir, "favicon.ico"), icoBuffer);

console.log("Generated apple-touch-icon.png and favicon.ico");
