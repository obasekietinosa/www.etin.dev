# api.etin.dev Roadmap

## Current State

The `api.etin.dev` repository houses the backend service for the personal website. It is built using **Go (Golang)** and utilizes **Postgres** for data persistence.

Key features implemented include:
- **Core Architecture**: Go server with a custom query builder (`pkg/querybuilder`) and handler-based routing.
- **Data Models**: Support for Companies, Projects, Roles, Notes, and Tags.
- **Asset Management**: Integration with **Cloudinary** for image uploads and storage (`internal/assets`).
- **Authentication**: Admin login/logout functionality with JWT-based session management (`cmd/api/auth.go`).
- **Middleware**:
    - CORS handling.
    - Request logging.
    - Request ID tracking.
    - Deploy webhook trigger.
- **OpenAPI**: Automated OpenAPI specification generation (`cmd/openapi`).
- **Webhooks**: Mechanism to trigger external build/deploy processes on content changes.

## Outstanding Functionality & Roadmap

To ensure robustness, scalability, and ease of maintenance, the following areas need attention:

### 1. Comprehensive Testing
- **Current Status**: Tests exist primarily for the `querybuilder` package.
- **Action Items**:
    - Implement unit tests for all HTTP handlers (`cmd/api/handler_*.go`).
    - Add integration tests for database interactions (`internal/data`).
    - Set up a test database environment or mocking strategy for consistent test runs.

### 2. Database Seeding
- **Current Status**: The README notes a "TODO: Add seeders".
- **Action Items**:
    - Create a CLI command or script to populate the database with initial data (e.g., default admin user, sample projects/notes) to facilitate local development.

### 3. Rate Limiting
- **Current Status**: Not implemented.
- **Action Items**:
    - Implement middleware to limit request rates per IP or token to prevent abuse, especially on public endpoints.

### 4. Caching Strategy
- **Current Status**: No caching mechanism observed; all requests hit the database.
- **Action Items**:
    - Introduce caching (e.g., Redis or in-memory) for frequently accessed public data like Notes and Projects to reduce database load and improve response times.

### 5. Structured Logging & Monitoring
- **Current Status**: Basic `log.Printf` logging.
- **Action Items**:
    - Migrate to a structured logging library (e.g., `slog` or `zap`) for better observability.
    - Integrate with a monitoring solution (e.g., Prometheus, Sentry) to track errors and performance metrics in production.

### 6. CI/CD Pipeline
- **Current Status**: GitHub Actions mentioned but specific deployment workflows need definition.
- **Action Items**:
    - Define GitHub Actions workflows for running tests on pull requests.
    - Create a deployment pipeline to build the Go binary and deploy it to the hosting environment (e.g., via Docker).
