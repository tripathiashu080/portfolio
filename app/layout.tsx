import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/ui/SmoothScroll";

export const metadata: Metadata = {
  title: "Gaurav Tripathi — Frontend Developer",
  description: "Animated portfolio of Gaurav Tripathi, Frontend Developer.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll/>
        {children}</body>
    </html>
  );
}
