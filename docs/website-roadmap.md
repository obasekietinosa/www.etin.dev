# www.etin.dev Roadmap

## Current State

The `www.etin.dev` repository is the public-facing personal website built using **Astro**. It focuses on performance and SEO, delivering static or server-rendered content fetched from the API.

Key features implemented include:
- **Routing**: Static pages for Notes, Projects, Roles, and home (`src/pages`).
- **Data Fetching**: Integration with `api.etin.dev` via typed fetch utilities (`src/domains`).
- **Styling**: Tailwind CSS integration for design.
- **Components**: Basic UI components (implied).

## Outstanding Functionality & Roadmap

To ensure a polished user experience and strong web presence, the following areas need attention:

### 1. Navigation & Discovery
- **Current Status**: Basic listing pages.
- **Action Items**:
    - **Pagination**: Implement paginated views for list pages (`/notes`, `/projects`) to handle larger datasets efficiently.
    - **Tag Pages**: Create dedicated pages for tags (e.g., `/tag/[tag]`) listing all associated content.
    - **Related Content**: On individual note/project pages, display a "Related Reading" section suggesting content with similar tags or linked items.

### 2. Search & Filtering
- **Current Status**: No search mechanism.
- **Action Items**:
    - Implement a client-side search (e.g., Fuse.js) or integrate a search service (Algolia).
    - Add filtering controls to list pages allowing users to filter by tags or categories.

### 3. Error Handling Pages
- **Current Status**: Missing custom 404 page.
- **Action Items**:
    - Create a custom `404.astro` page to handle "Not Found" errors gracefully, maintaining site branding.
    - Implement a generic `500` error page for server-side failures if using SSR.

### 4. SEO & Meta Tags
- **Current Status**: Basic meta tags likely exist but need standardization.
- **Action Items**:
    - Create a reusable `SEO.astro` component to manage meta titles, descriptions, Open Graph tags, and Twitter cards across all pages.
    - Ensure dynamic pages (e.g., `/note/[slug]`) populate meta tags correctly from API data.

### 5. Sitemap & RSS
- **Current Status**: Not implemented.
- **Action Items**:
    - Configure `@astrojs/sitemap` integration to automatically generate a sitemap.xml.
    - Implement an RSS feed endpoint (`src/pages/rss.xml.ts`) for blog posts/notes to allow syndication.

### 6. Performance & Analytics
- **Current Status**: Astro is performant by default, but optimizations are always possible.
- **Action Items**:
    - Audit image loading strategy (use `astro:assets` or Cloudinary transformations) for optimal format and size.
    - Integrate a privacy-focused analytics tool (e.g., Plausible, Fathom, or minimal Google Analytics) to track page views.

### 7. CI/CD Pipeline
- **Current Status**: Needs definition.
- **Action Items**:
    - Configure deployment to a hosting platform like Vercel, Netlify, or Cloudflare Pages.
    - Ensure the build process correctly handles API environment variables.
