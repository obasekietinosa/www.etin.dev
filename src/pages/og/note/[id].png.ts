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

  const fontBold = await readFile(
    resolve(process.cwd(), "node_modules/@fontsource/inter-tight/files/inter-tight-latin-700-normal.woff")
  );

  const fontRegular = await readFile(
    resolve(process.cwd(), "node_modules/@fontsource/inter/files/inter-latin-400-normal.woff")
  );

  // Bold Typography Design for OG Images
  // Dark background, white text, vermillion accent
  const markup = html`
    <div
      style="
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
        width: 100%;
        background-color: #0A0A0A;
        color: #FAFAFA;
        padding: 80px;
        font-family: 'Inter Tight';
      "
    >
      <div style="display: flex; flex-direction: column;">
        <div style="
            width: 100px;
            height: 8px;
            background-color: #FF3D00;
            margin-bottom: 40px;
            display: flex;
        "></div>
        <div
            style="
            font-size: 80px;
            font-weight: bold;
            line-height: 1.1;
            margin-bottom: 30px;
            letter-spacing: -0.04em;
            display: flex;
            "
        >
            ${note.title}
        </div>
        <div style="display: flex; gap: 20px; margin-top: 10px;">
             ${note.tags.map((tag) => `
                <div style="
                    color: #737373;
                    font-size: 24px;
                    font-family: 'Inter';
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    display: flex;
                ">#${tag.name}</div>
             `).join('')}
        </div>
      </div>

      <div style="display: flex; justify-content: space-between; align-items: flex-end;">
        <div style="display: flex; align-items: center;">
            <div style="font-size: 32px; font-weight: bold; color: #FAFAFA; display: flex;">Etin Obaseki</div>
        </div>
        <div style="font-size: 24px; color: #737373; font-family: 'Inter'; display: flex;">etin.dev</div>
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
