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

export const ROLES: Role[] = [
  {
    roleId: 2,
    startDate: "2024-07-19T20:22:24.479Z",
    endDate: null,
    title: "Technical Lead",
    subtitle: "Content Management",
    company: "Accurx",
    companyIcon: "/accurx.png",
    slug: "tech-lead-accurx-w87xbv9402",
    description:
      "I'm currently technical lead for the Content Management team at Accurx. Our remit involves maintaining a broad spectrum of existing functionality as well as evolving...",
    skills: ["JavaScript", "React", "Typescript", "C#"],
  },
  {
    roleId: 1,
    startDate: "2023-10-05T20:22:24.479Z",
    endDate: "2024-04-19T20:22:24.479Z",
    title: "Senior Software Engineer",
    subtitle: null,
    company: "Accurx",
    companyIcon: "/accurx.png",
    slug: "senior-software-engineer-accurx-28cbv3499",
    description:
      "As a senior product engineer I was trusted to own the frontend of patient triage, successfully planning and implementing the first version of our automated translation...",
    skills: ["JavaScript", "React", "Typescript", "C#"],
  },
];

export const getRoles = async (): Promise<Role[]> => {
  try {
    const payload = await fetchFromApi<Role[] | { data?: Role[] }>(
      "/public/roles"
    );
    const roles = unwrapDataArray<Role>(payload);

    if (roles.length) {
      return roles;
    }
  } catch (error) {
    logApiError("Unable to load roles", error);
  }

  return ROLES;
};
