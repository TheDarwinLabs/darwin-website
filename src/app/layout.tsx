import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { ReactLenis } from "lenis/react";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import "./globals.css";
import { cn } from "@/lib/utils";
import { AuthProvider } from "@/providers/AuthProvider";
import { Toaster } from "@/components/ui/toaster";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "fallback",
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Darwin",
  description: "Darwin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="icon"
          href="/icon.png"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body
        className={cn(
          `${montserrat.className} antialiased bg-[#ebeae8] text-[#1a1a1a]`
        )}
      >
        <ReactQueryProvider>
          <AuthProvider>
            <ReactLenis root>{children}</ReactLenis>
          </AuthProvider>
        </ReactQueryProvider>
        <Toaster />
      </body>
    </html>
  );
}
