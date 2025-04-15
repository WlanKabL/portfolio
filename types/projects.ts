export interface Project {
    active: boolean;
    showPreview: boolean;
    title: string;
    shortDescription: string;
    description: string;
    image: string;
    link: string;
    github?: string;
    tech: string[];
    externalLink?: string;
    extendedTitle?: string;
    extendedText: string;
}
