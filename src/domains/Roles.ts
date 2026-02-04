import { API_ENDPOINTS, fetchFromApi, logApiError } from "../utils/api";
import type { Note } from "./Notes";

export type Role = {
  roleId: number;
  startDate: string;
  endDate: string | null;
  title: string;
  subtitle: string | null;
  company: string;
  companyIcon: string;
  slug: string;
  description: string;
  skills: string[];
  notes: Note[];
};

export const formatRoleDate = (isoDateString: string) => {
  const date = new Date(isoDateString);
  return date.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
  });
};

type RolesResponse = { roles?: Role[] };

export const getRoles = async (): Promise<Role[]> => {
  try {
    const payload = await fetchFromApi<RolesResponse>(API_ENDPOINTS.roles);
    return payload.roles ?? [];
  } catch (error) {
    logApiError("Unable to load roles", error);
    throw error;
  }
};
