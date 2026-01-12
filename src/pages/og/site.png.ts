import satori from "satori";
import { html } from "satori-html";
import { Resvg } from "@resvg/resvg-js";

import { readFile } from "fs/promises";
import { resolve } from "path";

export const GET = async () => {
  const fontBold = await readFile(
    resolve(process.cwd(), "node_modules/@fontsource/inter-tight/files/inter-tight-latin-700-normal.woff")
  );

  const fontRegular = await readFile(
    resolve(process.cwd(), "node_modules/@fontsource/inter/files/inter-latin-400-normal.woff")
  );

  const markup = html`
    <div
      style="
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
        background-color: #0A0A0A;
        color: #FAFAFA;
        padding: 40px;
        font-family: 'Inter Tight';
      "
    >
        <div style="display: flex; flex-direction: column; align-items: center; padding: 60px;">
            <div
                style="
                font-size: 120px;
                font-weight: bold;
                letter-spacing: -0.06em;
                line-height: 1;
                margin-bottom: 20px;
                display: flex;
                "
            >
                Etin Obaseki
            </div>
            <div style="
                width: 100%;
                height: 8px;
                background-color: #FF3D00;
                margin-bottom: 40px;
                display: flex;
            "></div>
            <div style="font-size: 40px; font-weight: normal; font-family: 'Inter'; color: #737373; text-transform: uppercase; letter-spacing: 0.1em; display: flex;">
                Software Engineer
            </div>
        </div>
    </div>
  `;

  const svg = await satori(markup, {
    width: 1200,
    height: 630,
    fonts: [
      {
        name: "Inter Tight",
        data: fontBold,
        weight: 700,
        style: "normal",
      },
       {
        name: "Inter",
        data: fontRegular,
        weight: 400,
        style: "normal",
      },
    ],
  });

  const resvg = new Resvg(svg);
  const pngData = resvg.render();
  const pngBuffer = pngData.asPng();

  return new Response(pngBuffer as any, {
    headers: {
      "Content-Type": "image/png",
    },
  });
};
