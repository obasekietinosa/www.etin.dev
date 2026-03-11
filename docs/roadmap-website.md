# Website Roadmap

## Current State

The `www.etin.dev` repository is an Astro application that serves as the public-facing personal website. It fetches content from the `api.etin.dev` backend.

### Key Features
- **Stack**: Astro (server-side rendering), React (for some interactive components), Tailwind CSS.
- **Design System**: "Bold Typography" with specific font stack (Inter Tight, Inter, Playfair Display, JetBrains Mono). Dark-mode first.
- **Content**: Notes, Projects, Roles, Experiences pages.
- **Dynamic Images**: Open Graph (OG) image generation using `satori`.
- **Favicon**: Dynamic favicon generation.

## Roadmap

### 1. User Experience & Navigation
- [ ] **Search Functionality**: Implement search across Notes and Projects.
- [ ] **Error Pages**: Create a custom `404` page that matches the site design.
- [ ] **Pagination**: Implement pagination for `/notes` and `/projects` listing pages.

### 2. SEO & Discovery
- [ ] **SEO Components**: Create a reusable SEO component for managing meta tags (title, description, canonical URL, OG tags).
- [ ] **Sitemap**: Generate an XML sitemap (`sitemap.xml`) dynamically from API data.
- [ ] **RSS Feed**: Create an RSS feed (`/rss.xml`) for Notes.
- [ ] **Structured Data**: Add JSON-LD schemas for Person, BlogPosting, and CreativeWork.

### 3. Performance & Polish
- [ ] **Image Optimization**: Ensure all images served from Cloudinary are optimized (format, size) and lazy-loaded.
- [ ] **Caching Strategy**: Implement appropriate caching headers or Incremental Static Regeneration (ISR) strategy for API responses.
- [ ] **Analytics**: Integrate privacy-focused analytics (e.g., Plausible).

### 4. Code Quality & CI/CD
- [ ] **Type Safety**: Improve TypeScript types for API responses (share types with backend or admin if possible).
- [ ] **Testing**: Add end-to-end tests using Playwright to verify critical paths.
- [ ] **Deployment**: Automate deployment pipeline (e.g., Vercel or Netlify) with preview environments.
