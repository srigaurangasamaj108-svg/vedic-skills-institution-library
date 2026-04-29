import { TreeNode, Verse, Course, GuidanceTopic, SevaDomain } from '@/lib/types'

// Helper to generate verse nodes for a chapter
function generateVerseNodes(chapterId: string, verseCount: number): TreeNode[] {
  return Array.from({ length: verseCount }, (_, i) => ({
    id: `${chapterId}-v${i + 1}`,
    name: `${i + 1}`,
    type: 'verse' as const,
  }))
}

export const vedicCorpusTree: TreeNode[] = [
  {
    id: 'shruti',
    name: 'Shruti',
    sanskrit: 'श्रुति',
    bengali: 'শ্রুতি',
    type: 'corpus',
    children: [
      {
        id: 'vedas',
        name: 'Vedas',
        sanskrit: 'वेद',
        bengali: 'বেদ',
        type: 'text_group',
        children: [
          {
            id: 'rigveda',
            name: 'Rgveda',
            sanskrit: 'ऋग्वेद',
            bengali: 'ঋগ্বেদ',
            type: 'work',
            verseCount: 10552,
            children: [
              { id: 'rv-1', name: 'Mandala 1', type: 'chapter', verseCount: 191, children: generateVerseNodes('rv-1', 10) },
              { id: 'rv-2', name: 'Mandala 2', type: 'chapter', verseCount: 43, children: generateVerseNodes('rv-2', 10) },
              { id: 'rv-3', name: 'Mandala 3', type: 'chapter', verseCount: 62, children: generateVerseNodes('rv-3', 10) },
            ]
          },
          {
            id: 'yajurveda',
            name: 'Yajurveda',
            sanskrit: 'यजुर्वेद',
            type: 'work',
            verseCount: 1975
          },
          {
            id: 'samaveda',
            name: 'Samaveda',
            sanskrit: 'सामवेद',
            type: 'work',
            verseCount: 1875
          },
          {
            id: 'atharvaveda',
            name: 'Atharvaveda',
            sanskrit: 'अथर्ववेद',
            type: 'work',
            verseCount: 5977
          }
        ]
      },
      {
        id: 'upanishads',
        name: 'Upanisads',
        sanskrit: 'उपनिषद्',
        bengali: 'উপনিষদ',
        type: 'text_group',
        children: [
          { id: 'isha', name: 'Isha Upanisad', sanskrit: 'ईशोपनिषद्', type: 'work', verseCount: 18, children: generateVerseNodes('isha', 18) },
          { id: 'kena', name: 'Kena Upanisad', sanskrit: 'केनोपनिषद्', type: 'work', verseCount: 35, children: generateVerseNodes('kena', 10) },
          { id: 'katha', name: 'Katha Upanisad', sanskrit: 'कठोपनिषद्', type: 'work', verseCount: 119 },
          { id: 'mundaka', name: 'Mundaka Upanisad', sanskrit: 'मुण्डकोपनिषद्', type: 'work', verseCount: 64 },
          { id: 'mandukya', name: 'Mandukya Upanisad', sanskrit: 'माण्डूक्योपनिषद्', type: 'work', verseCount: 12, children: generateVerseNodes('mandukya', 12) },
          { id: 'chandogya', name: 'Chandogya Upanisad', sanskrit: 'छान्दोग्योपनिषद्', type: 'work', verseCount: 627 },
          { id: 'brihadaranyaka', name: 'Brhadaranyaka Upanisad', sanskrit: 'बृहदारण्यकोपनिषद्', type: 'work', verseCount: 435 },
          { id: 'taittiriya', name: 'Taittiriya Upanisad', sanskrit: 'तैत्तिरीयोपनिषद्', type: 'work', verseCount: 31 },
          { id: 'aitareya', name: 'Aitareya Upanisad', sanskrit: 'ऐतरेयोपनिषद्', type: 'work', verseCount: 33 },
          { id: 'prashna', name: 'Prashna Upanisad', sanskrit: 'प्रश्नोपनिषद्', type: 'work', verseCount: 67 },
        ]
      }
    ]
  },
  {
    id: 'smriti',
    name: 'Smrti',
    sanskrit: 'स्मृति',
    bengali: 'স্মৃতি',
    type: 'corpus',
    children: [
      {
        id: 'itihasa',
        name: 'Itihasa',
        sanskrit: 'इतिहास',
        bengali: 'ইতিহাস',
        type: 'text_group',
        children: [
          {
            id: 'mahabharata',
            name: 'Mahabharata',
            sanskrit: 'महाभारत',
            bengali: 'মহাভারত',
            type: 'work',
            verseCount: 100000,
            children: [
              {
                id: 'bhisma-parva',
                name: 'Bhisma Parva',
                sanskrit: 'भीष्म पर्व',
                bengali: 'ভীষ্ম পর্ব',
                type: 'section',
                children: [
                  {
                    id: 'bhagavad-gita',
                    name: 'Bhagavad Gita',
                    sanskrit: 'भगवद्गीता',
                    bengali: 'ভগবদ্গীতা',
                    type: 'work',
                    verseCount: 700,
                    children: [
                      { 
                        id: 'bg-1', 
                        name: 'Chapter 1: Arjuna Visada Yoga', 
                        sanskrit: 'अर्जुन विषाद योग', 
                        hindi: 'अध्याय 1: अर्जुन विषाद योग',
                        bengali: 'অধ্যায় ১: অর্জুন বিষাদ যোগ',
                        type: 'chapter', 
                        verseCount: 47, 
                        children: generateVerseNodes('bg-1', 47) 
                      },
                      { 
                        id: 'bg-2', 
                        name: 'Chapter 2: Sankhya Yoga', 
                        sanskrit: 'सांख्य योग', 
                        hindi: 'अध्याय 2: सांख्य योग',
                        bengali: 'অধ্যায় ২: সাংখ্য যোগ',
                        type: 'chapter', 
                        verseCount: 72, 
                        children: generateVerseNodes('bg-2', 72) 
                      },
                      { id: 'bg-3', name: 'Chapter 3: Karma Yoga', sanskrit: 'कर्म योग', type: 'chapter', verseCount: 43, children: generateVerseNodes('bg-3', 43) },
                      { id: 'bg-4', name: 'Chapter 4: Jnana Yoga', sanskrit: 'ज्ञान योग', type: 'chapter', verseCount: 42, children: generateVerseNodes('bg-4', 42) },
                      { id: 'bg-5', name: 'Chapter 5: Karma Sannyasa Yoga', sanskrit: 'कर्म सन्न्यास योग', type: 'chapter', verseCount: 29, children: generateVerseNodes('bg-5', 29) },
                      { id: 'bg-6', name: 'Chapter 6: Dhyana Yoga', sanskrit: 'ध्यान योग', type: 'chapter', verseCount: 47, children: generateVerseNodes('bg-6', 47) },
                      { id: 'bg-7', name: 'Chapter 7: Jnana Vijnana Yoga', sanskrit: 'ज्ञान विज्ञान योग', type: 'chapter', verseCount: 30, children: generateVerseNodes('bg-7', 30) },
                      { id: 'bg-8', name: 'Chapter 8: Aksara Brahma Yoga', sanskrit: 'अक्षर ब्रह्म योग', type: 'chapter', verseCount: 28, children: generateVerseNodes('bg-8', 28) },
                      { id: 'bg-9', name: 'Chapter 9: Raja Vidya Yoga', sanskrit: 'राज विद्या योग', type: 'chapter', verseCount: 34, children: generateVerseNodes('bg-9', 34) },
                      { id: 'bg-10', name: 'Chapter 10: Vibhuti Yoga', sanskrit: 'विभूति योग', type: 'chapter', verseCount: 42, children: generateVerseNodes('bg-10', 42) },
                      { id: 'bg-11', name: 'Chapter 11: Visvarupa Darsana Yoga', sanskrit: 'विश्वरूप दर्शन योग', type: 'chapter', verseCount: 55, children: generateVerseNodes('bg-11', 55) },
                      { id: 'bg-12', name: 'Chapter 12: Bhakti Yoga', sanskrit: 'भक्ति योग', type: 'chapter', verseCount: 20, children: generateVerseNodes('bg-12', 20) },
                      { id: 'bg-13', name: 'Chapter 13: Ksetra Ksetrajna Yoga', sanskrit: 'क्षेत्र क्षेत्रज्ञ योग', type: 'chapter', verseCount: 35, children: generateVerseNodes('bg-13', 35) },
                      { id: 'bg-14', name: 'Chapter 14: Gunatraya Vibhaga Yoga', sanskrit: 'गुणत्रय विभाग योग', type: 'chapter', verseCount: 27, children: generateVerseNodes('bg-14', 27) },
                      { id: 'bg-15', name: 'Chapter 15: Purusottama Yoga', sanskrit: 'पुरुषोत्तम योग', type: 'chapter', verseCount: 20, children: generateVerseNodes('bg-15', 20) },
                      { id: 'bg-16', name: 'Chapter 16: Daivasura Sampad Yoga', sanskrit: 'दैवासुर सम्पद् योग', type: 'chapter', verseCount: 24, children: generateVerseNodes('bg-16', 24) },
                      { id: 'bg-17', name: 'Chapter 17: Sraddhatraya Vibhaga Yoga', sanskrit: 'श्रद्धात्रय विभाग योग', type: 'chapter', verseCount: 28, children: generateVerseNodes('bg-17', 28) },
                      { id: 'bg-18', name: 'Chapter 18: Moksa Sannyasa Yoga', sanskrit: 'मोक्ष सन्न्यास योग', type: 'chapter', verseCount: 78, children: generateVerseNodes('bg-18', 78) },
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: 'ramayana',
            name: 'Ramayana',
            sanskrit: 'रामायण',
            type: 'work',
            verseCount: 24000,
            children: [
              { id: 'bala-kanda', name: 'Bala Kanda', sanskrit: 'बाल काण्ड', type: 'section', verseCount: 77 },
              { id: 'ayodhya-kanda', name: 'Ayodhya Kanda', sanskrit: 'अयोध्या काण्ड', type: 'section', verseCount: 119 },
              { id: 'aranya-kanda', name: 'Aranya Kanda', sanskrit: 'आरण्य काण्ड', type: 'section', verseCount: 75 },
              { id: 'kishkindha-kanda', name: 'Kishkindha Kanda', sanskrit: 'किष्किन्धा काण्ड', type: 'section', verseCount: 67 },
              { id: 'sundara-kanda', name: 'Sundara Kanda', sanskrit: 'सुन्दर काण्ड', type: 'section', verseCount: 68 },
              { id: 'yuddha-kanda', name: 'Yuddha Kanda', sanskrit: 'युद्ध काण्ड', type: 'section', verseCount: 128 },
              { id: 'uttara-kanda', name: 'Uttara Kanda', sanskrit: 'उत्तर काण्ड', type: 'section', verseCount: 111 },
            ]
          }
        ]
      },
      {
        id: 'puranas',
        name: 'Puranas',
        sanskrit: 'पुराण',
        type: 'text_group',
        children: [
          { id: 'bhagavata', name: 'Srimad Bhagavatam', sanskrit: 'श्रीमद्भागवतम्', type: 'work', verseCount: 18000 },
          { id: 'vishnu-purana', name: 'Visnu Purana', sanskrit: 'विष्णु पुराण', type: 'work', verseCount: 23000 },
          { id: 'shiva-purana', name: 'Shiva Purana', sanskrit: 'शिव पुराण', type: 'work', verseCount: 24000 },
          { id: 'garuda-purana', name: 'Garuda Purana', sanskrit: 'गरुड पुराण', type: 'work', verseCount: 19000 },
          { id: 'markandeya-purana', name: 'Markandeya Purana', sanskrit: 'मार्कण्डेय पुराण', type: 'work', verseCount: 9000 },
        ]
      },
      {
        id: 'dharmashastra',
        name: 'Dharmashastra',
        sanskrit: 'धर्मशास्त्र',
        type: 'text_group',
        children: [
          { id: 'manusmriti', name: 'Manusmrti', sanskrit: 'मनुस्मृति', type: 'work', verseCount: 2694 },
          { id: 'yajnavalkya-smriti', name: 'Yajnavalkya Smrti', sanskrit: 'याज्ञवल्क्य स्मृति', type: 'work', verseCount: 1010 },
        ]
      }
    ]
  },
  {
    id: 'darshana',
    name: 'Darshana',
    sanskrit: 'दर्शन',
    type: 'corpus',
    children: [
      { id: 'nyaya', name: 'Nyaya', sanskrit: 'न्याय', type: 'text_group' },
      { id: 'vaisheshika', name: 'Vaisheshika', sanskrit: 'वैशेषिक', type: 'text_group' },
      { id: 'sankhya', name: 'Sankhya', sanskrit: 'सांख्य', type: 'text_group' },
      { id: 'yoga-darshana', name: 'Yoga', sanskrit: 'योग', type: 'text_group', children: [
        { id: 'yoga-sutras', name: 'Yoga Sutras', sanskrit: 'योग सूत्र', type: 'work', verseCount: 196, children: [
          { id: 'ys-1', name: 'Samadhi Pada', type: 'chapter', verseCount: 51, children: generateVerseNodes('ys-1', 51) },
          { id: 'ys-2', name: 'Sadhana Pada', type: 'chapter', verseCount: 55, children: generateVerseNodes('ys-2', 55) },
          { id: 'ys-3', name: 'Vibhuti Pada', type: 'chapter', verseCount: 56, children: generateVerseNodes('ys-3', 56) },
          { id: 'ys-4', name: 'Kaivalya Pada', type: 'chapter', verseCount: 34, children: generateVerseNodes('ys-4', 34) },
        ]}
      ]},
      { id: 'mimamsa', name: 'Mimamsa', sanskrit: 'मीमांसा', type: 'text_group' },
      { id: 'vedanta-darshana', name: 'Vedanta', sanskrit: 'वेदान्त', type: 'text_group', children: [
        { id: 'brahma-sutras', name: 'Brahma Sutras', sanskrit: 'ब्रह्म सूत्र', type: 'work', verseCount: 555 }
      ]},
    ]
  }
]

// Sample verse data for demonstration
export const sampleVerse: Verse = {
  id: 'bg-2-47',
  chapter: 2,
  verse: 47,
  summary: {
    en: 'Focus on action, not the fruits of action',
    hi: 'कर्म पर ध्यान दें, फल पर नहीं',
    bn: 'কর্মে মনোনিবেশ করুন, ফলে নয়'
  },
  sanskrit: 'कर्मण्येवाधिकारस्ते मा फलेषु कदाचन ।\nमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि ॥ ४७ ॥',
  transliteration: 'karmany evadhikaras te ma phalesu kadacana\nma karma-phala-hetur bhur ma te sango \'stv akarmani',
  synonyms: [
    { word: 'karmani', meaning: 'in prescribed duties' },
    { word: 'eva', meaning: 'certainly' },
    { word: 'adhikarah', meaning: 'right' },
    { word: 'te', meaning: 'of you' },
    { word: 'ma', meaning: 'never' },
    { word: 'phalesu', meaning: 'in the fruits' },
    { word: 'kadacana', meaning: 'at any time' },
    { word: 'ma', meaning: 'never' },
    { word: 'karma-phala', meaning: 'result of work' },
    { word: 'hetuh', meaning: 'cause' },
    { word: 'bhuh', meaning: 'become' },
    { word: 'ma', meaning: 'never' },
    { word: 'te', meaning: 'of you' },
    { word: 'sangah', meaning: 'attachment' },
    { word: 'astu', meaning: 'be there' },
    { word: 'akarmani', meaning: 'in not doing prescribed duties' },
  ],
  translations: {
    en: 'You have a right to perform your prescribed duties, but you are not entitled to the fruits of your actions. Never consider yourself to be the cause of the results of your activities, nor be attached to inaction.',
    hi: 'तुम्हें केवल कर्म करने का अधिकार है, फल पर कभी नहीं। कर्मफल का कारण मत बनो और कर्म न करने में भी आसक्त मत हो।',
    sa: 'कर्मण्येव अधिकारः ते, न फলেषु कदाचन। मा कर्मफलहेतुः भूः, मा ते सङ्गोऽस्तु अकर्मणि।',
    bn: 'তোমার শুধুমাত্র কর্মেই অধিকার আছে, ফলে কখনও নয়। কর্মফলের কারণ হয়ো না এবং অকর্মণ্যতায়ও আসক্ত হয়ো না।'
  },
  commentaries: [
    {
      sampradaya: 'general',
      author: 'General Commentary',
      content: {
        en: 'This verse is one of the most famous and frequently quoted verses of the Bhagavad Gita. It encapsulates the essence of Karma Yoga - the path of selfless action. Krishna instructs Arjuna that one should focus entirely on performing one\'s duty without attachment to the results. This teaching encourages action without selfish motivation, leading to inner peace and spiritual growth.',
        hi: 'यह श्लोक भगवद्गीता के सबसे प्रसिद्ध और उद्धृत श্লোकों में से एक है। यह कर्म योग के सार को समाहित करता है - निःस्वार्थ कर्म का मार्ग।',
        bn: 'এই শ্লোকটি ভগবদ্গীতার সবচেয়ে বিখ্যাত এবং প্রায়শই উদ্ধৃত শ্লোকগুলির মধ্যে একটি। এটি কর্মযোগের সারমর্মকে ধারণ করে - নিঃস্বার্থ কর্মের পথ।'
      }
    },
    {
      sampradaya: 'gaudiya',
      author: 'Srila Prabhupada',
      content: {
        en: 'The Bhagavad-gita here establishes the science of devotional service. One should act in Krishna consciousness for the satisfaction of Krishna. The fruits of all activities should be given to the Supreme Lord. This is called nishkama-karma, or action without fruitive desire.',
        hi: 'भगवद्गीता यहाँ भक्ति सेवा के विज्ञान को स्थापित करती है।'
      }
    },
    {
      sampradaya: 'advaita',
      author: 'Shankaracharya',
      content: {
        en: 'The Self is eternally free and actionless. Actions belong to the body-mind complex, not to the Atman. By renouncing the sense of doership and the desire for fruits, one realizes the non-dual nature of Brahman.',
        hi: 'आत्मा शाश्वत रूप से मुक्त और निष्क्रिय है।'
      }
    },
    {
      sampradaya: 'madhva',
      author: 'Madhvacharya',
      content: {
        en: 'This verse teaches that while performing karma according to one\'s svadharma, one should offer all results to the Supreme Lord Vishnu. The Lord alone is the giver of all fruits, and recognizing this leads to liberation.',
        hi: 'यह श्लोक सिखाता है कि स्वधर्म के अनुसार कर्म करते हुए, सभी फल भगवान विष्णु को अर्पित करने चाहिए।'
      }
    },
    {
      sampradaya: 'sri_vaishnava',
      author: 'Ramanujacharya',
      content: {
        en: 'Actions performed with devotion to Narayana, without selfish desire, purify the heart and lead to moksha. The Supreme Lord is both the means and the end of all spiritual practice.',
        hi: 'नारायण के प्रति भक्ति से किए गए कर्म, बिना स्वार्थी इच्छा के, हृदय को शुद्ध करते हैं और मोक्ष की ओर ले जाते हैं।'
      }
    }
  ],
  relations: {
    related_verses: ['bg-2-48', 'bg-3-19', 'bg-18-66', 'bg-5-10'],
    courses: [],
    guidance: [],
    seva_domains: []
  }
}

// Sample courses
export const sampleCourses: Course[] = [
  {
    id: 'intro-gita',
    title: { en: 'Introduction to Bhagavad Gita', hi: 'भगवद्गीता परिचय', bn: 'ভগবদ্গীতা পরিচিতি' },
    description: { 
      en: 'A foundational course exploring the timeless wisdom of the Gita for modern life.',
      hi: 'आधुनिक जीवन के लिए गीता के शाश्वत ज्ञान की खोज करने वाला एक आधारभूत पाठ्यक्रम।',
      bn: 'আধুনিক জীবনের জন্য গীতার কালজয়ী জ্ঞান অন্বেষণকারী একটি মৌলিক কোর্স।'
    },
    level: 'beginner',
    ageGroups: ['students', 'professionals'],
    verseCount: 18
  },
  {
    id: 'karma-yoga-deep',
    title: { en: 'Karma Yoga: Path of Action', hi: 'कर्म योग: कर्म का मार्ग', bn: 'কর্মযোগ: কর্মের পথ' },
    description: { 
      en: 'Deep dive into the philosophy of selfless action and its practical application.',
      hi: 'निःस्वार्थ कर्म के दर्शन और उसके व्यावहारिक अनुप्रयोग का गहरा अध्ययन।',
      bn: 'নিঃস্বার্থ কর্মের দর্শন এবং এর ব্যবহারিক প্রয়োগের গভীর আলোচনা।'
    },
    level: 'intermediate',
    ageGroups: ['professionals', 'elders'],
    verseCount: 45
  },
  {
    id: 'gita-for-kids',
    title: { en: 'Gita Stories for Kids', hi: 'बच्चों के लिए गीता की कहानियाँ', bn: 'শিশুদের জন্য গীতার গল্প' },
    description: { 
      en: 'Simplified teachings through engaging stories and activities.',
      hi: 'आकर्षक कहानियों और गतिविधियों के माध्यम से सरल शिक्षाएँ।',
      bn: 'আকর্ষণীয় গল্প এবং ক্রিয়াকলাপের মাধ্যমে সরল শিক্ষা।'
    },
    level: 'beginner',
    ageGroups: ['kids'],
    verseCount: 10
  }
]

// Sample guidance topics
export const sampleGuidance: GuidanceTopic[] = [
  { 
    id: 'stress', 
    title: { en: 'Managing Stress', hi: 'तनाव प्रबंधन', bn: 'মানসিক চাপ ব্যবস্থাপনা' }, 
    category: 'Mental Health', 
    description: { en: 'Vedic wisdom for finding peace amid chaos', hi: 'अशांति के बीच शांति खोजने के लिए वैदिक ज्ञान', bn: 'অশান্তির মধ্যে শান্তি খোঁজার জন্য বৈদিক জ্ঞান' } 
  },
  { 
    id: 'decision', 
    title: { en: 'Making Decisions', hi: 'निर्णय लेना', bn: 'সিদ্ধান্ত গ্রহণ' }, 
    category: 'Life Skills', 
    description: { en: 'Using dharmic principles for clear choices', hi: 'स्पष्ट विकल्पों के लिए धार्मिक सिद्धांतों का उपयोग करना', bn: 'স্পষ্ট পছন্দের জন্য ধার্মিক নীতির ব্যবহার' } 
  },
  { 
    id: 'relationships', 
    title: { en: 'Harmonious Relationships', hi: 'सौहार्दपूर्ण संबंध', bn: 'সুসংগত সম্পর্ক' }, 
    category: 'Family', 
    description: { en: 'Ancient wisdom for modern relationships', hi: 'आधुनिक संबंधों के लिए प्राचीन ज्ञान', bn: 'আধুনিক সম্পর্কের জন্য প্রাচীন জ্ঞান' } 
  },
  { 
    id: 'purpose', 
    title: { en: 'Finding Purpose', hi: 'उद्देश्य खोजना', bn: 'উদ্দেশ্য অনুসন্ধান' }, 
    category: 'Self-Discovery', 
    description: { en: 'Discovering your svadharma', hi: 'अपने स्वधर्म की खोज', bn: 'আপনার স্বধর্ম আবিষ্কার' } 
  }
]

// Sample seva domains
export const sevaDomains: SevaDomain[] = [
  { 
    id: 'family', 
    sanskrit: 'कुटुम्ब', 
    hindi: 'कुटुम्ब',
    bengali: 'কুটুম্ব',
    english: 'Family', 
    description: { en: 'Nurturing family bonds and values', hi: 'पारिवारिक बंधनों और मूल्यों का पोषण', bn: 'পারিবারিক বন্ধন এবং মূল্যবোধের লালনপালন' } 
  },
  { 
    id: 'ecology', 
    sanskrit: 'पर्यावरण', 
    hindi: 'पर्यावरण',
    bengali: 'পরিবেশ',
    english: 'Ecology', 
    description: { en: 'Environmental stewardship and respect for nature', hi: 'पर्यावरण प्रबंधन और प्रकृति के प्रति सम्मान', bn: 'পরিবেশগত স্টুয়ার্ডশিপ এবং প্রকৃতির প্রতি শ্রদ্ধা' } 
  },
  { 
    id: 'education', 
    sanskrit: 'शिक्षा', 
    hindi: 'शिक्षा',
    bengali: 'শিক্ষা',
    english: 'Education', 
    description: { en: 'Spreading knowledge and wisdom', hi: 'ज्ञान और बुद्धिमत्ता का प्रसार', bn: 'জ্ঞান ও প্রজ্ঞা বিস্তার' } 
  },
  { 
    id: 'health', 
    sanskrit: 'आरोग्य', 
    hindi: 'आरोग्य',
    bengali: 'আরোগ্য',
    english: 'Health', 
    description: { en: 'Holistic wellbeing practices', hi: 'समग्र कल्याण प्रथाएँ', bn: 'সামগ্রিক সুস্থতা অনুশীলন' } 
  },
  { 
    id: 'community', 
    sanskrit: 'समाज', 
    hindi: 'समाज',
    bengali: 'সমাজ',
    english: 'Community', 
    description: { en: 'Service to society', hi: 'समाज की सेवा', bn: 'সমাজের সেবা' } 
  }
]
