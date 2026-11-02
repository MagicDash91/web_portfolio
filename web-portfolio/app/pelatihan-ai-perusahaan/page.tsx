import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"

const SITE_URL = "https://michaelwiryaseputra.com"
const PATH = "/pelatihan-ai-perusahaan"
const PAGE_URL = `${SITE_URL}${PATH}`
const LAST_UPDATED_ISO = "2026-11-02"
const LAST_UPDATED_ID = "2 November 2026"
const CONTACT_MAIL = "mailto:michwirja@gmail.com?subject=Pelatihan%20AI%20untuk%20Perusahaan"

export const metadata: Metadata = {
  title: { absolute: "Corporate AI Training Indonesia — Michael Wiryaseputra" },
  description:
    "Pelatihan AI untuk perusahaan dari Semarang, Indonesia: Generative AI untuk kerja lebih cepat, LangChain, dan LangGraph. Level pemula hingga teknis.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Corporate AI Training Indonesia — Michael Wiryaseputra",
    description:
      "Pelatihan AI untuk perusahaan dan instansi: Generative AI untuk produktivitas, LangChain, dan LangGraph (Agentic AI). Pemula hingga teknis.",
    locale: "id_ID",
  },
}

// ── Data (verified facts only; every proof item links to its source) ────────

const PROGRAMS: {
  id: string
  name: string
  nameEn: string
  level: string
  levelEn: string
  audience: string
  points: string[]
  accent: string
}[] = [
  {
    id: "generative-ai-produktivitas",
    name: "Generative AI untuk Kerja Lebih Cepat",
    nameEn: "Generative AI for Everyday Productivity",
    level: "Pemula · tanpa coding",
    levelEn: "beginner, no coding",
    audience:
      "Karyawan non-teknis, tim operasional, admin, marketing, HR, dan pimpinan yang ingin memakai AI dalam pekerjaan sehari-hari.",
    points: [
      "Memakai ChatGPT, Claude, dan Gemini untuk menulis laporan, merangkum dokumen, dan membuat materi presentasi",
      "Menulis prompt yang jelas dan terstruktur agar hasil AI bisa langsung dipakai",
      "Data apa yang tidak boleh dikirim ke AI: menjaga data pribadi dan data sensitif kantor",
      "Praktik langsung dengan contoh pekerjaan dari tim peserta",
    ],
    accent: "from-sky-500 to-cyan-500",
  },
  {
    id: "langchain",
    name: "Membangun Aplikasi AI dengan LangChain",
    nameEn: "Building AI Applications with LangChain",
    level: "Teknis · Python",
    levelEn: "technical, Python",
    audience:
      "Developer, data scientist, dan tim IT yang ingin membuat aplikasi AI sendiri, bukan hanya memakai chatbot.",
    points: [
      "Menghubungkan aplikasi ke model AI seperti Gemini, OpenAI, dan Claude",
      "Membuat chatbot yang menjawab dari dokumen internal perusahaan (RAG)",
      "Menyusun alur kerja AI yang rapi dan mudah dirawat",
      "Studi kasus yang disesuaikan dengan kebutuhan bisnis peserta",
    ],
    accent: "from-blue-500 to-indigo-600",
  },
  {
    id: "langgraph-agentic-ai",
    name: "Agentic AI dengan LangGraph",
    nameEn: "Agentic AI with LangGraph",
    level: "Teknis lanjutan",
    levelEn: "advanced technical",
    audience:
      "Tim engineering yang ingin membangun AI yang bisa menjalankan tugas: memakai tools, mengingat konteks, dan bekerja dalam beberapa langkah.",
    points: [
      "Merancang AI agent dan sistem multi-agent dengan LangGraph",
      "Tool execution, memory, dan alur kerja bertahap",
      "Menggabungkan agent dengan RAG untuk data perusahaan",
      "Memantau dan mengevaluasi aplikasi AI (LLMOps dengan LangSmith)",
    ],
    accent: "from-violet-500 to-fuchsia-600",
  },
]

const CLIENT_PROOF: { org: string; what: string; date: string; href: string }[] = [
  {
    org: "Bank Jateng",
    what: "Pelatihan membangun sistem Agentic AI dengan LangChain, LangGraph, dan Gemini/OpenAI: multi-agent, RAG, tool execution, memory, dan LLMOps. Dibawakan bersama Bayuzen Ahmad.",
    date: "September 2025",
    href: "/blog/pelatihan-agentic-ai-bank-jateng",
  },
  {
    org: "Telkom Semarang × Diskominfo Kabupaten Tegal",
    what: "Sesi Introduction to AI untuk staf instansi: memakai Generative AI untuk membuat aplikasi, desain poster, dan laporan, menulis prompt, serta menjaga data sensitif.",
    date: "Oktober 2026",
    href: "/blog/pelatihan-ai-diskominfo-tegal-telkom-semarang",
  },
]

