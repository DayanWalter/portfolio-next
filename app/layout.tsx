import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dayan Walter – Freelance Software Developer",
  description:
    "Dayan Walter, freelance software developer specializing in Next.js, React.js, Nest.js, and PostgreSQL. Hire me for custom, scalable web solutions.",
  keywords: [
    "freelance react developer",
    "freelance nextjs developer",
    "freelance frontend developer",
    "remote web developer",
    "server side rendering",
    "client side rendering",
    "server components",
    "client components",
    "server actions",
    "reactjs",
    "nextjs",
    "nestjs",
    "postgresql",
    "graphql",
    "docker",
    "tailwind",
    "mongodb",
    "nodejs",
    "typescript",
    "web development",
  ],
  authors: [{ name: "Dayan Walter" }],
  robots: "index, follow",
};
export const viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
