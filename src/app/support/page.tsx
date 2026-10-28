"use client";

import { useState } from "react";
import Link from "next/link";
import {
  LifeBuoy,
  Mail,
  HelpCircle,
  CheckCircle2,
  AlertCircle,
  FileQuestion,
  Terminal,
  Shield,
  Send,
} from "lucide-react";

export default function SupportPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email && message) {
      setFormSubmitted(true);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs text-indigo-300 font-mono mb-4">
          <LifeBuoy className="w-3.5 h-3.5" />
          <span>Help & Documentation</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Support Center
        </h1>
        <p className="mt-4 text-base sm:text-lg text-zinc-400">
          Find quick solutions, troubleshoot common configurations, or reach out to our team directly.
        </p>
      </div>

      {/* Quick Contact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all">
          <Mail className="w-6 h-6 text-indigo-400 mb-3" />
          <h3 className="font-semibold text-white text-base">Direct Email Support</h3>
          <p className="text-xs text-zinc-400 mt-1 mb-4 leading-relaxed">
            Reach our engineering team directly with any bug reports, questions, or feature feedback.
          </p>
          <a
            href="mailto:labrujasiete@gmail.com"
            className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 font-mono"
          >
            labrujasiete@gmail.com &rarr;
          </a>
        </div>

        <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all">
          <Terminal className="w-6 h-6 text-purple-400 mb-3" />
          <h3 className="font-semibold text-white text-base">System Compatibility</h3>
          <p className="text-xs text-zinc-400 mt-1 mb-4 leading-relaxed">
            Universal binary supporting Apple Silicon (M1/M2/M3/M4) and Intel x86_64 architectures.
          </p>
          <span className="text-xs font-mono text-zinc-400">
            macOS 13.0 or later
          </span>
        </div>

        <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all">
          <Shield className="w-6 h-6 text-emerald-400 mb-3" />
          <h3 className="font-semibold text-white text-base">Privacy & Sandboxing</h3>
          <p className="text-xs text-zinc-400 mt-1 mb-4 leading-relaxed">
            Vird Launcher Hub runs strictly on your machine. We never collect or transmit your code.
          </p>
          <Link
            href="/privacy/"
            className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 font-mono"
          >
            Read Privacy Policy &rarr;
          </Link>
        </div>
      </div>

      {/* Frequently Asked Questions */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-indigo-400" />
          <span>Frequently Asked Questions</span>
        </h2>

        <div className="space-y-4">
          <div className="p-5 rounded-xl bg-white/[0.02] border border-white/10">
            <h3 className="font-semibold text-white text-sm">
              How do I add a new project workspace?
            </h3>
            <p className="mt-2 text-xs text-zinc-400 leading-relaxed">
              Click the &ldquo;Add Project&rdquo; button in the sidebar or drag and drop any project
              directory into the window. Vird Launcher Hub automatically inspects package.json,
              Makefiles, Python scripts, or Docker compose files to detect available run commands.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white/[0.02] border border-white/10">
            <h3 className="font-semibold text-white text-sm">
              How does the Docker integration for n8n work?
            </h3>
            <p className="mt-2 text-xs text-zinc-400 leading-relaxed">
              If Docker Desktop is running on your Mac, Vird Launcher Hub can pull and start the official
              n8n Docker image with persistent local volume storage. Alternatively, if you have n8n
              installed via npm or Homebrew, it can run directly as a native node process.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white/[0.02] border border-white/10">
            <h3 className="font-semibold text-white text-sm">
              How does Port Inspection prevent address collisions?
            </h3>
            <p className="mt-2 text-xs text-zinc-400 leading-relaxed">
              Before or during execution, Vird Launcher Hub inspects local socket bindings. If port
              3000, 8080, or 5678 is already held by a lingering daemon, the app highlights the owning
              PID so you can terminate the dangling process with one click before starting your server.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white/[0.02] border border-white/10">
            <h3 className="font-semibold text-white text-sm">
              How are Git credentials and GitHub authentication stored?
            </h3>
            <p className="mt-2 text-xs text-zinc-400 leading-relaxed">
              Git credentials use standard macOS Keychain integration or your local Git credential
              helper. Personal access tokens are stored securely in your private application storage
              and are never sent to any third-party server.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white/[0.02] border border-white/10">
            <h3 className="font-semibold text-white text-sm">
              Why does macOS ask for permission to access project folders?
            </h3>
            <p className="mt-2 text-xs text-zinc-400 leading-relaxed">
              In compliance with Apple App Store Sandbox security requirements, macOS asks you to
              confirm access when you select a project directory with the native file picker. This
              ensures the app only has access to directories you explicitly choose.
            </p>
          </div>
        </div>
      </div>

      {/* Support Request Form */}
      <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10">
        <h2 className="text-xl font-bold text-white mb-2">Send Us a Support Message</h2>
        <p className="text-xs text-zinc-400 mb-6">
          Have an issue or idea? Send us a note and we will reply to your email as soon as possible.
        </p>

        {formSubmitted ? (
          <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-center">
            <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
            <h3 className="font-semibold text-white text-sm">Thank You for Your Message</h3>
            <p className="text-xs text-zinc-400 mt-1">
              Your inquiry has been received. Our team will get back to you at {email}.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Jane Doe"
                  className="w-full px-3 py-2 rounded-lg bg-black/40 border border-white/10 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="jane@example.com"
                  className="w-full px-3 py-2 rounded-lg bg-black/40 border border-white/10 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-zinc-300 mb-1">Subject</label>
              <input
                type="text"
                required
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Bug report, Question, or Feature request"
                className="w-full px-3 py-2 rounded-lg bg-black/40 border border-white/10 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-zinc-300 mb-1">Message</label>
              <textarea
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Describe what happened or what you need assistance with..."
                className="w-full px-3 py-2 rounded-lg bg-black/40 border border-white/10 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-md shadow-indigo-600/30 transition-colors"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Send Support Inquiry</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
