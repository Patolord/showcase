import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Showcase | Full Stack Developer",
  description:
    "Portfolio showcase featuring full-stack development projects, including web applications, games, and collaborative platforms built with modern technologies.",
  keywords: [
    "full-stack developer",
    "web development",
    "React",
    "Next.js",
    "TypeScript",
    "portfolio",
    "software engineer",
  ],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Full Stack Developer Portfolio",
    description:
      "Explore my collection of full-stack development projects and technical expertise",
    type: "website",
    // Add your website URL when deployed
    url: "https://your-domain.com",
    // Add your OG image path when ready
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Full Stack Developer Portfolio",
    description:
      "Explore my collection of full-stack development projects and technical expertise",
    // Add your Twitter handle if you have one
    creator: "@yourusername",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen relative`}
      >
        <div className="absolute inset-0 -z-10">
          <div className="relative h-full w-full">
            <div className="absolute top-0 left-0 z-[-2] h-full w-full bg-gradient-to-b from-white to-gray-200"></div>
            <div className="absolute top-0 left-0 z-[-1] h-full w-full mix-blend-multiply bg-[radial-gradient(#00000008_1px,transparent_1px)] [background-size:16px_16px]"></div>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
