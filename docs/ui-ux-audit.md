# UI/UX Observations & Improvements

A deep evaluation of the current Vedic Library frontend design prototype.

## Strengths

1. **Information Density**: The 3-panel layout effectively utilizes screen real estate for scholarly work.
2. **Visual Hierarchy**: Clear distinction between navigation, content, and application context.
3. **Typography**: The mix of Inter (Sans) and Noto Serif is excellent for readability.
4. **Interactive Tree**: The tree navigation is intuitive and handles deep nesting well.

## Identified Improvements

### 1. Readability & Focus
- **Current**: Collapsible sections in the middle panel can feel fragmented.
- **Improvement**: Implement a "Focus Mode" that expands the middle section and hides sidebars for deep reading.
- **Improvement**: Use "Margin Notes" (Siddhanta) layout where commentary appears next to the verse rather than below it on wide screens.

### 2. Search & Discovery
- **Current**: Search is global but results are not yet contextualized.
- **Improvement**: Add "Contextual Search" that highlights matches within the corpus tree.
- **Improvement**: Add a "History" feature to quickly return to recently viewed verses.

### 3. Personalization (V2 Enhancement)
- **Current**: No way to mark progress or save reflections.
- **Improvement**: Added a functional "Notes" panel in V2.
- **Improvement**: Implement "Verse Bookmarking" with category folders (e.g., "Daily Recitation", "Study").

### 4. Accessibility
- **Current**: Font sizes are fixed.
- **Improvement**: Add a "Typography Control" to the header to adjust font size and line height for better accessibility.

## Feature Expansion Ideas (Right Panel)

1. **Word-by-Word Analysis (Morphology)**:
   - Click any Sanskrit word to see its root (Dhatu), prefix (Upasarga), and grammatical case (Vibhakti).
2. **Audio/Video Integration**:
   - Integrated recitation player (already prototyped in V2).
   - Link to scholarly discourses (Pravachans) related to the current verse.
3. **Cross-Reference Graph**:
   - A visual map showing connections between the current verse and other works (e.g., how a Gita verse relates to an Upanishadic Mantra).
4. **Study Paths**:
   - Interactive checklist for courses (e.g., "Bhagavad Gita 18-day Challenge").
