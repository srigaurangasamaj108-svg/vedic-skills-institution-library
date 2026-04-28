# Knowledge Schema Design (Conceptual)

This document outlines the database schema for the "knowledge" domain of the Vedic Library platform.

## Dedicated Schema: `knowledge`

All tables related to scriptures and scholarly content will reside in this schema to ensure modularity and security.

### 1. Hierarchy & Structure

| Table | Description |
| :--- | :--- |
| **LibraryNode** | Recursive table representing the corpus hierarchy. |
| | `id` (UUID), `parentId` (UUID), `name` (String), `sanskritName` (String), `type` (Enum: Corpus, TextGroup, Work, Section, Chapter, Verse), `order` (Int) |

### 2. Verse Content

| Table | Description |
| :--- | :--- |
| **Verse** | The atomic unit of content, linked to a `LibraryNode`. |
| | `id` (UUID), `nodeId` (UUID), `originalText` (Text), `transliteration` (Text), `meter` (String) |
| **WordMeaning** | Word-for-word analysis (Synonyms). |
| | `id` (UUID), `verseId` (UUID), `word` (String), `meaning` (String), `order` (Int) |

### 3. Multi-source Layers

| Table | Description |
| :--- | :--- |
| **Language** | Supported languages. |
| | `id` (Code: en, hi, sa, etc.), `name` (String) |
| **Translation** | Diverse translations for a verse. |
| | `id` (UUID), `verseId` (UUID), `languageId` (Code), `text` (Text), `author` (String), `complexity` (Enum), `audience` (Enum) |
| **CommentarySource** | Metadata about sampradayas and authors. |
| | `id` (UUID), `name` (String), `sampradaya` (String), `description` (Text) |
| **Commentary** | Scholar-specific commentaries. |
| | `id` (UUID), `verseId` (UUID), `sourceId` (UUID), `languageId` (Code), `text` (Text), `complexity` (Enum), `audience` (Enum) |

### 4. Cross-References & Relations

| Table | Description |
| :--- | :--- |
| **CrossReference** | Links between related verses. |
| | `id` (UUID), `sourceVerseId` (UUID), `targetVerseId` (UUID), `relationType` (String) |
| **ThematicTag** | Keywords and themes (e.g., Karma, Yoga, Dharma). |
| | `id` (UUID), `name` (String), `category` (String) |
| **VerseTag** | Mapping of tags to verses. |
| | `verseId` (UUID), `tagId` (UUID) |

### 5. Audience & Complexity Levels

**Complexity Enums**:
- `SIMPLE`: Focus on basic meaning, minimal jargon.
- `MODERATE`: Detailed explanation with some philosophical context.
- `ADVANCED`: Deep philosophical analysis, cross-references.
- `SCHOLARLY`: Original Bhashya analysis, grammatical details.

**Audience Enums**:
- `GENERAL`: Broad public interest.
- `DEVOTEE`: Focus on spiritual practice (Sadhana).
- `NON_DEVOTEE`: Academic/Inquisitive perspective.
- `BRAHMACHARI`: Focus on discipline and study.
- `SCHOLAR`: Research-oriented depth.
