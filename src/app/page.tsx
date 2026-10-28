import Link from "next/link";
import Image from "next/image";
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
} from "lucide-react";

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
            href="#download"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm shadow-xl shadow-indigo-600/30 hover:shadow-indigo-500/40 transition-all duration-200"
          >
            <Play className="w-4 h-4 fill-current" />
            <span>Download on Mac App Store</span>
          </a>
          <Link
            href="/support/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-200 font-medium text-sm transition-all duration-200"
          >
            <span>Documentation & Support</span>
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

        {/* Mock UI Showcase */}
        <div className="mt-16 max-w-5xl mx-auto rounded-2xl p-1 bg-gradient-to-b from-white/15 via-white/5 to-white/0 shadow-2xl shadow-black/80">
          <div className="rounded-xl bg-[#10121d] border border-white/10 overflow-hidden text-left shadow-2xl">
            {/* Window Header */}
            <div className="px-4 py-3 bg-[#151724] border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                <span className="ml-3 text-xs text-zinc-400 font-mono">Vird Launcher Hub</span>
              </div>
              <div className="flex items-center gap-2 text-[11px] text-zinc-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="font-mono">GitHub: Connected</span>
              </div>
            </div>

            {/* Hub Workspace Layout */}
            <div className="grid grid-cols-1 md:grid-cols-12 min-h-[380px]">
              {/* Left Projects Pane */}
              <div className="md:col-span-5 p-4 border-r border-white/5 bg-[#0e101a] space-y-3">
                <div className="flex items-center justify-between text-xs font-semibold text-zinc-400 uppercase tracking-wider px-1">
                  <span>Active Workspaces</span>
                  <span className="text-[10px] bg-white/5 px-2 py-0.5 rounded text-zinc-300">3 Running</span>
                </div>

                {/* Project Item 1 */}
                <div className="p-3 rounded-xl bg-white/5 border border-indigo-500/30 shadow-sm flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-indigo-500/20 text-indigo-300 flex items-center justify-center font-bold text-xs">
                      API
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white">billing-service</div>
                      <div className="text-[11px] text-zinc-400 font-mono">Port 8080 • git: main</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      Running
                    </span>
                  </div>
                </div>

                {/* Project Item 2 */}
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-pink-500/20 text-pink-300 flex items-center justify-center font-bold text-xs">
                      n8n
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white">n8n Automation Engine</div>
                      <div className="text-[11px] text-zinc-400 font-mono">Docker Stack • Port 5678</div>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    Active
                  </span>
                </div>

                {/* Project Item 3 */}
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-emerald-500/20 text-emerald-300 flex items-center justify-center font-bold text-xs">
                      UI
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white">customer-portal</div>
                      <div className="text-[11px] text-zinc-400 font-mono">Port 3000 • git: feat/auth</div>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    Ready
                  </span>
                </div>
              </div>

              {/* Right Terminal & Inspection Pane */}
              <div className="md:col-span-7 p-4 bg-[#0a0c13] flex flex-col justify-between font-mono text-xs">
                <div className="space-y-2">
                  <div className="text-[11px] text-zinc-500 border-b border-white/5 pb-2 flex items-center justify-between">
                    <span>LIVE STREAMING LOGS (billing-service)</span>
                    <span className="text-zinc-600">PID: 48192</span>
                  </div>
                  <div className="text-zinc-400 space-y-1 pt-1 text-[11px]">
                    <div className="text-indigo-400">&gt; Starting microservice on port 8080...</div>
                    <div className="text-zinc-500">[02:30:11] Connected to local PostgreSQL cluster</div>
                    <div className="text-zinc-500">[02:30:12] Cache warm: 42 routes loaded</div>
                    <div className="text-emerald-400">[02:30:13] HTTP server listening on http://localhost:8080</div>
                    <div className="text-zinc-400">[02:30:18] GET /api/v1/health status: 200 OK (2.1ms)</div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px]">
                  <div className="text-zinc-400 flex items-center gap-2">
                    <Network className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Port 8080: Exclusive owner</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="px-2 py-1 bg-white/5 hover:bg-white/10 rounded text-zinc-300 transition-colors">
                      Open in Browser
                    </button>
                    <button className="px-2 py-1 bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 rounded transition-colors">
                      Stop Process
                    </button>
                  </div>
                </div>
              </div>
            </div>
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

      {/* CTA Section */}
      <section id="download" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-indigo-900/40 via-purple-900/30 to-zinc-900/40 border border-white/10 text-center relative overflow-hidden shadow-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to upgrade your macOS development workflow?
          </h2>
          <p className="text-zinc-300 max-w-xl mx-auto text-sm sm:text-base mb-8">
            Download Vird Launcher Hub for macOS today. Compatible with Apple Silicon (M1/M2/M3/M4)
            and Intel Macs running macOS 13.0 or later.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://apps.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-zinc-950 font-semibold text-sm hover:bg-zinc-100 transition-colors shadow-lg"
            >
              <span>Download on Mac App Store</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <Link
              href="/support/"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium text-sm transition-colors"
            >
              <span>Visit Support Center</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
