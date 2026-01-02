import satori from "satori";
import { html } from "satori-html";
import { Resvg } from "@resvg/resvg-js";

import { readFile } from "fs/promises";
import { resolve } from "path";

export const GET = async () => {
  // Read the font file from node_modules
  // We use process.cwd() to ensure we're looking from the project root
  const fontFile = await readFile(
    resolve(process.cwd(), "node_modules/@fontsource/nunito/files/nunito-latin-700-normal.woff")
  );

  const fontRegular = await readFile(
    resolve(process.cwd(), "node_modules/@fontsource/nunito/files/nunito-latin-400-normal.woff")
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
        background-color: #373F51;
        color: #FFF6EA;
        padding: 40px;
        font-family: 'Nunito';
      "
    >
        <div style="display: flex; flex-direction: column; align-items: center; border: 4px solid #FFF6EA; padding: 60px; border-radius: 20px; box-shadow: 10px 10px 0px #BBB2A7;">
            <div
                style="
                font-size: 80px;
                font-weight: bold;
                margin-bottom: 20px;
                text-shadow: 6px 6px 0px #BBB2A7;
                "
            >
                Etin Obaseki
            </div>
            <div style="font-size: 40px; font-weight: normal; margin-top: 10px;">
                Software Engineer
            </div>
            <div style="
                margin-top: 40px;
                background-color: #FFF6EA;
                color: #373F51;
                padding: 10px 30px;
                border-radius: 9999px;
                font-size: 30px;
                font-weight: bold;
                box-shadow: 0px 6px 0px #BBB2A7;
            ">
                etin.dev
            </div>
        </div>
    </div>
  `;

  const svg = await satori(markup, {
    width: 1200,
    height: 630,
    fonts: [
      {
        name: "Nunito",
        data: fontFile,
        weight: 700,
        style: "normal",
      },
       {
        name: "Nunito",
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
