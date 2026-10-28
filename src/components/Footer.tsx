import Link from "next/link";
import Image from "next/image";
import { Terminal, Shield, LifeBuoy, FileText, Code2, Heart } from "lucide-react";
import { basePath } from "@/lib/basePath";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-[#090a10] text-zinc-400 text-sm mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="relative w-8 h-8 rounded-lg overflow-hidden">
                <Image
                  src={`${basePath}/logo.png`}
                  alt="Vird Launcher Hub Logo"
                  width={32}
                  height={32}
                  className="object-cover"
                />
              </div>
              <span className="font-semibold text-white tracking-tight">Vird Launcher Hub</span>
            </div>
            <p className="text-xs text-zinc-400 max-w-md leading-relaxed">
              The high-performance local workspace and microservices manager for macOS.
              Launch developer environments, Docker stacks, automation flows, and monitor ports from one central dashboard.
            </p>
            <div className="flex items-center gap-2 text-[11px] text-zinc-500 font-mono">
              <span>Universal Binary (Apple Silicon & Intel)</span>
              <span>•</span>
              <span>macOS 13.0+</span>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-zinc-200 uppercase tracking-wider mb-3">Product</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/#features" className="hover:text-white transition-colors">
                  Key Features
                </Link>
              </li>
              <li>
                <Link href="/#docker" className="hover:text-white transition-colors">
                  Docker & n8n
                </Link>
              </li>
              <li>
                <Link href="/#git" className="hover:text-white transition-colors">
                  Git Workspace
                </Link>
              </li>
              <li>
                <Link href="/support/" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <LifeBuoy className="w-3.5 h-3.5 text-indigo-400" />
                  Support Center
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-zinc-200 uppercase tracking-wider mb-3">Legal & Security</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/privacy/" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-emerald-400" />
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms/" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-zinc-400" />
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <a
                  href="mailto:support@virdlauncher.com"
                  className="hover:text-white transition-colors text-zinc-400"
                >
                  Contact Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 mt-8 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
          <p>© {currentYear} Vird Launcher Hub. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built for Mac developers with precision and privacy.
          </p>
        </div>
      </div>
    </footer>
  );
}
