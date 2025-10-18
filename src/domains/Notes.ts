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

export const getNotes = async (): Promise<Note[]> => {
  try {
    const payload = await fetchFromApi<Note[] | { data?: Note[] }>(
      "/public/v1/notes"
    );
    return unwrapDataArray<Note>(payload);
  } catch (error) {
    logApiError("Unable to load notes", error);
    throw error;
  }
};
