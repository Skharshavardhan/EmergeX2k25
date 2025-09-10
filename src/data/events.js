// EDITABLE EVENT DATA
// Edit this file to update event information, rules, form links, and contacts

// COUNTDOWN TARGET DATE (Edit this to change countdown)
export const SYMPOSIUM_DATE = new Date('2025-09-16T00:00:00');

// SYMPOSIUM DETAILS
export const SYMPOSIUM_INFO = {
  name: "EmergeX",
  subtitle: "Innovation • Technology • Excellence",
  description: "Join us for the most exciting technical symposium of the year!",
  venue: "VELS University (VISTAS) Pallavaram - Shivalaya"
};

// STAFF COORDINATORS
export const STAFF_COORDINATORS = [
  { name: "Dr. Faculty Coordinator", phone: "98765 43210", email: "faculty@velsuniv.ac.in" },
  { name: "Prof. Event Manager", phone: "98765 43211", email: "events@velsuniv.ac.in" }
];

// EVENTS DATA (Edit rules, form links, and contacts here)
export const EVENTS_DATA = [
  // TECHNICAL EVENTS
  {
    id: "debugging",
    title: "Debugging",
    category: "Technical",
    tagline: "Hunt the bugs, master the code",
    image: "/events/debugging/hero.jpg",
    rules: [
      "Teams of 2-3 members allowed",
      "Duration: 2 hours",
      "Programming languages: C++, Java, Python",
      "No external resources allowed",
      "Bring your own laptop"
    ],
    formUrl: "https://forms.gle/SsxcYZj6XFqz3d8T8",
    ruleBookUrl: "https://docs.google.com/document/d/REPLACE_WITH_DEBUGGING_RULEBOOK_LINK",
    contacts: [
      { name: "Keerthi Villavan", phone: "93424 12051" }
    ]
  },
  {
    id: "websparx",
    title: "Web Sparx",
    category: "Technical",
    tagline: "Design the future of the web",
    image: "/events/websparx/hero.jpg",
    rules: [
      "Individual participation only",
      "Duration: 3 hours",
      "Create a responsive website",
      "HTML, CSS, JavaScript allowed",
      "Original designs only"
    ],
    formUrl: "https://forms.gle/Z3p152HGkRX2Ubgz6",
    ruleBookUrl: "https://docs.google.com/document/d/REPLACE_WITH_WEBSPARX_RULEBOOK_LINK",
    contacts: [
      { name: "Surya Kalyan", phone: "90301 30798" },
      { name: "Anshika Rai", phone: "7812872774" }
    ]
  },
  {
    id: "gaming",
    title: "Gaming",
    category: "Technical",
    tagline: "Level up your gaming skills",
    image: "/events/gaming/hero.jpg",
    rules: [
      "Multiple gaming categories",
      "PUBG Mobile, CS:GO, FIFA",
      "Teams and solo competitions",
      "Bring your own device",
      "Fair play policy strictly enforced"
    ],
    formUrl: "https://forms.gle/oFTL42ZzcvQRKYwZ7",
    ruleBookUrl: "https://docs.google.com/document/d/REPLACE_WITH_GAMING_RULEBOOK_LINK",
    contacts: [
      { name: "Subramani", phone: "86102 87150" }
    ]
  },
  {
    id: "quiz",
    title: "Quiz",
    category: "Technical",
    tagline: "Test your knowledge and win",
    image: "/events/quiz/hero.jpg",
    rules: [
      "Teams of 2-3 members allowed",
      "Multiple rounds of questions",
      "Written and oral rounds",
      "No external help allowed",
      "Time limit for each round"
    ],
    formUrl: "https://forms.gle/REPLACE_WITH_QUIZ_FORM_LINK",
    ruleBookUrl: "https://docs.google.com/document/d/REPLACE_WITH_QUIZ_RULEBOOK_LINK",
    contacts: [
      { name: "Sakthi", phone: "6381 907 189" }
    ]
  },
  {
    id: "innovation-pitch",
    title: "Innovation Pitch",
    category: "Technical",
    tagline: "Present your groundbreaking ideas",
    image: "/events/innovation-pitch/hero.jpg",
    rules: [
      "Teams of 3-5 members",
      "8-minute presentation + 2-minute Q&A",
      "PowerPoint presentation required",
      "Original ideas only",
      "Focus on feasibility and innovation"
    ],
    formUrl: "https://forms.gle/QCkLTdx4CLeRVjgYA",
    ruleBookUrl: "https://docs.google.com/document/d/REPLACE_WITH_INNOVATION_RULEBOOK_LINK",
    contacts: [
      { name: "Harshavardhan", phone: "8610539788" },
      { name: "Naresh Kannan", phone: "93448 14237" }
    ]
  },

  // NON-TECHNICAL EVENTS
  {
    id: "photography",
    title: "Photography Contest",
    category: "Non-Technical",
    tagline: "Capture moments, create memories",
    image: "/events/photography/hero.jpg",
    rules: [
      "Individual participation only",
      "Maximum 3 entries per participant",
      "Original photographs only",
      "Submit in JPEG/PNG format",
      "Resolution: minimum 1920x1080"
    ],
    formUrl: "https://forms.gle/C13kotKUM78BTNuN8",
    ruleBookUrl: "https://docs.google.com/document/d/REPLACE_WITH_PHOTOGRAPHY_RULEBOOK_LINK",
    contacts: [
      { name: "Kasan", phone: "99403 41106" }
    ]
  },
  {
    id: "debate",
    title: "Debate",
    category: "Non-Technical",
    tagline: "Speak your mind, win hearts",
    image: "/events/debate/hero.jpg",
    rules: [
      "Teams of 2 speakers",
      "Oxford Union debate format",
      "Topics revealed 30 minutes before",
      "8 minutes per speaker",
      "Rebuttal rounds included"
    ],
    formUrl: "https://forms.gle/1wJYhRXMjwNAM4sU9",
    ruleBookUrl: "https://docs.google.com/document/d/REPLACE_WITH_DEBATE_RULEBOOK_LINK",
    contacts: [
      { name: "Jeevanantham S.J", phone: "87789 10461" },
      { name: "Kishore", phone: "6382 281 959" }
    ]
  },
  {
    id: "adzap",
    title: "Adzap",
    category: "Non-Technical",
    tagline: "Creativity meets marketing genius",
    image: "/events/adzap/hero.jpg",
    rules: [
      "Teams of 3-4 members",
      "Create and present an advertisement",
      "Duration: 5 minutes maximum",
      "Props and costumes allowed",
      "Judged on creativity and impact"
    ],
    formUrl: "https://forms.gle/HCudEyKYjpBYEXZSA",
    ruleBookUrl: "https://docs.google.com/document/d/REPLACE_WITH_ADZAP_RULEBOOK_LINK",
    contacts: [
      { name: "Rahul Krishna", phone: "9840781462" },
      { name: "Poojashree", phone: "73581 91223" }
    ]
  },
];

// Helper functions to get events by category
export const getTechnicalEvents = () => EVENTS_DATA.filter(event => event.category === "Technical");
export const getNonTechnicalEvents = () => EVENTS_DATA.filter(event => event.category === "Non-Technical");
export const getEventById = (id) => EVENTS_DATA.find(event => event.id === id);