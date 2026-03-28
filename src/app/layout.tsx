import type { Metadata } from "next";
import Script from "next/script";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-body",
  display: "swap",
});

const poppinsHeading = Poppins({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Awkward Recovery | Substance Abuse Treatment in Austin, TX",
  description:
    "Evidence-based substance abuse treatment in Austin, TX. Intensive outpatient, dual diagnosis, and personalized recovery programs. Call (512) 616-0809.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${poppinsHeading.variable}`}>
      <body>
        {children}

        {/* LegitScript Certification Seal (ID: 32063484) */}
        <Script
          id="legitscript-seal-script"
          strategy="lazyOnload"
          src="https://static.legitscript.com/seals/32063484.js"
        />
      </body>
    </html>
  );
}
