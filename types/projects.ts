export interface ProjectConfig {
    active: boolean;
    showPreview: boolean;
    image: string;
    link: string;
    github?: string;
    externalLink?: string;
    tech: string[];
    i18nKey: string;
}

export interface LocalizedProject {
    active: boolean;
    showPreview: boolean;
    title: string;
    shortDescription: string;
    description: string;
    extendedTitle?: string;
    extendedText: string;
    image: string;
    link: string;
    github?: string;
    externalLink?: string;
    tech: string[];
}
