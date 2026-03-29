# api.etin.dev Roadmap

To support the "Hobbies" feature on the personal website, the backend API requires updates to the `projects` table and related handlers.

## Database Migration

1.  **Add `category` column to `projects` table.**
    -   This column will distinguish between "projects" (work/portfolio) and "hobbies" (personal interests).
    -   Default value: `'project'`.
    -   SQL:
        ```sql
        ALTER TABLE projects ADD COLUMN IF NOT EXISTS category text NOT NULL DEFAULT 'project';
        ```

## Code Changes

### 1. Update Project Model (`internal/data/projects.go`)

-   **Struct:** Add `Category string` to the `Project` struct.
    ```go
    type Project struct {
        // ... existing fields
        Category string `json:"category"`
    }
    ```
-   **Insert/Update/Scan:** Update the `Insert`, `Update`, and `Scan` methods in `ProjectModel` to include the `category` field in SQL queries.
-   **GetAll:** Ensure `GetAll` selects and returns the `category` field.

### 2. Update API Handlers (`cmd/api/handler_projects.go` & `cmd/api/handler_public.go`)

-   **Create/Update Handler:** Update the request payload struct in `createProjectHandler` and `updateProjectHandler` to accept an optional `category` field.
-   **Public Response:** Update the `publicProject` struct in `handler_public.go` to include the `category` field so the frontend can filter projects based on it.

### 3. Create Seeder Script (`cmd/seeder/main.go`)

-   Create a new seeder script to populate the database with initial data for local development.
-   This script should insert:
    -   A sample Company.
    -   A sample Role linked to the company.
    -   A sample Project with category `'project'`.
    -   A sample Hobby with category `'hobby'`.
    -   A sample Note.
