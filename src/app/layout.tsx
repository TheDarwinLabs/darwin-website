import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "@/styles/globals.scss";

const spaceMono = Space_Mono({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Darwin",
  description: "Darwin Website",
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
        <link rel="icon" href="/logo.svg" sizes="any" />
      </head>
      <body className={spaceMono.className}>{children}</body>
    </html>
  );
}
