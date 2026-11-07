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
    resolve(process.cwd(), "node_modules/@fontsource/playfair-display/files/playfair-display-latin-700-normal.woff")
  );

  const fontRegular = await readFile(
    resolve(process.cwd(), "node_modules/@fontsource/inter/files/inter-latin-400-normal.woff")
  );

  // Igun Foundry Design for OG Note Images
  const markup = html`
    <div
      style="
        display: flex;
        flex-direction: column;
        justify-content: space-between;
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
          justify-content: space-between;
          height: 100%;
          width: 100%;
          background-color: #14100D;
          border: 2px solid #3A2C1D;
          padding: 64px;
        "
      >
        <div style="display: flex; flex-direction: column;">
          <div style="
              width: 120px;
              height: 6px;
              background-color: #C88A32;
              margin-bottom: 36px;
              display: flex;
          "></div>
          <div
              style="
              font-size: 72px;
              font-weight: bold;
              line-height: 1.1;
              margin-bottom: 28px;
              letter-spacing: -0.02em;
              display: flex;
              "
          >
              ${note.title}
          </div>
          <div style="display: flex; gap: 16px; margin-top: 10px;">
               ${note.tags.map((tag) => `
                  <div style="
                      color: #7CC4AC;
                      background-color: #162621;
                      border: 1px solid #3E6B5C;
                      padding: 6px 16px;
                      font-size: 20px;
                      font-family: 'Inter';
                      text-transform: uppercase;
                      letter-spacing: 0.12em;
                      display: flex;
                  ">#${tag.name}</div>
               `).join('')}
          </div>
        </div>

        <div style="display: flex; justify-content: space-between; align-items: flex-end; border-top: 1px solid #261D14; padding-top: 24px;">
          <div style="display: flex; align-items: center;">
              <div style="font-size: 32px; font-weight: bold; color: #F4EFE6; display: flex;">Etin Obaseki</div>
          </div>
          <div style="font-size: 22px; color: #C88A32; font-family: 'Inter'; letter-spacing: 0.12em; display: flex;">etin.dev</div>
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
