import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { Phone } from "lucide-react";

export default function LandingPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Sticky top bar — taller for readable logo */}
      <div className="bg-brand-black text-white sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
          <Image
            src="/images/logos/ar-logo-white.png"
            alt="Awkward Recovery"
            width={200}
            height={50}
            className="h-10 md:h-12 w-auto object-contain"
            priority
          />
          <a
            href={`tel:${siteConfig.business.phoneLink}`}
            className="flex items-center gap-2 text-brand-mint hover:text-white transition-colors font-semibold text-base md:text-lg"
          >
            <Phone className="w-5 h-5" />
            <span className="hidden sm:inline">Admissions: </span>
            {siteConfig.business.phone}
          </a>
        </div>
      </div>

      <main>{children}</main>

      {/* Footer — call + verify insurance CTAs */}
      <footer className="bg-brand-black text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-white/40 text-sm">
            <p>
              &copy; {new Date().getFullYear()} {siteConfig.business.name}. All
              rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a
                href={`${siteConfig.business.website}/privacy-policy`}
                className="hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </a>
              <a
                href={`${siteConfig.business.website}/terms-of-service`}
                className="hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Terms of Service
              </a>
              <a
                href={siteConfig.business.website}
                className="hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                awkwardrecovery.com
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
