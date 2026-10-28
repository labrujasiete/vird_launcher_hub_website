import Link from "next/link";
import Image from "next/image";
import { basePath } from "@/lib/basePath";
import {
  Play,
  Terminal,
  Cpu,
  Layers,
  GitBranch,
  ShieldCheck,
  Zap,
  CheckCircle2,
  ExternalLink,
  RefreshCw,
  FolderOpen,
  ArrowRight,
  Boxes,
  Network,
  Download,
  Apple,
  Clock,
} from "lucide-react";

function WindowsLogo({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-13.051-1.802" />
    </svg>
  );
}

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-indigo-600/15 via-purple-600/5 to-transparent blur-3xl pointer-events-none -z-10" />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-indigo-300 font-mono mb-6 backdrop-blur-sm shadow-inner">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Native macOS App (Universal for Apple Silicon & Intel)
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight">
          The Central Launchpad for{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400">
            macOS Developers
          </span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-zinc-300 max-w-2xl mx-auto font-normal leading-relaxed">
          Stop juggling forgotten terminal tabs and dangling processes. Launch local services,
          orchestrate Docker stacks, inspect port collisions, and sync Git repositories from a single,
          unified dashboard.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`${basePath}/downloads/VirdLauncherHub.dmg`}
            download
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm shadow-xl shadow-indigo-600/30 hover:shadow-indigo-500/40 transition-all duration-200"
          >
            <Apple className="w-4 h-4 fill-current" />
            <span>Download for macOS (.dmg)</span>
            <span className="text-[10px] bg-white/20 px-1.5 py-0.5 rounded font-mono">v1.0.0</span>
          </a>

          <div className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-zinc-500 text-sm font-medium cursor-not-allowed select-none opacity-60">
            <WindowsLogo className="w-4 h-4 opacity-70" />
            <span>Windows (.exe)</span>
            <span className="text-[10px] bg-amber-500/10 text-amber-400 border border-amber-500/20 px-2 py-0.5 rounded-full font-mono">
              Next Week
            </span>
          </div>

          <Link
            href="/support/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-200 font-medium text-sm transition-all duration-200"
          >
            <span>Docs & Support</span>
            <ArrowRight className="w-4 h-4 text-zinc-400" />
          </Link>
        </div>

        {/* Feature Badges */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-400 font-mono">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-indigo-400" />
            <span>macOS 13.0+ (Ventura, Sonoma, Sequoia)</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-indigo-400" />
            <span>100% Local & Privacy Guaranteed</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-indigo-400" />
            <span>Zero Telemetry / No Tracking</span>
          </div>
        </div>

        {/* App Screenshot Showcase */}
        <div className="mt-16 max-w-5xl mx-auto rounded-2xl p-1 bg-gradient-to-b from-white/20 via-white/5 to-white/0 shadow-2xl shadow-black/90">
          <div className="rounded-xl overflow-hidden border border-white/10 bg-[#10121d] shadow-2xl">
            <Image
              src={`${basePath}/app-screenshot.png`}
              alt="Vird Launcher Hub Interface on macOS"
              width={1920}
              height={1080}
              className="w-full h-auto object-cover rounded-xl"
              priority
            />
          </div>
        </div>
      </section>

      {/* Core Features Grid */}
      <section id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-white/5">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase tracking-widest text-indigo-400 font-mono font-semibold">
            Built for Real Engineering
          </h2>
          <p className="mt-3 text-3xl sm:text-4xl font-bold text-white">
            Everything you need to orchestrate local development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-indigo-500/40 transition-all duration-200">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center mb-5">
              <Play className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">One-Click Project Runner</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Auto-detects package scripts, Makefiles, Docker, and shell commands. Start and stop
              projects individually or simultaneously with persistent configuration.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-indigo-500/40 transition-all duration-200">
            <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center mb-5">
              <Boxes className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Docker & n8n Workflows</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Seamlessly toggle between native executable execution and containerized Docker stacks
              for workflow engines like n8n, API workers, and mock databases.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-indigo-500/40 transition-all duration-200">
            <div className="w-10 h-10 rounded-xl bg-pink-500/20 text-pink-400 flex items-center justify-center mb-5">
              <Terminal className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Embedded Live Logs</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Real-time stdout and stderr streams with instant log search, error highlighting, and
              one-click terminal clipboard export.
            </p>
          </div>

          {/* Card 4 */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-indigo-500/40 transition-all duration-200">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-5">
              <Network className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Port Inspection & Collision Guard</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Scan occupied localhost ports before starting servers. Never struggle with mysterious
              EADDRINUSE crashes or port collisions again.
            </p>
          </div>

          {/* Card 5 */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-indigo-500/40 transition-all duration-200">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center mb-5">
              <GitBranch className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Native Git Synchronization</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Inspect branch status, staged diffs, and push/pull directly from each project row.
              Authenticate securely with GitHub personal access tokens or browser OAuth.
            </p>
          </div>

          {/* Card 6 */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-indigo-500/40 transition-all duration-200">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center mb-5">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">100% Local & Privacy-First</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Zero telemetry, zero user tracking, and no third-party data collection. Everything
              executes strictly on your local Mac inside Apple App Sandbox.
            </p>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#151726] to-[#0c0d16] border border-white/10 text-center relative overflow-hidden shadow-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs text-indigo-300 font-mono mb-4">
            <Download className="w-3.5 h-3.5" />
            <span>Official Releases</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Download Vird Launcher Hub
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto text-sm sm:text-base mb-10">
            Native, secure, and privacy-first developer workspace. Choose your platform below to get started.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto text-left">
            {/* macOS Active Download Card */}
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-indigo-500/40 relative flex flex-col justify-between shadow-xl shadow-indigo-950/20">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/20 text-indigo-300 flex items-center justify-center">
                    <Apple className="w-6 h-6 fill-current" />
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    Latest Stable
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white">macOS Universal</h3>
                <p className="text-xs text-zinc-400 mt-1 mb-4 leading-relaxed">
                  Direct DMG installer for Apple Silicon (M1/M2/M3/M4) and Intel Macs running macOS 13.0 or later.
                </p>
                <div className="text-[11px] text-zinc-500 font-mono space-y-1 mb-6">
                  <div>Package: VirdLauncherHub.dmg</div>
                  <div>Version: 1.0.0 (Size: 3.5 MB)</div>
                </div>
              </div>

              <a
                href={`${basePath}/downloads/VirdLauncherHub.dmg`}
                download
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs shadow-lg shadow-indigo-600/30 hover:shadow-indigo-500/40 transition-all duration-200"
              >
                <Download className="w-4 h-4" />
                <span>Download for macOS (.dmg)</span>
              </a>
            </div>

            {/* Windows Greyed Out / Coming Next Week Card */}
            <div className="p-6 rounded-2xl bg-white/[0.01] border border-white/5 relative flex flex-col justify-between opacity-60">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 text-zinc-500 flex items-center justify-center">
                    <WindowsLogo className="w-6 h-6 opacity-70" />
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center gap-1.5">
                    <Clock className="w-3 h-3" />
                    <span>Next Week</span>
                  </span>
                </div>
                <h3 className="text-lg font-bold text-zinc-400">Windows (x64 / ARM)</h3>
                <p className="text-xs text-zinc-500 mt-1 mb-4 leading-relaxed">
                  Native Windows 10 & 11 executable package. Currently undergoing final compatibility testing.
                </p>
                <div className="text-[11px] text-zinc-600 font-mono space-y-1 mb-6">
                  <div>Package: VirdLauncherHub-Setup.exe</div>
                  <div>Status: Releasing next week</div>
                </div>
              </div>

              <button
                disabled
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/5 text-zinc-500 font-semibold text-xs cursor-not-allowed select-none border border-white/5"
              >
                <Clock className="w-4 h-4" />
                <span>Available Next Week</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
