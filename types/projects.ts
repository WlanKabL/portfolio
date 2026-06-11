export enum PreviewSlot {
    FIRST = 1,
    SECOND = 2,
    THIRD = 3,
}

/**
 * Each product keeps its own brand identity inside the portfolio gallery.
 * `color` drives accents and the dark showcase panels.
 */
export interface ProjectBrand {
    /** Primary brand color (hex) */
    color: string;
    /** Dark panel background used in showcase sections */
    panel: string;
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
    brand?: ProjectBrand;
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
    brand?: ProjectBrand;
}
