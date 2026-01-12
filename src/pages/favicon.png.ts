import satori from "satori";
import { html } from "satori-html";
import { Resvg } from "@resvg/resvg-js";
import { readFile } from "fs/promises";
import { resolve } from "path";

export const GET = async () => {
  // Read the font file from node_modules (Inter Tight Bold for new look)
  const fontFile = await readFile(
    resolve(process.cwd(), "node_modules/@fontsource/inter-tight/files/inter-tight-latin-700-normal.woff")
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
            background-color: #0A0A0A; /* Dark Background */
            color: #FAFAFA; /* Light Text */
            font-family: 'Inter Tight';
            font-size: 80px;
            font-weight: 700;
            border: 0px;
            position: relative;
        "
      >
        <span>E</span>
        <div style="position: absolute; bottom: 20px; width: 60%; height: 8px; background-color: #FF3D00; display: flex;"></div>
      </div>
    </div>
  `;

  const svg = await satori(markup, {
    width: 128,
    height: 128,
    fonts: [
      {
        name: "Inter Tight",
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
