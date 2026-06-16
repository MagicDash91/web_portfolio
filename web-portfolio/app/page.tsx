"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import {
  motion,
  useInView,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useMotionTemplate,
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

const ROLES = ["AI/ML Engineer", "AI Trainer & Educator", "Generative AI Engineer", "Bootcamp Trainer"]

const FAQ_ITEMS: { q: string; a: string }[] = [
  {
    q: "Who is Michael Wiryaseputra?",
    a: "Michael Wiryaseputra is an Indonesian AI/ML Engineer and bootcamp trainer based in Semarang, Central Java. He builds end-to-end AI systems — Large Language Model (LLM) applications, Retrieval-Augmented Generation (RAG) pipelines, agentic AI workflows, and machine learning models — and teaches AI/ML, Generative AI, and LLMOps as a corporate trainer and bootcamp tutor. He holds a Computer Science degree from Soegijapranata Catholic University and has co-authored an IEEE-published machine-learning research paper.",
  },
  {
    q: "What does Michael Wiryaseputra specialize in?",
    a: "Michael specializes in Generative AI and Agentic AI engineering: building LLM applications, Retrieval-Augmented Generation (RAG) systems, and multi-agent workflows. His hands-on stack includes LangChain, LangGraph, CrewAI, FastAPI, and Python, plus classical machine learning (fraud detection, credit risk, churn prediction, customer segmentation, and forecasting) and end-to-end AI deployment with LLMOps practices.",
  },
  {
    q: "Is Michael Wiryaseputra an AI trainer in Indonesia?",
    a: "Yes. Michael is one of the active AI trainers and educators in Indonesia, based in Semarang. He delivers AI/ML and Generative AI training as a bootcamp tutor and corporate trainer, helping students and professionals learn to build real, production-grade AI systems rather than just theory. He teaches bilingually in Indonesian and English.",
  },
  {
    q: "Where does Michael Wiryaseputra teach?",
    a: "Michael teaches as an AI/ML bootcamp trainer for Indonesian tech-education platforms including INTELLIGO.ID, DIBIMBING.ID, and DSAREA. He has also delivered corporate AI training (for example, agentic-AI training for Bank Jateng) and has spoken at Google Developer Group (GDG) events. His teaching covers AI/ML, RAG architectures, agentic AI, and LLMOps.",
  },
  {
    q: "What topics does Michael Wiryaseputra teach?",
    a: "Michael teaches Artificial Intelligence and Machine Learning, Generative AI, Agentic AI, LLM application development, Retrieval-Augmented Generation (RAG) — including advanced patterns like Agentic RAG, Hybrid RAG, and Adaptive RAG — LLM fine-tuning, LLMOps, and end-to-end AI deployment using tools such as LangChain, LangGraph, CrewAI, FastAPI, and Python.",
  },
  {
    q: "Who teaches Generative AI and Agentic AI in Indonesia?",
    a: "Michael Wiryaseputra teaches Generative AI and Agentic AI in Indonesia. As a bootcamp trainer and corporate AI educator, he covers building LLM applications, RAG systems, and agentic AI workflows with multi-agent orchestration, tool execution, and memory — along with deployment and LLMOps best practices.",
  },
  {
    q: "What makes Michael Wiryaseputra a good AI trainer?",
    a: "Michael is a practicing AI/ML engineer who builds production AI systems and teaches them, so his training is hands-on and current rather than purely theoretical. He has trained across multiple Indonesian platforms (INTELLIGO.ID, DIBIMBING.ID, DSAREA), delivered corporate training, spoken at Google Developer Group events, co-authored IEEE-published machine-learning research, and teaches bilingually in Indonesian and English.",
  },
  {
    q: "Can I hire Michael Wiryaseputra for AI training or workshops?",
    a: "Yes. Michael is available for AI training, corporate workshops, and bootcamp instruction in Artificial Intelligence, Generative AI, Agentic AI, RAG, and LLMOps. He can tailor sessions for teams and individuals. You can reach him through this website's contact section or via LinkedIn (linkedin.com/in/michael-wiryaseputra).",
  },
  {
    q: "Does Michael Wiryaseputra do corporate AI training?",
    a: "Yes. Michael delivers corporate AI training and workshops for companies and institutions, including agentic-AI training for Bank Jateng. Corporate sessions cover building practical LLM and agentic AI applications, RAG systems, and responsible AI deployment, customized to the organization's data and use cases.",
  },
  {
    q: "What is Michael Wiryaseputra's background and education?",
    a: "Michael holds a Computer Science degree from Soegijapranata Catholic University in Semarang, Indonesia, and has co-authored an IEEE-published machine-learning research paper (ICCCNT 2023) on feature fusion of fMRI imaging and clinical features for stroke prediction. He combines an academic research foundation with several years of applied AI/ML engineering and teaching experience.",
  },
  {
    q: "What AI tools and frameworks does Michael Wiryaseputra use?",
    a: "Michael works with LangChain, LangGraph, and CrewAI for agentic AI and multi-agent orchestration; FastAPI and Python for backends; scikit-learn and statsmodels for machine learning; and vector databases like FAISS and ChromaDB for RAG. He builds with LLMs from multiple providers and uses LangSmith for observability, with deployment on AWS and Google Cloud.",
  },
  {
    q: "Siapa Michael Wiryaseputra?",
    a: "Michael Wiryaseputra adalah AI/ML Engineer dan trainer bootcamp asal Semarang, Indonesia. Ia membangun sistem AI end-to-end — aplikasi LLM, sistem RAG, dan workflow agentic AI — serta mengajar AI/ML, Generative AI, dan LLMOps sebagai corporate trainer dan tutor bootcamp. Ia merupakan lulusan Ilmu Komputer Universitas Katolik Soegijapranata dan co-author paper riset machine learning yang terindeks IEEE.",
  },
  {
    q: "Siapa trainer AI terbaik di Semarang atau Indonesia?",
    a: "Michael Wiryaseputra adalah salah satu trainer AI terkemuka di Indonesia yang berbasis di Semarang. Ia mengajar Artificial Intelligence, Generative AI, dan Agentic AI sebagai corporate trainer dan tutor bootcamp di INTELLIGO.ID, DIBIMBING.ID, dan DSAREA, serta membangun sistem AI secara end-to-end menggunakan LangChain, LangGraph, dan FastAPI.",
  },
  {
    q: "How can I contact Michael Wiryaseputra?",
    a: "You can contact Michael through the contact section of this website, by email, or via his professional profiles on LinkedIn (linkedin.com/in/michael-wiryaseputra) and GitHub. He is open to AI training engagements, corporate workshops, speaking invitations, and collaboration on AI/ML projects.",
  },
]

