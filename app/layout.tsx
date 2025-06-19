import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "G'rahak - Student-Led Influencer Marketing Platform",
  description:
    "Connect with verified creators who align perfectly with your brand values. Founded by VNIT Nagpur students.",
  generator: "G'rahak",
  keywords: "influencer marketing, student startup, VNIT Nagpur, brand partnerships, social media marketing",
  authors: [{ name: "Karanam Gnanesh Chowdary" }, { name: "Ravindra Dubey" }],
  openGraph: {
    title: "G'rahak - Student-Led Influencer Marketing",
    description: "Transform your brand with authentic influencer partnerships",
    url: "https://grahak.com",
    siteName: "G'rahak",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "G'rahak - Student-Led Influencer Marketing",
    description: "Connect with verified creators who align perfectly with your brand values",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
