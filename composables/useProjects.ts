import { getProjects } from "~/data/projects";

/**
 * Reactive composable for project data that automatically updates with locale changes
 * This ensures all project content switches languages immediately without manual reactive handling
 */
export function useProjects() {
    const { t } = useI18n();

    // Return reactive computed projects that automatically update when locale changes
    const projects = computed(() => getProjects(t));

    // Filter functions for common use cases
    const activeProjects = computed(() => projects.value.filter((p) => p.active));
    const featuredProjects = computed(() =>
        projects.value.filter((p) => p.active && p.showPreview).slice(0, 3),
    );

    return {
        projects: projects,
        activeProjects: activeProjects,
        featuredProjects: featuredProjects,
    };
}
