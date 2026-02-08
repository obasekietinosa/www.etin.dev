# Overall Project Roadmap

This document outlines the high-level plan for the entire `etin.dev` ecosystem, which consists of three repositories:

1. [**Website** (`www.etin.dev`)](./roadmap-website.md): The public-facing Astro application.
2. [**API** (`api.etin.dev`)](./roadmap-api.md): The Go backend and PostgreSQL database.
3. [**Admin Portal** (`admin.etin.dev`)](./roadmap-admin.md): The React admin dashboard.

## Strategic Phases

### Phase 1: API Stabilization
**Goal**: Ensure the backend is robust, tested, and ready for production use.
- **Priority**: High
- **Key Tasks**:
  - Implement comprehensive tests for API handlers.
  - Create database seeders for development.
  - Set up CI/CD for automated testing and deployment.
  - Add structured logging and monitoring.

### Phase 2: Admin Portal Completion
**Goal**: Provide a seamless content management experience.
- **Priority**: Medium
- **Key Tasks**:
  - Implement the dashboard with real statistics.
  - Improve the rich text editor (image support, preview).
  - Add global error handling and feedback mechanisms (toasts).
  - Polish the UI/UX (navigation, responsive design).

### Phase 3: Website Polish & SEO
**Goal**: Optimize the public site for discovery and performance.
- **Priority**: Medium
- **Key Tasks**:
  - Implement SEO best practices (meta tags, sitemap, RSS).
  - Add search functionality.
  - Create a custom 404 error page.
  - Integrate analytics.

## Detailed Roadmaps
For specific implementation details, please refer to the individual roadmaps:
- [API Roadmap](./roadmap-api.md)
- [Admin Portal Roadmap](./roadmap-admin.md)
- [Website Roadmap](./roadmap-website.md)
