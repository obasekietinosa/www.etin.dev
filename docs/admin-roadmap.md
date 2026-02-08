# admin.etin.dev Roadmap

## Current State

The `admin.etin.dev` repository is the administrative dashboard for managing content on the website. It is built with **React**, **TypeScript**, **Vite**, and **TanStack Query**.

Key features implemented include:
- **Authentication**: JWT-based login/logout flow with session persistence (`src/auth`).
- **Data Management**: Forms and list views for Companies, Notes, Projects, Roles, and Tags.
- **Rich Text Editing**: Integration of a Markdown editor (`src/components/MarkdownEditor.tsx`) using **Lexical** (inferred from plugins).
- **Architecture**:
    - **Router**: React Router for navigation (`src/router.tsx`).
    - **API Clients**: Type-safe API wrappers (`src/api`).
    - **Styling**: Tailwind CSS integration.

## Outstanding Functionality & Roadmap

To provide a seamless content management experience, the following enhancements are required:

### 1. Dashboard Implementation
- **Current Status**: The dashboard (`/`) is currently a placeholder.
- **Action Items**:
    - Design and implement a dashboard home page displaying key metrics (e.g., total notes, recent activity, draft status).
    - Add quick-access links to create new content.

### 2. User Interface & Experience
- **Current Status**: Functional but basic.
- **Action Items**:
    - Improve navigation with active states and breadcrumbs for better orientation.
    - Implement a consistent loading state (skeletons or spinners) across all data-fetching components.
    - Add toast notifications for success/error feedback on form submissions.

### 3. Error Handling
- **Current Status**: Basic logging to console on API errors.
- **Action Items**:
    - Implement a global error boundary to catch and display runtime errors gracefully.
    - Display user-friendly error messages on form validation failures or API rejections.

### 4. Enhanced Content Editing
- **Current Status**: Markdown editor exists but lacks advanced features.
- **Action Items**:
    - Add live preview or split-pane view for Markdown editing.
    - Implement drag-and-drop image uploading directly within the editor.
    - Add support for managing post metadata (e.g., SEO fields, slug customization) if not fully covered.

### 5. Testing Strategy
- **Current Status**: Testing setup is minimal.
- **Action Items**:
    - Add unit tests for utility functions and hooks (`src/hooks`).
    - Implement integration tests for critical flows (Login -> Create Note) using tools like React Testing Library or Cypress/Playwright.

### 6. CI/CD Pipeline
- **Current Status**: Needs definition.
- **Action Items**:
    - Configure build scripts for production optimization.
    - Set up automated deployment to a static hosting provider (e.g., Netlify, Vercel, or S3/CloudFront) triggered by GitHub Actions.
