/*
 * Home Page — The Common Cloud
 * Design: Precision Civic Tech — Navy/Teal, Space Grotesk + Source Serif 4
 * Sections: Hero, About, Platform Features, Open Source, CTA
 */
import { Link } from "wouter";
import { ArrowRight, CheckCircle, ExternalLink, Users, BarChart3, Brain, Shield } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const HERO_BG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663235442573/RRHnEBttbNXsGgbz.jpg";
const ABOUT_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663235442573/MmaeHuQvvUQsyQPw.jpg";
const PLATFORM_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663235442573/pwJFHTxcbSvSDVij.jpg";
const TEAM_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663235442573/tNjQfXaudiylFOde.png";
const LIGHTBULB_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663235442573/RXqmHgflWdQrBoPy.png";
const LUMIEL_LOGO = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663235442573/wEarmuqgeCMZIkNN.png";

const FEATURES = [
  {
    icon: BarChart3,
    title: "Evidence Grading",
    description: "Systematic evaluation of evidence quality using structured analytical frameworks adapted from intelligence and medical research communities.",
  },
  {
    icon: Brain,
    title: "Probabilistic Reasoning",
    description: "Bayesian and probabilistic tools that quantify uncertainty, helping users understand confidence levels and risk in complex decisions.",
  },
  {
    icon: Shield,
    title: "Causal Inference",
    description: "Structured causal modeling to distinguish correlation from causation, enabling more rigorous analysis of interventions and outcomes.",
  },
  {
    icon: Users,
    title: "Conversational AI",
    description: "Natural language interface powered by LLMs that guides users through analytical frameworks without requiring technical expertise.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center pt-16"
        aria-label="Hero"
      >
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${HERO_BG})` }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 hero-overlay" aria-hidden="true" />
        {/* Circuit pattern overlay */}
        <div className="absolute inset-0 opacity-10" aria-hidden="true"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, oklch(0.72 0.15 210 / 0.3) 0%, transparent 50%),
                              radial-gradient(circle at 80% 20%, oklch(0.72 0.15 210 / 0.2) 0%, transparent 40%)`,
          }}
        />

        <div className="container relative z-10 py-20">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left: text content */}
            <div className="flex-1 max-w-2xl">
              {/* Badge */}
              <div className="flex items-center gap-3 mb-6">
                <span className="oss-badge">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                  Lumiel Design Clarity · MIT License
                </span>
                <span className="text-slate-400 text-xs">Fiscally sponsored by Gifted Dreamers, Inc. 501(c)(3)</span>
              </div>

              {/* Main headline */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-6">
                Open Source{" "}
                <span className="text-gradient-teal">Decision</span>
                <br />
                <span className="text-gradient-teal">Support</span>
              </h1>

              <p className="text-xl md:text-2xl text-slate-200 font-light leading-relaxed mb-8 font-serif max-w-2xl">
                Making institutional-grade decision support tools accessible to everyone.
              </p>

              <p className="text-base text-slate-300 leading-relaxed mb-10 max-w-xl">
                We are building an open-source civic technology platform that combines structured analytical methods with conversational AI — bringing the tools of intelligence analysts and research institutions to individuals, nonprofits, and small organizations.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/volunteer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[oklch(0.72_0.15_210)] text-[oklch(0.12_0.04_245)] font-semibold rounded hover:bg-[oklch(0.80_0.13_210)] transition-colors"
                >
                  Get Involved
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 text-white font-medium rounded hover:bg-white/10 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>

          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 animate-bounce">
          <div className="w-px h-8 bg-gradient-to-b from-transparent to-[oklch(0.72_0.15_210/0.6)]" />
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white" aria-label="About">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="accent-bar mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-[oklch(0.18_0.04_245)] mb-6 tracking-tight">
                Closing the Decision Intelligence Gap
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6 font-serif">
                We are building an open-source civic technology platform that combines structured analytical methods with conversational AI. The platform uses evidence grading, probabilistic reasoning, and causal inference to help users navigate complex, high-stakes decisions with greater transparency and confidence.
              </p>
              <p className="text-base text-slate-600 leading-relaxed mb-8">
                Our goal is to close the gap between the sophisticated analytical tools available to large institutions and what is available to individuals, small organizations, and nonprofits.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  "Evidence-based analytical frameworks",
                  "Transparent, auditable reasoning chains",
                  "Accessible to non-technical users",
                  "Open source and community-driven",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle size={18} className="text-[oklch(0.72_0.15_210)] flex-shrink-0" />
                    <span className="text-slate-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-[oklch(0.72_0.15_210)] font-semibold hover:gap-3 transition-all"
              >
                Meet the Team <ArrowRight size={16} />
              </Link>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-[oklch(0.72_0.15_210/0.05)] rounded-2xl" />
              <img
                src={TEAM_IMG}
                alt="Diverse team collaborating on decision support tools"
                className="relative rounded-xl shadow-2xl w-full object-cover"
                loading="lazy"
              />
              {/* Floating stat card */}
              <div className="absolute -bottom-6 -left-6 bg-[oklch(0.18_0.04_245)] text-white p-4 rounded-xl shadow-xl border border-[oklch(0.72_0.15_210/0.3)]">
                <div className="text-2xl font-bold text-[oklch(0.72_0.15_210)]">MIT</div>
                <div className="text-xs text-slate-400 mt-0.5">Lumiel Design Clarity</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-20 bg-[oklch(0.97_0.005_245)]" aria-label="Platform Features">
        <div className="container">
          <div className="text-center mb-14">
            <div className="accent-bar mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-[oklch(0.18_0.04_245)] mb-4 tracking-tight">
              Platform Capabilities
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto font-serif">
              Institutional-grade analytical tools, redesigned for accessibility and transparency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
            {FEATURES.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm card-hover"
                >
                  <div className="w-10 h-10 bg-[oklch(0.72_0.15_210/0.1)] rounded-lg flex items-center justify-center mb-4">
                    <Icon size={20} className="text-[oklch(0.72_0.15_210)]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[oklch(0.18_0.04_245)] mb-2">{feature.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>

          {/* Platform video */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <video
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663235442573/NRqzMbZCkFgJSaZmsJS4BR/early-dev-video_e230d344.mp4"
              poster="https://d2xsxph8kpxj0f.cloudfront.net/310519663235442573/NRqzMbZCkFgJSaZmsJS4BR/early-dev-poster_c702be41.jpg"
              className="w-full h-64 md:h-80 object-cover"
              autoPlay
              muted
              loop
              playsInline
              aria-label="Abstract light trails representing innovation and early development"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.18_0.04_245/0.85)] to-transparent flex items-center">
              <div className="p-8 md:p-12 max-w-lg">
                <h3 className="text-2xl font-bold text-white mb-3">Early Development Stage</h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  This project is in active early development. We are seeking volunteer contributors to help build the foundation of a more equitable decision-support ecosystem.
                </p>
                <Link
                  href="/volunteer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[oklch(0.72_0.15_210)] text-[oklch(0.12_0.04_245)] text-sm font-semibold rounded hover:bg-[oklch(0.80_0.13_210)] transition-colors"
                >
                  Join as Volunteer <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Source / Lumiel Section */}
      <section className="py-20 bg-navy" aria-label="Open Source">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src={ABOUT_IMG}
                alt="Open source civic technology platform"
                className="rounded-xl shadow-2xl w-full object-cover"
                loading="lazy"
              />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <img src={LUMIEL_LOGO} alt="Lumiel" className="w-12 h-12 object-contain object-top" />
                <div>
                  <div className="text-[oklch(0.72_0.15_210)] text-xs font-semibold tracking-widest uppercase">Lumiel Design Clarity</div>
                  <div className="text-white font-semibold">Illuminate information. Empower decisions.</div>
                </div>
              </div>
              <div className="accent-bar mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
                Built in the Open,<br />For the Public Good
              </h2>
              <p className="text-slate-300 leading-relaxed mb-6 font-serif">
                Lumiel Design Clarity is released under the MIT License — free to use, modify, and distribute. We believe that the tools for clear thinking should be a public resource, not a proprietary advantage.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { label: "License", value: "MIT Open Source" },
                  { label: "Status", value: "Early Development" },
                  { label: "Sponsor", value: "Gifted Dreamers 501(c)(3)" },
                  { label: "Domain", value: "thecommoncloud.org" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-[oklch(0.22_0.04_245)] p-4 rounded-lg border border-[oklch(0.72_0.15_210/0.2)]">
                    <div className="text-[oklch(0.72_0.15_210)] text-xs font-medium uppercase tracking-wider mb-1">{stat.label}</div>
                    <div className="text-white text-sm font-semibold">{stat.value}</div>
                  </div>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href="https://gifteddreamers.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-[oklch(0.72_0.15_210/0.4)] text-[oklch(0.72_0.15_210)] text-sm font-medium rounded hover:bg-[oklch(0.72_0.15_210/0.1)] transition-colors"
                >
                  <ExternalLink size={14} />
                  Fiscal Sponsor
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[oklch(0.72_0.15_210)]" aria-label="Call to Action">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[oklch(0.12_0.04_245)] mb-4 tracking-tight">
            Help Build the Future of Decision Support
          </h2>
          <p className="text-[oklch(0.18_0.04_245)] text-lg mb-8 max-w-2xl mx-auto font-serif">
            We are actively seeking volunteer technical contributors. If you have experience in Python, LLM integration, React, or applied statistics, we want to hear from you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/volunteer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[oklch(0.12_0.04_245)] text-white font-semibold rounded hover:bg-[oklch(0.18_0.04_245)] transition-colors"
            >
              Volunteer Now <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[oklch(0.12_0.04_245)] text-[oklch(0.12_0.04_245)] font-semibold rounded hover:bg-[oklch(0.12_0.04_245/0.1)] transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
