import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Notion Content Calendar Auto-Publisher",
  description: "Auto-publish from Notion to Twitter, LinkedIn, and Instagram. Sync your content calendar and schedule posts automatically."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="35698534-45ba-4bd4-b1e4-56f8482a825e"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  );
}
