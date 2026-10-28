import Link from "next/link";
import Image from "next/image";
import { Terminal, Shield, LifeBuoy, Download } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#0d0e17]/80 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-9 h-9 rounded-xl overflow-hidden shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-200">
            <Image
              src="/logo.png"
              alt="Vird Launcher Hub Logo"
              width={36}
              height={36}
              className="object-cover"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-sm tracking-tight text-white group-hover:text-indigo-300 transition-colors">
              Vird Launcher Hub
            </span>
            <span className="text-[10px] text-zinc-400 font-mono">macOS Developer Workspace</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-300">
          <Link href="/#features" className="hover:text-white transition-colors">
            Features
          </Link>
          <Link href="/#architecture" className="hover:text-white transition-colors">
            Architecture
          </Link>
          <Link href="/support/" className="hover:text-white transition-colors flex items-center gap-1.5">
            <LifeBuoy className="w-4 h-4 text-indigo-400" />
            Support
          </Link>
          <Link href="/privacy/" className="hover:text-white transition-colors flex items-center gap-1.5">
            <Shield className="w-4 h-4 text-emerald-400" />
            Privacy
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/#download"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-lg shadow-indigo-600/30 hover:shadow-indigo-500/40 transition-all duration-200"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Get on Mac App Store</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
