/* src/data/blogPosts.ts */
// ---------------------------------------------------------------------------
//  Blog data & helpers for the GEL blog feature
// ---------------------------------------------------------------------------

/**
 * The different block types that can appear inside a post's content.
 */
export type BlogBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "quote"; text: string; attribution?: string }
  | { type: "image"; src: string; caption?: string }
  | { type: "delegate-quote"; title: string; name: string; role: string; quote: string; image: string; avatars: string[] };

/**
 * Full blog post definition.
 */
export interface BlogPost {
  slug: string; // Used in the URL
  title: string;
  excerpt: string;
  category: string;
  cover: string; // Hero image URL
  date: string; // Human‑readable date (e.g. "2024-03-01")
  readTime: string; // e.g. "5 min read"
  author: string;
  featured?: boolean; // Highlighted on the landing page
  content: BlogBlock[];
}

// ---------------------------------------------------------------------------
//  Categories (first entry is the pseudo‑category "All Posts")
// ---------------------------------------------------------------------------
export const CATEGORIES = [
  "All Posts",
  "Finland Education",
  "Green School Bali",
  "Global India Leadership Programme",
  "AI & Future Skills",
  "Sustainability",
] as const;

// ---------------------------------------------------------------------------
//  14 sample posts – replace the placeholder data with real copy when ready
// ---------------------------------------------------------------------------
export const blogPosts: BlogPost[] = [
  {
    slug: "global-india-leadership-programme-ai-era",
    title: "Inside the Global India Leadership Programme: Oxford, Cambridge and the AI Era",
    excerpt: "The Global India Leadership Programme (GILP) brings India's most promising young leaders to the intellectual capitals of the world.",
    category: "Global India Leadership Programme",
    cover: "", // Intentionally left empty as per design
    date: "March 15, 2024",
    readTime: "8 min read",
    author: "GEL Editorial Team",
    featured: true,
    content: [
      {
        type: "paragraph",
        text: "The Global India Leadership Programme (GILP) is a unique initiative by the Global Education Lab, designed for India's brightest young minds to experience world-class academic ecosystems. This year, our cohort embarked on an intensive journey through Oxford and Cambridge, exploring the intersection of traditional leadership and emerging technologies."
      },
      {
        type: "paragraph",
        text: "From punting on the River Cam to deep-dive seminars on Artificial Intelligence at the Oxford Union, the programme offered a unique blend of cultural immersion and intellectual rigor."
      },
      { type: "image", src: "/src/assets/gilp-brochure-cover.jpg", caption: "GILP delegates received comprehensive study materials and journals for their week-long academic journey." },
      {
        type: "quote",
        text: "Leadership in the 21st century requires an understanding of how technology shapes our world. By bringing these students to the places where modern computing was born, we give them a unique perspective on the future.",
        attribution: "Professor James Sterling, Cambridge"
      },
      {
        type: "paragraph",
        text: "The cohort visited several historic colleges, engaging with faculty members and researchers who are at the forefront of their fields."
      },
      { type: "image", src: "/src/assets/gilp_cohort_1.jpg", caption: "The 2024 cohort outside Trinity College, Cambridge." },
      { type: "heading", text: "Masterclasses in the AI Era" },
      {
        type: "paragraph",
        text: "A key focus of this year's programme was the impact of Artificial Intelligence on global leadership. Through interactive masterclasses, participants explored how AI is transforming industries, from healthcare to finance, and what this means for future leaders."
      },
      { type: "image", src: "/src/assets/gilp-march-2.jpg", caption: "Delegates attending a session on AI and its ethical implications at the University of Oxford." },
      {
        type: "paragraph",
        text: "The sessions were not just theoretical. Students participated in workshops where they developed their own AI-driven solutions to real-world problems, guided by industry experts and academic mentors."
      },
      { type: "image", src: "/src/assets/gilp-march-4.jpg", caption: "Collaborative problem-solving during the design thinking workshop." },
      { type: "heading", text: "Bridging Cultures and Ideas" },
      {
        type: "paragraph",
        text: "Beyond the academics, GILP is about building a global network. Participants had the opportunity to connect with peers from diverse backgrounds, fostering cross-cultural understanding and collaboration."
      },
      { type: "image", src: "/src/assets/gilp-march-5.jpg", caption: "A lively discussion during one of the networking sessions." },
      {
        type: "delegate-quote",
        title: "Hear it from our delegates!",
        name: "Divya Singh",
        role: "Student, Delhi University",
        quote: "The GILP experience was transformative. It challenged my perspectives and opened doors to new ways of thinking about leadership and technology. The connections I made here will last a lifetime.",
        image: "/src/assets/people/person1.jpg",
        avatars: ["/src/assets/people/person2.jpg", "/src/assets/people/person3.jpg", "/src/assets/people/person4.jpg"]
      },
      { type: "image", src: "/src/assets/gilp-march-6.jpg", caption: "The closing formal dinner, celebrating a week of learning and growth." }
    ]
  },
  {
    slug: "finland-education-revolution",
    title: "Finland’s Education Revolution – What the World Can Learn",
    excerpt:
      "Finland consistently tops global education rankings. We unpack the policies and pedagogy behind its success.",
    category: "Finland Education",
    cover: "/assets/blog/finland-cover.jpg",
    date: "2024-02-12",
    readTime: "7 min read",
    author: "Dr. Elisa Nieminen",
    featured: true,
    content: [
      { type: "heading", text: "Why Finland Leads" },
      {
        type: "paragraph",
        text:
          "Finland’s approach is built on trust, teacher autonomy, and a child‑first mindset. Rather than competing for test scores, schools focus on holistic development.",
      },
      {
        type: "quote",
        text:
          "Education is not a race; it’s a lifelong partnership between the child, family and school.",
        attribution: "Sanna Mäkelä – Finnish Ministry of Education",
      },
      { type: "image", src: "/assets/blog/finland-classroom.jpg", caption: "A Finnish classroom with flexible seating" },
      {
        type: "paragraph",
        text:
          "Key take‑aways for other systems include: small class sizes, highly qualified teachers, and a curriculum that allows for creative projects.",
      },
    ],
  },
  {
    slug: "green-school-bali-eco‑learning",
    title: "Green School Bali: Eco‑Learning at Its Best",
    excerpt:
      "A deep‑dive into Bali’s flagship sustainability school where students live and learn inside a forest canopy.",
    category: "Green School Bali",
    cover: "/assets/blog/green‑school‑bali‑cover.jpg",
    date: "2024-03-04",
    readTime: "6 min read",
    author: "Rangga Surya",
    content: [
      { type: "heading", text: "Learning Among the Trees" },
      {
        type: "paragraph",
        text:
          "At Green School, classrooms are built from bamboo, and lessons often take place on open‑air decks overlooking the river.",
      },
      {
        type: "quote",
        text: "Our students become custodians of the earth, not just consumers.",
        attribution: "Founder – John & Gayle D’Haene",
      },
      { type: "image", src: "/assets/blog/green‑school‑bali‑playground.jpg", caption: "Students building a bamboo structure" },
      {
        type: "paragraph",
        text:
          "Curriculum pillars include sustainability, entrepreneurship, and mindfulness – a model many schools now emulate.",
      },
    ],
  },
  {
    slug: "global-india-leadership-programme-ai-era",
    title: "Inside the Global India Leadership Programme – Redefining Leadership in the AI Era",
    excerpt:
      "How AI is reshaping leadership mind‑sets and why India is emerging as a talent hub.",
    category: "Global India Leadership Programme",
    cover: "/Blog/Inside the Global India Leadership Programme Redefining Leadership in the AI Era.jpg",
    date: "2024-01-21",
    readTime: "8 min read",
    author: "Sam Tully",
    featured: true,
    content: [
      { type: "heading", text: "Why AI Matters for Leaders" },
      {
        type: "paragraph",
        text:
          "Artificial intelligence is no longer a back‑office tool. It drives strategy, product development, and even people‑management decisions.",
      },
      {
        type: "quote",
        text:
          "Great leaders now need to ask the right AI‑driven questions, not just understand the tech.",
        attribution: "Prof. Rajiv Malhotra – GILP Mentor",
      },
      { type: "image", src: "/assets/blog/gilp‑session.jpg", caption: "GILP participants discussing AI use‑cases" },
      {
        type: "paragraph",
        text:
          "The programme blends case studies, hands‑on labs, and mentorship from AI pioneers, preparing alumni for a data‑first world.",
      },
    ],
  },
  {
    slug: "ai‑future‑skills‑bootcamp‑summary",
    title: "AI Future Skills Bootcamp: Key Takeaways",
    excerpt:
      "From prompt engineering to ethical AI, here’s what participants walked away with.",
    category: "AI & Future Skills",
    cover: "/assets/blog/ai‑bootcamp‑cover.jpg",
    date: "2024-04-10",
    readTime: "5 min read",
    author: "Leena Patel",
    content: [
      { type: "heading", text: "The Curriculum at a Glance" },
      {
        type: "paragraph",
        text:
          "Four intensive modules covering foundation models, data pipelines, responsible AI, and product‑level integration.",
      },
      {
        type: "quote",
        text:
          "AI is a skill set – like learning a language – that must be practiced daily.",
        attribution: "Dr. Anika Sharma, Bootcamp Lead",
      },
      { type: "image", src: "/assets/blog/bootcamp‑lab.jpg", caption: "Students working on a generative‑AI lab" },
      {
        type: "paragraph",
        text:
          "Graduates now lead AI initiatives in fintech, health‑tech, and social enterprises across the globe.",
      },
    ],
  },
  {
    slug: "sustainable‑learning‑with‑circular‑curriculum",
    title: "Sustainable Learning: The Circular Curriculum Model",
    excerpt:
      "How a closed‑loop curriculum reduces waste, encourages reuse, and builds deeper mastery.",
    category: "Sustainability",
    cover: "/assets/blog/circular‑curriculum‑cover.jpg",
    date: "2024-02-28",
    readTime: "6 min read",
    author: "Maya Singh",
    content: [
      { type: "heading", text: "What Is a Circular Curriculum?" },
      {
        type: "paragraph",
        text:
          "Instead of a linear “teach‑test‑forget” model, circular curricula revisit concepts multiple times, each with increasing complexity.",
      },
      {
        type: "quote",
        text:
          "Learning, like ecosystems, thrives on feedback and regeneration.",
        attribution: "Prof. Henrik Lund – Copenhagen",
      },
      { type: "image", src: "/assets/blog/circular‑diagram.jpg", caption: "Diagram of the circular learning loop" },
      {
        type: "paragraph",
        text:
          "Pilot programmes in Finland and Brazil have shown a 30 % boost in retention and a 20 % reduction in material waste.",
      },
    ],
  },
  {
    slug: "innovation‑labs‑at‑cambridge‑2023‑review",
    title: "Innovation Labs at Cambridge 2023 – A Review",
    excerpt:
      "Highlights from the 2023 Cambridge Innovation Labs – from ideation sprints to venture funding.",
    category: "AI & Future Skills",
    cover: "/assets/blog/cambridge‑labs‑cover.jpg",
    date: "2023-12-15",
    readTime: "9 min read",
    author: "Oliver Grant",
    content: [
      { type: "heading", text: "Program Overview" },
      {
        type: "paragraph",
        text:
          "The labs brought together 40 startups, 12 mentors, and 5 investors for a 3‑day sprint.",
      },
      {
        type: "quote",
        text:
          "We built a prototype that reduced onboarding time for fintech clients by 40 %.",
        attribution: "Team Lead – FinTechX",
      },
      { type: "image", src: "/assets/blog/labs‑prototype.jpg", caption: "Prototype demo during the final pitch" },
      {
        type: "paragraph",
        text:
          "Three startups secured seed funding; the rest left with a validated product‑market fit.",
      },
    ],
  },
  {
    slug: "student‑leadership‑programmes‑2024‑snapshots",
    title: "Student Leadership Programmes 2024 – Snapshots",
    excerpt:
      "Stories from our summer schools, hackathons and entrepreneurship workshops.",
    category: "Finland Education",
    cover: "/assets/blog/student‑leadership‑cover.jpg",
    date: "2024-06-02",
    readTime: "4 min read",
    author: "Harriet Collins",
    featured: true,
    content: [
      { type: "heading", text: "Summer Schools Across Europe" },
      {
        type: "paragraph",
        text:
          "Over 500 students attended our hybrid summer schools, exploring AI ethics, climate tech, and social entrepreneurship.",
      },
      {
        type: "quote",
        text:
          "I discovered my passion for climate‑tech and started a prototype within a week.",
        attribution: "Luca B., Italy",
      },
      { type: "image", src: "/assets/blog/summer‑school‑group.jpg", caption: "Students collaborating on a group project" },
      {
        type: "paragraph",
        text:
          "Alumni now lead initiatives at NGOs, start‑ups, and multinational firms.",
      },
    ],
  },
  {
    slug: "frugal‑innovation‑in‑emerging‑markets",
    title: "Frugal Innovation in Emerging Markets",
    excerpt:
      "Why low‑resource environments are hotbeds for breakthrough solutions.",
    category: "Sustainability",
    cover: "/assets/blog/frugal‑innovation‑cover.jpg",
    date: "2024-05-17",
    readTime: "5 min read",
    author: "Aisha Rahman",
    content: [
      { type: "heading", text: "The Power of Constraints" },
      {
        type: "paragraph",
        text:
          "When budgets are tight, teams focus on lean design, rapid prototyping, and community co‑creation.",
      },
      {
        type: "quote",
        text:
          "Constraints are the mother of invention – they force us to be purposeful.",
        attribution: "Dr. Nikhil Patel, World Bank",
      },
      { type: "image", src: "/assets/blog/frugal‑prototype.jpg", caption: "Low‑cost solar water pump" },
      {
        type: "paragraph",
        text:
          "Our recent case study from Kenya shows a 70 % cost reduction with a solar‑powered irrigation kit.",
      },
    ],
  },
  {
    slug: "future‑of‑work‑post‑pandemic‑trends",
    title: "The Future of Work Post‑Pandemic: Trends to Watch",
    excerpt:
      "Hybrid‑first offices, AI‑assisted decision‑making and lifelong learning are reshaping careers.",
    category: "AI & Future Skills",
    cover: "/assets/blog/future‑of‑work‑cover.jpg",
    date: "2024-04-30",
    readTime: "6 min read",
    author: "Tomás García",
    content: [
      { type: "heading", text: "Hybrid Becomes the Norm" },
      {
        type: "paragraph",
        text:
          "Companies now design workspaces for 2‑3 days a week, investing in digital collaboration tools.",
      },
      {
        type: "quote",
        text:
          "The best talent will choose employers that give them flexibility and up‑skilling opportunities.",
        attribution: "HR Director, GlobalTech",
      },
      { type: "image", src: "/assets/blog/hybrid‑office.jpg", caption: "Hybrid office layout" },
      {
        type: "paragraph",
        text:
          "AI‑driven dashboards help managers track outcomes, not hours, fostering a results‑based culture.",
      },
    ],
  },
  {
    slug: "building‑inclusive‑curricula‑for‑diverse‑learners",
    title: "Building Inclusive Curricula for Diverse Learners",
    excerpt:
      "Pedagogical strategies that respect cultural, linguistic and neuro‑diverse backgrounds.",
    category: "Finland Education",
    cover: "/assets/blog/inclusive‑curricula‑cover.jpg",
    date: "2024-03-22",
    readTime: "7 min read",
    author: "Lina Wu",
    content: [
      { type: "heading", text: "Design Principles" },
      {
        type: "paragraph",
        text:
          "Universal Design for Learning (UDL) provides multiple means of representation, expression and engagement.",
      },
      {
        type: "quote",
        text:
          "When students see themselves reflected in the material, motivation soars.",
        attribution: "Prof. Aino Kallio, University of Helsinki",
      },
      { type: "image", src: "/assets/blog/udl‑classroom.jpg", caption: "UDL‑enabled classroom with tactile resources" },
      {
        type: "paragraph",
        text:
          "Pilot programmes integrating multilingual content saw a 15 % rise in participation among immigrant students.",
      },
    ],
  },
  {
    slug: "green‑tech‑startups‑2023‑recap",
    title: "Green Tech Start‑ups 2023 – Recap & Outlook",
    excerpt:
      "A look at the most promising climate‑tech ventures we backed last year.",
    category: "Sustainability",
    cover: "/assets/blog/green‑tech‑recap‑cover.jpg",
    date: "2023-12-01",
    readTime: "5 min read",
    author: "Evelyn Ng",
    featured: true,
    content: [
      { type: "heading", text: "Top 5 Start‑ups" },
      {
        type: "paragraph",
        text:
          "From solar‑powered water purifiers to AI‑driven carbon‑capture platforms, these ventures are reshaping the climate‑tech landscape.",
      },
      {
        type: "quote",
        text:
          "Our accelerator helped us secure a strategic partnership with a multinational utilities firm.",
        attribution: "Founder – AquaPure",
      },
      { type: "image", src: "/assets/blog/startup‑pitch‑stage.jpg", caption: "Start‑up pitch stage at the Demo Day" },
      {
        type: "paragraph",
        text:
          "Looking ahead, 2024 will focus on scaling and cross‑border collaborations.",
      },
    ],
  },
  {
    slug: "teacher‑training‑in‑the‑age‑of‑AI",
    title: "Teacher Training in the Age of AI",
    excerpt:
      "Empowering educators with AI tools for personalized learning and assessment.",
    category: "AI & Future Skills",
    cover: "/assets/blog/teacher‑ai‑cover.jpg",
    date: "2024-01-15",
    readTime: "4 min read",
    author: "Nicolas Duarte",
    content: [
      { type: "heading", text: "Why Teachers Need AI Skills" },
      {
        type: "paragraph",
        text:
          "AI can automate grading, identify learning gaps, and suggest differentiated resources.",
      },
      {
        type: "quote",
        text:
          "When I use AI‑driven insights, I can spend more time coaching students rather than grading papers.",
        attribution: "Ms. Patel, High‑school Teacher",
      },
      { type: "image", src: "/assets/blog/teacher‑dashboard.jpg", caption: "AI‑powered teacher dashboard" },
      {
        type: "paragraph",
        text:
          "Our blended workshop model combines theory, hands‑on labs, and peer‑review sessions.",
      },
    ],
  },
  {
    slug: "future‑of‑higher‑education‑post‑COVID",
    title: "The Future of Higher Education Post‑COVID",
    excerpt:
      "Hybrid learning, micro‑credentials and global collaborations are redefining the university experience.",
    category: "Finland Education",
    cover: "/assets/blog/higher‑ed‑future‑cover.jpg",
    date: "2024-02-05",
    readTime: "6 min read",
    author: "Dr. Arto Laaksonen",
    content: [
      { type: "heading", text: "Micro‑Credentials & Stackable Degrees" },
      {
        type: "paragraph",
        text:
          "Learners now acquire bite‑sized certificates that stack toward a full degree, increasing flexibility.",
      },
      {
        type: "quote",
        text:
          "I earned a data‑science badge in three months and used it to transition into a new role.",
        attribution: "Alumni – Maria K.",
      },
      { type: "image", src: "/assets/blog/micro‑credential‑badge.jpg", caption: "Digital micro‑credential badge" },
      {
        type: "paragraph",
        text:
          "International joint programmes are expanding, allowing students to study across campuses without extra tuition.",
      },
    ],
  },
  {
    slug: "annual-report-2023",
    title: "Global Education Lab Annual Report 2023 – Impact & Insights",
    excerpt: "A data‑rich recap of our 2023 programmes, learner outcomes, and sustainability milestones.",
    category: "Sustainability",
    cover: "/assets/blog/annual-report-2023-cover.jpg",
    date: "2024-01-05",
    readTime: "6 min read",
    author: "Mikael Andersson",
    content: [
      { type: "heading", text: "Year‑in‑Review Highlights" },
      { type: "paragraph", text: "2023 saw over 2,000 learners across Finland, Bali, India and virtual programmes, with a 30 % increase in AI‑focused courses." },
      { type: "quote", text: "Our impact is measured by lives transformed, not numbers alone.", attribution: "Chief Impact Officer – GEL" },
      { type: "image", src: "/assets/blog/annual-report-2023-infographic.jpg", caption: "Key metrics infographic" },
      { type: "paragraph", text: "Looking ahead, we are scaling the circular curriculum model and expanding our green tech incubator across three new regions." }
    ]
  },
  {
    slug: "global-india-leadership-programme-ai-era",
    title: "Inside the Global India Leadership Programme: Redefining Leadership in the AI Era",
    excerpt: "Exploring how AI transforms leadership across India's burgeoning tech ecosystem.",
    category: "Leadership",
    cover: "/assets/blog/gilp-cover.jpg",
    date: "2023-04-07",
    readTime: "9 min read",
    author: "Global Education Lab",
    content: [
      { type: "paragraph", text: "The global labour market is undergoing rapid transformation..." },
      { type: "quote", text: "Leadership in the AI era demands continuous upskilling.", attribution: "Writer: Global Education Lab" },
      { type: "image", src: "/assets/blog/gilp-image.jpg", caption: "AI-driven leadership workshop" }
    ]
  }
];

// ---------------------------------------------------------------------------
//  Helper functions
// ---------------------------------------------------------------------------
/** Find a post by its slug. */
export const getPostBySlug = (slug: string): BlogPost | undefined =>
  blogPosts.find((p) => p.slug === slug);

/** Get up to three related posts from the same category (excluding the current one). */
export const getRelatedPosts = (current: BlogPost): BlogPost[] => {
  return blogPosts
    .filter((p) => p.category === current.category && p.slug !== current.slug)
    .slice(0, 3);
};
