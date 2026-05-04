import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Discord Moderation Assistant – AI Moderator That Learns Your Server's Culture",
  description: "Train an AI on your Discord server's message history to automatically moderate content while preserving your community vibe."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="2232b140-6117-4a95-9216-68d6486c5a9d"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
