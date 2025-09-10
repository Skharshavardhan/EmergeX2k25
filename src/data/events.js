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
    image: "/lovable-uploads/8dc68a0b-e896-4555-a8bd-e3dd0a1db44e.png",
    rules: [
      "Students with basic programming knowledge are eligible",
      "Team Size: Individual or Team of 2 members",
      "Languages Provided: C, C++, Java, or Python (decided by organizers)",
      "Entry Fee: Per head ₹100 and ₹200 (team of 2)",
      "Round 1: Prelims - Written MCQs, Time Limit: 30 minutes",
      "Round 2: Debugging - Live Programming Round, Time Limit: 40 minutes",
      "No external resources (Google, ChatGPT, IDE autocompletion, etc.) allowed",
      "Misconduct (copying, using prohibited tools, discussing answers, Using AI) leads to disqualification"
    ],
    formUrl: "https://forms.gle/SsxcYZj6XFqz3d8T8",
    ruleBookUrl: "https://docs.google.com/document/d/1yMHDlg6pkow83vDtHbon_0rGnTsP-WMsKkly3hCWtHM/edit?usp=sharing",
    contacts: [
      { name: "Keerthi Villavan", phone: "93424 12051" }
    ],
    staffCoordinators: [
      { name: "Dr.K.Sharmila", phone: "98403 64700" }
    ]
  },
  {
    id: "websparx",
    title: "Web Sparx",
    category: "Technical",
    tagline: "Design the future of the web",
    image: "/lovable-uploads/1b84cc2f-2245-41e7-8ef0-9f112054c8ed.png",
    rules: [
      "The competition is open to individuals",
      "Each participant must register before the event deadline",
      "Time limit for the event will be strictly followed (2–3 hours)",
      "Topics or problem statements will be given on the spot",
      "Participants can use HTML, CSS, JavaScript",
      "The website must be responsive and work across different screen sizes",
      "All submissions must be original. Plagiarism leads to disqualification",
      "No use of ready-made website builders unless explicitly permitted",
      "Each team must submit the complete source code before time ends",
      "Judges' decision will be final and binding"
    ],
    formUrl: "https://forms.gle/Z3p152HGkRX2Ubgz6",
    ruleBookUrl: "https://docs.google.com/document/d/1W6NPmOqUw07Rj3aHrOzjWWt5zGA1MfthnR0XebvROOo/edit?usp=sharing",
    contacts: [
      { name: "Surya Kalyan", phone: "90301 30798" },
      { name: "Anshika Rai", phone: "7812872774" }
    ],
    staffCoordinators: [
      { name: "Dr.Y.Kalpana", phone: "99400 46310" },
      { name: "Mrs.Arockiya selvi", phone: "89396 57676" }
    ]
  },
  {
    id: "gaming",
    title: "Gaming",
    category: "Technical",
    tagline: "Level up your gaming skills",
    image: "/lovable-uploads/cb159ab2-f1ed-4971-ad89-cf6be760401a.png",
    rules: [
      "Tournament rules and tournament guns only",
      "All players must be registered before the event starts",
      "Team names and in-game names (IGN) must be submitted during registration",
      "Players must ensure their devices are fully charged and have stable internet",
      "Emulators, hacks, scripts, or any third-party modifications are strictly prohibited",
      "Any use of unfair means (aim hacks, wall hacks, auto-aim, etc.) will result in disqualification",
      "No rooftops allowed",
      "If any player gets disconnected, the game will continue — no rematch will be given",
      "Players must maintain sportsmanship and avoid abusive language",
      "The decision of the organizers/judges will be final and binding"
    ],
    formUrl: "https://forms.gle/oFTL42ZzcvQRKYwZ7",
    ruleBookUrl: "https://docs.google.com/document/d/1kqBveMYnTCvn92QwYuwqvcu6xkrRwUc_l3ndcQYQMVc/edit?usp=sharing",
    contacts: [
      { name: "Subramani", phone: "86102 87150" }
    ],
    staffCoordinators: [
      { name: "Dr.V.Subha", phone: "8760290016" }
    ]
  },
  {
    id: "quiz",
    title: "Quiz",
    category: "Non-Technical",
    tagline: "Test your knowledge and win",
    image: "/lovable-uploads/0f191145-79b5-4cf1-9595-052c6a95ecc3.png",
    rules: [
      "Eligibility: All participants must be UG students",
      "Participants must enter the college premises with their respective college ID card",
      "Team Size: Teams must consist (Min of 2 or Max of 3) Members",
      "No changes to team members are allowed once the quiz has started",
      "All participants are expected to maintain good sportsmanship",
      "Any disrespectful or disruptive behavior may lead to disqualification",
      "Cheating in any form is strictly prohibited",
      "No using electronic devices, looking up answers on internet, or receiving outside help"
    ],
    formUrl: "https://forms.gle/REPLACE_WITH_QUIZ_FORM_LINK",
    ruleBookUrl: "https://docs.google.com/document/d/1IK8BI04gc7FUHYUOtEMvLAekEEL40J95DfxuwhnIV0c/edit?usp=sharing",
    contacts: [
      { name: "Sakthi", phone: "6381 907 189" }
    ],
    staffCoordinators: [
      { name: "Dr.K.Kasturi", phone: "9791105811" }
    ]
  },
  {
    id: "innovation-pitch",
    title: "Innovation Pitch",
    category: "Technical",
    tagline: "Present your groundbreaking ideas",
    image: "/lovable-uploads/da09f485-80c2-4702-99db-ff071934edda.png",
    rules: [
      "Platform for young innovators to showcase groundbreaking ideas that solve real-world problems",
      "Choose from domains: Technology & AI, Sustainability & Environment, Healthcare & Biotechnology",
      "Education & Social Impact, Daily Life & Consumer Innovation, Finance Tech",
      "Open/Own Innovative Ideas are also welcome",
      "Round 1 will be on spot",
      "Focus on feasibility and innovation",
      "Original ideas only"
    ],
    formUrl: "https://forms.gle/QCkLTdx4CLeRVjgYA",
    ruleBookUrl: "https://docs.google.com/document/d/1PS3qCnAUuuds29GRqYnPUOzscuuJsvxUor1nkuPGMLM/edit?usp=sharing",
    contacts: [
      { name: "Harshavardhan", phone: "8610539788" },
      { name: "Naresh Kannan", phone: "93448 14237" }
    ],
    staffCoordinators: [
      { name: "Dr. S.Jayashree", phone: "95978 98299" },
      { name: "Mrs. Mary Sheebha", phone: "9094028068" }
    ]
  },

  // NON-TECHNICAL EVENTS
  {
    id: "photography",
    title: "Photography Contest",
    category: "Non-Technical",
    tagline: "Capture moments, create memories",
    image: "/lovable-uploads/f1710c04-0e72-4563-a109-8aeed1ee44eb.png",
    rules: [
      "Individual participation only; team entries will not be accepted",
      "The topic will be announced on the spot",
      "The submission deadline will be communicated at the time of topic announcement",
      "All photographs must be captured within the campus premises",
      "Participants may use either a DSLR or a mobile phone camera",
      "Editing or post-processing is strictly prohibited",
      "Any edited submission will result in immediate disqualification",
      "The final judgement will be done by the judge"
    ],
    formUrl: "https://forms.gle/C13kotKUM78BTNuN8",
    ruleBookUrl: "https://docs.google.com/document/d/1Z3y4rZupjkEdWT05W6RlNwNQDOGqmND-E-2AnmqDDd8/edit?usp=sharing",
    contacts: [
      { name: "Kasan", phone: "99403 41106" }
    ],
    staffCoordinators: [
      { name: "Dr.K.Sharmila", phone: "98403 64700" }
    ]
  },
  {
    id: "debate",
    title: "Debate",
    category: "Non-Technical",
    tagline: "Speak your mind, win hearts",
    image: "/lovable-uploads/1c6564d1-555f-485e-8b5b-f0af0440d563.png",
    rules: [
      "Open to undergraduate and postgraduate students",
      "Participation can be in teams of 2 or 3, not exceeding 3 members",
      "Preparation time of 10-15 mins will be provided to the team before starting",
      "Each team gets 4–5 minutes for their argument",
      "Rebuttal round (2 minutes) after both sides have spoken",
      "Topics will be given on the spot",
      "Language must be respectful, professional, and free from offensive content",
      "No personal attacks, only argument-based criticism",
      "Use of abusive/offensive language leads to disqualification",
      "Exceeding time limits may lead to negative marking"
    ],
    formUrl: "https://forms.gle/1wJYhRXMjwNAM4sU9",
    ruleBookUrl: "https://docs.google.com/document/d/1KkyGouCq2DKSEuI11OBcM5tSxjdOTpJTXgYcnjsdogM/edit?usp=sharing",
    contacts: [
      { name: "Jeevanantham S.J", phone: "87789 10461" },
      { name: "Kishore", phone: "6382 281 959" }
    ],
    staffCoordinators: [
      { name: "Dr. S.Jayashree", phone: "95978 98299" },
      { name: "Mrs. Mary Sheebha", phone: "9094028068" }
    ]
  },
  {
    id: "adzap",
    title: "Adzap",
    category: "Non-Technical",
    tagline: "Creativity meets marketing genius",
    image: "/lovable-uploads/0237a381-c35e-4457-b4d8-891870a0607f.png",
    rules: [
      "Teams of 3-4 members",
      "Create and present an advertisement",
      "Duration: 5 minutes maximum",
      "Props and costumes allowed",
      "Judged on creativity and impact"
    ],
    formUrl: "https://forms.gle/HCudEyKYjpBYEXZSA",
    ruleBookUrl: "https://docs.google.com/document/d/1p6FdcyW_i4bj3bQgcgelsI8h1XS_qSToRgG0LOseLSw/edit?tab=t.0#heading=h.p0b7yuvkoa9u",
    contacts: [
      { name: "Rahul Krishna", phone: "9840781462" },
      { name: "Poojashree", phone: "73581 91223" }
    ],
    staffCoordinators: [
      { name: "Dr.Y.Kalpana", phone: "99400 46310" },
      { name: "Mrs.Arockiya selvi", phone: "89396 57676" }
    ]
  },
];

// Helper functions to get events by category
export const getTechnicalEvents = () => EVENTS_DATA.filter(event => event.category === "Technical");
export const getNonTechnicalEvents = () => EVENTS_DATA.filter(event => event.category === "Non-Technical");
export const getEventById = (id) => EVENTS_DATA.find(event => event.id === id);