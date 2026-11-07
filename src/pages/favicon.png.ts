import satori from "satori";
import { html } from "satori-html";
import { Resvg } from "@resvg/resvg-js";
import { readFile } from "fs/promises";
import { resolve } from "path";

export const GET = async () => {
  const fontFile = await readFile(
    resolve(process.cwd(), "node_modules/@fontsource/playfair-display/files/playfair-display-latin-700-normal.woff")
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
            background-color: #0E0C0A;
            color: #F4EFE6;
            font-family: 'Playfair Display';
            font-size: 80px;
            font-weight: 700;
            border: 4px solid #3A2C1D;
            position: relative;
        "
      >
        <span>E</span>
        <div style="position: absolute; bottom: 18px; width: 56%; height: 6px; background-color: #C88A32; display: flex;"></div>
      </div>
    </div>
  `;

  const svg = await satori(markup, {
    width: 128,
    height: 128,
    fonts: [
      {
        name: "Playfair Display",
        data: fontFile,
        weight: 700,
        style: "normal",
      },
    ],
  });

  const resvg = new Resvg(svg, {
    fitTo: { mode: "width", value: 128 },
  });
  const pngData = resvg.render();
  const pngBuffer = pngData.asPng();

  return new Response(pngBuffer as any, {
    headers: {
      "Content-Type": "image/png",
    },
  });
};
