import { API_ENDPOINTS, fetchFromApi, logApiError } from "../utils/api";
import type { Tag } from "./Tags";

export type Note = {
  id: number;
  publishedAt: string;
  title: string;
  slug: string;
  preview: string;
  body: string;
  isFeatured: boolean;
  tags: Tag[];
};

type NotesResponse = { notes?: Note[] };

export const getNotes = async (): Promise<Note[]> => {
  try {
    const payload = await fetchFromApi<NotesResponse>(API_ENDPOINTS.notes);
    return payload.notes ?? [];
  } catch (error) {
    logApiError("Unable to load notes", error);
    throw error;
  }
};