const PLATFORM_PROOF: { org: string; what: string; date: string; href?: string }[] = [
  {
    org: "INTELLIGO.ID",
    what: "Tutor bootcamp AI/ML: Machine Learning, NLP, LLM, RAG, dan LLMOps (kelas private, semi-private, dan full-class).",
    date: "Mei 2025 – sekarang",
    href: "https://www.intelligo.id/",
  },
  {
    org: "DIBIMBING.ID",
    what: "Tutor bootcamp Data Science & AI/ML Engineer.",
    date: "Desember 2025 – sekarang",
    href: "https://dibimbing.id/layanan/bootcamp/data-science",
  },
  {
    org: "DSAREA",
    what: "Tutor bootcamp AI/ML & Data Engineer: Agentic RAG, Hybrid RAG, LLMOps, dan fine-tuning LLM.",
    date: "September 2025 – sekarang",
    href: "https://www.instagram.com/p/DQWUpkGEk_F/",
  },
  {
    org: "Ioda Academy",
    what: "Tutor bootcamp hybrid membangun aplikasi web dengan AI, online dan tatap muka di Semarang.",
    date: "September – Oktober 2026",
  },
  {
    org: "Samsung Solve for Tomorrow × DIBIMBING.ID",
    what: "Mentor AI untuk tim mahasiswa yang membangun aplikasi pendamping belajar berbasis AI.",
    date: "2026",
  },
]

const TALKS: { event: string; organizer: string; date?: string; href: string }[] = [
  {
    event: "Tech Corner — Beyond Basic RAG: Building Smart AI Agents",
    organizer: "Jagoan Hosting",
    date: "31 Oktober 2026",
    href: "https://www.instagram.com/p/De8zw4XCHSO/",
  },
  {
    event: "Menyusun Strategi Personal Brand: Brainstorming dengan AI",
    organizer: "ASSAI",
    date: "9 September 2026",
    href: "https://www.instagram.com/p/DclkntsviF5/",
  },
  {
    event: "Study Jam — Teaching the Machine",
    organizer: "GDG on Campus Universitas Negeri Surabaya",
    date: "22 April 2026",
    href: "https://gdg.community.dev/events/details/google-gdg-on-campus-universitas-negeri-surabaya-surabaya-indonesia-presents-teaching-the-machine-building-and-evaluating-your-first-ai-model/",
  },
  {
    event: "Guest Speaker — LLMs, RAG & AI Deployment",
    organizer: "Google Developer Group, UIN Syarif Hidayatullah Jakarta",
    href: "https://www.instagram.com/p/DV3JvE8GkPo/",
  },
]

const FORMAT: [string, string][] = [
  ["Level materi", "Dari nol tanpa coding hingga teknis untuk developer, disesuaikan dengan kemampuan peserta."],
  ["Lokasi", "Tatap muka di Semarang dan Jawa Tengah, online untuk seluruh Indonesia, atau hybrid."],
  ["Bahasa", "Bahasa Indonesia atau English."],
  ["Gaya belajar", "Praktik langsung dengan contoh pekerjaan peserta, bukan hanya teori dan slide."],
]

const FAQS: { q: string; a: string }[] = [
  {
    q: "Apakah pelatihan AI ini cocok untuk karyawan yang tidak bisa coding?",
    a: "Ya. Program Generative AI untuk Kerja Lebih Cepat dirancang untuk karyawan non-teknis: peserta belajar memakai ChatGPT, Claude, dan Gemini untuk pekerjaan sehari-hari, menulis prompt yang baik, dan menjaga data sensitif, tanpa perlu menulis kode.",
  },
  {
    q: "Apakah materinya bisa teknis untuk tim developer?",
    a: "Bisa. Untuk tim IT dan engineering tersedia materi teknis berbasis Python: membangun aplikasi AI dengan LangChain dan membangun Agentic AI dengan LangGraph, termasuk RAG untuk dokumen perusahaan dan LLMOps. Level materi disesuaikan dengan kemampuan peserta.",
  },
  {
    q: "Apakah pelatihan bisa dilakukan online atau tatap muka?",
    a: "Keduanya. Sesi tatap muka tersedia di Semarang dan Jawa Tengah, sedangkan sesi online bisa diikuti tim di seluruh Indonesia. Format hybrid juga bisa dibahas sesuai kebutuhan.",
  },
  {
    q: "Pelatihan dibawakan dalam bahasa apa?",
    a: "Bahasa Indonesia atau English, sesuai kebutuhan tim peserta.",
  },
  {
    q: "Bagaimana cara meminta pelatihan AI untuk perusahaan saya?",
    a: "Hubungi Michael Wiryaseputra melalui email michwirja@gmail.com. Ceritakan jumlah peserta, latar belakang tim (teknis atau non-teknis), dan tujuan pelatihan, lalu materi akan disusun sesuai kebutuhan.",
  },
]

