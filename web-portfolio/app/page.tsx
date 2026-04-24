"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import {
  motion,
  useInView,
  useScroll,
  useSpring,
  AnimatePresence,
} from "framer-motion"

// ── Scroll Progress Bar ───────────────────────────────────────────────────────

function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 origin-left z-[100]"
      style={{ scaleX }}
    />
  )
}

// ── Typewriter ────────────────────────────────────────────────────────────────

const ROLES = ["ML & AI Engineer", "LLM Specialist", "Bootcamp Tutor", "Data Scientist"]

function Typewriter() {
  const [text, setText] = useState("")
  const [roleIdx, setRoleIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const role = ROLES[roleIdx]
    if (!deleting && text === role) {
      const t = setTimeout(() => setDeleting(true), 2200)
      return () => clearTimeout(t)
    }
    const t = setTimeout(() => {
      if (deleting) {
        const next = role.slice(0, text.length - 1)
        setText(next)
        if (next.length === 0) {
          setDeleting(false)
          setRoleIdx((i) => (i + 1) % ROLES.length)
        }
      } else {
        setText(role.slice(0, text.length + 1))
      }
    }, deleting ? 40 : 80)
    return () => clearTimeout(t)
  }, [text, deleting, roleIdx])

  return (
    <span>
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
        {text}
      </span>
      <span className="text-blue-500 animate-pulse">|</span>
    </span>
  )
}

// ── Animated Counter ──────────────────────────────────────────────────────────

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [val, setVal] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let frame: number
    const start = performance.now()
    const duration = 1600
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setVal(Math.round(eased * to))
      if (p < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, to])

  return <span ref={ref}>{val}{suffix}</span>
}

// ── Icons ─────────────────────────────────────────────────────────────────────

function GitHubIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

// ── Data ──────────────────────────────────────────────────────────────────────

const experiences = [
  {
    title: "AI/ML Bootcamp Tutor",
    company: "INTELLIGO.ID",
    date: "May 2025 – Present",
    desc: "Teaching and mentoring students across private, semi-private, and full-class bootcamps in AI/ML topics including Machine Learning, NLP, LLMs, RAG frameworks, and LLMOps practices.",
    color: "from-blue-500 to-purple-600",
    tags: ["ML", "NLP", "LLMs", "RAG", "LLMOps"],
  },
  {
    title: "Data Science & AI/ML Engineer Bootcamp Tutor",
    company: "DIBIMBING.ID",
    date: "Dec 2025 – Present",
    desc: "Delivering full-class bootcamp instruction covering comprehensive Data Science and AI/ML curriculum including Machine Learning, NLP, LLMs, RAG frameworks, LLMOps, and data visualization techniques.",
    color: "from-cyan-500 to-blue-600",
    tags: ["Machine Learning", "Data Visualization", "LLMs & RAG"],
  },
  {
    title: "AI/ML & Data Engineer Bootcamp Tutor",
    company: "DSAREA",
    date: "Sep 2025 – Present",
    desc: "Delivering full-class instruction in Machine Learning, NLP, LLMs, Retrieval-Augmented Generation (RAG), and advanced RAG frameworks such as Agentic RAG, Hybrid RAG, and Adaptive RAG. Also teaching LLMOps and hands-on LLM fine-tuning.",
    color: "from-purple-500 to-pink-600",
    tags: ["Agentic RAG", "Hybrid RAG", "LLM Fine-tuning"],
  },
  {
    title: "AI/ML Engineer & Data Engineer Bootcamp Tutor",
    company: "FULLSTACK BANGALORE",
    date: "Jul 2025 – Oct 2025",
    desc: "Delivered comprehensive instruction covering Machine Learning, NLP, LLMs, advanced RAG architectures, LLMOps best practices, and practical LLM fine-tuning techniques.",
    color: "from-green-500 to-teal-600",
    tags: ["LLMs", "RAG Architectures", "LLMOps"],
  },
  {
    title: "Agentic LLM Trainer",
    company: "BANK JATENG",
    date: "Sep 2025",
    desc: "Delivered advanced training on constructing agentic AI systems using LangChain, LangGraph, and Gemini/OpenAI — covering multi-agent coordination, RAG pipelines, tool execution, memory modules, and LLMOps best practices.",
    color: "from-orange-500 to-red-600",
    tags: ["LangChain", "LangGraph", "RAG", "KYC Automation"],
  },
]

