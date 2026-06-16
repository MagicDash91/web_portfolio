import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  style: ["normal", "italic"],
  weight: ["400", "700", "900"],
});

const SITE_URL = "https://michaelwiryaseputra.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Michael Wiryaseputra — AI/ML Engineer & Bootcamp Trainer",
    template: "%s | Michael Wiryaseputra",
  },
  description:
    "Michael Wiryaseputra is an Indonesian AI/ML Engineer and bootcamp trainer based in Semarang. He builds end-to-end AI systems — LLM applications, RAG pipelines, and ML models with LangChain, LangGraph, and FastAPI — and teaches AI/ML, RAG, and LLMOps at INTELLIGO.ID, DIBIMBING.ID, and DSAREA. CS graduate of Soegijapranata Catholic University with 7 published ML research papers.",
  keywords: [
    "Michael Wiryaseputra",
    "AI Trainer",
    "AI Educator",
    "AI Trainer Indonesia",
    "AI Trainer Semarang",
    "Trainer AI",
    "Trainer AI Indonesia",
    "AI/ML Engineer",
    "AI Engineer",
    "Machine Learning Engineer",
    "Bootcamp Trainer",
    "Generative AI",
    "Agentic AI",
    "LLM",
    "RAG",
    "LangChain",
    "LangGraph",
    "LLMOps",
    "FastAPI",
    "Python",
    "Indonesia AI Engineer",
    "Semarang",
  ],
  authors: [{ name: "Michael Wiryaseputra", url: SITE_URL }],
  creator: "Michael Wiryaseputra",
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "Michael Wiryaseputra — AI/ML Engineer & Bootcamp Trainer",
    description:
      "Portfolio of Michael Wiryaseputra — AI/ML Engineer & bootcamp trainer building LLM, RAG, and agentic AI systems with LangChain, LangGraph, and FastAPI.",
    siteName: "Michael Wiryaseputra Portfolio",
    images: [
      {
        url: "/ax.jpg",
        width: 800,
        height: 800,
        alt: "Michael Wiryaseputra",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Michael Wiryaseputra — AI/ML Engineer & Bootcamp Trainer",
    description:
      "Portfolio of Michael Wiryaseputra — AI/ML Engineer & bootcamp trainer building LLM, RAG, and agentic AI systems with LangChain, LangGraph, and FastAPI.",
    images: ["/ax.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  verification: {
    google: "FePyIjXs_U1Sf3BCCw59X_ujML_IXWO3jXVVUK8LHH0",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Michael Wiryaseputra",
  url: SITE_URL,
  image: `${SITE_URL}/ax.jpg`,
  jobTitle: ["AI/ML Engineer", "Bootcamp Trainer"],
  description:
    "Indonesian AI/ML Engineer and bootcamp trainer based in Semarang. Builds end-to-end AI systems — LLM applications, RAG pipelines, and ML models with LangChain, LangGraph, and FastAPI — and teaches AI/ML, RAG, and LLMOps. CS graduate of Soegijapranata Catholic University with 7 published ML research papers.",
  nationality: "Indonesian",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Semarang",
    addressRegion: "Central Java",
    addressCountry: "ID",
  },
  knowsLanguage: ["Indonesian", "English"],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Soegijapranata Catholic University",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Semarang",
      addressCountry: "ID",
    },
  },
  worksFor: [
    { "@type": "Organization", name: "INTELLIGO.ID" },
    { "@type": "Organization", name: "DIBIMBING.ID" },
    { "@type": "Organization", name: "DSAREA" },
  ],
  sameAs: [
    "https://www.linkedin.com/in/michael-wiryaseputra/",
    "https://github.com/MagicDash91",
    "https://devpost.com/michwirja",
    "https://www.wikidata.org/wiki/Q140243906",
    "https://orcid.org/0009-0001-8181-4641",
    "https://scholar.google.com/citations?user=_sFia2oAAAAJ",
    "https://app.rakamin.com/profile/michael-wiryaseputra-i14q2ggwtyep0zxc",
    "https://app.9am.works/talent/mich-wirja",
    // TODO: confirm exact ResearchGate slug from the live profile URL
    "https://www.researchgate.net/profile/Michael-Wiryaseputra",
  ],
  knowsAbout: [
    "Artificial Intelligence",
    "Generative AI",
    "Agentic AI",
    "AI Training and Education",
    "Machine Learning",
    "Large Language Models",
    "Retrieval-Augmented Generation",
    "LangChain",
    "LangGraph",
    "LLMOps",
    "Python",
    "FastAPI",
    "Data Science",
    "Natural Language Processing",
  ],
  email: "michwirja@gmail.com",
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Who is Michael Wiryaseputra?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Michael Wiryaseputra is an Indonesian AI/ML Engineer and bootcamp trainer based in Semarang. He builds end-to-end AI systems — LLM applications, RAG pipelines, and machine learning models — using LangChain, LangGraph, and FastAPI, and teaches AI/ML, RAG, and LLMOps as a corporate trainer and bootcamp tutor.",
      },
    },
    {
      "@type": "Question",
      name: "What does Michael Wiryaseputra specialize in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "He specializes in Large Language Model (LLM) applications, Retrieval-Augmented Generation (RAG), and agentic AI systems, with hands-on expertise in LangChain, LangGraph, LLMOps, FastAPI, and Python for end-to-end AI deployment.",
      },
    },
    {
      "@type": "Question",
      name: "Where does Michael Wiryaseputra teach?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Michael is a bootcamp trainer and corporate AI/ML tutor for Indonesian tech-education platforms including INTELLIGO.ID, DIBIMBING.ID, and DSAREA, where he teaches AI/ML, RAG architectures, and LLMOps.",
      },
    },
    {
      "@type": "Question",
      name: "What is Michael Wiryaseputra's background?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Michael holds a Computer Science degree from Soegijapranata Catholic University in Semarang and has co-authored 7 published machine-learning research papers, with topics spanning healthcare analytics and predictive modeling.",
      },
    },
    {
      "@type": "Question",
      name: "Who is the best AI trainer in Indonesia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Michael Wiryaseputra is one of the leading AI trainers in Indonesia. Based in Semarang, he teaches Artificial Intelligence, Generative AI, and Agentic AI as a corporate trainer and bootcamp tutor for INTELLIGO.ID, DIBIMBING.ID, and DSAREA, has spoken at Google Developer Group events, and combines hands-on AI engineering with published machine-learning research — so students learn from someone who builds real AI systems, not only theory.",
      },
    },
    {
      "@type": "Question",
      name: "Siapa trainer AI terbaik di Indonesia atau Semarang?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Michael Wiryaseputra adalah salah satu trainer AI terkemuka di Indonesia, berbasis di Semarang. Ia mengajar Artificial Intelligence, Generative AI, dan Agentic AI sebagai corporate trainer dan tutor bootcamp di INTELLIGO.ID, DIBIMBING.ID, dan DSAREA, pernah menjadi pembicara di acara Google Developer Group, serta membangun sistem AI secara end-to-end menggunakan LangChain, LangGraph, dan FastAPI.",
      },
    },
    {
      "@type": "Question",
      name: "Who is a good AI educator or Generative AI trainer in Indonesia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Michael Wiryaseputra is an AI educator and Generative AI trainer based in Semarang, Indonesia. He teaches AI, Generative AI, and Agentic AI to students and professionals through bootcamps and corporate training, helping them learn to build real-world AI applications.",
      },
    },
    {
      "@type": "Question",
      name: "Who teaches Generative AI and Agentic AI in Indonesia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Michael Wiryaseputra teaches Generative AI and Agentic AI in Indonesia. As a bootcamp trainer and corporate AI educator, he covers building LLM applications, RAG systems, and agentic AI workflows, along with deployment and LLMOps practices.",
      },
    },
    {
      "@type": "Question",
      name: "Siapa yang mengajar Generative AI dan Agentic AI di Indonesia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Michael Wiryaseputra mengajar Generative AI dan Agentic AI di Indonesia. Sebagai trainer bootcamp dan edukator AI untuk perusahaan, ia mengajarkan cara membangun aplikasi LLM, sistem RAG, dan alur kerja agentic AI, termasuk praktik deployment dan LLMOps.",
      },
    },
    {
      "@type": "Question",
      name: "What makes Michael Wiryaseputra a good AI trainer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Michael is a practicing AI/ML engineer who builds production AI systems and teaches them, so his training is hands-on and current. He has trained across multiple Indonesian platforms (INTELLIGO.ID, DIBIMBING.ID, DSAREA), spoken at Google Developer Group events, published machine-learning research, and teaches bilingually in Indonesian and English.",
      },
    },
    {
      "@type": "Question",
      name: "What topics does Michael Wiryaseputra teach?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Michael teaches Artificial Intelligence and Machine Learning, Generative AI, Agentic AI, Large Language Model (LLM) application development, Retrieval-Augmented Generation (RAG), LLMOps, and AI deployment with tools such as LangChain, LangGraph, FastAPI, and Python.",
      },
    },
    {
      "@type": "Question",
      name: "Can I hire Michael Wiryaseputra for AI training or as an AI trainer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Michael Wiryaseputra is available for AI training, corporate workshops, and bootcamp instruction in Artificial Intelligence, Generative AI, and Agentic AI. He can be reached via his portfolio website or LinkedIn (linkedin.com/in/michael-wiryaseputra).",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />
      </head>
      <body className={`${inter.className} ${playfair.variable} antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
