import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Vird Launcher Hub: macOS Developer Workspace & Microservice Launcher",
  description:
    "Launch local services, orchestrate Docker stacks, inspect active ports, and manage Git repositories effortlessly from a unified, native macOS developer hub.",
  keywords: [
    "macOS developer tools",
    "microservices launcher",
    "docker manager mac",
    "port inspector",
    "git manager",
    "n8n mac",
    "local server launcher",
  ],
  authors: [{ name: "Vird Launcher Hub Team" }],
  openGraph: {
    title: "Vird Launcher Hub: macOS Developer Workspace",
    description:
      "Native macOS developer workspace and microservices orchestrator. Run, monitor, and synchronize local services with zero terminal clutter.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#0b0c13] text-zinc-100 min-h-screen flex flex-col selection:bg-indigo-500/30 selection:text-indigo-200">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
