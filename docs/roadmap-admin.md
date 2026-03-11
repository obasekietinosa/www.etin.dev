# Admin Portal Roadmap

## Current State

The `admin.etin.dev` repository is a React Single Page Application (SPA) built with Vite and TypeScript. It provides a user interface for managing content on `www.etin.dev`.

### Key Features
- **Stack**: React, TypeScript, Vite, TanStack Query.
- **Authentication**: JWT-based authentication integrated with `api.etin.dev`.
- **Forms**: Data entry forms for Companies, Notes, Projects, Roles, and Tags.
- **Editor**: Custom Markdown editor implementation (`Lexical` or similar).
- **Navigation**: Client-side routing with `react-router-dom`.

## Roadmap

### 1. User Experience & Dashboard
- [ ] **Dashboard**: Replace placeholder dashboard with real statistics (e.g., total views, recent posts, content counts).
- [ ] **Shared Layouts**: Improve sidebar navigation with active states and breadcrumbs for better wayfinding.
- [ ] **Responsive Design**: Ensure the admin panel is usable on mobile devices.

### 2. Content Management Improvements
- [ ] **Rich Text Editor**:
    - Add drag-and-drop image upload support.
    - Implement live preview toggle.
    - Add toolbar actions for common markdown syntax (bold, italic, lists).
- [ ] **List Views**: Add pagination, sorting, and filtering to content lists (Notes, Projects, etc.).
- [ ] **Validation**: Add client-side form validation with helpful error messages (e.g., using `zod` or `react-hook-form`).

### 3. Error Handling & Feedback
- [ ] **Global Error Boundary**: Implement a React Error Boundary to catch crashes gracefully.
- [ ] **Toast Notifications**: Add a toast system (e.g., `sonner` or `react-hot-toast`) for success/error feedback on API actions.
- [ ] **Loading States**: Add skeleton loaders or spinners for better perceived performance.

### 4. Infrastructure & Quality
- [ ] **Testing**: Set up unit tests (Vitest) and component tests (React Testing Library).
- [ ] **Linting & Formatting**: Enforce strict linting rules (ESLint) and formatting (Prettier).
- [ ] **CI/CD**: Automate build and deployment process (e.g., to Vercel or Netlify) on push.