// ── JSON-LD ──────────────────────────────────────────────────────────────────

const pageLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "Pelatihan AI untuk Perusahaan — Corporate AI Training Indonesia",
      inLanguage: ["id", "en"],
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#person` },
      mainEntity: { "@id": `${PAGE_URL}#service` },
      datePublished: LAST_UPDATED_ISO,
      dateModified: LAST_UPDATED_ISO,
      breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
    },
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "Corporate AI Training — Pelatihan AI untuk Perusahaan",
      serviceType: "Corporate AI training",
      description:
        "Corporate AI training by Michael Wiryaseputra, AI/ML Engineer & Bootcamp Trainer based in Semarang, Jawa Tengah, Indonesia: Generative AI for everyday productivity, building AI applications with LangChain, and Agentic AI with LangGraph. Beginner-friendly or technical, delivered on-site or online in Bahasa Indonesia or English.",
      url: PAGE_URL,
      provider: { "@id": `${SITE_URL}/#person` },
      isRelatedTo: { "@id": `${SITE_URL}/#service` },
      areaServed: [
        { "@type": "Country", name: "Indonesia" },
        { "@type": "AdministrativeArea", name: "Jawa Tengah" },
        { "@type": "City", name: "Semarang" },
      ],
      availableLanguage: ["id", "en"],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Program pelatihan AI",
        itemListElement: PROGRAMS.map((p) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            "@id": `${PAGE_URL}#${p.id}`,
            name: `${p.name} (${p.nameEn})`,
            description: `${p.level}. ${p.audience}`,
            provider: { "@id": `${SITE_URL}/#person` },
          },
        })),
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Michael Wiryaseputra", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Pelatihan AI untuk Perusahaan", item: PAGE_URL },
      ],
    },
    // No FAQPage node here: the root layout already emits the sitewide FAQPage on
    // every route, and a second FAQPage on one URL is ambiguous for Google.
  ],
}

// ── Page ─────────────────────────────────────────────────────────────────────

const extLink = "text-blue-400 hover:text-blue-300 underline underline-offset-4"

