import {
  API_ENDPOINTS,
  fetchFromApi,
  logApiError,
  unwrapDataArray,
} from "../utils/api";
import type { Tag } from "./Tags";

export type Project = {
  id: number;
  startDate: string;
  endDate: string | null;
  title: string;
  image: string;
  slug: string;
  status: Tag;
  description: string;
  technologies: string[];
};

export const getProjects = async (): Promise<Project[]> => {
  try {
    const payload = await fetchFromApi<Project[] | { data?: Project[] }>(
      API_ENDPOINTS.projects
    );
    return unwrapDataArray<Project>(payload);
  } catch (error) {
    logApiError("Unable to load projects", error);
    throw error;
  }
};
