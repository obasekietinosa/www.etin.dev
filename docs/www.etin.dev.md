# www.etin.dev Roadmap

To display the "Hobbies" feature on the website, the existing "Projects" functionality will be extended to distinguish between work/portfolio items and hobbies.

## Code Changes

### 1. Update Domain Model (`src/domains/Projects.ts`)

-   **Type:** Update the `Project` type definition to include the `category: string` field.
    ```typescript
    export type Project = {
        // ... existing fields
        category: string;
    };
    ```

### 2. Create Hobbies Page (`src/pages/hobbies.astro`)

-   **Route:** `/hobbies`
-   **Functionality:**
    -   Fetch all projects using `getProjects()`.
    -   Filter projects where `category === 'hobby'`.
    -   Render the list using the `ProjectPreview` component.
    -   Add a header/hero section for the page.

### 3. Update Projects Page (`src/pages/projects.astro`)

-   **Functionality:**
    -   Update the existing projects page to filter out hobbies.
    -   Show only projects where `category !== 'hobby'` (or `category === 'project'`).

### 4. Update Homepage (`src/pages/index.astro`)

-   **Hobbies Section:**
    -   Add a new section for Hobbies, similar to the existing "Selected Work" section.
    -   Filter and display the latest 3-5 hobbies.
    -   Add a "View all hobbies" button linking to `/hobbies`.
-   **Projects Section:**
    -   Update the existing "Selected Work" section to only show projects where `category !== 'hobby'`.
