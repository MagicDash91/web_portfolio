import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const SITE_URL = "https://michaelwiryaseputra.dev"; // update once deployed

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Michael Wiryaseputra — ML & AI Engineer | LLM Specialist",
    template: "%s | Michael Wiryaseputra",
  },
  description:
    "Michael Wiryaseputra is a Machine Learning and AI Engineer specializing in LLMs, RAG frameworks, LangChain, LangGraph, and end-to-end AI deployment. Bootcamp tutor at INTELLIGO.ID, DIBIMBING.ID, and DSAREA.",
  keywords: [
    "Michael Wiryaseputra",
    "ML Engineer",
    "AI Engineer",
    "Machine Learning Engineer",
    "LLM Specialist",
    "RAG",
    "LangChain",
    "LangGraph",
    "Agentic AI",
    "Bootcamp Tutor",
    "Data Scientist",
    "Indonesia AI Engineer",
    "LLMOps",
    "FastAPI",
    "Python",
  ],
  authors: [{ name: "Michael Wiryaseputra", url: SITE_URL }],
  creator: "Michael Wiryaseputra",
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "Michael Wiryaseputra — ML & AI Engineer",
    description:
      "Portfolio of Michael Wiryaseputra — ML & AI Engineer specializing in LLMs, RAG, and agentic AI systems.",
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
    title: "Michael Wiryaseputra — ML & AI Engineer",
    description:
      "Portfolio of Michael Wiryaseputra — ML & AI Engineer specializing in LLMs, RAG, and agentic AI systems.",
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
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Michael Wiryaseputra",
  url: SITE_URL,
  image: `${SITE_URL}/ax.jpg`,
  jobTitle: "Machine Learning & AI Engineer",
  description:
    "ML & AI Engineer specializing in LLMs, RAG frameworks, LangChain, LangGraph, and end-to-end AI deployment.",
  sameAs: [
    "https://www.linkedin.com/in/michael-wiryaseputra/",
    "https://github.com/MagicDash91",
  ],
  knowsAbout: [
    "Machine Learning",
    "Artificial Intelligence",
    "Large Language Models",
    "Retrieval-Augmented Generation",
    "LangChain",
    "LangGraph",
    "Python",
    "FastAPI",
    "LLMOps",
  ],
  email: "michwirja@gmail.com",
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
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
