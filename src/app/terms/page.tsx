import { FileText, CheckCircle2, AlertTriangle, Scale } from "lucide-react";

export const metadata = {
  title: "Terms and Conditions: Vird Launcher Hub",
  description: "Terms and conditions of use for Vird Launcher Hub on macOS.",
};

export default function TermsPage() {
  const lastUpdated = "October 27, 2026";

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-zinc-300">
      {/* Header */}
      <div className="border-b border-white/10 pb-8 mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs text-indigo-300 font-mono mb-4">
          <FileText className="w-3.5 h-3.5" />
          <span>Legal Agreement</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Terms & Conditions
        </h1>
        <p className="mt-2 text-xs font-mono text-zinc-400">Last updated: {lastUpdated}</p>
      </div>

      {/* Summary Box */}
      <div className="p-6 rounded-2xl bg-indigo-950/20 border border-indigo-500/30 mb-12">
        <h2 className="text-base font-semibold text-indigo-300 flex items-center gap-2 mb-2">
          <Scale className="w-4 h-4" />
          <span>Agreement Overview</span>
        </h2>
        <p className="text-xs text-zinc-300 leading-relaxed">
          By downloading, installing, or using Vird Launcher Hub, you agree to be bound by these
          Terms and Conditions. If you do not agree to these terms, please do not install or use the
          software.
        </p>
      </div>

      {/* Terms Body */}
      <div className="space-y-10 text-sm leading-relaxed">
        <section>
          <h2 className="text-lg font-bold text-white mb-3">1. License Grant</h2>
          <p className="text-zinc-400">
            Subject to your compliance with these Terms and Apple App Store terms of service, we grant
            you a non-exclusive, non-transferable, revocable license to install and use Vird Launcher
            Hub on macOS devices that you own or control.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-3">2. Permitted Use & Developer Responsibilities</h2>
          <p className="text-zinc-400 mb-3">
            Vird Launcher Hub is designed to facilitate local process execution, container management,
            and repository coordination. As a user, you acknowledge and agree that:
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-xs text-zinc-400 pl-2">
            <li>You are solely responsible for the commands, scripts, and processes you execute.</li>
            <li>You will not use the software to run unauthorized penetration, denial of service, or malicious payloads.</li>
            <li>You are responsible for backing up your source code and repository data.</li>
            <li>You must comply with all applicable local, national, and international laws.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-3">3. Intellectual Property</h2>
          <p className="text-zinc-400">
            All rights, title, and interest in and to Vird Launcher Hub (including application code,
            visual interface, icons, branding, and documentation) are and remain the exclusive
            property of the software authors. You may not reverse engineer, decompile, or disassemble
            the software except to the extent permitted by applicable law.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-3">4. Third-Party Tools & Open Source</h2>
          <p className="text-zinc-400">
            Vird Launcher Hub orchestrates tools installed on your operating system (such as Git,
            Docker, Node.js, and Python). These third-party tools are subject to their own respective
            licenses and terms, and we do not assume responsibility or liability for third-party
            runtimes.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-3">5. Disclaimer of Warranties</h2>
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-zinc-400 leading-relaxed">
            THE SOFTWARE IS PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo;, WITHOUT WARRANTY
            OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
            MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NONINFRINGEMENT. IN NO EVENT SHALL
            THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES, OR OTHER LIABILITY
            ARISING FROM, OUT OF, OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
            THE SOFTWARE.
          </div>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-3">6. Limitation of Liability</h2>
          <p className="text-zinc-400">
            To the maximum extent permitted by applicable law, in no event shall the authors or
            contributors be liable for any direct, indirect, incidental, special, consequential, or
            punitive damages (including, without limitation, loss of profits, data corruption, or
            business interruption) resulting from the use or inability to use the software.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-3">7. Termination</h2>
          <p className="text-zinc-400">
            This agreement is effective until terminated. You may terminate it at any time by deleting
            the application and all associated data from your device. Your rights under this license
            will terminate automatically without notice if you fail to comply with any of its terms.
          </p>
        </section>

        <section className="border-t border-white/10 pt-8">
          <h2 className="text-lg font-bold text-white mb-2">8. Contact Information</h2>
          <p className="text-xs text-zinc-400 leading-relaxed">
            For questions regarding these Terms and Conditions, please contact:
          </p>
          <p className="text-xs font-mono text-indigo-400 mt-2">
            Email: <a href="mailto:labrujasiete@gmail.com">labrujasiete@gmail.com</a>
          </p>
        </section>
      </div>
    </div>
  );
}
