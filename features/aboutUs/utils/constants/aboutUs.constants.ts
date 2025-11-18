export interface Certification {
  id: string;
  provider: string;
  name: string;
  type: string;
  imageUrl: string;
}

export interface Experience {
  id: string;
  company: string;
  logoUrl: string;
}

export const CERTIFICATIONS: Certification[] = [
  {
    id: "aws-advanced-networking",
    provider: "AWS",
    name: "Advanced Networking",
    type: "SPECIALTY",
    imageUrl: "https://placehold.co/200x200/6A00F4/FFFFFF?text=AWS+Networking",
  },
  {
    id: "aws-security",
    provider: "AWS",
    name: "Security",
    type: "SPECIALTY",
    imageUrl: "https://placehold.co/200x200/6A00F4/FFFFFF?text=AWS+Security",
  },
  {
    id: "azure-administrator",
    provider: "Microsoft",
    name: "Azure Administrator",
    type: "ASSOCIATE",
    imageUrl: "https://placehold.co/200x200/0078D4/FFFFFF?text=Azure+Admin",
  },
  {
    id: "aws-solutions-architect",
    provider: "AWS",
    name: "Solutions Architect",
    type: "PROFESSIONAL",
    imageUrl: "https://placehold.co/200x200/6A00F4/FFFFFF?text=AWS+Architect",
  },
  {
    id: "azure-developer",
    provider: "Microsoft",
    name: "Azure Developer",
    type: "ASSOCIATE",
    imageUrl: "https://placehold.co/200x200/0078D4/FFFFFF?text=Azure+Dev",
  },
];

export const EXPERIENCE: Experience[] = [
  {
    id: "tigo",
    company: "Tigo",
    logoUrl: "https://placehold.co/200x100/000000/FFFFFF?text=TIGO",
  },
  {
    id: "3pillar",
    company: "3Pillar Global",
    logoUrl: "https://placehold.co/200x100/0066CC/FFFFFF?text=3PILLAR",
  },
  {
    id: "millicom",
    company: "Millicom",
    logoUrl: "https://placehold.co/200x100/000000/FFFFFF?text=MILLICOM",
  },
  {
    id: "company-4",
    company: "Company 4",
    logoUrl: "https://placehold.co/200x100/6A00F4/FFFFFF?text=Company+4",
  },
  {
    id: "company-5",
    company: "Company 5",
    logoUrl: "https://placehold.co/200x100/6A00F4/FFFFFF?text=Company+5",
  },
];

