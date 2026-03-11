# API Roadmap

## Current State

The `api.etin.dev` repository is a Go backend service using PostgreSQL for data persistence. It serves as the core data provider for the personal website and admin portal.

### Key Features
- **Architecture**: Hand-rolled Go server with a custom query builder (`pkg/querybuilder`).
- **Database**: PostgreSQL with schema management.
- **Authentication**: JWT-based admin authentication (`internal/auth`).
- **Content Management**: CRUD operations for:
  - Companies
  - Projects
  - Roles
  - Notes
  - Tags
- **Assets**: Cloudinary integration for image uploads (`internal/assets`).
- **OpenAPI**: Auto-generated Swagger specification served at `/swagger`.
- **Webhooks**: Deployment webhook triggers on content changes.

## Roadmap

### 1. Testing & Quality Assurance
- [ ] **Handler Tests**: Implement comprehensive unit and integration tests for all API handlers.
- [ ] **Integration Tests**: Add end-to-end tests covering critical user flows (e.g., auth -> create content).
- [ ] **Test Coverage**: aim for >80% test coverage, especially in `internal/data`.

### 2. Developer Experience
- [ ] **Database Seeders**: Create scripts to populate the database with dummy data for local development (`internal/data/seed.go`).
- [ ] **Makefile**: Add a Makefile for common tasks (build, test, lint, seed).

### 3. Reliability & Performance
- [ ] **Rate Limiting**: Implement middleware to prevent abuse (using `x/time/rate` or Redis).
- [ ] **Caching**: Add caching layer (in-memory or Redis) for frequently accessed public endpoints (e.g., `/notes`, `/projects`).
- [ ] **Structured Logging**: enhance logging with structured data (JSON) for better observability in production.
- [ ] **Monitoring**: Integrate with a monitoring solution (e.g., Prometheus, Sentry) for error tracking and performance metrics.

### 4. Infrastructure & Deployment
- [ ] **CI/CD Pipeline**: fully automate testing and deployment via GitHub Actions.
- [ ] **Docker**: Optimize `Dockerfile` for production (multi-stage builds).
- [ ] **Health Checks**: Add a dedicated `/health` endpoint for uptime monitoring.
