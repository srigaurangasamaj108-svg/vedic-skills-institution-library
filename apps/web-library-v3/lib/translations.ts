export type TranslationKey = 
  | 'nikhil' 
  | 'knowledge_os' 
  | 'vedic_library' 
  | 'search_placeholder' 
  | 'depth' 
  | 'for' 
  | 'language' 
  | 'navigate' 
  | 'apply' 
  | 'verse' 
  | 'word_analysis' 
  | 'translation' 
  | 'commentary' 
  | 'my_reflections' 
  | 'recitation' 
  | 'life_guidance' 
  | 'seva_domains' 
  | 'cross_references' 
  | 'courses' 
  | 'save' 
  | 'clear' 
  | 'prev' 
  | 'next'
  | 'devanagari'
  | 'roman'
  | 'telugu'
  | 'simple'
  | 'moderate'
  | 'advanced'
  | 'scholarly'
  | 'general'
  | 'devotee'
  | 'non_devotee'
  | 'brahmachari'
  | 'scholar'
  | 'researcher'
  | 'select_verse'
  | 'select_verse_desc'
  | 'copy'
  | 'share'
  | 'word_segmentation'
  | 'word_to_word_meaning'
  | 'prose_order'
  | 'prose_meaning'
  | 'sanskrit'
  | 'hindi'
  | 'english'
  | 'bhagavad_gita'
  | 'chapter'
  | 'active'
  | 'reflections_placeholder'
  | 'auto_saved'
  | 'ask_question'
  | 'question_placeholder'
  | 'recitation_discourse'
  | 'knowledge_os_desc'
  | 'kids'
  | 'students'
  | 'professionals'
  | 'elders'
  | 'dharma'
  | 'vedanta'
  | 'yoga'
  | 'ayurveda'
  | 'jyotish'
  | 'nyaya'
  | 'topic'
  | 'clear_all'
  | 'mental health'
  | 'life skills'
  | 'family'
  | 'self-discovery'

