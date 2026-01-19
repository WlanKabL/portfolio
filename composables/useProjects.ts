import { getProjects } from "~/data/projects";

/**
 * Reactive composable for project data that automatically updates with locale changes
 * This ensures all project content switches languages immediately without manual reactive handling
 */
export function useProjects() {
    const { t } = useI18n();

    // Return reactive computed projects that automatically update when locale changes
    const projects = computed(() => getProjects(t));

    // Filter active projects sorted by lastChangedAt (newest first)
    const activeProjects = computed(() =>
        projects.value
            .filter((p) => p.active)
            .sort(
                (a, b) => new Date(b.lastChangedAt).getTime() - new Date(a.lastChangedAt).getTime(),
            ),
    );

    // Get the featured project (single project marked as featured)
    const featuredProject = computed(() => projects.value.find((p) => p.active && p.featured));

    // Get preview projects sorted by previewSlot
    const previewProjects = computed(() =>
        projects.value
            .filter((p) => p.active && p.previewSlot !== undefined)
            .sort((a, b) => (a.previewSlot ?? 999) - (b.previewSlot ?? 999)),
    );

    return {
        projects,
        activeProjects,
        featuredProject,
        previewProjects,
    };
}
