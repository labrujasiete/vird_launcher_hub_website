import { Shield, Lock, EyeOff, Server, HardDrive } from "lucide-react";

export const metadata = {
  title: "Privacy Policy: Vird Launcher Hub",
  description: "Privacy policy for Vird Launcher Hub on macOS.",
};

export default function PrivacyPage() {
  const lastUpdated = "October 27, 2026";

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-zinc-300">
      {/* Header */}
      <div className="border-b border-white/10 pb-8 mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-300 font-mono mb-4">
          <Shield className="w-3.5 h-3.5" />
          <span>App Store Privacy Notice</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Privacy Policy
        </h1>
        <p className="mt-2 text-xs font-mono text-zinc-400">Last updated: {lastUpdated}</p>
      </div>

      {/* Summary Highlight Box */}
      <div className="p-6 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 mb-12">
        <h2 className="text-base font-semibold text-emerald-300 flex items-center gap-2 mb-2">
          <Lock className="w-4 h-4" />
          <span>Our Core Privacy Principle: 100% Local Execution</span>
        </h2>
        <p className="text-xs text-zinc-300 leading-relaxed">
          Vird Launcher Hub is engineered with a strict local-first philosophy. We do not collect,
          transmit, sell, or analyze your source code, your environment variables, your terminal logs,
          or any personal identifiers. Everything stays entirely on your own Mac.
        </p>
      </div>

      {/* Policy Content */}
      <div className="space-y-10 text-sm leading-relaxed">
        <section>
          <h2 className="text-lg font-bold text-white mb-3">1. Information We Do Not Collect</h2>
          <p className="text-zinc-400 mb-3">
            Unlike many developer tools, Vird Launcher Hub does not incorporate telemetry, product
            analytics, advertising identifiers, or user tracking SDKs. We do not collect:
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-xs text-zinc-400 pl-2">
            <li>Your source code, file contents, or repository names.</li>
            <li>Environment variables, secret keys, or authentication tokens.</li>
            <li>Terminal command logs, process outputs, or runtime statistics.</li>
            <li>IP addresses, hardware UUIDs, or device location data.</li>
            <li>Personal details such as your name, email, or physical address.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-3">2. Apple App Sandbox & Local Permissions</h2>
          <p className="text-zinc-400 mb-3">
            Vird Launcher Hub runs within the strict boundaries of the macOS App Sandbox
            (com.apple.security.app-sandbox) as mandated by Apple for Mac App Store applications.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <h3 className="font-semibold text-white text-xs flex items-center gap-1.5 mb-1">
                <HardDrive className="w-3.5 h-3.5 text-indigo-400" />
                <span>User-Selected Files</span>
              </h3>
              <p className="text-xs text-zinc-400">
                The application only accesses project directories that you explicitly select using the
                macOS open panel. Access rights are persisted using Apple security-scoped bookmarks.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <h3 className="font-semibold text-white text-xs flex items-center gap-1.5 mb-1">
                <Server className="w-3.5 h-3.5 text-indigo-400" />
                <span>Local Network Connections</span>
              </h3>
              <p className="text-xs text-zinc-400">
                Network access is restricted to localhost (127.0.0.1) port inspection and direct Git
                remotes you specify. No third-party network calls are made.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-3">3. Git & GitHub Credentials</h2>
          <p className="text-zinc-400">
            If you connect GitHub or enter personal access tokens, credentials are handled through
            standard local Git credential storage or your private application settings. They are used
            solely to authenticate your Git push and pull operations directly against your Git server
            and are never shared with any intermediary service.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-3">4. Third-Party Services & Dependencies</h2>
          <p className="text-zinc-400">
            Vird Launcher Hub communicates directly with local tools installed on your system (such
            as Node.js, Docker, Python, or Git). It does not embed third-party advertising, analytics,
            or behavioral profiling services.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-3">5. Children&apos;s Privacy</h2>
          <p className="text-zinc-400">
            Because Vird Launcher Hub does not collect personal data from any user, we do not knowingly
            collect or solicit information from children under the age of 13.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-3">6. Updates to this Policy</h2>
          <p className="text-zinc-400">
            If we make any modifications to our privacy practices in future updates, we will update the
            &ldquo;Last updated&rdquo; timestamp at the top of this document and publish the revised
            notice at this URL.
          </p>
        </section>

        <section className="border-t border-white/10 pt-8">
          <h2 className="text-lg font-bold text-white mb-2">7. Contact Information</h2>
          <p className="text-xs text-zinc-400 leading-relaxed">
            If you have any questions or concerns regarding this Privacy Policy, please reach out to
            our privacy and security team:
          </p>
          <p className="text-xs font-mono text-indigo-400 mt-2">
            Email: <a href="mailto:privacy@virdlauncher.com">privacy@virdlauncher.com</a>
          </p>
        </section>
      </div>
    </div>
  );
}
