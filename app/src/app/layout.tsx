import type { Metadata } from "next";
import { Cormorant_Garamond, Poppins } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lokesh Ramanan & Kowsalya J — Wedding Invitation",
  description:
    "You are cordially invited to celebrate the wedding of Lokesh Ramanan and Kowsalya J on 28 May 2026 at Velu Mahal, Dindigul.",
  keywords: ["wedding", "invitation", "Lokesh Ramanan", "Kowsalya", "save the date"],
  openGraph: {
    title: "Lokesh Ramanan & Kowsalya J — Wedding Invitation",
    description:
      "Join us to celebrate our special day — 28 May 2026, Velu Mahal, Dindigul.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${poppins.variable}`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Great+Vibes&family=Poppins:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
