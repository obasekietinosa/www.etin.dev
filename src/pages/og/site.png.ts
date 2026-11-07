import satori from "satori";
import { html } from "satori-html";
import { Resvg } from "@resvg/resvg-js";

import { readFile } from "fs/promises";
import { resolve } from "path";

export const GET = async () => {
  const fontBold = await readFile(
    resolve(process.cwd(), "node_modules/@fontsource/playfair-display/files/playfair-display-latin-700-normal.woff")
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
        background-color: #0E0C0A;
        color: #F4EFE6;
        padding: 36px;
        font-family: 'Playfair Display';
      "
    >
      <div
        style="
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
          border: 2px solid #3A2C1D;
          background-color: #14100D;
          padding: 60px;
        "
      >
        <div
          style="
            font-size: 112px;
            font-weight: bold;
            letter-spacing: -0.03em;
            line-height: 1;
            margin-bottom: 28px;
            display: flex;
          "
        >
          Etin Obaseki.
        </div>
        <div
          style="
            width: 360px;
            height: 4px;
            background-color: #C88A32;
            margin-bottom: 32px;
            display: flex;
          "
        ></div>
        <div
          style="
            font-size: 34px;
            font-weight: normal;
            font-family: 'Inter';
            color: #A39686;
            text-transform: uppercase;
            letter-spacing: 0.14em;
            display: flex;
          "
        >
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
        name: "Playfair Display",
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
