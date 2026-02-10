# Project Roadmap Overview

This document serves as the central roadmap for the `etin.dev` ecosystem, which consists of three repositories:

1. **[api.etin.dev](api-roadmap.md)**: The backend API service.
2. **[admin.etin.dev](admin-roadmap.md)**: The administrative content management dashboard.
3. **[www.etin.dev](website-roadmap.md)**: The public-facing personal website.

## Overall Strategy & Phased Execution

To efficiently build and launch the complete system, the development will be structured into three main phases.

### Phase 1: API Stabilization (Backend First)
The foundation of the entire system is the API. Ensuring it is robust, tested, and easy to interact with is the top priority.
- **Goal**: A stable, production-ready API with comprehensive test coverage and developer tooling.
- **Key Tasks**:
    - Implement unit and integration tests for all handlers.
    - Create database seeders to simplify local development.
    - Add pagination support for all list endpoints.
    - Refactor OpenAPI generation to use a standard library (`swag`).

### Phase 2: Admin Completion (Content Management)
Once the API is stable, the focus shifts to the Admin portal to enable easy content creation and management without manual database edits.
- **Goal**: A fully functional, user-friendly dashboard for managing all site content.
- **Key Tasks**:
    - Build out the dashboard home with key metrics.
    - Implement pagination for content lists.
    - Enhance the Markdown editor with image uploads and previews.
    - Polish the UI/UX with better navigation and loading states.

### Phase 3: Website Polish (Public Launch)
With content manageable via the Admin panel and served by a stable API, the final phase focuses on the public-facing website's experience.
- **Goal**: A high-performance, SEO-optimized personal website.
- **Key Tasks**:
    - Implement search and filtering (by tags/categories) for notes.
    - Create dedicated tag listing pages.
    - Add related content suggestions to detail pages.
    - Implement sitemap and RSS feeds.
    - Handle edge cases with custom error pages (404/500).

---

*For detailed task breakdowns, please refer to the individual roadmap files linked above.*
