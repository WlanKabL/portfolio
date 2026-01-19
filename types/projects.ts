export enum PreviewSlot {
    FIRST = 1,
    SECOND = 2,
    THIRD = 3,
}

export interface ProjectConfig {
    active: boolean;
    featured?: boolean;
    previewSlot?: PreviewSlot;
    lastChangedAt: string; // ISO date string for sorting
    image: string;
    link: string;
    github?: string;
    externalLink?: string;
    tech: string[];
    i18nKey: string;
}

export interface LocalizedProject {
    active: boolean;
    featured?: boolean;
    previewSlot?: PreviewSlot;
    lastChangedAt: string;
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
