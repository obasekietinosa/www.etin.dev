import satori from "satori";
import { html } from "satori-html";
import { Resvg } from "@resvg/resvg-js";
import { readFile } from "fs/promises";
import { resolve } from "path";

export const GET = async () => {
  // Read the font file from node_modules
  const fontFile = await readFile(
    resolve(process.cwd(), "node_modules/@fontsource/nunito/files/nunito-latin-700-normal.woff")
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
            background-color: #373F51; /* Navy */
            color: #FFF6EA; /* Beige */
            border-radius: 30%; /* Squircle */
            font-family: 'Nunito';
            font-size: 80px;
            font-weight: bold;
            border: 6px solid #FFF6EA;
            box-shadow: 6px 6px 0px #BBB2A7;
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
        name: "Nunito",
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
