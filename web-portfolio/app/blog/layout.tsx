import Link from "next/link"
import type { ReactNode } from "react"

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#02080f] text-white">
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#02080f]/80 border-b border-white/10">
        <nav className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="font-bold tracking-tight text-white hover:text-blue-400 transition-colors"
          >
            Michael Wiryaseputra
          </Link>
          <div className="flex items-center gap-6 text-sm text-white/70">
            <Link href="/blog" className="hover:text-white transition-colors">
              Blog
            </Link>
            <Link href="/#contact" className="hover:text-white transition-colors">
              Contact
            </Link>
          </div>
        </nav>
      </header>

      {children}

      <footer className="border-t border-white/10 mt-20">
        <div className="max-w-3xl mx-auto px-6 py-10 text-sm text-slate-500 flex flex-wrap gap-3 justify-between">
          <span>© 2026 Michael Wiryaseputra</span>
          <Link href="/" className="hover:text-white transition-colors">
            michaelwiryaseputra.com
          </Link>
        </div>
      </footer>
    </div>
  )
}
