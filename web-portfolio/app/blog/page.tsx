import Link from "next/link"
import type { Metadata } from "next"
import { getAllPosts } from "@/lib/posts"

const SITE_URL = "https://michaelwiryaseputra.com"

export const metadata: Metadata = {
  title: "Blog — Generative AI, Agentic AI & LangGraph",
  description:
    "Articles by Michael Wiryaseputra on Generative AI, Agentic AI, LangGraph, RAG, and LLMOps — in English and Bahasa Indonesia.",
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/blog`,
    title: "Blog — Generative AI, Agentic AI & LangGraph | Michael Wiryaseputra",
    description:
      "Articles on Generative AI, Agentic AI, LangGraph, RAG, and LLMOps — in English and Bahasa Indonesia.",
  },
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export default function BlogIndex() {
  const posts = getAllPosts()

  return (
    <main className="max-w-3xl mx-auto px-6 pt-16 pb-10">
      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-black mb-3">Blog</h1>
        <p className="text-slate-400 leading-relaxed">
          Notes on Generative AI, Agentic AI, and building real AI systems — in English &amp; Bahasa Indonesia.
        </p>
      </header>

      <div className="space-y-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block rounded-2xl bg-[#050b13]/90 border border-white/10 hover:border-white/25 transition-colors p-6"
          >
            <div className="flex flex-wrap gap-2 mb-3">
              {post.tags.slice(0, 3).map((t) => (
                <span key={t} className="text-xs px-2.5 py-1 bg-white/10 text-slate-300 rounded-full">
                  {t}
                </span>
              ))}
            </div>
            <h2 className="text-xl font-bold mb-2 leading-snug">{post.title}</h2>
            <p className="text-sm text-slate-400 mb-3 leading-relaxed">{post.description}</p>
            <div className="text-xs text-slate-500">
              {formatDate(post.date)} · {post.readingTime}
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}