const projects = [
  {
    title: "AI-Powered Indonesian Legal Document Analysis",
    desc: "Agentic AI with Google Gemini 2.0, LangChain, and LangGraph to analyze Indonesian legal documents. Upload multiple files and get accurate, structured answers.",
    image: "/law.jpg",
    tags: ["FastAPI", "LangChain", "LangGraph"],
    category: "RAG",
    gradient: "from-blue-400 to-purple-500",
    link: "https://github.com/MagicDash91/ML-Engineering-Project/tree/main/Agentic_AI",
  },
  {
    title: "Medical Claims Anti-Fraud Detection",
    desc: "Dual-pipeline AI combining LLMs with RAG and Computer Vision + OCR to detect potential fraud in medical claim submissions.",
    image: "/medical.jpg",
    tags: ["FastAPI", "PaddleOCR", "LangChain"],
    category: "RAG",
    gradient: "from-green-400 to-blue-500",
    link: "https://github.com/MagicDash91/ML-Engineering-Project/tree/main/Medical_Claims_Anti_Fraud_Detection_System",
  },
  {
    title: "YouTube Sentiment Analysis",
    desc: "Analyzes sentiment of YouTube comments using a pre-trained BERT model and generates word clouds and insights via the Google Gemini API.",
    image: "/youtube.jpg",
    tags: ["LangChain", "FastAPI", "Wordcloud"],
    category: "NLP",
    gradient: "from-purple-400 to-pink-500",
    link: "https://github.com/MagicDash91/ML-Engineering-Project/tree/main/Youtube%20Sentiment%20Analysis",
  },
  {
    title: "Emotion Analyzer Web App",
    desc: "Emotion classification on text datasets with visualization, word clouds, and Google Gemini-powered insights about emotion distributions.",
    image: "/emotion.jpg",
    tags: ["FastAPI", "Wordcloud", "Gemini"],
    category: "NLP",
    gradient: "from-orange-400 to-red-500",
    link: "https://github.com/MagicDash91/ML-Engineering-Project/tree/main/Emotion_Classification",
  },
  {
    title: "Automatic Churn Prediction",
    desc: "Analyzes churn data from DynamoDB with LangChain summaries and Scikit-Learn feature importance analysis over user-specified date ranges.",
    image: "/churn.jpg",
    tags: ["AWS DynamoDB", "FastAPI", "Scikit-learn"],
    category: "ML",
    gradient: "from-teal-400 to-green-500",
    link: "https://github.com/MagicDash91/ML-Engineering-Project/tree/main/Customer%20Churn%20Prediction%20and%20Analyzer",
  },
  {
    title: "Automatic Fraud Prediction",
    desc: "Fraud detection using Random Forest with FastAPI interface for date-range selection, prediction visualization, and LangChain/Gemini natural language insights.",
    image: "/fraud.jpg",
    tags: ["LangChain", "Scikit-Learn", "FastAPI"],
    category: "ML",
    gradient: "from-indigo-400 to-purple-500",
    link: "https://github.com/MagicDash91/ML-Engineering-Project/tree/main/Fraud_Detection_Analysis",
  },
]

const FILTERS = ["All", "NLP", "ML", "RAG"]

const speakingEvents = [
  {
    poster: "/poster1.jpeg",
    event: "Guest Speaker",
    organizer: "Google Developer Group",
    venue: "UIN Syarif Hidayatullah Jakarta",
    topics: ["Machine Learning Model Development", "LLMs & RAG", "End-to-End AI Deployment"],
    color: "from-blue-500 to-green-500",
  },
  {
    poster: "/poster2.jpeg",
    event: "Study Jam #3 — Teaching the Machine",
    organizer: "Google Developer Group",
    venue: "Universitas Negeri Surabaya",
    date: "22 April 2026",
    topics: ["Supervised Learning", "Model Training & Selection", "Evaluation Metrics"],
    color: "from-red-500 to-orange-500",
  },
  {
    poster: "/poster3.jpeg",
    event: "Mini Bootcamp — Road to Hybrid Bootcamp",
    organizer: "Komunitas Excel Indonesia (KEI)",
    venue: "Online",
    date: "11 February 2026",
    topics: ["Basic SQL"],
    color: "from-green-600 to-emerald-500",
  },
]

