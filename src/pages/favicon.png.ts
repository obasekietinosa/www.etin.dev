import satori from "satori";
import { html } from "satori-html";
import { Resvg } from "@resvg/resvg-js";
import { readFile } from "fs/promises";
import { resolve } from "path";

export const GET = async () => {
  // Read the font file from node_modules
  const fontFile = await readFile(
    resolve(process.cwd(), "node_modules/@fontsource/pixelify-sans/files/pixelify-sans-latin-700-normal.woff")
  );

  const markup = html`
    <div
      style="
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;
        background-color: transparent;
      "
    >
      <div
        style="
            display: flex;
            align-items: center;
            justify-content: center;
            width: 128px;
            height: 128px;
            background-color: #2D2D2D; /* Retro Console Grey */
            color: #E0E0E0; /* Light Text */
            border-radius: 16px; /* Rounded Corners */
            font-family: 'Pixelify Sans';
            font-size: 80px;
            font-weight: bold;
            border: 4px solid #E0E0E0;
            box-shadow: 8px 8px 0px #000000; /* Chunky Shadow */
        "
      >
        E
      </div>
    </div>
  `;

  const svg = await satori(markup, {
    width: 150, // Slightly larger canvas to account for shadow
    height: 150,
    fonts: [
      {
        name: "Pixelify Sans",
        data: fontFile,
        weight: 700,
        style: "normal",
      },
    ],
  });

  const resvg = new Resvg(svg, {
    fitTo: { mode: "width", value: 150 },
  });
  const pngData = resvg.render();
  const pngBuffer = pngData.asPng();

  return new Response(pngBuffer as any, {
    headers: {
      "Content-Type": "image/png",
    },
  });
};
