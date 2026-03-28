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
      {/* Sticky top bar */}
      <div className="bg-brand-black text-white text-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-12">
          <Image
            src="/images/logos/ar-logo-white.png"
            alt="Awkward Recovery"
            width={160}
            height={40}
            className="h-8 w-auto object-contain"
            priority
          />
          <a
            href={`tel:${siteConfig.business.phoneLink}`}
            className="flex items-center gap-2 text-brand-mint hover:text-white transition-colors font-semibold"
          >
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">Admissions: </span>
            {siteConfig.business.phone}
          </a>
        </div>
      </div>

      <main>{children}</main>

      {/* Minimal footer */}
      <footer className="bg-brand-black text-white/60 text-sm py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
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
