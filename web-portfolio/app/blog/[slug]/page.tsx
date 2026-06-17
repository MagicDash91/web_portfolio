import Link from "next/link"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getAllPosts, getPost, type Block } from "@/lib/posts"

const SITE_URL = "https://michaelwiryaseputra.com"

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}
  const url = `${SITE_URL}/blog/${post.slug}`
  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      authors: ["Michael Wiryaseputra"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  }
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

function renderBlock(block: Block, i: number) {
  switch (block.type) {
    case "h2":
      return (
        <h2 key={i} className="text-2xl md:text-3xl font-bold text-white mt-12 mb-4 leading-snug">
          {block.text}
        </h2>
      )
    case "h3":
      return (
        <h3 key={i} className="text-xl font-bold text-white mt-8 mb-3 leading-snug">
          {block.text}
        </h3>
      )
    case "p":
      return (
        <p key={i} className="text-slate-300 leading-relaxed mb-5">
          {block.text}
        </p>
      )
    case "ul":
      return (
        <ul key={i} className="list-disc pl-6 space-y-2 text-slate-300 mb-6 marker:text-blue-400">
          {block.items.map((it, j) => (
            <li key={j} className="leading-relaxed">
              {it}
            </li>
          ))}
        </ul>
      )
    case "code":
      return (
        <figure key={i} className="mb-6">
          <pre className="rounded-xl bg-[#0a0f1a] border border-white/10 p-4 overflow-x-auto text-sm leading-relaxed">
            <code className="font-mono text-slate-200 whitespace-pre">{block.code}</code>
          </pre>
          {block.caption && (
            <figcaption className="text-xs text-slate-500 mt-2">{block.caption}</figcaption>
          )}
        </figure>
      )
    case "image":
      return (
        <figure key={i} className="mb-6">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={block.src}
            alt={block.alt}
            loading="lazy"
            className="rounded-xl border border-white/10 w-full"
          />
          {block.caption && (
            <figcaption className="text-xs text-slate-500 mt-2 text-center">
              {block.caption}
            </figcaption>
          )}
        </figure>
      )
    case "cta":
      return (
        <div
          key={i}
          className="my-8 rounded-2xl border border-blue-500/30 bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-6"
        >
          <p className="text-slate-200 leading-relaxed mb-4">{block.text}</p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold"
          >
            Get in touch
          </Link>
        </div>
      )
    default:
      return null
  }
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  const url = `${SITE_URL}/blog/${post.slug}`
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: ["en", "id"],
    keywords: post.tags.join(", "),
    image: `${SITE_URL}/ax.jpg`,
    author: { "@type": "Person", name: "Michael Wiryaseputra", url: SITE_URL },
    publisher: { "@type": "Person", name: "Michael Wiryaseputra", url: SITE_URL },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  }

  return (
    <main className="max-w-3xl mx-auto px-6 pt-12 pb-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Link href="/blog" className="text-sm text-blue-400 hover:text-blue-300 transition-colors">
        ← Back to blog
      </Link>

      <article className="mt-6">
        <header className="mb-10">
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((t) => (
              <span key={t} className="text-xs px-2.5 py-1 bg-white/10 text-slate-300 rounded-full">
                {t}
              </span>
            ))}
          </div>
          <h1 className="text-3xl md:text-4xl font-black leading-tight mb-3">{post.title}</h1>
          <div className="text-sm text-slate-500">
            By Michael Wiryaseputra · {formatDate(post.date)} · {post.readingTime}
          </div>
        </header>

        <div>{post.body.map((block, i) => renderBlock(block, i))}</div>
      </article>
    </main>
  )
}
