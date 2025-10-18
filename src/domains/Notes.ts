import { fetchFromApi, logApiError, unwrapDataArray } from "../utils/api";
import type { Tag } from "./Tags";

export type Note = {
  id: number;
  publishedAt: string;
  title: string;
  preview: string;
  body: string;
  isFeatured: boolean;
  tags: Tag[];
};

export const NOTES: Note[] = [
  {
    id: 1,
    publishedAt: "2024-07-19T20:22:24.479Z",
    title: "The case for bad interfaces",
    preview:
      "When writing code, especially that will be consumed by other engineers, common wisdom is to make a simple, clear interface. Here, I make the argument for the opposite, the case for bad interfaces.",
    body: "When writing code, especially that will be consumed by other engineers, common wisdom is to make a simple, clear interface. Here, I make the argument for the opposite, the case for bad interfaces.",
    isFeatured: true,
    tags: [
      {
        icon: "🧮",
        name: "Software",
        color: "green",
      },
      {
        icon: "🧐",
        name: "Philosophy",
        color: "blue",
      },
    ],
  },
  {
    id: 1,
    publishedAt: "2024-07-19T20:22:24.479Z",
    title: "Regret minimisation in software engineering",
    preview:
      "Regret minimisation, the mental model popularised by Jeff Bezos. Can it be applied to software engineering? Maybe, but I'd like to write about why you shouldn't try too hard to not write throwaway code (aka regret work",
    body: "Regret minimisation, the mental model popularised by Jeff Bezos. Can it be applied to software engineering? Maybe, but I'd like to write about why you shouldn't try too hard to not write throwaway code (aka regret work",
    isFeatured: true,
    tags: [
      {
        icon: "🧮",
        name: "Software",
        color: "green",
      },
      {
        icon: "🧠",
        name: "Product Thinking",
        color: "beige",
      },
    ],
  },
];

export const getNotes = async (): Promise<Note[]> => {
  try {
    const payload = await fetchFromApi<Note[] | { data?: Note[] }>(
      "/public/notes"
    );
    const notes = unwrapDataArray<Note>(payload);

    if (notes.length) {
      return notes;
    }
  } catch (error) {
    logApiError("Unable to load notes", error);
  }

  return NOTES;
};
