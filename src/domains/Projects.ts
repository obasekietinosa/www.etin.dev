import { fetchFromApi, logApiError, unwrapDataArray } from "../utils/api";
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

export const PROJECTS: Project[] = [
  {
    id: 1,
    startDate: "2024-07-19T20:22:24.479Z",
    endDate: null,
    title: "Rank Music — Social music ranking",
    image: "https://picsum.photos/300/200",
    slug: "rank-music",
    status: {
      icon: "🫀",
      name: "In Progress",
      color: "green",
    },
    description:
      "Choose your top ten songs from your favourite artiste and compare that to other peoples likes.",
    technologies: ["React", "Golang"],
  },

  {
    id: 2,
    startDate: "2020-07-19T20:22:24.479Z",
    endDate: "2022-07-19T20:22:24.479Z",
    title: "TrivYeah",
    image: "https://picsum.photos/300/200",
    slug: "trivyeah",
    status: {
      icon: "💀",
      name: "Abandoned",
      color: "red",
    },
    description:
      "Everything is a form. Or so the saying went when I decided to build this. Inspired by agency work I did with a couple of friends over at WeTalkSound, we were going to build the engine for Trivias. Never quite got going, but it was interesting.",
    technologies: ["React", "Golang"],
  },
];

export const getProjects = async (): Promise<Project[]> => {
  try {
    const payload = await fetchFromApi<Project[] | { data?: Project[] }>(
      "/projects"
    );
    const projects = unwrapDataArray<Project>(payload);

    if (projects.length) {
      return projects;
    }
  } catch (error) {
    logApiError("Unable to load projects", error);
  }

  return PROJECTS;
};
