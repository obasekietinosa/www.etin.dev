import { API_ENDPOINTS, fetchFromApi, logApiError } from "../utils/api";
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

type ProjectsResponse = { projects?: Project[] };

export const getProjects = async (): Promise<Project[]> => {
  try {
    const payload = await fetchFromApi<ProjectsResponse>(API_ENDPOINTS.projects);
    return payload.projects ?? [];
  } catch (error) {
    logApiError("Unable to load projects", error);
    throw error;
  }
};
