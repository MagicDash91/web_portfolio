import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-slate-900/70 border-b border-slate-200/50 dark:border-slate-700/50">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Portfolio
          </div>
          <div className="flex items-center gap-6">
            <a href="#about" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
              About
            </a>
            <a href="#experience" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
              Experience
            </a>
            <a href="#projects" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
              Projects
            </a>
            <a href="#certifications" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
              Certifications
            </a>
            <a href="#contact" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
              Contact
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 py-20">
        <section id="about" className="text-center mb-32">
          <div className="mb-8 relative">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
              <div className="w-full h-full bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center overflow-hidden">
                <Image
                  src="/ax.jpg"
                  alt="Michael Wiryaseputra"
                  width={128}
                  height={128}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent animate-fade-in">
            Hello, Im Michael Wiryaseputra
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Machine Learning and Artificial Intelligence Engineer with a passion for building scalable and efficient systems.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-12 max-w-4xl mx-auto">
            <span className="px-4 py-2 bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-blue-500/20 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium backdrop-blur-sm">
              AI/ML Engineer
            </span>
            <span className="px-4 py-2 bg-gradient-to-r from-purple-500/10 to-purple-600/10 border border-purple-500/20 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium backdrop-blur-sm">
              Bootcamp Tutor
            </span>
            <span className="px-4 py-2 bg-gradient-to-r from-green-500/10 to-green-600/10 border border-green-500/20 text-green-700 dark:text-green-300 rounded-full text-sm font-medium backdrop-blur-sm">
              LLM Specialist
            </span>
            <span className="px-4 py-2 bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-500/20 text-orange-700 dark:text-orange-300 rounded-full text-sm font-medium backdrop-blur-sm">
              Data Scientist
            </span>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-16">
            <a
              href="https://github.com/MagicDash91/ML-Engineering-Project"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full hover:scale-105 transition-all duration-300 hover:shadow-xl"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span className="font-medium">GitHub</span>
            </a>
            
            <a
              href="https://www.linkedin.com/in/michael-wiryaseputra/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-6 py-3 bg-blue-600 text-white rounded-full hover:scale-105 transition-all duration-300 hover:shadow-xl hover:bg-blue-700"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span className="font-medium">LinkedIn</span>
            </a>
          </div>
        </section>

        {/* Experience & Mentoring Section */}
        <section id="experience" className="mb-32">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-slate-900 to-blue-600 dark:from-white dark:to-blue-400 bg-clip-text text-transparent">
            Teaching & Mentoring Experience
          </h2>
          <p className="text-center text-slate-600 dark:text-slate-400 mb-16 max-w-2xl mx-auto">
            Empowering the next generation of AI/ML engineers through hands-on training and mentorship
          </p>

          <div className="max-w-5xl mx-auto space-y-6">
            {/* Experience Card 1 */}
            <div className="group relative bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 dark:border-slate-700 overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-blue-500 to-purple-600 transform origin-top transition-transform duration-300"></div>
              <div className="ml-4">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                      AI/ML Bootcamp Tutor
                    </h3>
                    <p className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">INTELLIGO.ID</p>
                  </div>
                  <span className="text-sm font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 px-4 py-2 rounded-full">
                    May 2025 - Present
                  </span>
                </div>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Teaching and mentoring students across private, semi-private, and full-class bootcamps in AI/ML topics including Machine Learning, NLP, LLMs, RAG frameworks, and LLMOps practices.
                </p>
              </div>
            </div>

            {/* Experience Card 2 */}
            <div className="group relative bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 dark:border-slate-700 overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-cyan-500 to-blue-600 transform origin-top transition-transform duration-300"></div>
              <div className="ml-4">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                      Data Science & AI/ML Engineer Bootcamp Tutor
                    </h3>
                    <p className="text-lg font-semibold text-cyan-600 dark:text-cyan-400 mb-2">DIBIMBING.ID</p>
                  </div>
                  <span className="text-sm font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 px-4 py-2 rounded-full">
                    Dec 2025 - Present
                  </span>
                </div>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  Delivering full-class bootcamp instruction covering comprehensive Data Science and AI/ML curriculum including Machine Learning, NLP, Large Language Models, RAG frameworks, LLMOps practices, and data visualization techniques.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 rounded-full text-sm">Machine Learning</span>
                  <span className="px-3 py-1 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 rounded-full text-sm">Data Visualization</span>
                  <span className="px-3 py-1 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 rounded-full text-sm">LLMs & RAG</span>
                </div>
              </div>
            </div>

            {/* Experience Card 3 */}
            <div className="group relative bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 dark:border-slate-700 overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-purple-500 to-pink-600 transform origin-top transition-transform duration-300"></div>
              <div className="ml-4">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                      AI/ML & Data Engineer Bootcamp Tutor
                    </h3>
                    <p className="text-lg font-semibold text-purple-600 dark:text-purple-400 mb-2">DSAREA</p>
                  </div>
                  <span className="text-sm font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 px-4 py-2 rounded-full">
                    Sep 2025 - Present
                  </span>
                </div>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Delivering full-class instruction in Machine Learning, NLP, Large Language Models, Retrieval-Augmented Generation (RAG), and advanced RAG frameworks such as Agentic RAG, Hybrid RAG, and Adaptive RAG. Also teaching LLMOps practices and hands-on LLM fine-tuning.
                </p>
              </div>
            </div>

            {/* Experience Card 4 */}
            <div className="group relative bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 dark:border-slate-700 overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-green-500 to-teal-600 transform origin-top transition-transform duration-300"></div>
              <div className="ml-4">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                      AI/ML Engineer & Data Engineer Bootcamp Tutor
                    </h3>
                    <p className="text-lg font-semibold text-green-600 dark:text-green-400 mb-2">FULLSTACK BANGALORE</p>
                  </div>
                  <span className="text-sm font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 px-4 py-2 rounded-full">
                    Jul 2025 - Oct 2025
                  </span>
                </div>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Delivered comprehensive instruction covering Machine Learning, NLP, LLMs, advanced RAG architectures (Agentic, Hybrid, Adaptive), LLMOps best practices, and practical LLM fine-tuning techniques.
                </p>
              </div>
            </div>

            {/* Experience Card 5 */}
            <div className="group relative bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 dark:border-slate-700 overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-orange-500 to-red-600 transform origin-top transition-transform duration-300"></div>
              <div className="ml-4">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                      Agentic LLM Trainer
                    </h3>
                    <p className="text-lg font-semibold text-orange-600 dark:text-orange-400 mb-2">BANK JATENG</p>
                  </div>
                  <span className="text-sm font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 px-4 py-2 rounded-full">
                    Sep 2025
                  </span>
                </div>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  Delivered advanced training on constructing agentic AI systems using LangChain, LangGraph, and Gemini/OpenAI models—covering multi-agent coordination, RAG pipelines, tool execution, memory modules, and LLMOps best practices.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-full text-sm">LangChain</span>
                  <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-full text-sm">LangGraph</span>
                  <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-full text-sm">RAG</span>
                  <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-full text-sm">KYC Automation</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section id="projects" className="mb-32">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-slate-900 to-blue-600 dark:from-white dark:to-blue-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <div className="group bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-200 dark:border-slate-700 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl mb-6 flex items-center justify-center overflow-hidden transform group-hover:scale-105 transition-transform duration-500">
                  <Image
                    src="/law.jpg"
                    alt="AI-Powered Indonesian Legal Document Analysis"
                    width={200}
                    height={200}
                    className="object-cover w-full h-full"
                  />
                </div></div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              AI-Powered Indonesian Legal Document Analysis
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
              This FastAPI web app uses agentic AI with Google Gemini 2.0, LangChain, and LangGraph to analyze Indonesian legal documents. Users can upload multiple files (PDF, Word, Excel, CSV), ask detailed questions, and receive accurate, structured answers tailored to Indonesian law.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">FastAPI</span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">Langchain</span>
                <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full text-sm">Langgraph</span>
              </div>
              <div className="flex justify-between items-center">
                <a href="https://github.com/MagicDash91/ML-Engineering-Project/tree/main/Agentic_AI" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
                  View Project →
                </a>
                <a href="#" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="group bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-200 dark:border-slate-700 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="h-48 bg-gradient-to-br from-green-400 to-blue-500 rounded-xl mb-6 flex items-center justify-center overflow-hidden transform group-hover:scale-105 transition-transform duration-500">
                  <Image
                    src="/medical.jpg"
                    alt="Medical Claims Anti-Fraud Detection System"
                    width={200}
                    height={200}
                    className="object-cover w-full h-full"
                  />
                </div></div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              Medical Claims Anti-Fraud Detection System
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
              A dual-pipeline AI system combining LLMs with RAG (Retrieval-Augmented Generation) and Computer Vision + OCR to analyze and detect potential fraud in medical claim submissions.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">FastAPI</span>
                <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full text-sm">PaddleOCR</span>
                <span className="px-3 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-full text-sm">Langchain</span>
              </div>
              <div className="flex justify-between items-center">
                <a href="https://github.com/MagicDash91/ML-Engineering-Project/tree/main/Medical_Claims_Anti_Fraud_Detection_System" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
                  View Project →
                </a>
                <a href="#" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="group bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-200 dark:border-slate-700 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl mb-6 flex items-center justify-center overflow-hidden transform group-hover:scale-105 transition-transform duration-500">
                  <Image
                    src="/youtube.jpg"
                    alt="YouTube Sentiment Analysis"
                    width={200}
                    height={200}
                    className="object-cover w-full h-full"
                  />
                </div></div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              YouTube Sentiment Analysis
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
              The YouTube Sentiment Analysis project is a web application built using FastAPI that allows users to analyze the sentiment of comments from any YouTube video. It leverages the youtube-comment-downloader library to fetch comments, performs sentiment analysis using a pre-trained BERT model, and generates word clouds and insights using the Google Gemini API.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">Langchain</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">FastAPI</span>
                <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full text-sm">Wordcloud</span>
              </div>
              <div className="flex justify-between items-center">
                <a href="https://github.com/MagicDash91/ML-Engineering-Project/tree/main/Youtube%20Sentiment%20Analysis" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
                  View Project →
                </a>
                <a href="#" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Project Card 4 */}
            <div className="group bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-200 dark:border-slate-700 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="h-48 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl mb-6 flex items-center justify-center overflow-hidden transform group-hover:scale-105 transition-transform duration-500">
                  <Image
                    src="/emotion.jpg"
                    alt="Emotion Analyzer Web App"
                    width={200}
                    height={200}
                    className="object-cover w-full h-full"
                  />
                </div></div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              Emotion Analyzer Web App
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
              This project is a web-based Emotion Analyzer built with FastAPI, allowing users to upload text datasets (CSV or Excel), perform emotion classification, visualize results, and analyze sentiments using Google Gemini. The app supports advanced text processing and generates insightful visualizations like word clouds and emotion distributions.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">FastAPI</span>
                <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full text-sm">Wordcloud</span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">Gemini</span>
              </div>
              <div className="flex justify-between items-center">
                <a href="https://github.com/MagicDash91/ML-Engineering-Project/tree/main/Emotion_Classification" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
                  View Project →
                </a>
                <a href="#" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Project Card 5 */}
            <div className="group bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-200 dark:border-slate-700 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="h-48 bg-gradient-to-br from-teal-400 to-green-500 rounded-xl mb-6 flex items-center justify-center overflow-hidden transform group-hover:scale-105 transition-transform duration-500">
                  <Image
                    src="/churn.jpg"
                    alt="Automatic Churn Data Analysis Prediction"
                    width={200}
                    height={200}
                    className="object-cover w-full h-full"
                  />
                </div></div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              Automatic Churn Data Analysis Prediction
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
              This is a web application built using FastAPI that allows users to analyze churn data stored in a DynamoDB table. The application provides a user-friendly interface to fetch and analyze churn data based on specified date ranges and questions. It uses LangChain for generating summaries and insights, and Scikit-Learn for machine learning tasks such as feature importance analysis.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full text-sm">AWS DynamoDB</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">FastAPI</span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">Scikit-learn</span>
              </div>
              <div className="flex justify-between items-center">
                <a href="https://github.com/MagicDash91/ML-Engineering-Project/tree/main/Customer%20Churn%20Prediction%20and%20Analyzer" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
                  View Project →
                </a>
                <a href="#" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Project Card 6 */}
            <div className="group bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-200 dark:border-slate-700 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="h-48 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-xl mb-6 flex items-center justify-center overflow-hidden transform group-hover:scale-105 transition-transform duration-500">
                  <Image
                    src="/fraud.jpg"
                    alt="Automatic Fraud Prediction Web Application"
                    width={200}
                    height={200}
                    className="object-cover w-full h-full"
                  />
                </div></div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
               Automatic Fraud Prediction Web Application
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
              This project is a Fraud Detection system using a Random Forest model, with a FastAPI and Bootstrap web interface for selecting date ranges, viewing predictions, and visualizing transactions. It also integrates LangChain and Google Generative AI for advanced data analysis and natural language insights.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">Langchain</span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">Scikit-Learn</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">FastAPI</span>
              </div>
              <div className="flex justify-between items-center">
                <a href="https://github.com/MagicDash91/ML-Engineering-Project/tree/main/Fraud_Detection_Analysis" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
                  View Project →
                </a>
                <a href="#" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="mb-32">
          <div className="flex items-center justify-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 to-blue-600 dark:from-white dark:to-blue-400 bg-clip-text text-transparent">
              Tech Stack
            </h2>
          </div>

          {/* Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Database Tools */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-200 dark:border-slate-700">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Databases</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col items-center">
                  <Image 
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" 
                    alt="MySQL" 
                    width={60} 
                    height={60} 
                    className="hover:scale-110 transition-transform duration-300"
                  />
                  <span className="text-sm mt-2 text-slate-600 dark:text-slate-300">MySQL</span>
                </div>
                <div className="flex flex-col items-center">
                  <Image 
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" 
                    alt="PostgreSQL" 
                    width={60} 
                    height={60} 
                    className="hover:scale-110 transition-transform duration-300"
                  />
                  <span className="text-sm mt-2 text-slate-600 dark:text-slate-300">PostgreSQL</span>
                </div>
                <div className="flex flex-col items-center">
                  <Image 
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" 
                    alt="BigQuery" 
                    width={60} 
                    height={60} 
                    className="hover:scale-110 transition-transform duration-300"
                  />
                  <span className="text-sm mt-2 text-slate-600 dark:text-slate-300">BigQuery</span>
                </div>
              </div>
            </div>

            {/* ML & Python Libraries */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-200 dark:border-slate-700">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">ML & Python</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col items-center">
                  <Image 
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" 
                    alt="Python" 
                    width={60} 
                    height={60} 
                    className="hover:scale-110 transition-transform duration-300"
                  />
                  <span className="text-sm mt-2 text-slate-600 dark:text-slate-300">Python</span>
                </div>
                <div className="flex flex-col items-center">
                  <Image 
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" 
                    alt="TensorFlow" 
                    width={60} 
                    height={60} 
                    className="hover:scale-110 transition-transform duration-300"
                  />
                  <span className="text-sm mt-2 text-slate-600 dark:text-slate-300">TensorFlow</span>
                </div>
                <div className="flex flex-col items-center">
                  <Image 
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" 
                    alt="PyTorch" 
                    width={60} 
                    height={60} 
                    className="hover:scale-110 transition-transform duration-300"
                  />
                  <span className="text-sm mt-2 text-slate-600 dark:text-slate-300">PyTorch</span>
                </div>
              </div>
            </div>

            {/* LLM & RAG Tools */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-200 dark:border-slate-700">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">LLM & RAG</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col items-center">
                  <Image 
                    src="/langchain.png" 
                    alt="LangChain" 
                    width={60} 
                    height={60} 
                    className="hover:scale-110 transition-transform duration-300"
                  />
                  <span className="text-sm mt-2 text-slate-600 dark:text-slate-300">LangChain</span>
                </div>
                <div className="flex flex-col items-center">
                  <Image 
                    src="/langgraph.png" 
                    alt="LangGraph" 
                    width={60} 
                    height={60} 
                    className="hover:scale-110 transition-transform duration-300"
                  />
                  <span className="text-sm mt-2 text-slate-600 dark:text-slate-300">LangGraph</span>
                </div>
                <div className="flex flex-col items-center">
                  <Image 
                    src="/langsmith.png" 
                    alt="LangSmith" 
                    width={60} 
                    height={60} 
                    className="hover:scale-110 transition-transform duration-300"
                  />
                  <span className="text-sm mt-2 text-slate-600 dark:text-slate-300">LangSmith</span>
                </div>
              </div>
            </div>

            {/* Vector DBs */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-200 dark:border-slate-700">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Vector DBs</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col items-center">
                  <Image 
                    src="/faiss.jpg" 
                    alt="FAISS" 
                    width={60} 
                    height={60} 
                    className="hover:scale-110 transition-transform duration-300"
                  />
                  <span className="text-sm mt-2 text-slate-600 dark:text-slate-300">FAISS</span>
                </div>
                <div className="flex flex-col items-center">
                  <Image 
                    src="/chroma.png" 
                    alt="ChromaDB" 
                    width={60} 
                    height={60} 
                    className="hover:scale-110 transition-transform duration-300"
                  />
                  <span className="text-sm mt-2 text-slate-600 dark:text-slate-300">ChromaDB</span>
                </div>
              </div>
            </div>

            {/* Cloud & Deployment */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-200 dark:border-slate-700">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Cloud & Deployment</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col items-center">
                  <Image 
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" 
                    alt="Google Cloud" 
                    width={60} 
                    height={60} 
                    className="hover:scale-110 transition-transform duration-300"
                  />
                  <span className="text-sm mt-2 text-slate-600 dark:text-slate-300">GCP</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-[60px] h-[60px] flex items-center justify-center">
                    <Image 
                      src="/aws.png" 
                      alt="AWS" 
                      width={50} 
                      height={50} 
                      className="hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <span className="text-sm mt-2 text-slate-600 dark:text-slate-300">AWS</span>
                </div>
                <div className="flex flex-col items-center">
                  <Image 
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" 
                    alt="Docker" 
                    width={60} 
                    height={60} 
                    className="hover:scale-110 transition-transform duration-300"
                  />
                  <span className="text-sm mt-2 text-slate-600 dark:text-slate-300">Docker</span>
                </div>
              </div>
            </div>

            {/* Web Frameworks */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-200 dark:border-slate-700">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Web Frameworks</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col items-center">
                  <Image 
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" 
                    alt="Flask" 
                    width={60} 
                    height={60} 
                    className="hover:scale-110 transition-transform duration-300"
                  />
                  <span className="text-sm mt-2 text-slate-600 dark:text-slate-300">Flask</span>
                </div>
                <div className="flex flex-col items-center">
                  <Image 
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" 
                    alt="FastAPI" 
                    width={60} 
                    height={60} 
                    className="hover:scale-110 transition-transform duration-300"
                  />
                  <span className="text-sm mt-2 text-slate-600 dark:text-slate-300">FastAPI</span>
                </div>
                <div className="flex flex-col items-center">
                  <Image 
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" 
                    alt="Next.js" 
                    width={60} 
                    height={60} 
                    className="hover:scale-110 transition-transform duration-300"
                  />
                  <span className="text-sm mt-2 text-slate-600 dark:text-slate-300">Next.js</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="mb-32">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-slate-900 to-blue-600 dark:from-white dark:to-blue-400 bg-clip-text text-transparent">
            Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* AWS Certification */}
            <div className="group bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 dark:border-slate-700">
              <div className="flex flex-col items-center">
                <div className="mb-6 bg-white dark:bg-slate-900 rounded-xl p-6 shadow-inner">
                  <Image
                    src="/blob.png"
                    alt="AWS Certified Generative AI Practitioner"
                    width={200}
                    height={200}
                    className="transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white text-center mb-2">
                  AWS Cloud Quest
                </h3>
                <p className="text-lg font-semibold text-orange-600 dark:text-orange-400 text-center mb-4">
                  Generative AI Practitioner
                </p>
                <div className="border-t border-slate-200 dark:border-slate-600 pt-4 mt-4">
                  <p className="text-sm text-slate-600 dark:text-slate-300 text-center mb-3">
                    Hands-on experience with AWS services:
                  </p>
                  <div className="flex flex-wrap justify-center gap-2">
                    <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-full text-xs font-medium">Amazon Bedrock</span>
                    <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-full text-xs font-medium">Amazon Q</span>
                    <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-full text-xs font-medium">Lambda</span>
                    <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-full text-xs font-medium">EC2</span>
                    <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-full text-xs font-medium">S3</span>
                  </div>
                </div>
              </div>
            </div>

            {/* BNSP Artificial Intelligence Certification */}
            <div className="group bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 dark:border-slate-700">
              <div className="flex flex-col items-center">
                <div className="mb-6 bg-white dark:bg-slate-900 rounded-xl p-6 shadow-inner">
                  <Image
                    src="/bnsp.png"
                    alt="BNSP Artificial Intelligence Certification"
                    width={200}
                    height={200}
                    className="transform group-hover:scale-105 transition-transform duration-500 object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white text-center mb-2">
                  BNSP
                </h3>
                <p className="text-lg font-semibold text-blue-600 dark:text-blue-400 text-center mb-4">
                  Artificial Intelligence
                </p>
                <div className="border-t border-slate-200 dark:border-slate-600 pt-4 mt-4">
                  <p className="text-sm text-slate-600 dark:text-slate-300 text-center mb-3">
                    Certified competencies:
                  </p>
                  <div className="flex flex-wrap justify-center gap-2">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium">Machine Learning</span>
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium">Deep Learning</span>
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium">NLP</span>
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium">Computer Vision</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-slate-900 to-blue-600 dark:from-white dark:to-blue-400 bg-clip-text text-transparent">
            Lets Work Together
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-12 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Lets discuss your next project and create something amazing together.
          </p>
          
          <div className="flex justify-center gap-6">
            <a
              href="mailto:michwirja@gmail.com"
              className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:scale-105 transition-all duration-300 hover:shadow-xl font-medium text-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Get In Touch
            </a>
            
            <a
              href="/AI ML Engineer - Michael Wiryaseputra Complete (1).pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-8 py-4 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-full hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 font-medium text-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-100 dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 mt-32">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                Portfolio
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                Passionate developer creating digital experiences that make a difference.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-slate-900 dark:text-white mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="#about" className="block text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  About
                </a>
                <a href="#experience" className="block text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Experience
                </a>
                <a href="#projects" className="block text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Projects
                </a>
                <a href="#certifications" className="block text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Certifications
                </a>
                <a href="#contact" className="block text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Contact
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-slate-900 dark:text-white mb-4">Connect</h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/MagicDash91/ML-Engineering-Project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-full flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/michael-wiryaseputra/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-full flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-blue-600 hover:text-white transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-200 dark:border-slate-700 pt-8 text-center">
            <p className="text-slate-600 dark:text-slate-300">
              © 2025 Portfolio. Built with Next.js and Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
