import type { LucideIcon } from "lucide-react";
import { Briefcase, Cpu, User } from "lucide-react";

export type TeamMemberRole = "ceo" | "lead" | "consultant";

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  roleKey: string;
  focus: string;
  skills: [string, string, string];
  certifications: string;
  english?: string;
  usClientsRemote?: boolean;
  stack?: string; // For Hugo - tech stack
  icon: LucideIcon;
}

export const getTeamMembers = (t: (key: string) => string): TeamMember[] => [
  {
    id: "julio",
    name: "Julio",
    role: t("team.julio.role"),
    roleKey: "julio",
    focus: t("team.julio.focus"),
    skills: [
      t("team.julio.skills.0"),
      t("team.julio.skills.1"),
      t("team.julio.skills.2"),
    ],
    certifications: t("team.julio.certifications"),
    icon: Briefcase,
  },
  {
    id: "hugo",
    name: "Hugo",
    role: t("team.hugo.role"),
    roleKey: "hugo",
    focus: t("team.hugo.focus"),
    skills: [
      t("team.hugo.skills.0"),
      t("team.hugo.skills.1"),
      t("team.hugo.skills.2"),
    ],
    certifications: t("team.hugo.certifications"),
    stack: t("team.hugo.stack"),
    usClientsRemote: true,
    english: "Fluent",
    icon: Cpu,
  },
  {
    id: "maria",
    name: "María",
    role: t("team.maria.role"),
    roleKey: "maria",
    focus: t("team.maria.focus"),
    skills: [
      t("team.maria.skills.0"),
      t("team.maria.skills.1"),
      t("team.maria.skills.2"),
    ],
    certifications: t("team.maria.certifications"),
    usClientsRemote: true,
    english: "Advanced",
    icon: User,
  },
  {
    id: "carlos",
    name: "Carlos",
    role: t("team.carlos.role"),
    roleKey: "carlos",
    focus: t("team.carlos.focus"),
    skills: [
      t("team.carlos.skills.0"),
      t("team.carlos.skills.1"),
      t("team.carlos.skills.2"),
    ],
    certifications: t("team.carlos.certifications"),
    usClientsRemote: true,
    english: "Fluent",
    icon: User,
  },
  {
    id: "ana",
    name: "Ana",
    role: t("team.ana.role"),
    roleKey: "ana",
    focus: t("team.ana.focus"),
    skills: [
      t("team.ana.skills.0"),
      t("team.ana.skills.1"),
      t("team.ana.skills.2"),
    ],
    certifications: t("team.ana.certifications"),
    usClientsRemote: true,
    english: "Advanced",
    icon: User,
  },
  {
    id: "diego",
    name: "Diego",
    role: t("team.diego.role"),
    roleKey: "diego",
    focus: t("team.diego.focus"),
    skills: [
      t("team.diego.skills.0"),
      t("team.diego.skills.1"),
      t("team.diego.skills.2"),
    ],
    certifications: t("team.diego.certifications"),
    usClientsRemote: true,
    english: "Fluent",
    icon: User,
  },
];
