# Backend Architecture Overview

The `api-gateway` serves as the centralized entry point for the Vedic Library platform. It is built for high performance, scalability, and modularity.

## Technology Stack

- **Runtime**: Node.js (v20+)
- **Framework**: Fastify
- **Language**: TypeScript
- **ORM**: Prisma (connecting to Neon PostgreSQL)
- **Validation**: Zod (shared with frontend via `@repo/types`)
- **API Style**: RESTful

## Core Modules

### 1. Router Layer
Defines the endpoints and maps them to controllers.
- `/v1/corpus`: Navigation tree retrieval.
- `/v1/verse/:id`: Detailed verse data (including layered content).
- `/v1/search`: Full-text and semantic search.
- `/v1/user`: Personalization (Notes, Highlights).

### 2. Controller Layer
Handles incoming requests, validates input using Zod schemas, and interacts with services.

### 3. Service Layer
Contains the business logic.
- `ContentService`: Orchestrates the retrieval of verses, translations, and commentaries based on audience/complexity filters.
- `TreeService`: Manages the recursive structure of the Vedic corpus.
- `SearchService`: Interfaces with PostgreSQL full-text search or a dedicated search engine.

### 4. Data Layer (`@repo/db`)
Shared package that provides a pre-configured Prisma client.

## Data Flow

1. **Request**: Frontend sends a request with `audience` and `complexity` headers/params.
2. **Gateway**: `api-gateway` validates the request.
3. **Orchestration**: `ContentService` fetches the base verse data and filters associated translations/commentaries.
4. **Response**: A hydrated JSON object is returned, optimized for the frontend's `ContentEngine`.

## Scalability Considerations

- **Caching**: Implement a Redis layer for frequently accessed verses (e.g., popular chapters of the Bhagavad Gita).
- **Statelessness**: The API is stateless, allowing for horizontal scaling across multiple containers.
- **Dedicated Schema**: Using the `knowledge` schema prevents table bloating and allows for independent scaling of the library data.