const DIFFERENTIATORS: { title: string; desc: string }[] = [
  {
    title: "A builder who teaches",
    desc: "I'm a practicing AI/ML engineer shipping real production systems — so you learn current, real-world practice, not just slides and theory.",
  },
  {
    title: "Hands-on & project-based",
    desc: "Every session is build-along. You don't just watch — you walk away having built working LLM, RAG, and agentic AI applications yourself.",
  },
  {
    title: "Research-backed fundamentals",
    desc: "As an IEEE-published machine-learning researcher, I ground training in solid fundamentals, not hype — so what you learn stays relevant beyond the latest trend.",
  },
  {
    title: "End-to-end, not snippets",
    desc: "I cover the full pipeline — data, ML models, LLM apps, RAG, deployment, and LLMOps — so you understand how real AI systems actually fit together.",
  },
  {
    title: "Bilingual & locally tuned",
    desc: "I teach in both Bahasa Indonesia and English, tailored to the Indonesian tech community, industry context, and real local use cases.",
  },
  {
    title: "Today's agentic stack",
    desc: "I teach the tools teams actually use now — LangChain, LangGraph, CrewAI, agentic and hybrid RAG, and modern LLMOps — kept current as the field moves.",
  },
]

const CARD_GLOWS = [
  "from-blue-500 to-purple-600",
  "from-cyan-500 to-blue-600",
  "from-purple-500 to-pink-600",
  "from-green-500 to-teal-600",
  "from-orange-500 to-red-600",
  "from-indigo-400 to-purple-500",
]

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

// ── Tilt Card (3D tilt + spotlight + glow + sheen) ────────────────────────────

const cardStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
}

const cardItem = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" as const } },
}

const iconPop = {
  hidden: { opacity: 0, scale: 0, y: 10 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 260, damping: 18 },
  },
}

function TiltCard({
  glow,
  tilt = 5,
  className = "",
  children,
}: {
  glow: string
  tilt?: number
  className?: string
  children: React.ReactNode
}) {
  const cardRef = useRef<HTMLDivElement>(null)
  const mx = useMotionValue(50)
  const my = useMotionValue(50)
  const rotateX = useSpring(useTransform(my, [0, 100], [tilt, -tilt]), { stiffness: 250, damping: 24 })
  const rotateY = useSpring(useTransform(mx, [0, 100], [-tilt, tilt]), { stiffness: 250, damping: 24 })
  const spotlight = useMotionTemplate`radial-gradient(320px circle at ${mx}% ${my}%, rgba(255,255,255,0.08), transparent 70%)`

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return
    mx.set(((e.clientX - rect.left) / rect.width) * 100)
    my.set(((e.clientY - rect.top) / rect.height) * 100)
  }

  const handleMouseLeave = () => {
    mx.set(50)
    my.set(50)
  }

  return (
    <div style={{ perspective: 900 }} className="h-full">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="group relative h-full rounded-2xl"
      >
        {/* Glow border on hover */}
        <div
          className={`pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br ${glow} opacity-0 group-hover:opacity-50 blur-[8px] transition-opacity duration-500`}
        />

        <div className={`relative h-full rounded-2xl overflow-hidden ${className}`}>
          {/* Cursor spotlight */}
          <motion.div
            className="pointer-events-none absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{ background: spotlight }}
          />

          {/* Sheen sweep on hover */}
          <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden rounded-2xl">
            <div className="absolute inset-y-0 left-[-60%] w-1/2 skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/[0.07] to-transparent group-hover:translate-x-[400%] transition-transform duration-1000 ease-out" />
          </div>

          {children}
        </div>
      </motion.div>
    </div>
  )
}

