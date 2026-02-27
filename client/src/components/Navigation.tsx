/*
 * Navigation Component — The Common Cloud
 * Design: Sticky navy/glass nav with teal accents, hamburger for mobile
 * Space Grotesk font, circuit-board aesthetic
 */
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Github } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/volunteer", label: "Volunteer" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

// Official high-res Lumiel logo (icon portion)
const LOGO_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663235442573/wEarmuqgeCMZIkNN.png";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const isActive = (href: string) => {
    if (href === "/") return location === "/";
    return location.startsWith(href);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[oklch(0.18_0.04_245/0.97)] backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-[oklch(0.18_0.04_245/0.95)] backdrop-blur-sm"
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <img
              src={LOGO_URL}
              alt="Lumiel Design Clarity logo"
              className="w-10 h-10 object-contain object-top"
              loading="eager"
              style={{ objectPosition: "center top" }}
            />
            <div className="flex flex-col leading-none">
              <span className="text-white font-semibold text-sm tracking-tight">
                The Common Cloud
              </span>
              <span className="text-[oklch(0.72_0.15_210)] text-[10px] font-medium tracking-widest uppercase">
                by Lumiel Design Clarity
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-sm font-medium rounded transition-colors duration-150 ${
                  isActive(link.href)
                    ? "text-[oklch(0.72_0.15_210)] bg-[oklch(0.72_0.15_210/0.1)]"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 p-2 text-slate-400 hover:text-[oklch(0.72_0.15_210)] transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <Link
              href="/contact"
              className="ml-2 px-4 py-2 bg-[oklch(0.72_0.15_210)] text-[oklch(0.12_0.04_245)] text-sm font-semibold rounded hover:bg-[oklch(0.80_0.13_210)] transition-colors"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 text-slate-300 hover:text-white transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mobile-menu-enter bg-[oklch(0.18_0.04_245)] border-t border-white/10">
          <div className="container py-3 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-3 text-sm font-medium rounded transition-colors ${
                  isActive(link.href)
                    ? "text-[oklch(0.72_0.15_210)] bg-[oklch(0.72_0.15_210/0.1)]"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-2 px-4 py-3 bg-[oklch(0.72_0.15_210)] text-[oklch(0.12_0.04_245)] text-sm font-semibold rounded text-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
