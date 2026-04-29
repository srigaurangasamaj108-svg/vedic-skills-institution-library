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
  | 'transliteration'
  | 'gaudiya'
  | 'advaita'
  | 'madhva'
  | 'sri_vaishnava'
  | 'general_commentary'

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
    'self-discovery': 'Self-Discovery',
    transliteration: 'Transliteration',
    gaudiya: 'Gauḍīya',
    advaita: 'Advaita',
    madhva: 'Madhva',
    sri_vaishnava: 'Śrī Vaiṣṇava',
    general_commentary: 'General Commentary'
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
    'self-discovery': 'आत्म-खोज',
    transliteration: 'लिप्यंतरण',
    gaudiya: 'गौड़ीय',
    advaita: 'अद्वैत',
    madhva: 'मध्व',
    sri_vaishnava: 'श्री वैष्णव',
    general_commentary: 'सामान्य व्याख्या'
  },
  bn: {
    nikhil: 'নিখিল',
    knowledge_os: 'জ্ঞান অপারেটিং সিস্টেম',
    vedic_library: 'বৈদিক পাঠাগার',
    search_placeholder: 'শ্লোক, গ্রন্থ, বিষয় খুঁজুন...',
    depth: 'গভীরতা',
    for: 'জন্য',
    language: 'ভাষা',
    navigate: 'নেভিগেট',
    apply: 'প্রয়োগ করুন',
    verse: 'শ্লোক',
    word_analysis: 'শব্দ বিশ্লেষণ',
    translation: 'অনুবাদ',
    commentary: 'টীকা',
    my_reflections: 'আমার প্রতিফলন',
    recitation: 'আবৃত্তি',
    life_guidance: 'জীবন নির্দেশিকা',
    seva_domains: 'সেবা ক্ষেত্র',
    cross_references: 'ক্রস রেফারেন্স',
    courses: 'কোর্স',
    save: 'সংরক্ষণ করুন',
    clear: 'সাফ করুন',
    prev: 'পূর্ববর্তী',
    next: 'পরবর্তী',
    devanagari: 'দেবনাগরী',
    roman: 'রোমান',
    telugu: 'তেলুগু',
    simple: 'সরল',
    moderate: 'মধ্যম',
    advanced: 'উন্নত',
    scholarly: 'পণ্ডিতসুলভ',
    general: 'সাধারণ',
    devotee: 'ভক্ত',
    non_devotee: 'অভক্ত',
    brahmachari: 'ব্রহ্মচারী',
    scholar: 'পণ্ডিত',
    researcher: 'গবেষক',
    select_verse: 'একটি শ্লোক নির্বাচন করুন',
    select_verse_desc: 'শ্লোক, অধ্যায় এবং পবিত্র গ্রন্থগুলি অন্বেষণ করতে বামদিকের বৈদিক বৃক্ষটি ব্যবহার করুন।',
    copy: 'কপি',
    share: 'শেয়ার',
    word_segmentation: 'শব্দ বিচ্ছেদ',
    word_to_word_meaning: 'শব্দার্থ',
    prose_order: 'অন্বয়',
    prose_meaning: 'অন্বয়ার্থ',
    sanskrit: 'সংস্কৃত',
    hindi: 'হিন্দি',
    english: 'ইংরেজি',
    bhagavad_gita: 'ভগবদ্গীতা',
    chapter: 'অধ্যায়',
    active: 'সক্রিয়',
    reflections_placeholder: 'আপনার ব্যক্তিগত প্রতিফলন বা অধ্যয়নের নোট এখানে লিখুন...',
    auto_saved: 'স্থানীয়ভাবে সংরক্ষিত',
    ask_question: 'প্রশ্ন জিজ্ঞাসা করুন',
    question_placeholder: 'এই শ্লোক সম্পর্কে আপনার প্রশ্ন লিখুন...',
    recitation_discourse: 'আবৃত্তি / প্রবচন',
    knowledge_os_desc: 'জ্ঞান অপারেটিং সিস্টেম',
    kids: 'শিশু',
    students: 'ছাত্র',
    professionals: 'পেশাদার',
    elders: 'প্রবীণ',
    dharma: 'ধর্ম',
    vedanta: 'বেদান্ত',
    yoga: 'যোগ',
    ayurveda: 'আয়ুর্বেদ',
    jyotish: 'জ্যোতিষ',
    nyaya: 'ন্যায়',
    topic: 'বিষয়',
    clear_all: 'সব পরিষ্কার করুন',
    'mental health': 'মানসিক স্বাস্থ্য',
    'life skills': 'জীবন দক্ষতা',
    family: 'পরিবার',
    'self-discovery': 'আত্ম-আবিষ্কার',
    transliteration: 'লিপ্যন্তর',
    gaudiya: 'গৌড়ীয়',
    advaita: 'অদ্বৈত',
    madhva: 'মধ্ব',
    sri_vaishnava: 'শ্রী বৈষ্ণব',
    general_commentary: 'সাধারণ ব্যাখ্যা'
  },
  mr: {
    nikhil: 'निखिल',
    knowledge_os: 'ज्ञान ऑपरेटिंग सिस्टिम',
    vedic_library: 'वैदिक ग्रंथालय',
    search_placeholder: 'श्लोक, ग्रंथ, विषय शोधा...',
    depth: 'गहनता',
    for: 'साठी',
    language: 'भाषा',
    navigate: 'नेव्हिगेट',
    apply: 'प्रवेश',
    verse: 'श्लोक',
    word_analysis: 'शब्द विश्लेषण',
    translation: 'भाषांतर',
    commentary: 'भाष्य',
    my_reflections: 'माझे विचार',
    recitation: 'पठण',
    life_guidance: 'जीवन मार्गदर्शन',
    seva_domains: 'सेवा क्षेत्र',
    cross_references: 'संदर्भ',
    courses: 'अभ्यासक्रम',
    save: 'जतन करा',
    clear: 'साफ करा',
    prev: 'मागील',
    next: 'पुढील',
    devanagari: 'देवनागरी',
    roman: 'रोमन',
    telugu: 'तेलुगु',
    simple: 'सोपे',
    moderate: 'मध्यम',
    advanced: 'प्रगत',
    scholarly: 'विद्वान',
    general: 'सामान्य',
    devotee: 'भक्त',
    non_devotee: 'अभक्त',
    brahmachari: 'ब्रह्मचारी',
    scholar: 'विद्वान',
    researcher: 'संशोधक',
    select_verse: 'एक श्लोक निवडा',
    select_verse_desc: 'श्लोक, अध्याय आणि पवित्र ग्रंथ शोधण्यासाठी डावीकडील वैदिक वृक्ष वापरा.',
    copy: 'कॉपी',
    share: 'शेअर',
    word_segmentation: 'शब्द विच्छेद',
    word_to_word_meaning: 'शब्दार्थ',
    prose_order: 'अन्वय',
    prose_meaning: 'अन्वयार्थ',
    sanskrit: 'संस्कृत',
    hindi: 'हिंदी',
    english: 'इंग्रजी',
    bhagavad_gita: 'भगवद्गीता',
    chapter: 'अध्याय',
    active: 'सक्रिय',
    reflections_placeholder: 'तुमचे वैयक्तिक विचार किंवा अभ्यासाच्या नोट्स येथे लिहा...',
    auto_saved: 'स्थानिकरित्या जतन केले',
    ask_question: 'प्रश्न विचारा',
    question_placeholder: 'या श्लोकाबद्दल तुमचा प्रश्न लिहा...',
    recitation_discourse: 'पठण / प्रवचन',
    knowledge_os_desc: 'ज्ञान ऑपरेटिंग सिस्टिम',
    kids: 'मुले',
    students: 'विद्यार्थी',
    professionals: 'व्यावसायिक',
    elders: 'ज्येष्ठ',
    dharma: 'धर्म',
    vedanta: 'वेदांत',
    yoga: 'योग',
    ayurveda: 'आयुर्वेद',
    jyotish: 'ज्योतिष',
    nyaya: 'न्याय',
    topic: 'विषय',
    clear_all: 'सर्व साफ करा',
    'mental health': 'मानसिक आरोग्य',
    'life skills': 'जीवन कौशल्य',
    family: 'कुटुंब',
    'self-discovery': 'आत्म-शोध',
    transliteration: 'लिप्यंतरण',
    gaudiya: 'गौडीय',
    advaita: 'अद्वैत',
    madhva: 'मध्व',
    sri_vaishnava: 'श्री वैष्णव',
    general_commentary: 'सामान्य भाष्य'
  }
}
