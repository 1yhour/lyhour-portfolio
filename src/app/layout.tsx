import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Pixelify_Sans } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const pixelifySans = Pixelify_Sans({
  variable: "--font-pixelify-sans",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://1yhour.vercel.app";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Seng Lyhour | Full-Stack Developer & Software Engineer",
    template: "%s | Seng Lyhour",
  },
  description:
    "Portfolio of Seng Lyhour — Full-Stack Developer & Software Engineer based in Phnom Penh, Cambodia. Building high-performance web applications with React, Next.js, Laravel, TypeScript, and modern cloud architectures.",
  applicationName: "Seng Lyhour Portfolio",
  authors: [{ name: "Seng Lyhour", url: siteUrl }],
  generator: "Next.js",
  keywords: [
    "Seng Lyhour",
    "Lyhour",
    "Full-Stack Developer",
    "Software Engineer",
    "Web Developer",
    "React Developer",
    "Next.js Portfolio",
    "TypeScript",
    "Laravel Developer",
    "Tailwind CSS",
    "Phnom Penh",
    "Cambodia Developer",
    "Frontend Engineer",
    "Backend Developer",
  ],
  creator: "Seng Lyhour",
  publisher: "Seng Lyhour",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Seng Lyhour | Full-Stack Developer & Software Engineer",
    description:
      "Full-stack software developer building resilient web applications with Next.js, React, TypeScript, and Laravel. Explore projects, technical skills, and experience.",
    siteName: "Seng Lyhour Portfolio",
    images: [
      {
        url: "/mypic.jpg",
        width: 1200,
        height: 630,
        alt: "Seng Lyhour - Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Seng Lyhour | Full-Stack Developer & Software Engineer",
    description:
      "Full-stack software developer building resilient web applications with Next.js, React, TypeScript, and Laravel.",
    images: ["/mypic.jpg"],
    creator: "@1yhour",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: "Seng Lyhour",
        givenName: "Lyhour",
        familyName: "Seng",
        url: siteUrl,
        image: `${siteUrl}/mypic.jpg`,
        jobTitle: "Full-Stack Developer & Software Engineer",
        description:
          "Full-Stack Developer from Phnom Penh, Cambodia specializing in Next.js, React, Laravel, and modern web applications.",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Phnom Penh",
          addressCountry: "Cambodia",
        },
        sameAs: [
          "https://github.com/1yhour",
          "https://www.linkedin.com/in/seng-lyhour/",
          "https://t.me/lyhourseng15",
        ],
        knowsAbout: [
          "React",
          "Next.js",
          "TypeScript",
          "JavaScript",
          "PHP",
          "Laravel",
          "Tailwind CSS",
          "Docker",
          "PostgreSQL",
          "Redis",
          "WebSockets",
          "REST APIs",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Seng Lyhour Portfolio",
        description: "Official portfolio of Seng Lyhour — Full-Stack Software Developer.",
        publisher: {
          "@id": `${siteUrl}/#person`,
        },
        inLanguage: "en-US",
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${pixelifySans.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col overflow-x-hidden">{children}</body>
    </html>
  );
}
