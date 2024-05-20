import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const ibmPlexSerif = IBM_Plex_Serif({ subsets: ["latin"],
 variable: "--font-ibm-plex-serif",
 weight: ["400", "500", "600", "700"],
 });

export const metadata: Metadata = {
  title: "Bank of Finance",
  description: "Bank of Finance is a simple and efficient way to manage and spend your money. With Bank of Finance, you can manage your money in one place. It's free and easy to use. Start managing your money today!",
  icons: {
    icon: "/icons/logo.svg",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${ibmPlexSerif.variable}`}>{children}</body>
    </html>
  );
}
