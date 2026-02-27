/*
 * About Us Page — The Common Cloud
 * Design: Precision Civic Tech — Navy/Teal editorial layout
 * Content: Katherine Hardin profile, mission, team, fiscal sponsor
 */
import { Linkedin, ExternalLink, MapPin, Briefcase, GraduationCap } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const ABOUT_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663235442573/MmaeHuQvvUQsyQPw.jpg";
const TEAM_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663235442573/tNjQfXaudiylFOde.png";
const LUMIEL_LOGO = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663235442573/wEarmuqgeCMZIkNN.png";
const LUMIEL_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663235442573/HVnEtFXsiVNIBozT.png";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Page Header */}
      <section className="pt-28 pb-16 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 70% 50%, oklch(0.72 0.15 210 / 0.4) 0%, transparent 60%)`,
          }}
        />
        <div className="container relative z-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <div className="accent-bar mb-4" />
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">About Us</h1>
              <p className="text-xl text-slate-300 max-w-2xl font-serif">
                Meet the team behind Lumiel Design Clarity and learn about our mission to democratize decision intelligence.
              </p>
            </div>
            {/* Lumiel logo - right side of header */}
            <div className="hidden md:flex flex-col items-center justify-center flex-shrink-0">
              <div className="w-32 h-32 rounded-xl overflow-hidden bg-white shadow-xl flex items-center justify-center p-2">
                <img
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663235442573/wEarmuqgeCMZIkNN.png"
                  alt="Lumiel Design Clarity"
                  className="w-full h-full object-contain"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="accent-bar mb-4" />
              <h2 className="text-3xl font-bold text-[oklch(0.18_0.04_245)] mb-6 tracking-tight">Our Mission</h2>
              <p className="text-base text-slate-600 leading-relaxed mb-5">
                We are building an open-source civic technology platform that combines structured analytical methods with conversational AI. The platform uses evidence grading, probabilistic reasoning, and causal inference to help users navigate complex, high-stakes decisions with greater transparency and confidence.
              </p>
              <p className="text-base text-slate-600 leading-relaxed mb-5">
                Our goal is to close the gap between the sophisticated analytical tools available to large institutions and what is available to individuals, small organizations, and nonprofits.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                The methods we draw upon — structured analytic techniques, probabilistic forecasting, and causal reasoning — have been developed and refined in intelligence analysis, clinical research, and policy evaluation. We believe these tools should be accessible to everyone making important decisions, not just well-resourced institutions.
              </p>
            </div>
            <div className="relative">
              <img
                src={ABOUT_IMG}
                alt="Collaborative team working on civic technology"
                className="rounded-xl shadow-xl w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Lumiel Banner — full-width, responsive */}
      <section className="py-0 bg-[oklch(0.14_0.04_245)] w-full overflow-hidden">
        <img
          src={LUMIEL_BANNER}
          alt="Lumiel Design Clarity — Illuminate information. Empower decisions."
          className="w-full block"
          style={{
            display: "block",
            width: "100%",
            height: "auto",
            maxHeight: "480px",
            objectFit: "cover",
            objectPosition: "center center",
          }}
          loading="lazy"
        />
      </section>

      {/* Founder / Team Section */}
      <section className="py-16 bg-[oklch(0.97_0.005_245)]">
        <div className="container">
          <div className="text-center mb-12">
            <div className="accent-bar mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-[oklch(0.18_0.04_245)] mb-3 tracking-tight">Our Team</h2>
            <p className="text-slate-500 max-w-xl mx-auto font-serif">
              Driven by a commitment to civic technology and open-source collaboration.
            </p>
          </div>

          {/* Katherine Hardin — Founder */}
          <div className="max-w-4xl mx-auto mb-10">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-100">
              <div className="bg-navy p-8 md:p-10">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  <div className="w-20 h-20 rounded-full bg-[oklch(0.72_0.15_210/0.2)] border-2 border-[oklch(0.72_0.15_210)] flex items-center justify-center flex-shrink-0">
                    <span className="text-[oklch(0.72_0.15_210)] text-2xl font-bold">KH</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-1">Katherine Hardin</h3>
                    <p className="text-[oklch(0.72_0.15_210)] font-medium mb-2">Founder, Lumiel Design Clarity</p>
                    <div className="flex flex-wrap gap-3 text-sm text-slate-400">
                      <span className="flex items-center gap-1"><MapPin size={13} />Austin, Texas</span>
                      <span className="flex items-center gap-1"><Briefcase size={13} />Civic Technology · Decision Science</span>
                    </div>
                  </div>
                  <a
                    href="https://www.linkedin.com/in/katherine-hardin-231b8b284/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-[oklch(0.72_0.15_210)] text-[oklch(0.12_0.04_245)] text-sm font-semibold rounded hover:bg-[oklch(0.80_0.13_210)] transition-colors"
                  >
                    <Linkedin size={15} />
                    LinkedIn
                  </a>
                </div>
              </div>
              <div className="p-8 md:p-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-sm font-semibold text-[oklch(0.18_0.04_245)] uppercase tracking-wider mb-4 flex items-center gap-2">
                      <div className="w-4 h-0.5 bg-[oklch(0.72_0.15_210)]" />
                      Background
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                      Katherine Hardin is the founder of Lumiel Design Clarity, part of The Common Cloud project. With a background spanning civic technology, decision science, and organizational strategy, she brings a unique perspective to the challenge of making rigorous analytical tools accessible to everyone.
                    </p>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Her work is motivated by a core belief: that the quality of decisions made by individuals, nonprofits, and small organizations should not be limited by their access to sophisticated analytical infrastructure.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[oklch(0.18_0.04_245)] uppercase tracking-wider mb-4 flex items-center gap-2">
                      <div className="w-4 h-0.5 bg-[oklch(0.72_0.15_210)]" />
                      Focus Areas
                    </h4>
                    <div className="space-y-3">
                      {[
                        { icon: Briefcase, label: "Civic Technology & Open Source" },
                        { icon: GraduationCap, label: "Decision Science & Analytics" },
                        { icon: Briefcase, label: "Nonprofit & Social Impact Strategy" },
                        { icon: GraduationCap, label: "AI Integration & Prompt Engineering" },
                        { icon: Briefcase, label: "Organizational Leadership" },
                      ].map((item) => {
                        const Icon = item.icon;
                        return (
                          <div key={item.label} className="flex items-center gap-3">
                            <div className="w-7 h-7 bg-[oklch(0.72_0.15_210/0.1)] rounded flex items-center justify-center flex-shrink-0">
                              <Icon size={13} className="text-[oklch(0.72_0.15_210)]" />
                            </div>
                            <span className="text-slate-600 text-sm">{item.label}</span>
                          </div>
                        );
                      })}
                    </div>
                    <div className="mt-6">
                      <a
                        href="https://www.linkedin.com/in/katherine-hardin-231b8b284/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[oklch(0.72_0.15_210)] text-sm font-medium hover:underline"
                      >
                        View full profile on LinkedIn
                        <ExternalLink size={13} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Eric Basham + Kristine Socall — two-column cards */}
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Eric Basham */}
            <div className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm flex flex-col">
              <div className="bg-navy p-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-[oklch(0.72_0.15_210/0.2)] border-2 border-[oklch(0.72_0.15_210)] flex items-center justify-center flex-shrink-0">
                    <span className="text-[oklch(0.72_0.15_210)] text-lg font-bold">EB</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-bold text-white mb-0.5">Eric Basham</h3>
                    <p className="text-[oklch(0.72_0.15_210)] text-sm font-medium mb-1">Neuromorphic Engineer &amp; AI/ML Hardware Specialist</p>
                    <div className="flex flex-wrap gap-2 text-xs text-slate-400">
                      <span className="flex items-center gap-1"><MapPin size={11} />Seattle, Washington</span>
                    </div>
                  </div>
                  <a
                    href="https://www.linkedin.com/in/eric-basham-0580b02/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-[oklch(0.72_0.15_210)] text-[oklch(0.12_0.04_245)] text-xs font-semibold rounded hover:bg-[oklch(0.80_0.13_210)] transition-colors flex-shrink-0"
                  >
                    <Linkedin size={12} />
                    LinkedIn
                  </a>
                </div>
              </div>
              <div className="p-6 flex-1">
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Eric is a neuromorphic engineer specializing in device, analog, AMS, and MEMs design for IC and PCB systems. He brings deep expertise in AI/ML holistic hardware solutions and has led open-source research programs and student teams to national recognition.
                </p>
                <p className="text-slate-600 text-sm leading-relaxed mb-5">
                  His career spans the full hardware development lifecycle — from custom process and device design to fabrication, metrology, and analog/mixed-signal circuit implementation — alongside software fluency in Python, MATLAB, C, and Verilog.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Neuromorphic Engineering", "AI/ML Hardware", "Open Source", "Python", "Circuit Design"].map((tag) => (
                    <span key={tag} className="px-2.5 py-1 bg-[oklch(0.72_0.15_210/0.1)] text-[oklch(0.40_0.12_210)] text-xs font-medium rounded-full border border-[oklch(0.72_0.15_210/0.2)]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Kristine Socall */}
            <div className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm flex flex-col">
              <div className="bg-navy p-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-[oklch(0.72_0.15_210/0.2)] border-2 border-[oklch(0.72_0.15_210)] flex items-center justify-center flex-shrink-0">
                    <span className="text-[oklch(0.72_0.15_210)] text-lg font-bold">KS</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-bold text-white mb-0.5">Kristine Socall, MBA</h3>
                    <p className="text-[oklch(0.72_0.15_210)] text-sm font-medium mb-1">Executive Director &amp; Founder, Gifted Dreamers, Inc.</p>
                    <div className="flex flex-wrap gap-2 text-xs text-slate-400">
                      <span className="flex items-center gap-1"><MapPin size={11} />Austin, Texas</span>
                      <span className="flex items-center gap-1"><Briefcase size={11} />Gifted Dreamers 501(c)(3)</span>
                    </div>
                  </div>
                  <a
                    href="https://www.linkedin.com/in/kristinesocall/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-[oklch(0.72_0.15_210)] text-[oklch(0.12_0.04_245)] text-xs font-semibold rounded hover:bg-[oklch(0.80_0.13_210)] transition-colors flex-shrink-0"
                  >
                    <Linkedin size={12} />
                    LinkedIn
                  </a>
                </div>
              </div>
              <div className="p-6 flex-1">
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Kristine is the Executive Director and Founder of Gifted Dreamers, Inc., the 501(c)(3) nonprofit that serves as fiscal sponsor for The Common Cloud. She is also an accounting consultant at Socall C Group LLC.
                </p>
                <p className="text-slate-600 text-sm leading-relaxed mb-5">
                  Gifted Dreamers deploys community infrastructure empowering neighbors to connect, coordinate support, and strengthen resilience before, during, and after crises — currently partnering with communities in Travis County, Texas responding to catastrophic flooding.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Nonprofit Leadership", "Community Resilience", "Fiscal Sponsorship", "Accounting", "Civic Infrastructure"].map((tag) => (
                    <span key={tag} className="px-2.5 py-1 bg-[oklch(0.72_0.15_210/0.1)] text-[oklch(0.40_0.12_210)] text-xs font-medium rounded-full border border-[oklch(0.72_0.15_210/0.2)]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Volunteer Team Image */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="accent-bar mb-4" />
              <h2 className="text-3xl font-bold text-[oklch(0.18_0.04_245)] mb-5 tracking-tight">
                Join Our Growing Community
              </h2>
              <p className="text-base text-slate-600 leading-relaxed mb-5">
                Lumiel Design Clarity is a community-driven organization. We are actively building a team of volunteer contributors who share our commitment to making decision intelligence accessible to all.
              </p>
              <p className="text-base text-slate-600 leading-relaxed mb-6">
                Whether you are a developer, data scientist, designer, or domain expert in decision science, there is a meaningful role for you in this project.
              </p>
              <a
                href="/volunteer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[oklch(0.72_0.15_210)] text-[oklch(0.12_0.04_245)] font-semibold rounded hover:bg-[oklch(0.80_0.13_210)] transition-colors"
              >
                See Volunteer Opportunities
                <ExternalLink size={15} />
              </a>
            </div>
            <div>
              <img
                src={TEAM_IMG}
                alt="Diverse team collaborating remotely"
                className="rounded-xl shadow-xl w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technical Advisors Section — Daniele Didino only */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <div className="accent-bar mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-[oklch(0.18_0.04_245)] mb-3 tracking-tight">Technical Advisors</h2>
            <p className="text-slate-500 max-w-xl mx-auto font-serif">
              Researchers and practitioners who bring deep expertise in data science, cognitive psychology, and evidence-based decision-making to guide the platform's development.
            </p>
          </div>

          <div className="max-w-xl mx-auto">

            {/* Daniele Didino */}
            <div className="bg-[oklch(0.97_0.005_245)] rounded-2xl overflow-hidden border border-slate-100 shadow-sm flex flex-col">
              <div className="bg-navy p-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-[oklch(0.72_0.15_210/0.2)] border-2 border-[oklch(0.72_0.15_210)] flex items-center justify-center flex-shrink-0">
                    <span className="text-[oklch(0.72_0.15_210)] text-lg font-bold">DD</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-bold text-white mb-0.5">Daniele Didino</h3>
                    <p className="text-[oklch(0.72_0.15_210)] text-sm font-medium mb-1">Data Scientist &amp; ML Engineer</p>
                    <div className="flex flex-wrap gap-2 text-xs text-slate-400">
                      <span className="flex items-center gap-1"><MapPin size={11} />Berlin, Germany</span>
                      <span className="flex items-center gap-1"><Briefcase size={11} />Herzum</span>
                    </div>
                  </div>
                  <a
                    href="https://www.linkedin.com/in/daniele-didino"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-[oklch(0.72_0.15_210)] text-[oklch(0.12_0.04_245)] text-xs font-semibold rounded hover:bg-[oklch(0.80_0.13_210)] transition-colors flex-shrink-0"
                  >
                    <Linkedin size={12} />
                    LinkedIn
                  </a>
                </div>
              </div>
              <div className="p-6 flex-1">
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Daniele is a data science professional with a strong foundation in statistics and deep expertise in machine learning algorithms, including deep learning and AI. He leverages data to tackle complex challenges and deliver impactful, data-driven solutions across the full data science lifecycle — from concept development to model deployment.
                </p>
                <p className="text-slate-600 text-sm leading-relaxed mb-5">
                  With extensive experience communicating technical concepts to diverse audiences and thriving in agile, cross-functional teams, Daniele brings both rigorous analytical depth and practical implementation expertise to The Common Cloud's decision-support infrastructure.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Machine Learning", "Deep Learning", "Statistics", "Data Science", "AI"].map((tag) => (
                    <span key={tag} className="px-2.5 py-1 bg-[oklch(0.72_0.15_210/0.1)] text-[oklch(0.40_0.12_210)] text-xs font-medium rounded-full border border-[oklch(0.72_0.15_210/0.2)]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* Fiscal Sponsor Section */}
      <section className="py-16 bg-navy">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <img src={LUMIEL_LOGO} alt="Lumiel" className="w-10 h-10 object-contain object-top" />
              <div className="text-left">
                <div className="text-[oklch(0.72_0.15_210)] text-xs font-semibold tracking-widest uppercase">Fiscal Sponsor</div>
                <div className="text-white font-semibold">Gifted Dreamers, Inc.</div>
              </div>
            </div>
            <div className="accent-bar mx-auto mb-6" />
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-5 tracking-tight">
              Fiscally Sponsored by Gifted Dreamers, Inc.
            </h2>
            <p className="text-slate-300 text-base leading-relaxed mb-6">
              The Common Cloud is a project of Lumiel Design Clarity, fiscally sponsored by{" "}
              <a href="https://gifteddreamers.org" target="_blank" rel="noopener noreferrer" className="text-[oklch(0.72_0.15_210)] hover:underline">
                Gifted Dreamers, Inc.
              </a>
              , a 501(c)(3) nonprofit organization based in Austin, Texas.
            </p>
            <div className="inline-flex flex-col items-center gap-2 bg-[oklch(0.22_0.04_245)] px-8 py-5 rounded-xl border border-[oklch(0.72_0.15_210/0.2)]">
              <div className="text-[oklch(0.72_0.15_210)] font-semibold">Gifted Dreamers, Inc.</div>
              <div className="text-slate-400 text-sm">501(c)(3) Nonprofit · EIN: 39-3863796</div>
              <div className="text-slate-400 text-sm">Austin, Texas</div>
              <a
                href="https://gifteddreamers.org"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[oklch(0.72_0.15_210)] text-sm hover:underline mt-1"
              >
                gifteddreamers.org <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
