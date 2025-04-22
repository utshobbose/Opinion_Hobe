import "./globals.css";
import type { Metadata } from "next";
//import { ConvexClientProvider } from "./providers/ConvexProvider";

export const metadata: Metadata = {
  title: "OpinionHobe",
  description: "AI-powered podcast SaaS built with Next.js and Convex",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-white text-black dark:bg-black dark:text-white antialiased">
  {children}
</body>
    </html>
  );
}