type TechItem =
  | { name: string; src: string; initials?: never; bg?: never }
  | { name: string; src?: never; initials: string; bg: string }

const techCategories: { title: string; items: TechItem[] }[] = [
  {
    title: "Databases",
    items: [
      { name: "MySQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" },
      { name: "PostgreSQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" },
      { name: "BigQuery", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
      { name: "MongoDB", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" },
    ],
  },
  {
    title: "ML & Python",
    items: [
      { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "TensorFlow", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
      { name: "PyTorch", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
    ],
  },
  {
    title: "LLM & RAG",
    items: [
      { name: "LangChain", src: "/langchain.png" },
      { name: "LangGraph", src: "/langgraph.png" },
      { name: "LangSmith", src: "/langsmith.png" },
      { name: "CrewAI", src: "/crewai.jpg" },
    ],
  },
  {
    title: "Vector DBs",
    items: [
      { name: "FAISS", src: "/faiss.jpg" },
      { name: "ChromaDB", src: "/chroma.png" },
    ],
  },
  {
    title: "Cloud & DevOps",
    items: [
      { name: "GCP", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
      { name: "AWS", src: "/aws.png" },
      { name: "Docker", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Terraform", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" },
    ],
  },
  {
    title: "Web Frameworks",
    items: [
      { name: "Flask", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
      { name: "FastAPI", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
      { name: "Next.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    ],
  },
]

// ── Page ──────────────────────────────────────────────────────────────────────

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("All")
  const filtered =
    activeFilter === "All" ? projects : projects.filter((p) => p.category === activeFilter)

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      <ScrollProgress />

      {/* ─── Navigation ─────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/90 border-b border-slate-100 shadow-sm">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-blue-500/30 hover:ring-blue-500 transition-all duration-300"
          >
            <Image src="/ax.jpg" alt="Michael Wiryaseputra" width={40} height={40} className="object-cover w-full h-full" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:flex items-center gap-8"
          >
            {["About", "Experience", "Speaking", "Projects", "Certifications", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors group py-1"
              >
                {item}
                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300 rounded-full" />
              </a>
            ))}
          </motion.div>
        </nav>
      </header>

      <main>
        {/* ─── Hero ───────────────────────────────────────────────────────── */}
        <section id="about" className="relative min-h-screen flex items-center overflow-hidden bg-white">
          {/* Animated blobs */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-16 -left-20 w-80 h-80 bg-blue-100/70 rounded-full blur-3xl animate-blob" />
            <div className="absolute top-24 right-0 w-96 h-96 bg-purple-100/60 rounded-full blur-3xl animate-blob animation-delay-2000" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-56 bg-cyan-100/50 rounded-full blur-3xl animate-blob animation-delay-4000" />
          </div>

          <div className="relative w-full max-w-7xl mx-auto px-6 py-32 text-center">
            {/* Avatar */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 180, damping: 18, delay: 0.1 }}
              className="relative inline-block mb-8"
            >
              <div className="w-36 h-36 rounded-full p-[3px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto">
                <div className="w-full h-full rounded-full overflow-hidden bg-white">
                  <Image
                    src="/ax.jpg"
                    alt="Michael Wiryaseputra"
                    width={144}
                    height={144}
                    className="object-cover w-full h-full"
                    priority
                  />
                </div>
              </div>
              <motion.div
                className="absolute -inset-3 rounded-full border border-blue-200"
                animate={{ scale: [1, 1.08, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute -inset-6 rounded-full border border-purple-100"
                animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-sm font-semibold text-blue-600 tracking-widest uppercase mb-3"
            >
              Hello, I&apos;m
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl md:text-7xl font-black text-slate-900 mb-5 leading-tight"
            >
              Michael Wiryaseputra
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-2xl md:text-3xl font-bold mb-6 min-h-[2.5rem]"
            >
              <Typewriter />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed mb-10"
            >
              Machine Learning and AI Engineer passionate about building scalable intelligent systems
              and teaching the next generation of ML engineers.
            </motion.p>

            {/* Skill badges */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap justify-center gap-3 mb-10"
            >
              {[
                { label: "AI/ML Engineer", bg: "bg-blue-50 text-blue-700 border-blue-200" },
                { label: "Bootcamp Tutor", bg: "bg-purple-50 text-purple-700 border-purple-200" },
                { label: "LLM Specialist", bg: "bg-green-50 text-green-700 border-green-200" },
                { label: "Data Scientist", bg: "bg-orange-50 text-orange-700 border-orange-200" },
              ].map(({ label, bg }) => (
                <motion.span
                  key={label}
                  whileHover={{ y: -3, scale: 1.05 }}
                  className={`px-5 py-2 rounded-full text-sm font-semibold border ${bg} cursor-default shadow-sm`}
                >
                  {label}
                </motion.span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <motion.a
                href="https://github.com/MagicDash91/ML-Engineering-Project"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 28px rgba(0,0,0,0.18)" }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2.5 px-7 py-3.5 bg-slate-900 text-white rounded-full font-semibold shadow-lg"
              >
                <GitHubIcon /> GitHub
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/michael-wiryaseputra/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 28px rgba(37,99,235,0.35)" }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2.5 px-7 py-3.5 bg-blue-600 text-white rounded-full font-semibold shadow-lg"
              >
                <LinkedInIcon /> LinkedIn
              </motion.a>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3 }}
              className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="flex flex-col items-center gap-1 text-slate-400 text-xs font-medium"
              >
                <span className="tracking-widest uppercase">Scroll</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ─── Stats ──────────────────────────────────────────────────────── */}
        <section className="py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-purple-700">
          <div className="max-w-4xl mx-auto px-6">
            <div className="grid grid-cols-3 gap-8 text-center text-white">
              {[
                { to: 5, suffix: "+", label: "Teaching Roles" },
                { to: 6, suffix: "+", label: "Projects Built" },
                { to: 2, suffix: "", label: "Certifications" },
              ].map((s) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="text-5xl md:text-6xl font-black mb-2 tabular-nums">
                    <Counter to={s.to} suffix={s.suffix} />
                  </div>
                  <div className="text-blue-200 font-medium text-sm tracking-widest uppercase">
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Experience ─────────────────────────────────────────────────── */}
        <section id="experience" className="py-32">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
                Teaching & Mentoring
              </h2>
              <p className="text-slate-500 max-w-xl mx-auto">
                Empowering the next generation of AI/ML engineers through hands-on training and mentorship
              </p>
            </motion.div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 md:left-1/2 md:-translate-x-px" />

              {experiences.map((exp, i) => {
                const isEven = i % 2 === 0
                return (
                  <motion.div
                    key={exp.title}
                    initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.55 }}
                    className={`relative flex mb-10 ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-6 md:left-1/2 z-10 -translate-x-1/2 mt-7">
                      <motion.div
                        whileInView={{ scale: [0, 1.3, 1] }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                        className={`w-4 h-4 rounded-full bg-gradient-to-br ${exp.color} border-2 border-white shadow-md`}
                      />
                    </div>

                    {/* Card */}
                    <div
                      className={`pl-16 md:pl-0 w-full md:w-[46%] ${
                        isEven ? "md:pr-10" : "md:pl-10 md:ml-[54%]"
                      }`}
                    >
                      <motion.div
                        whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
                        className="bg-white border border-slate-100 rounded-2xl p-6 shadow-md transition-all duration-300"
                      >
                        <div className={`h-1 w-12 rounded-full bg-gradient-to-r ${exp.color} mb-4`} />
                        <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                          <h3 className="text-sm font-bold text-slate-900 flex-1 leading-snug">
                            {exp.title}
                          </h3>
                          <span className="text-xs font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full shrink-0">
                            {exp.date}
                          </span>
                        </div>
                        <p
                          className={`text-sm font-bold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent mb-3`}
                        >
                          {exp.company}
                        </p>
                        <p className="text-sm text-slate-500 leading-relaxed mb-4">{exp.desc}</p>
                        <div className="flex flex-wrap gap-2">
                          {exp.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-xs px-2.5 py-1 bg-slate-100 text-slate-600 rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ─── Speaking Events ────────────────────────────────────────────── */}
        <section id="speaking" className="py-32 bg-slate-50">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
                Public Speaking
              </h2>
              <p className="text-slate-500 max-w-xl mx-auto">
                Events where I&apos;ve been invited as a guest speaker to share expertise in AI and ML
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {speakingEvents.map((ev, i) => (
                <motion.div
                  key={ev.event}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: i * 0.15 }}
                  whileHover={{ y: -6 }}
                  className="group bg-white rounded-2xl border border-slate-100 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
                >
                  {/* Poster */}
                  <div className="relative w-full overflow-hidden bg-slate-100" style={{ aspectRatio: "3/4" }}>
                    <Image
                      src={ev.poster}
                      alt={ev.event}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-white text-xs font-bold bg-gradient-to-r ${ev.color} shadow-md`}>
                      Speaker
                    </div>
                  </div>

                  {/* Details */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className={`h-1 w-12 rounded-full bg-gradient-to-r ${ev.color} mb-4`} />
                    <h3 className="text-base font-bold text-slate-900 mb-1 leading-snug">{ev.event}</h3>
                    <p className={`text-sm font-bold bg-gradient-to-r ${ev.color} bg-clip-text text-transparent mb-1`}>
                      {ev.organizer}
                    </p>
                    <p className="text-xs text-slate-500 mb-1">{ev.venue}</p>
                    {ev.date && (
                      <p className="text-xs text-slate-400 mb-4">{ev.date}</p>
                    )}
                    <div className="flex flex-wrap gap-2 mt-auto pt-4">
                      {ev.topics.map((t) => (
                        <span key={t} className="text-xs px-2.5 py-1 bg-slate-100 text-slate-600 rounded-full">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Projects ───────────────────────────────────────────────────── */}
        <section id="projects" className="py-32 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
                Featured Projects
              </h2>
              <p className="text-slate-500 mb-8">A selection of work in NLP, ML, and Agentic RAG</p>

              {/* Filter tabs */}
              <div className="flex flex-wrap justify-center gap-2">
                {FILTERS.map((f) => (
                  <motion.button
                    key={f}
                    onClick={() => setActiveFilter(f)}
                    whileTap={{ scale: 0.95 }}
                    className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                      activeFilter === f
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md"
                        : "bg-white text-slate-600 border border-slate-200 hover:border-blue-300 hover:text-blue-600"
                    }`}
                  >
                    {f}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeFilter}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {filtered.map((project, i) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.07 }}
                    whileHover={{ y: -6 }}
                    className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col"
                  >
                    {/* Image */}
                    <div className={`relative h-48 bg-gradient-to-br ${project.gradient} overflow-hidden shrink-0`}>
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white text-sm font-semibold hover:underline"
                          onClick={(e) => e.stopPropagation()}
                        >
                          View on GitHub →
                        </a>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                        {project.title}
                      </h3>
                      <p className="text-sm text-slate-500 leading-relaxed mb-4 flex-1">
                        {project.desc}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2.5 py-1 bg-slate-100 text-slate-700 rounded-full font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* ─── Tech Stack ─────────────────────────────────────────────────── */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">Tech Stack</h2>
              <p className="text-slate-500">Tools and technologies I work with daily</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {techCategories.map((cat, ci) => (
                <motion.div
                  key={cat.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: ci * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="bg-white border border-slate-100 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <h3 className="text-sm font-bold text-slate-900 mb-6 uppercase tracking-wide">
                    {cat.title}
                  </h3>
                  <div className="flex flex-wrap gap-6 items-center">
                    {cat.items.map((item) => (
                      <motion.div
                        key={item.name}
                        whileHover={{ scale: 1.18, y: -2 }}
                        className="flex flex-col items-center gap-2 cursor-default"
                      >
                        <div className="w-12 h-12 flex items-center justify-center">
                          {item.src ? (
                            <Image
                              src={item.src}
                              alt={item.name}
                              width={48}
                              height={48}
                              className="object-contain"
                            />
                          ) : (
                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.bg} flex items-center justify-center`}>
                              <span className="text-white text-xs font-black tracking-tight">{item.initials}</span>
                            </div>
                          )}
                        </div>
                        <span className="text-xs text-slate-500 font-medium">{item.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Certifications ─────────────────────────────────────────────── */}
        <section id="certifications" className="py-32 bg-slate-50">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
                Certifications
              </h2>
              <p className="text-slate-500">Professional credentials in AI and Cloud</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="group bg-white rounded-2xl p-8 border border-slate-100 shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 to-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <div className="flex flex-col items-center">
                  <div className="mb-6 p-4 bg-slate-50 rounded-2xl group-hover:shadow-inner transition-all">
                    <Image
                      src="/blob.png"
                      alt="AWS Cloud Quest"
                      width={180}
                      height={180}
                      className="object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">AWS Cloud Quest</h3>
                  <p className="text-orange-600 font-semibold text-sm mb-5">
                    Generative AI Practitioner
                  </p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {["Amazon Bedrock", "Amazon Q", "Lambda", "EC2", "S3"].map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 bg-orange-50 text-orange-700 border border-orange-100 rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="group bg-white rounded-2xl p-8 border border-slate-100 shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <div className="flex flex-col items-center">
                  <div className="mb-6 p-4 bg-slate-50 rounded-2xl group-hover:shadow-inner transition-all">
                    <Image
                      src="/bnsp.png"
                      alt="BNSP AI"
                      width={180}
                      height={180}
                      className="object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">BNSP</h3>
                  <p className="text-blue-600 font-semibold text-sm mb-5">Artificial Intelligence</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {["Machine Learning", "Deep Learning", "NLP", "Computer Vision"].map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 bg-blue-50 text-blue-700 border border-blue-100 rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ─── Contact ────────────────────────────────────────────────────── */}
        <section id="contact" className="py-32 relative overflow-hidden bg-white">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-10 left-1/4 w-72 h-72 bg-blue-50 rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-purple-50 rounded-full blur-3xl" />
          </div>
          <div className="relative max-w-3xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
                Let&apos;s Work Together
              </h2>
              <p className="text-lg text-slate-500 mb-12 max-w-xl mx-auto leading-relaxed">
                Ready to bring your ideas to life? Let&apos;s discuss your next project and create
                something amazing together.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.a
                  href="mailto:michwirja@gmail.com"
                  whileHover={{ scale: 1.05, boxShadow: "0 12px 32px rgba(37,99,235,0.25)" }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-base shadow-lg"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Get In Touch
                </motion.a>
                <motion.a
                  href="/AI ML Engineer - Michael Wiryaseputra Complete (1).pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white border-2 border-slate-200 text-slate-700 rounded-full font-semibold text-base hover:border-blue-400 hover:text-blue-600 transition-colors shadow-md"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Resume
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* ─── Footer ─────────────────────────────────────────────────────── */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
            <div>
              <div className="text-2xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-3">
                MW.
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                ML & AI Engineer building scalable intelligent systems.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4 text-xs uppercase tracking-widest">
                Quick Links
              </h4>
              <div className="space-y-2">
                {["About", "Experience", "Projects", "Certifications", "Contact"].map((l) => (
                  <a
                    key={l}
                    href={`#${l.toLowerCase()}`}
                    className="block text-slate-400 hover:text-white text-sm transition-colors"
                  >
                    {l}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4 text-xs uppercase tracking-widest">
                Connect
              </h4>
              <div className="flex gap-3">
                <motion.a
                  href="https://github.com/MagicDash91/ML-Engineering-Project"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-all"
                >
                  <GitHubIcon />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/michael-wiryaseputra/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 transition-all"
                >
                  <LinkedInIcon />
                </motion.a>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
            © 2025 Michael Wiryaseputra. Built with Next.js and Tailwind CSS.
          </div>
        </div>
      </footer>
    </div>
  )
}
