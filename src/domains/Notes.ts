import { API_ENDPOINTS, fetchFromApi, logApiError } from "../utils/api";
import type { Tag } from "./Tags";

export type RelatedItem = {
  id: number;
  title: string;
  type: string;
  slug: string;
};

export type Note = {
  id: number;
  publishedAt: string;
  title: string;
  slug: string;
  preview: string;
  body: string;
  isFeatured: boolean;
  tags: Tag[];
  relatedItems?: RelatedItem[];
  relatedNotes?: Note[];
};

type NotesResponse = { notes?: Note[] };
type NoteResponse = { note: Note };

export const getNotes = async (): Promise<Note[]> => {
  try {
    const payload = await fetchFromApi<NotesResponse>(API_ENDPOINTS.notes);
    return payload.notes ?? [];
  } catch (error) {
    logApiError("Unable to load notes", error);
    throw error;
  }
};

export const getNote = async (slug: string): Promise<Note> => {
  try {
    const payload = await fetchFromApi<NoteResponse>(`${API_ENDPOINTS.notes}/${slug}`);
    return payload.note;
  } catch (error) {
    logApiError(`Unable to load note with slug: ${slug}`, error);
    throw error;
  }
};
