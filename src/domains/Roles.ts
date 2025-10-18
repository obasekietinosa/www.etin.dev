import { fetchFromApi, logApiError, unwrapDataArray } from "../utils/api";

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
};

export const formatRoleDate = (isoDateString: string) => {
  const date = new Date(isoDateString);
  return date.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
  });
};

export const getRoles = async (): Promise<Role[]> => {
  try {
    const payload = await fetchFromApi<Role[] | { data?: Role[] }>(
      "/public/v1/roles"
    );
    return unwrapDataArray<Role>(payload);
  } catch (error) {
    logApiError("Unable to load roles", error);
    throw error;
  }
};
