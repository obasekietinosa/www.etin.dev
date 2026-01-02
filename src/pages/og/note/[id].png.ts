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
        justify-content: space-between;
        height: 100%;
        width: 100%;
        background-color: #373F51;
        color: #FFF6EA;
        padding: 40px;
        font-family: 'Nunito';
      "
    >
      <div style="display: flex; flex-direction: column;">
        <div
            style="
            font-size: 60px;
            font-weight: bold;
            margin-bottom: 20px;
            text-shadow: 4px 4px 0px #BBB2A7;
            "
        >
            ${note.title}
        </div>
        <div style="display: flex; gap: 10px; margin-top: 10px;">
             ${note.tags.map((tag) => `
                <div style="
                    background-color: #FFF6EA;
                    color: #373F51;
                    padding: 8px 16px;
                    border-radius: 9999px;
                    font-size: 24px;
                    font-weight: bold;
                    box-shadow: 0px 4px 0px #BBB2A7;
                ">${tag.name}</div>
             `).join('')}
        </div>
      </div>

      <div style="display: flex; justify-content: space-between; align-items: flex-end;">
        <div style="display: flex; align-items: center;">
             <div style="
                width: 60px;
                height: 60px;
                background-color: #FFF6EA;
                border-radius: 50%;
                margin-right: 20px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 30px;
                font-weight: bold;
                color: #373F51;
             ">E</div>
            <div style="font-size: 30px; font-weight: bold;">Etin Obaseki</div>
        </div>
        <div style="font-size: 24px; opacity: 0.8;">etin.dev</div>
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