export default function CorporateTrainingPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 pt-12 pb-10" lang="id">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageLd) }} />

      <nav aria-label="Breadcrumb" className="text-xs text-slate-500 mb-8">
        <Link href="/" className="hover:text-white transition-colors">
          Michael Wiryaseputra
        </Link>{" "}
        / <span className="text-slate-400">Pelatihan AI untuk Perusahaan</span>
      </nav>

      {/* Summary: written to be quotable on its own */}
      <header className="mb-14">
        <p className="text-sm font-semibold uppercase tracking-wider text-blue-400 mb-3" lang="en">
          Corporate AI Trainer in Indonesia
        </p>
        <h1 className="text-4xl md:text-5xl font-black leading-tight mb-6">
          Pelatihan AI untuk Perusahaan di Indonesia
        </h1>
        <p className="text-lg text-slate-300 leading-relaxed mb-4">
          <strong className="text-white">Michael Wiryaseputra</strong> adalah AI/ML Engineer &amp; Bootcamp Trainer
          yang berbasis di Semarang, Jawa Tengah, Indonesia, dan memberikan pelatihan AI untuk perusahaan dan
          instansi. Ia telah melatih tim Bank Jateng membangun sistem Agentic AI dengan LangChain dan LangGraph,
          membawakan sesi Introduction to AI untuk Telkom Semarang × Diskominfo Kabupaten Tegal, dan mengajar di
          bootcamp INTELLIGO.ID, DIBIMBING.ID, dan DSAREA.
        </p>
        <p className="text-slate-400 leading-relaxed mb-6">
          Materi bisa dibuat <strong className="text-slate-200">mudah untuk pemula</strong> (memakai Generative AI
          agar pekerjaan lebih cepat, tanpa coding) atau{" "}
          <strong className="text-slate-200">teknis untuk developer</strong> (LangChain dan LangGraph dengan Python).
          Tatap muka di Semarang dan Jawa Tengah, atau online untuk tim di seluruh Indonesia, dalam Bahasa Indonesia
          atau English.
        </p>
        <div className="flex flex-wrap gap-3 mb-6">
          <a
            href={CONTACT_MAIL}
            className="px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-colors"
          >
            Diskusikan pelatihan
          </a>
          <Link
            href="/#experience"
            className="px-5 py-2.5 rounded-full border border-white/20 hover:border-white/40 text-white text-sm font-semibold transition-colors"
          >
            Lihat pengalaman lengkap
          </Link>
        </div>
        <p className="text-xs text-slate-500">
          Terakhir diperbarui: <time dateTime={LAST_UPDATED_ISO}>{LAST_UPDATED_ID}</time> · Semarang, Jawa Tengah,
          Indonesia
        </p>
      </header>

      {/* Programs */}
      <section id="program" className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Program pelatihan</h2>
        <p className="text-slate-400 mb-8 leading-relaxed">
          Tiga program inti. Semuanya bisa digabung dan disesuaikan dengan tim, industri, dan tujuan perusahaan.
        </p>
        <div className="space-y-6">
          {PROGRAMS.map((p) => (
            <article
              key={p.id}
              id={p.id}
              className="rounded-2xl bg-[#050b13]/90 border border-white/10 p-6 relative overflow-hidden"
            >
              <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${p.accent}`} />
              <span className="inline-block text-xs px-2.5 py-1 bg-white/10 text-slate-300 rounded-full mb-3">
                {p.level}
              </span>
              <h3 className="text-xl font-bold mb-1">{p.name}</h3>
              <p className="text-sm text-slate-500 mb-3" lang="en">
                {p.nameEn}
              </p>
              <p className="text-slate-300 mb-4 leading-relaxed">
                <span className="text-slate-400">Untuk: </span>
                {p.audience}
              </p>
              <ul className="space-y-2 text-slate-300">
                {p.points.map((pt) => (
                  <li key={pt} className="flex gap-3 leading-relaxed">
                    <span className="text-blue-400" aria-hidden>
                      ▸
                    </span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* Format */}
      <section id="format" className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Format &amp; cara kerja</h2>
        <dl className="grid sm:grid-cols-2 gap-4">
          {FORMAT.map(([k, v]) => (
            <div key={k} className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
              <dt className="text-sm font-semibold text-white mb-1">{k}</dt>
              <dd className="text-sm text-slate-400 leading-relaxed">{v}</dd>
            </div>
          ))}
        </dl>
        <p className="text-slate-400 mt-6 leading-relaxed">
          Michael bukan hanya pengajar: ia juga AI/ML Engineer yang membangun sistem LLM, RAG, dan Agentic AI dengan
          LangChain, LangGraph, dan FastAPI. Contoh dan latihan di kelas berasal dari cara sistem AI benar-benar
          dibangun.
        </p>
      </section>

      {/* Proof */}
      <section id="pengalaman" className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Pengalaman pelatihan</h2>

        <h3 className="text-lg font-semibold mb-4 text-slate-200">Perusahaan &amp; instansi</h3>
        <div className="space-y-4 mb-10">
          {CLIENT_PROOF.map((c) => (
            <Link
              key={c.org}
              href={c.href}
              className="block rounded-2xl bg-[#050b13]/90 border border-white/10 hover:border-white/25 transition-colors p-5"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                <span className="font-bold">{c.org}</span>
                <span className="text-xs text-slate-500">{c.date}</span>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed mb-2">{c.what}</p>
              <span className="text-xs text-blue-400">Baca studi kasus →</span>
            </Link>
          ))}
        </div>

        <figure className="mb-10">
          <Image
            src="/blog/michael-wiryaseputra-pelatihan-ai-diskominfo-tegal-telkom-semarang.jpg"
            alt="Michael Wiryaseputra membawakan pelatihan AI untuk Telkom Semarang dan Diskominfo Kabupaten Tegal"
            width={1280}
            height={960}
            className="rounded-2xl border border-white/10 w-full h-auto"
            sizes="(min-width: 768px) 720px, 100vw"
          />
          <figcaption className="text-xs text-slate-500 mt-2">
            Pelatihan AI untuk Telkom Semarang × Diskominfo Kabupaten Tegal, Oktober 2026.
          </figcaption>
        </figure>

        <h3 className="text-lg font-semibold mb-4 text-slate-200">Platform bootcamp</h3>
        <ul className="space-y-3 mb-10">
          {PLATFORM_PROOF.map((p) => (
            <li key={p.org} className="border-l-2 border-white/15 pl-4">
              <div className="flex flex-wrap items-baseline gap-x-3">
                {p.href ? (
                  <a href={p.href} target="_blank" rel="noopener noreferrer" className={`font-semibold ${extLink}`}>
                    {p.org}
                  </a>
                ) : (
                  <span className="font-semibold">{p.org}</span>
                )}
                <span className="text-xs text-slate-500">{p.date}</span>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">{p.what}</p>
            </li>
          ))}
        </ul>

        <h3 className="text-lg font-semibold mb-4 text-slate-200">Pembicara</h3>
        <ul className="space-y-3 mb-10">
          {TALKS.map((t) => (
            <li key={t.href} className="text-sm leading-relaxed">
              <a href={t.href} target="_blank" rel="noopener noreferrer" className={extLink}>
                {t.event}
              </a>
              <span className="text-slate-400">
                {" "}
                · {t.organizer}
                {t.date ? ` · ${t.date}` : ""}
              </span>
            </li>
          ))}
        </ul>

        <h3 className="text-lg font-semibold mb-4 text-slate-200">Riset</h3>
        <p className="text-sm text-slate-400 leading-relaxed">
          Co-author paper machine learning di{" "}
          <a
            href="https://doi.org/10.1109/ICCCNT56998.2023.10306356"
            target="_blank"
            rel="noopener noreferrer"
            className={extLink}
          >
            IEEE ICCCNT 2023
          </a>
          , dengan profil{" "}
          <a
            href="https://scholar.google.com/citations?user=_sFia2oAAAAJ"
            target="_blank"
            rel="noopener noreferrer"
            className={extLink}
          >
            Google Scholar
          </a>{" "}
          terverifikasi.
        </p>
      </section>

      {/* FAQ */}
      <section id="faq" className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Pertanyaan umum</h2>
        <div className="space-y-4">
          {FAQS.map((f) => (
            <article key={f.q} className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
              <h3 className="font-semibold mb-2">{f.q}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{f.a}</p>
            </article>
          ))}
        </div>
      </section>

      {/* English summary */}
      <section id="english" lang="en" className="mb-16 rounded-2xl border border-white/10 bg-white/[0.02] p-6">
        <h2 className="text-2xl font-bold mb-4">Corporate AI Training in Indonesia (English summary)</h2>
        <p className="text-slate-300 leading-relaxed mb-4">
          Michael Wiryaseputra is an AI/ML Engineer &amp; Bootcamp Trainer based in Semarang, Jawa Tengah, Indonesia,
          who delivers corporate AI training for companies and government institutions. He has trained Bank Jateng
          teams to build Agentic AI systems with LangChain and LangGraph, delivered an Introduction to AI session for
          Telkom Semarang × Diskominfo Kabupaten Tegal, and teaches bootcamps at INTELLIGO.ID, DIBIMBING.ID, and DSAREA.
        </p>
        <p className="text-slate-400 leading-relaxed mb-3">Three core programs, beginner-friendly or technical:</p>
        <ul className="space-y-2 text-slate-300 mb-4">
          {PROGRAMS.map((p) => (
            <li key={p.id} className="flex gap-3 leading-relaxed">
              <span className="text-blue-400" aria-hidden>
                ▸
              </span>
              <span>
                <strong className="text-white">{p.nameEn}</strong>
                <span className="text-slate-400"> ({p.levelEn})</span>
              </span>
            </li>
          ))}
        </ul>
        <p className="text-slate-400 leading-relaxed">
          Delivered on-site in Semarang and Central Java or online across Indonesia, in Bahasa Indonesia or English.
          Contact:{" "}
          <a href="mailto:michwirja@gmail.com" className={extLink}>
            michwirja@gmail.com
          </a>
          .
        </p>
      </section>

      {/* CTA */}
      <section className="rounded-2xl bg-gradient-to-br from-blue-600/20 to-violet-600/20 border border-white/10 p-8 text-center">
        <h2 className="text-2xl font-bold mb-3">Siap membawa AI ke tim Anda?</h2>
        <p className="text-slate-300 mb-6 leading-relaxed">
          Ceritakan jumlah peserta, latar belakang tim, dan tujuan pelatihan. Materi akan disusun sesuai kebutuhan.
        </p>
        <a
          href={CONTACT_MAIL}
          className="inline-block px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-colors"
        >
          Email Michael
        </a>
      </section>
    </main>
  )
}
