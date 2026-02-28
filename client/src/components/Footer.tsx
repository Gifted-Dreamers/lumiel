/*
 * Footer Component — The Common Cloud
 * Design: Dark navy footer with teal accents, MIT license badge, fiscal sponsor info
 * Uses official high-res Lumiel logo
 */
import { Link } from "wouter";
import { Linkedin, ExternalLink, Heart } from "lucide-react";

// Official high-res Lumiel logo
const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663235442573/NRqzMbZCkFgJSaZmsJS4BR/logo-opt_562a44c6.webp";

export default function Footer() {
  return (
    <footer className="bg-[oklch(0.13_0.04_245)] text-slate-400 border-t border-white/10">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-lg overflow-hidden bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
                <img
                  src={LOGO_URL}
                  alt="Lumiel Design Clarity"
                  className="w-9 h-9 object-contain"
                  loading="lazy"
                />
              </div>
              <div>
                <div className="text-white font-semibold text-sm">Lumiel Design Clarity</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-4 max-w-xs">
              Lumiel Design Clarity builds open-source civic technology — making institutional-grade decision support accessible to everyone.
            </p>
            {/* Badges */}
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="oss-badge">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
                Open Source
              </span>
              <span className="oss-badge">MIT License</span>
            </div>
            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/in/katherine-hardin-231b8b284/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-500 hover:text-[oklch(0.72_0.15_210)] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h3 className="text-white text-xs font-semibold tracking-widest uppercase mb-4">Navigation</h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/volunteer", label: "Volunteer" },
                { href: "/faq", label: "FAQ" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-[oklch(0.72_0.15_210)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sponsor Column */}
          <div>
            <h3 className="text-white text-xs font-semibold tracking-widest uppercase mb-4">Fiscal Sponsor</h3>
            <a
              href="https://gifteddreamers.org"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-[oklch(0.72_0.15_210)] hover:text-[oklch(0.85_0.10_210)] transition-colors mb-2"
            >
              Gifted Dreamers, Inc.
              <ExternalLink size={12} />
            </a>
            <p className="text-xs leading-relaxed mb-3">
              501(c)(3) Nonprofit<br />
              EIN: 39-3863796<br />
              Austin, TX
            </p>
            <p className="text-xs leading-relaxed">
              Lumiel Design Clarity is fiscally sponsored by{" "}
              <a
                href="https://gifteddreamers.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[oklch(0.72_0.15_210)] hover:underline"
              >
                Gifted Dreamers, Inc.
              </a>
              , a 501(c)(3) nonprofit based in Austin, TX.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="section-divider my-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span>© 2026 Lumiel Design Clarity. All rights reserved.</span>
            <span className="hidden md:inline">·</span>
            <span>
              Licensed under the{" "}
              <a
                href="https://opensource.org/licenses/MIT"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[oklch(0.72_0.15_210)] hover:underline"
              >
                MIT License
              </a>
            </span>
            <span className="hidden md:inline">·</span>
            <span>Open Source</span>
          </div>
          <div className="flex items-center gap-1 text-slate-600">
            <span>Made with</span>
            <Heart size={11} className="text-red-500 fill-red-500" />
            <span>for civic technology</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