// ── Experience Timeline ───────────────────────────────────────────────────────

function ExperienceCard({ exp }: { exp: (typeof experiences)[number] }) {
  return (
    <TiltCard
      glow={exp.color}
      className="bg-[#050b13]/90 backdrop-blur-sm border border-white/10 group-hover:border-white/25 transition-colors duration-300"
    >
      <motion.div
        variants={cardStagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        className="p-6"
      >
          <motion.div variants={cardItem} className={`h-1 w-12 rounded-full bg-gradient-to-r ${exp.color} mb-4`} />
          <motion.div variants={cardItem} className="flex flex-wrap items-start justify-between gap-2 mb-2">
            <h3 className="text-sm font-bold text-white flex-1 leading-snug">
              {exp.title}
            </h3>
            <span className="text-xs font-medium text-slate-400 bg-white/10 border border-white/10 px-3 py-1 rounded-full shrink-0">
              {exp.date}
            </span>
          </motion.div>
          <motion.p
            variants={cardItem}
            className={`text-sm font-bold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent mb-3`}
          >
            {exp.company}
          </motion.p>
          <motion.p variants={cardItem} className="text-sm text-slate-400 leading-relaxed mb-4">
            {exp.desc}
          </motion.p>
          <motion.div variants={cardStagger} className="flex flex-wrap gap-2">
            {exp.tags.map((tag) => (
              <motion.span
                key={tag}
                variants={cardItem}
                whileHover={{ scale: 1.08, y: -2 }}
                className="text-xs px-2.5 py-1 bg-white/10 hover:bg-white/20 text-slate-300 rounded-full cursor-default transition-colors"
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>
      </motion.div>
    </TiltCard>
  )
}

function ExperienceTimeline() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 65%"] })
  const lineScale = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })
  const glowTop = useTransform(lineScale, (v) => `${v * 100}%`)

  return (
    <div ref={ref} className="relative">
      {/* Base track */}
      <div className="absolute left-6 top-0 bottom-0 w-px bg-white/10 md:left-1/2 md:-translate-x-px" />

      {/* Progress line drawn on scroll */}
      <motion.div
        style={{ scaleY: lineScale }}
        className="absolute left-6 top-0 bottom-0 w-px origin-top bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 md:left-1/2 md:-translate-x-px"
      />

      {/* Traveling glow tip */}
      <motion.div
        style={{ top: glowTop }}
        className="absolute left-6 md:left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_16px_5px_rgba(139,92,246,0.5)] z-10"
      />

      {experiences.map((exp, i) => {
        const isEven = i % 2 === 0
        return (
          <motion.div
            key={exp.title}
            initial={{ opacity: 0, x: isEven ? -60 : 60, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className={`relative flex mb-10 ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}
          >
            {/* Timeline node */}
            <div className="absolute left-6 md:left-1/2 z-10 -translate-x-1/2 mt-7">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 300, damping: 14, delay: 0.2 }}
                className="relative"
              >
                <div
                  className={`w-4 h-4 rounded-full bg-gradient-to-br ${exp.color} border-2 border-[#02080f] shadow-[0_0_14px_rgba(139,92,246,0.55)]`}
                />
                <motion.div
                  animate={{ scale: [1, 1.9], opacity: [0.45, 0] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
                  className={`absolute inset-0 rounded-full bg-gradient-to-br ${exp.color}`}
                />
              </motion.div>
            </div>

            {/* Card */}
            <div
              className={`pl-16 md:pl-0 w-full md:w-[46%] ${
                isEven ? "md:pr-10" : "md:pl-10 md:ml-[54%]"
              }`}
            >
              <ExperienceCard exp={exp} />
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}

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
  | { name: string; src: string; whiteBg?: boolean; initials?: never; bg?: never }
  | { name: string; src?: never; initials: string; bg: string; whiteBg?: never }

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
      { name: "LangChain", src: "/langchain.png", whiteBg: true },
      { name: "LangGraph", src: "/langgraph.png", whiteBg: true },
      { name: "LangSmith", src: "/langsmith.png", whiteBg: true },
      { name: "CrewAI", src: "/crewai.jpg" },
    ],
  },
  {
    title: "Vector DBs",
    items: [
      { name: "FAISS", src: "/faiss.jpg", whiteBg: true },
      { name: "ChromaDB", src: "/chroma.png", whiteBg: true },
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

const stackGlows = [
  "from-blue-500 to-cyan-500",
  "from-purple-500 to-pink-500",
  "from-cyan-500 to-teal-500",
  "from-orange-500 to-amber-500",
  "from-indigo-500 to-blue-500",
  "from-green-500 to-emerald-500",
]

// ── Page ──────────────────────────────────────────────────────────────────────

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("All")
  const [navSolid, setNavSolid] = useState(false)
  const filtered =
    activeFilter === "All" ? projects : projects.filter((p) => p.category === activeFilter)

  useEffect(() => {
    const onScroll = () => setNavSolid(window.scrollY > 60)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div className="min-h-screen bg-[#02080f] text-white overflow-x-hidden">
      <ScrollProgress />

      {/* ─── Navigation ─────────────────────────────────────────────────── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          navSolid
            ? "backdrop-blur-xl bg-[#02080f]/90 border-b border-white/10 shadow-lg shadow-black/20"
            : ""
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className={`w-10 h-10 rounded-full overflow-hidden ring-2 transition-all duration-300 ${
              navSolid ? "ring-blue-500/30 hover:ring-blue-500" : "ring-white/25 hover:ring-white/60"
            }`}
          >
            <Image src="/ax.jpg" alt="Michael Wiryaseputra" width={40} height={40} className="object-cover w-full h-full" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:flex items-center gap-8"
          >
            {["About", "Experience", "Speaking", "Projects", "Certifications", "FAQ", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative text-sm font-medium transition-colors group py-1 text-white/75 hover:text-white"
              >
                {item}
                <span
                  className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-300 rounded-full bg-white"
                />
              </a>
            ))}
          </motion.div>
        </nav>
      </header>

      <main className="dot-grid">
        {/* ─── Hero ───────────────────────────────────────────────────────── */}
        <section
          id="about"
          className="relative min-h-[115vh] flex flex-col overflow-hidden"
          style={{ backgroundColor: "#02080f" }}
        >

          {/* Photo — mobile: full-bleed background */}
          <div className="md:hidden absolute inset-0">
            <Image
              src="/header2.png"
              alt="Michael Wiryaseputra"
              fill
              className="object-cover object-top"
              priority
            />
            <div className="absolute inset-0" style={{ background: "rgba(2,8,15,0.72)" }} />
            <div className="absolute inset-0 bg-gradient-to-b from-[#02080f]/60 via-transparent to-[#02080f]" />
          </div>

          {/* Photo — desktop: floating portrait with overlay edge cover */}
          <div className="hidden md:block absolute inset-0 pointer-events-none">
            {/* Image container */}
            <div
              className="absolute overflow-hidden"
              style={{
                right: "-1%",
                top: "46%",
                transform: "translateY(-50%)",
                width: "780px",
                height: "1050px",
              }}
            >
              <Image
                src="/header2.png"
                alt="Michael Wiryaseputra"
                fill
                className="object-cover"
                style={{
                  objectPosition: "center 18%",
                  filter: "brightness(0.82) contrast(1.08) saturate(0.85)",
                }}
                priority
              />
            </div>

            {/* Left edge — solid until past the container boundary, then fades */}
            <div
              className="absolute inset-y-0 left-0 right-0"
              style={{
                background:
                  "linear-gradient(to right, #02080f 0%, #02080f 64%, rgba(2,8,15,0.6) 70%, rgba(2,8,15,0.12) 76%, transparent 82%)",
              }}
            />

            {/* Top edge */}
            <div
              className="absolute top-0 left-0 right-0"
              style={{
                height: "220px",
                background:
                  "linear-gradient(to bottom, #02080f 0%, rgba(2,8,15,0.85) 40%, rgba(2,8,15,0.2) 75%, transparent 100%)",
              }}
            />

            {/* Bottom edge */}
            <div
              className="absolute bottom-0 left-0 right-0"
              style={{
                height: "280px",
                background:
                  "linear-gradient(to top, #02080f 0%, rgba(2,8,15,0.92) 35%, rgba(2,8,15,0.35) 65%, transparent 100%)",
              }}
            />

            {/* Right edge */}
            <div
              className="absolute inset-y-0 right-0"
              style={{
                width: "120px",
                background:
                  "linear-gradient(to left, #02080f 0%, rgba(2,8,15,0.6) 50%, transparent 100%)",
              }}
            />
          </div>

          {/* Crosshair markers */}
          <span className="absolute top-24 left-10 text-white/15 text-lg select-none">+</span>
          <span className="absolute top-24 right-16 text-white/15 text-lg select-none">+</span>
          <span className="absolute bottom-14 left-10 text-white/15 text-lg select-none">+</span>

          {/* Vertical label — right edge */}
          <div
            className="hidden md:flex absolute right-5 top-1/2 -translate-y-1/2 text-white/20 text-[10px] font-medium uppercase select-none"
            style={{ writingMode: "vertical-rl", letterSpacing: "0.35em" }}
          >
            
          </div>

          {/* Content */}
          <div className="relative z-10 flex-1 flex items-center pt-20">
            <div className="max-w-7xl mx-auto w-full px-8 md:px-14">
              <div className="max-w-xl">
                {/* Social link row */}
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center gap-5 mb-10"
                >
                  {[
                    { label: "GH", href: "https://github.com/MagicDash91/ML-Engineering-Project" },
                    { label: "LI", href: "https://www.linkedin.com/in/michael-wiryaseputra/" },
                    { label: "EMAIL", href: "mailto:michwirja@gmail.com" },
                  ].map(({ label, href }, i) => (
                    <span key={label} className="flex items-center gap-5">
                      {i > 0 && <span className="w-px h-3 bg-white/20" />}
                      <a
                        href={href}
                        target={label !== "EMAIL" ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="text-[11px] font-bold text-white/45 hover:text-white tracking-widest uppercase transition-colors duration-200"
                      >
                        {label}
                      </a>
                    </span>
                  ))}
                </motion.div>

                {/* Editorial serif headline */}
                <motion.h1
                  initial={{ opacity: 0, y: 45 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                  className="text-6xl md:text-7xl xl:text-8xl font-bold italic text-white leading-[1.06] mb-5"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Michael<br />Wiryaseputra
                </motion.h1>

                {/* Typewriter role */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.55 }}
                  className="text-lg md:text-xl text-white/65 mb-7 min-h-[1.75rem]"
                >
                  <Typewriter />
                </motion.div>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.65 }}
                  className="text-sm md:text-base text-white/45 leading-relaxed mb-10 max-w-md"
                >
                  AI/ML Engineer and AI trainer based in Semarang, Indonesia — building
                  Generative AI and Agentic AI systems, and teaching the next generation of
                  AI engineers as a bootcamp trainer and educator.
                </motion.p>

                {/* CTA buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.75 }}
                  className="flex flex-wrap gap-4"
                >
                  <motion.a
                    href="https://github.com/MagicDash91/ML-Engineering-Project"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center gap-2.5 px-7 py-3.5 bg-orange-500 hover:bg-orange-400 text-white rounded-full font-semibold text-sm transition-colors shadow-lg shadow-orange-500/25"
                  >
                    <GitHubIcon /> GitHub
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/michael-wiryaseputra/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center gap-2.5 px-7 py-3.5 border border-white/20 hover:border-white/50 text-white/85 hover:text-white rounded-full font-semibold text-sm transition-all backdrop-blur-sm"
                  >
                    <LinkedInIcon /> LinkedIn
                  </motion.a>
                </motion.div>

                {/* Stats row */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                  className="flex gap-10 pt-10 mt-10 border-t border-white/10"
                >
                  {[
                    { value: "5+", label: "Teaching Roles" },
                    { value: "6+", label: "Projects Built" },
                    { value: "2", label: "Certifications" },
                  ].map(({ value, label }) => (
                    <div key={label}>
                      <div className="text-2xl font-black text-white">{value}</div>
                      <div className="text-[11px] text-slate-500 uppercase tracking-widest mt-1">{label}</div>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>

          {/* Bottom gradient → seamless into dark page */}
          <div
            className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
            style={{
              background: "linear-gradient(to bottom, transparent 0%, #02080f 100%)",
            }}
          />

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center gap-1 text-white/35 text-xs font-medium"
            >
              <span className="tracking-widest uppercase">Scroll</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </motion.div>
          </motion.div>
        </section>


        {/* ─── What Sets Me Apart ─────────────────────────────────────────── */}
        <div className="section-divider mx-8" />
        <section id="why" className="py-32 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-indigo-600/5 rounded-full blur-[100px] pointer-events-none" />
          <div className="max-w-5xl mx-auto px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/5 text-indigo-400/80 text-[10px] font-semibold tracking-[0.2em] uppercase mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
                Why Me
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                What Sets Me Apart
              </h2>
              <p className="text-slate-400 max-w-xl mx-auto">
                Why teams and learners choose to work with me as an AI/ML engineer and trainer
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {DIFFERENTIATORS.map((d, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: (i % 2) * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                  <TiltCard
                    glow={CARD_GLOWS[i % CARD_GLOWS.length]}
                    tilt={4}
                    className="bg-[#050b13]/90 border border-white/10 group-hover:border-white/25 transition-colors duration-300 h-full"
                  >
                    <div className="p-6">
                      <h3 className="text-base md:text-lg font-bold text-white mb-2 leading-snug">
                        {d.title}
                      </h3>
                      <p className="text-sm md:text-base text-slate-400 leading-relaxed">
                        {d.desc}
                      </p>
                    </div>
                  </TiltCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Experience ─────────────────────────────────────────────────── */}
        <div className="section-divider mx-8" />
        <section id="experience" className="py-32 relative overflow-hidden">
          {/* Ambient glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[250px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />
          <div className="max-w-5xl mx-auto px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              className="text-center mb-20"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400/80 text-[10px] font-semibold tracking-[0.2em] uppercase mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                Experience
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                Teaching & Mentoring
              </h2>
              <p className="text-slate-400 max-w-xl mx-auto">
                Empowering the next generation of AI/ML engineers through hands-on training and mentorship
              </p>
            </motion.div>

            <ExperienceTimeline />
          </div>
        </section>

        {/* ─── Speaking Events ────────────────────────────────────────────── */}
        <div className="section-divider mx-8" />
        <section id="speaking" className="py-32 relative overflow-hidden">
          <div className="absolute top-0 right-1/4 w-[500px] h-[200px] bg-purple-600/5 rounded-full blur-[100px] pointer-events-none" />
          <div className="max-w-5xl mx-auto px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/20 bg-purple-500/5 text-purple-400/80 text-[10px] font-semibold tracking-[0.2em] uppercase mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                Speaking
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                Public Speaking
              </h2>
              <p className="text-slate-400 max-w-xl mx-auto">
                Events where I&apos;ve been invited as a guest speaker to share expertise in AI and ML
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {speakingEvents.map((ev, i) => (
                <motion.div
                  key={ev.event}
                  initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                  <TiltCard
                    glow={ev.color}
                    tilt={4}
                    className="bg-[#050b13]/90 border border-white/10 group-hover:border-white/25 transition-colors duration-300 flex flex-col"
                  >
                    {/* Poster */}
                    <div className="relative w-full overflow-hidden" style={{ aspectRatio: "3/4" }}>
                      <Image
                        src={ev.poster}
                        alt={ev.event}
                        fill
                        className="object-cover group-hover:scale-[1.06] transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#050b13] via-transparent to-transparent opacity-60 group-hover:opacity-25 transition-opacity duration-500" />
                      <motion.div
                        initial={{ opacity: 0, scale: 0.6, y: -8 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 280, damping: 16, delay: 0.35 + i * 0.12 }}
                        className={`absolute top-4 left-4 px-3 py-1 rounded-full text-white text-xs font-bold bg-gradient-to-r ${ev.color} shadow-md`}
                      >
                        Speaker
                      </motion.div>
                    </div>

                    {/* Details */}
                    <motion.div
                      variants={cardStagger}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, margin: "-60px" }}
                      className="p-6 flex flex-col flex-1"
                    >
                      <motion.div variants={cardItem} className={`h-1 w-12 rounded-full bg-gradient-to-r ${ev.color} mb-4`} />
                      <motion.h3 variants={cardItem} className="text-base font-bold text-white mb-1 leading-snug">
                        {ev.event}
                      </motion.h3>
                      <motion.p
                        variants={cardItem}
                        className={`text-sm font-bold bg-gradient-to-r ${ev.color} bg-clip-text text-transparent mb-1`}
                      >
                        {ev.organizer}
                      </motion.p>
                      <motion.p variants={cardItem} className="text-xs text-slate-400 mb-1">{ev.venue}</motion.p>
                      {ev.date && (
                        <motion.p variants={cardItem} className="text-xs text-slate-500 mb-4">{ev.date}</motion.p>
                      )}
                      <motion.div variants={cardStagger} className="flex flex-wrap gap-2 mt-auto pt-4">
                        {ev.topics.map((t) => (
                          <motion.span
                            key={t}
                            variants={cardItem}
                            whileHover={{ scale: 1.08, y: -2 }}
                            className="text-xs px-2.5 py-1 bg-white/10 hover:bg-white/20 text-slate-300 rounded-full cursor-default transition-colors"
                          >
                            {t}
                          </motion.span>
                        ))}
                      </motion.div>
                    </motion.div>
                  </TiltCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Projects ───────────────────────────────────────────────────── */}
        <div className="section-divider mx-8" />
        <section id="projects" className="relative overflow-hidden">
          <div className="absolute top-0 left-1/4 w-[600px] h-[200px] bg-cyan-600/5 rounded-full blur-[100px] pointer-events-none" />

          <div className="py-24 px-6 max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-400/80 text-[10px] font-semibold tracking-[0.2em] uppercase mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                Projects
              </div>
              <h2 className="text-4xl font-black text-white mb-3">Featured Projects</h2>
              <p className="text-slate-400 text-sm">NLP · ML · Agentic RAG</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {projects.map((project, i) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: i * 0.07, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <TiltCard
                    glow={project.gradient}
                    tilt={4}
                    className="bg-[#050b13]/90 border border-white/10 group-hover:border-white/25 transition-colors duration-300"
                  >
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="block h-full">
                      <div className="relative h-44 overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#050b13] via-black/30 to-transparent" />
                        <span className="absolute top-3 left-3 text-[10px] font-bold px-2 py-1 rounded-full bg-white/15 backdrop-blur-sm text-white">
                          {project.category}
                        </span>
                        {/* Open-repo arrow on hover */}
                        <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
                          </svg>
                        </div>
                      </div>
                      <motion.div
                        variants={cardStagger}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-40px" }}
                        className="p-5"
                      >
                        <motion.h3
                          variants={cardItem}
                          className="text-base font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300"
                        >
                          {project.title}
                        </motion.h3>
                        <motion.p variants={cardItem} className="text-sm text-slate-400 mb-3 leading-relaxed">
                          {project.desc}
                        </motion.p>
                        <motion.div variants={cardStagger} className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <motion.span
                              key={tag}
                              variants={cardItem}
                              className="text-xs px-2.5 py-1 bg-white/10 text-slate-300 rounded-full"
                            >
                              {tag}
                            </motion.span>
                          ))}
                        </motion.div>
                      </motion.div>
                    </a>
                  </TiltCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Tech Stack ─────────────────────────────────────────────────── */}
        <div className="section-divider mx-8" />
        <section className="py-32 relative overflow-hidden">
          <div className="absolute bottom-0 right-1/3 w-[500px] h-[200px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400/80 text-[10px] font-semibold tracking-[0.2em] uppercase mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                Stack
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Tech Stack</h2>
              <p className="text-slate-400">Tools and technologies I work with daily</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {techCategories.map((cat, ci) => (
                <motion.div
                  key={cat.title}
                  initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: ci * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <TiltCard
                    glow={stackGlows[ci % stackGlows.length]}
                    tilt={4}
                    className="bg-[#050b13]/90 border border-white/10 group-hover:border-white/25 transition-colors duration-300"
                  >
                    <div className="p-6">
                      <h3 className="text-sm font-bold text-white mb-6 uppercase tracking-wide">
                        {cat.title}
                      </h3>
                      <motion.div
                        variants={cardStagger}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-40px" }}
                        className="flex flex-wrap gap-6 items-center"
                      >
                        {cat.items.map((item) => (
                          <motion.div
                            key={item.name}
                            variants={iconPop}
                            whileHover={{ scale: 1.18, y: -3, filter: "drop-shadow(0 0 10px rgba(59,130,246,0.55))" }}
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
                                  style={item.whiteBg ? { filter: "invert(1) hue-rotate(180deg)" } : undefined}
                                />
                              ) : (
                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.bg} flex items-center justify-center`}>
                                  <span className="text-white text-xs font-black tracking-tight">{item.initials}</span>
                                </div>
                              )}
                            </div>
                            <span className="text-xs text-slate-400 font-medium">{item.name}</span>
                          </motion.div>
                        ))}
                      </motion.div>
                    </div>
                  </TiltCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Certifications ─────────────────────────────────────────────── */}
        <div className="section-divider mx-8" />
        <section id="certifications" className="py-32 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-orange-600/4 rounded-full blur-[100px] pointer-events-none" />
          <div className="max-w-4xl mx-auto px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/20 bg-orange-500/5 text-orange-400/80 text-[10px] font-semibold tracking-[0.2em] uppercase mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
                Credentials
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                Certifications
              </h2>
              <p className="text-slate-400">Professional credentials in AI and Cloud</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -40, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <TiltCard
                  glow="from-orange-400 to-yellow-400"
                  tilt={4}
                  className="bg-[#050b13]/90 border border-white/10 group-hover:border-white/25 transition-colors duration-300"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 to-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-10" />
                  <motion.div
                    variants={cardStagger}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-60px" }}
                    className="p-8 flex flex-col items-center"
                  >
                    <motion.div variants={cardItem} className="relative mb-6 p-4 bg-white/5 rounded-2xl">
                      <div className="absolute inset-0 rounded-2xl bg-orange-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <motion.div
                        animate={{ y: [0, -7, 0] }}
                        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                        className="relative"
                      >
                        <Image
                          src="/blob.png"
                          alt="AWS Cloud Quest"
                          width={180}
                          height={180}
                          className="object-contain group-hover:scale-105 transition-transform duration-500"
                        />
                      </motion.div>
                    </motion.div>
                    <motion.h3 variants={cardItem} className="text-xl font-bold text-white mb-1">
                      AWS Cloud Quest
                    </motion.h3>
                    <motion.p
                      variants={cardItem}
                      className="font-semibold text-sm mb-5 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent"
                    >
                      Generative AI Practitioner
                    </motion.p>
                    <motion.div variants={cardStagger} className="flex flex-wrap justify-center gap-2">
                      {["Amazon Bedrock", "Amazon Q", "Lambda", "EC2", "S3"].map((tag) => (
                        <motion.span
                          key={tag}
                          variants={cardItem}
                          whileHover={{ scale: 1.08, y: -2 }}
                          className="text-xs px-3 py-1 bg-white/10 hover:bg-white/20 text-slate-300 border border-white/10 rounded-full font-medium cursor-default transition-colors"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </motion.div>
                  </motion.div>
                </TiltCard>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <TiltCard
                  glow="from-blue-500 to-purple-500"
                  tilt={4}
                  className="bg-[#050b13]/90 border border-white/10 group-hover:border-white/25 transition-colors duration-300"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-10" />
                  <motion.div
                    variants={cardStagger}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-60px" }}
                    className="p-8 flex flex-col items-center"
                  >
                    <motion.div variants={cardItem} className="relative mb-6 p-4 bg-white/5 rounded-2xl">
                      <div className="absolute inset-0 rounded-2xl bg-blue-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <motion.div
                        animate={{ y: [0, -7, 0] }}
                        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                        className="relative"
                      >
                        <Image
                          src="/bnsp.png"
                          alt="BNSP AI"
                          width={180}
                          height={180}
                          className="object-contain group-hover:scale-105 transition-transform duration-500"
                        />
                      </motion.div>
                    </motion.div>
                    <motion.h3 variants={cardItem} className="text-xl font-bold text-white mb-1">
                      BNSP
                    </motion.h3>
                    <motion.p
                      variants={cardItem}
                      className="font-semibold text-sm mb-5 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                    >
                      Artificial Intelligence
                    </motion.p>
                    <motion.div variants={cardStagger} className="flex flex-wrap justify-center gap-2">
                      {["Machine Learning", "Deep Learning", "NLP", "Computer Vision"].map((tag) => (
                        <motion.span
                          key={tag}
                          variants={cardItem}
                          whileHover={{ scale: 1.08, y: -2 }}
                          className="text-xs px-3 py-1 bg-white/10 hover:bg-white/20 text-slate-300 border border-white/10 rounded-full font-medium cursor-default transition-colors"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </motion.div>
                  </motion.div>
                </TiltCard>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ─── FAQ ────────────────────────────────────────────────────────── */}
        <div className="section-divider mx-8" />
        <section id="faq" className="py-32 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-teal-600/5 rounded-full blur-[100px] pointer-events-none" />
          <div className="max-w-4xl mx-auto px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal-500/20 bg-teal-500/5 text-teal-400/80 text-[10px] font-semibold tracking-[0.2em] uppercase mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
                FAQ
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-slate-400 max-w-xl mx-auto">
                Common questions about Michael Wiryaseputra — AI/ML Engineer and AI trainer based in Semarang, Indonesia.
              </p>
            </motion.div>

            <div className="space-y-4">
              {FAQ_ITEMS.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <TiltCard
                    glow={CARD_GLOWS[i % CARD_GLOWS.length]}
                    tilt={3}
                    className="bg-[#050b13]/90 border border-white/10 group-hover:border-white/25 transition-colors duration-300"
                  >
                    <div className="p-6">
                      <h3 className="text-base md:text-lg font-bold text-white mb-2 leading-snug">
                        {item.q}
                      </h3>
                      <p className="text-sm md:text-base text-slate-400 leading-relaxed">
                        {item.a}
                      </p>
                    </div>
                  </TiltCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Contact ────────────────────────────────────────────────────── */}
        <div className="section-divider mx-8" />
        <section id="contact" className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-10 left-1/4 w-72 h-72 bg-blue-900/20 rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-purple-900/20 rounded-full blur-3xl" />
          </div>
          <div className="relative max-w-3xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400/80 text-[10px] font-semibold tracking-[0.2em] uppercase mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                Contact
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Let&apos;s Work Together
              </h2>
              <p className="text-lg text-slate-400 mb-12 max-w-xl mx-auto leading-relaxed">
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
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/20 text-white rounded-full font-semibold text-base hover:border-blue-400/60 hover:text-blue-400 transition-colors"
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
      <footer className="bg-[#02080f] text-white py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
            <div>
              <div className="text-2xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-3">
                MW.
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4 text-xs uppercase tracking-widest">
                Quick Links
              </h4>
              <div className="space-y-2">
                {["About", "Experience", "Projects", "Certifications", "FAQ", "Contact"].map((l) => (
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
