# admin.etin.dev Roadmap

To enable content management for Hobbies, the admin portal requires updates to the `projects` section.

## Code Changes

### 1. Update API Client (`src/api/projects.ts`)

-   **Types:** Update `Project` and `ProjectInput` interfaces to include `category: string`.
    ```typescript
    export interface Project {
        // ... existing fields
        category: string
    }
    ```

### 2. Update Project Form (`src/routes/projects/ProjectForm.tsx`)

-   **Add Category Dropdown:**
    -   Add a `<select>` field for `category`.
    -   Options: `Project` (value: `'project'`), `Hobby` (value: `'hobby'`).
-   **Initial Values:** Ensure the `category` defaults to `'project'` for new items.
-   **Payload:** Include `category` in the payload sent to the API.

### 3. Update Project List (`src/routes/projects/ProjectsListPage.tsx`)

-   **Table Column:** Add a "Category" column to the projects list table.
-   **Display:** Show the category (capitalized) for each row.
-   **(Optional):** Add filtering capabilities to view only projects or only hobbies.

### 4. Update Edit Page (`src/routes/projects/EditProjectPage.tsx`)

-   **Pass Category:** Ensure the category is correctly passed from the API response into the `ProjectForm` initial values.