export const translations: Record<string, Record<TranslationKey, string>> = {
  en: {
    nikhil: 'NIKHIL',
    knowledge_os: 'Knowledge OS',
    vedic_library: 'Vedic Library',
    search_placeholder: 'Search verses, texts, topics...',
    depth: 'Depth',
    for: 'For',
    language: 'Language',
    navigate: 'Navigate',
    apply: 'Apply',
    verse: 'Verse',
    word_analysis: 'Word Analysis',
    translation: 'Translation',
    commentary: 'Commentary',
    my_reflections: 'My Reflections',
    recitation: 'Recitation',
    life_guidance: 'Life Guidance',
    seva_domains: 'Sevā Domains',
    cross_references: 'Cross-References',
    courses: 'Courses',
    save: 'Save',
    clear: 'Clear',
    prev: 'Prev',
    next: 'Next',
    devanagari: 'Devanagari',
    roman: 'Roman',
    telugu: 'Telugu',
    simple: 'Simple',
    moderate: 'Moderate',
    advanced: 'Advanced',
    scholarly: 'Scholarly',
    general: 'General',
    devotee: 'Devotee',
    non_devotee: 'Non-Devotee',
    brahmachari: 'Brahmachari',
    scholar: 'Scholar',
    researcher: 'Researcher',
    select_verse: 'Select a Verse',
    select_verse_desc: 'Navigate the Vedic corpus tree on the left to explore verses, chapters, and sacred texts.',
    copy: 'Copy',
    share: 'Share',
    word_segmentation: 'Word Segmentation',
    word_to_word_meaning: 'Word-to-word Meaning',
    prose_order: 'Prose Order',
    prose_meaning: 'Prose Meaning',
    sanskrit: 'Sanskrit',
    hindi: 'Hindi',
    english: 'English',
    bhagavad_gita: 'Bhagavad Gita',
    chapter: 'Chapter',
    active: 'Active',
    reflections_placeholder: 'Write your personal reflections or study notes here...',
    auto_saved: 'Auto-saved to local',
    ask_question: 'Ask a Question',
    question_placeholder: 'Type your question about this verse...',
    recitation_discourse: 'Recitation / Discourse',
    knowledge_os_desc: 'Knowledge OS',
    kids: 'Kids',
    students: 'Students',
    professionals: 'Professionals',
    elders: 'Elders',
    dharma: 'Dharma',
    vedanta: 'Vedānta',
    yoga: 'Yoga',
    ayurveda: 'Āyurveda',
    jyotish: 'Jyotiṣa',
    nyaya: 'Nyāya',
    topic: 'Topic',
    clear_all: 'Clear all',
    'mental health': 'Mental Health',
    'life skills': 'Life Skills',
    family: 'Family',
    'self-discovery': 'Self-Discovery'
  },
  hi: {
    nikhil: 'निखिल',
    knowledge_os: 'ज्ञान ऑपरेटिंग सिस्टम',
    vedic_library: 'वैदिक पुस्तकालय',
    search_placeholder: 'श्लोक, ग्रंथ, विषय खोजें...',
    depth: 'गहनता',
    for: 'के लिए',
    language: 'भाषा',
    navigate: 'नेविगेट',
    apply: 'प्रयोग',
    verse: 'श्लोक',
    word_analysis: 'शब्द विश्लेषण',
    translation: 'अनुवाद',
    commentary: 'टीका',
    my_reflections: 'मेरे विचार',
    recitation: 'पाठ / प्रवचन',
    life_guidance: 'जीवन मार्गदर्शन',
    seva_domains: 'सेवा क्षेत्र',
    cross_references: 'अन्य संदर्भ',
    courses: 'पाठ्यक्रम',
    save: 'सहेजें',
    clear: 'साफ़ करें',
    prev: 'पिछला',
    next: 'अगला',
    devanagari: 'देवनागरी',
    roman: 'रोमन',
    telugu: 'तेलुगु',
    simple: 'सरल',
    moderate: 'मध्यम',
    advanced: 'उन्नत',
    scholarly: 'विद्वान',
    general: 'सामान्य',
    devotee: 'भक्त',
    non_devotee: 'अभक्त',
    brahmachari: 'ब्रह्मचारी',
    scholar: 'विद्वान',
    researcher: 'शोधकर्ता',
    select_verse: 'एक श्लोक चुनें',
    select_verse_desc: 'श्लोकों, अध्यायों और पवित्र ग्रंथों का पता लगाने के लिए बाईं ओर वैदिक वृक्ष का उपयोग करें।',
    copy: 'प्रतिलिपि',
    share: 'साझा करें',
    word_segmentation: 'शब्द विच्छेद',
    word_to_word_meaning: 'शब्दार्थ',
    prose_order: 'अन्वय',
    prose_meaning: 'अन्वयार्थ',
    sanskrit: 'संस्कृत',
    hindi: 'हिन्दी',
    english: 'अंग्रेजी',
    bhagavad_gita: 'भगवद गीता',
    chapter: 'अध्याय',
    active: 'सक्रिय',
    reflections_placeholder: 'अपने व्यक्तिगत विचार या अध्ययन नोट्स यहाँ लिखें...',
    auto_saved: 'स्थानीय रूप से सहेजा गया',
    ask_question: 'प्रश्न पूछें',
    question_placeholder: 'इस श्लोक के बारे में अपना प्रश्न लिखें...',
    recitation_discourse: 'पाठ / प्रवचन',
    knowledge_os_desc: 'ज्ञान ऑपरेटिंग सिस्टम',
    kids: 'बच्चे',
    students: 'छात्र',
    professionals: 'पेशेवर',
    elders: 'बुजुर्ग',
    dharma: 'धर्म',
    vedanta: 'वेदांत',
    yoga: 'योग',
    ayurveda: 'आयुर्वेद',
    jyotish: 'ज्योतिष',
    nyaya: 'न्याय',
    topic: 'विषय',
    clear_all: 'सभी साफ़ करें',
    'mental health': 'मानसिक स्वास्थ्य',
    'life skills': 'जीवन कौशल',
    family: 'परिवार',
    'self-discovery': 'आत्म-खोज'
  }
}
