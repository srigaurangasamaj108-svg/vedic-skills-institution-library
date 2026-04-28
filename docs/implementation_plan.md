# Vedic Library Platform Implementation Plan

This plan outlines the architecture and design for a scalable, modular, and scholarly Vedic Library platform. It focuses on transitioning to a monorepo, designing a robust backend, and enhancing the frontend experience for diverse audiences.

## User Review Required

> [!IMPORTANT]
> **Monorepo Migration**: I will set up a Turbo-based monorepo. This involves moving the current code into `apps/web-library` and creating a new parallel version in `apps/web-library-v2`.
> **Database Schema**: The proposed schema uses a dedicated "knowledge" schema. I will provide a conceptual design; Prisma implementation is deferred as requested.
> **Frontend Preservation**: The original UI in `apps/web-library` will remain untouched. All experiments will happen in `apps/web-library-v2`.

## Open Questions
- Do you have a preferred Node.js framework for the API Gateway (e.g., Fastify, NestJS, or plain Express)? I recommend **Fastify** for performance and developer experience.
- For state management in the new version, would you prefer **Zustand** (already in `package.json`) or **Redux Toolkit**? Zustand is lighter and fits well with React 19.

## Proposed Changes

### 1. Monorepo Structure (Turbo-based)

We will use a standard Turbo structure to ensure scalability and shared logic.

- `apps/`
  - `web-library`: The existing frontend design prototype (preserved).
  - `web-library-v2`: The new experimental version with enhanced features.
  - `api-gateway`: The Node.js backend serving as the entry point for all data requests.
- `packages/`
  - `db`: Shared Prisma client and database utilities (using the "knowledge" schema).
  - `types`: Shared TypeScript interfaces and Zod schemas.
  - `ui`: Shared UI component library (Design System).
  - `config`: Shared configuration (eslint, tailwind, tsconfig).

---

### 2. Backend Architecture Overview

The `api-gateway` will act as a centralized service to orchestrate data from the PostgreSQL (Neon) database.

- **Technology**: Fastify (Node.js) with TypeScript.
- **ORM**: Prisma (connecting to the "knowledge" schema).
- **Caching**: Potential Redis layer for frequently accessed verses.
- **API Style**: RESTful with clear versioning (`/v1/...`).
- **Security**: JWT-based authentication (for future user interactions like notes/highlights).

---

### 3. Knowledge Schema Design (Conceptual)

The schema will be designed to handle deeply nested structures and multi-layered content.

#### Core Entities:
- **LibraryNode**: A recursive table for the hierarchy (Corpus -> TextGroup -> Work -> Section -> Chapter -> Verse).
- **VerseContent**: Stores original text and transliterations.
- **Language**: Supported languages (Sanskrit, English, Hindi, etc.).
- **Translation**: Multi-source translations linked to Verses and Languages.
- **CommentarySource**: Metadata about authors, sampradayas, and traditions.
- **Commentary**: Layered commentary text linked to Verses, Languages, and Sources.
- **Metadata**: Tags for `AudienceType` and `ComplexityLevel`.

#### Complexity & Audience Mapping:
- Every `Translation` and `Commentary` can be tagged with:
  - `Audience`: [General, Devotee, Non-devotee, Brahmachari, Scholar]
  - `Complexity`: [Simple, Moderate, Advanced, Scholarly]

---

### 4. Frontend Enhancement Strategy (`web-library-v2`)

#### Middle Section (Reading Experience):
- **Language Selector**: A global state-driven selector in the header to switch the primary reading language.
- **Audience/Complexity Toggle**: A UI element to filter the displayed depth of translations and commentaries.
- **Layered Display**: A toggle-based system to show/hide:
  - Original Text (Sanskrit)
  - Transliteration
  - Word-for-word Synonyms
  - Selected Translation
  - Multiple Commentaries (expandable cards)

#### Right Panel (Tool Panel):
- **Functional Modules**:
  - `Notes`: Rich-text editor for personal reflections.
  - `Highlights`: Color-coded text selection.
  - `Cross-References`: Links to related verses (already present in data).
  - `Context Tools`: Dictionary/Glossary lookup for Sanskrit terms.

---

### 5. UI/UX Observations & Improvements

- **Navigation**: The `tree-navigation` is strong. We can improve it with a "Search" bar specifically for the corpus tree.
- **Readability**: In the middle section, use more generous line-height and serif fonts for the main text (Noto Serif is already included).
- **Responsive Design**: Ensure the 3-panel layout collapses gracefully into a drawer-based navigation for mobile.
- **State Management**: Use Zustand to manage the "Current Verse", "Selected Language", and "Complexity Level" across the application.

## Verification Plan

### Automated Tests
- Schema validation using Zod in the shared `types` package.
- API endpoint testing for verse retrieval.

### Manual Verification
- Testing the language switcher in the new `web-library-v2`.
- Verifying the complexity level filters correctly display the corresponding content layers.
- Validating the responsive layout on different screen sizes.
