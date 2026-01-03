import { getNotes, type Note } from "../../../domains/Notes";
import satori from "satori";
import { html } from "satori-html";
import { Resvg } from "@resvg/resvg-js";
import type { APIRoute } from "astro";

export async function getStaticPaths() {
  const notes = await getNotes();
  return notes.map((note) => ({
    params: { id: note.id.toString() },
    props: { note },
  }));
}

import { readFile } from "fs/promises";
import { resolve } from "path";

export const GET: APIRoute<{ note: Note }> = async ({ props }) => {
  const { note } = props;

  // Read the font file from node_modules
  // We use process.cwd() to ensure we're looking from the project root
  const fontFile = await readFile(
    resolve(process.cwd(), "node_modules/@fontsource/pixelify-sans/files/pixelify-sans-latin-700-normal.woff")
  );

  const fontRegular = await readFile(
    resolve(process.cwd(), "node_modules/@fontsource/space-mono/files/space-mono-latin-400-normal.woff")
  );

  const markup = html`
    <div
      style="
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
        width: 100%;
        background-color: #2D2D2D;
        color: #E0E0E0;
        padding: 40px;
        font-family: 'Pixelify Sans';
      "
    >
      <div style="display: flex; flex-direction: column;">
        <div
            style="
            font-size: 60px;
            font-weight: bold;
            margin-bottom: 20px;
            text-shadow: 4px 4px 0px #000000;
            "
        >
            ${note.title}
        </div>
        <div style="display: flex; gap: 10px; margin-top: 10px;">
             ${note.tags.map((tag) => `
                <div style="
                    background-color: #E0E0E0;
                    color: #2D2D2D;
                    padding: 8px 16px;
                    border-radius: 8px;
                    font-size: 24px;
                    font-weight: bold;
                    box-shadow: 4px 4px 0px #000000;
                    font-family: 'Space Mono';
                ">${tag.name}</div>
             `).join('')}
        </div>
      </div>

      <div style="display: flex; justify-content: space-between; align-items: flex-end;">
        <div style="display: flex; align-items: center;">
             <div style="
                width: 60px;
                height: 60px;
                background-color: #E0E0E0;
                border-radius: 8px;
                margin-right: 20px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 30px;
                font-weight: bold;
                color: #2D2D2D;
                box-shadow: 4px 4px 0px #000000;
             ">E</div>
            <div style="font-size: 30px; font-weight: bold;">Etin Obaseki</div>
        </div>
        <div style="font-size: 24px; opacity: 0.8; font-family: 'Space Mono';">etin.dev</div>
      </div>
    </div>
  `;

  const svg = await satori(markup, {
    width: 1200,
    height: 630,
    fonts: [
      {
        name: "Pixelify Sans",
        data: fontFile,
        weight: 700,
        style: "normal",
      },
      {
        name: "Space Mono",
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
