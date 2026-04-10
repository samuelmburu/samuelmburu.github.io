import { readFileSync } from "node:fs";
import { parse } from "yaml";

type ResumeProfile = {
  name: string;
  headline: string;
  level: string;
  location: string;
  contact: {
    email: string;
    linkedin: string;
    github: string;
  };
  summary: string;
};

type ResumeExperience = {
  company: string;
  title: string;
  scope?: string;
  start: string;
  end: string;
  summary: string;
  highlights: string[];
  impact: string;
};

type ResumeData = {
  profile: ResumeProfile;
  core_strengths: string[];
  experience: ResumeExperience[];
  technologies: string[];
};

const raw = readFileSync(new URL("./resume.yaml", import.meta.url), "utf-8");
const resume = parse(raw) as ResumeData;

const monthFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});

function formatMonth(value: string) {
  return monthFormatter.format(new Date(`${value}-01T00:00:00Z`));
}

export const profile = resume.profile;
export const strengths = resume.core_strengths;
export const technologies = resume.technologies;

export const socialLinks = [
  // { label: "Email", href: `mailto:${profile.contact.email}` },
  { label: "LinkedIn", href: profile.contact.linkedin },
  { label: "GitHub", href: profile.contact.github },
];

export const stats = [
  { value: "16+", label: "years shipping frontend systems" },
  { value: "0→1", label: "frontend architecture built from scratch" },
  { value: "Staff+", label: "scope across product, platform, and org" },
];

export const timeline = resume.experience.map((entry) => ({
  period: `${formatMonth(entry.start)} – ${formatMonth(entry.end)}`,
  role: entry.title,
  company: entry.company,
  scope: entry.scope ?? "",
  summary: entry.summary,
  highlights: entry.highlights,
  impact: entry.impact,
}));
