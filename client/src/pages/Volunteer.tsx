/*
 * Volunteer Page — The Common Cloud
 * Design: Precision Civic Tech — Navy/Teal
 * Content: Volunteer opportunities, GiveButter widget, DoubleTheDonation
 */
import { useEffect, useRef } from "react";
import { Code2, Brain, LayoutDashboard, BarChart3, ArrowRight, Heart, ExternalLink } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const VOLUNTEER_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663235442573/mKGXBDLKHaOfGvOl.jpg";
const TEAM_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663235442573/tNjQfXaudiylFOde.png";

const VOLUNTEER_ROLES = [
  {
    icon: Code2,
    title: "Python Backend Development",
    description: "Help build the core analytical engine, API layer, and data processing pipelines. Experience with FastAPI, SQLAlchemy, or similar frameworks preferred.",
    skills: ["Python", "FastAPI", "REST APIs", "Data Pipelines"],
  },
  {
    icon: Brain,
    title: "LLM Integration & Prompt Engineering",
    description: "Design and implement the conversational AI layer, including prompt engineering, chain-of-thought reasoning, and structured output parsing.",
    skills: ["LangChain", "OpenAI API", "Prompt Engineering", "RAG"],
  },
  {
    icon: LayoutDashboard,
    title: "Frontend Development (React)",
    description: "Build the user-facing interface that makes complex analytical tools accessible and intuitive. Experience with React, TypeScript, and data visualization preferred.",
    skills: ["React", "TypeScript", "Tailwind CSS", "D3.js"],
  },
  {
    icon: BarChart3,
    title: "Applied Statistics & Decision Science",
    description: "Help design and validate the analytical frameworks — evidence grading systems, Bayesian models, causal inference methods, and uncertainty quantification.",
    skills: ["Bayesian Statistics", "Causal Inference", "R or Python", "Decision Theory"],
  },
];

export default function Volunteer() {
  const givebuttterRef = useRef<HTMLDivElement>(null);
  const dtdRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load GiveButter widget script
    const gbScript = document.createElement("script");
    gbScript.src = "https://widgets.givebutter.com/latest.umd.cjs?acct=KpMfPVzlRiZEYIKw&p=other";
    gbScript.async = true;
    document.head.appendChild(gbScript);

    // Inject GiveButter widget element
    if (givebuttterRef.current && givebuttterRef.current.children.length === 0) {
      const widget = document.createElement("givebutter-widget");
      widget.setAttribute("id", "KpMfPVzlRiZEYIKw");
      givebuttterRef.current.appendChild(widget);
    }

    // Load DoubleTheDonation script
    const ddConf = document.createElement("script");
    ddConf.text = 'var DDCONF = { API_KEY: "GIFTEDDREAMERS" };';
    document.head.appendChild(ddConf);

    const dtdScript = document.createElement("script");
    dtdScript.src = "https://doublethedonation.com/api/js/ddplugin.js";
    dtdScript.async = true;
    document.head.appendChild(dtdScript);

    return () => {
      // Cleanup
      if (document.head.contains(gbScript)) document.head.removeChild(gbScript);
      if (document.head.contains(ddConf)) document.head.removeChild(ddConf);
      if (document.head.contains(dtdScript)) document.head.removeChild(dtdScript);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Page Header */}
      <section className="pt-28 pb-16 bg-navy relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${VOLUNTEER_IMG})` }}
        />
        <div className="absolute inset-0 bg-[oklch(0.18_0.04_245/0.85)]" />
        <div className="container relative z-10">
          <div className="accent-bar mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Volunteer</h1>
          <p className="text-xl text-slate-300 max-w-2xl font-serif">
            Join us in building open-source tools that make rigorous decision support accessible to everyone.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="accent-bar mb-4" />
              <h2 className="text-3xl font-bold text-[oklch(0.18_0.04_245)] mb-5 tracking-tight">
                Be Part of Something Meaningful
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-5 font-serif">
                This project is in early development and fiscally sponsored by{" "}
                <a href="https://gifteddreamers.org" target="_blank" rel="noopener noreferrer" className="text-[oklch(0.72_0.15_210)] hover:underline">
                  Gifted Dreamers, Inc. 501(c)(3)
                </a>{" "}
                EIN 39-3863796.
              </p>
              <p className="text-base text-slate-600 leading-relaxed mb-5">
                We are actively seeking volunteer technical contributors with experience in Python backend development, LLM integration and prompt engineering, frontend development (React), and applied statistics or decision science.
              </p>
              <p className="text-base text-slate-600 leading-relaxed mb-6">
                Your contributions will help build the foundation of a more equitable decision-support ecosystem — one where the quality of analysis available to a small nonprofit is comparable to what's available to a Fortune 500 company or government agency.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[oklch(0.72_0.15_210)] text-[oklch(0.12_0.04_245)] font-semibold rounded hover:bg-[oklch(0.80_0.13_210)] transition-colors"
                >
                  Get in Touch <ArrowRight size={15} />
                </Link>
                <a
                  href="https://gifteddreamers.org/volunteer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-[oklch(0.72_0.15_210/0.4)] text-[oklch(0.72_0.15_210)] font-medium rounded hover:bg-[oklch(0.72_0.15_210/0.1)] transition-colors"
                >
                  <ExternalLink size={14} />
                  Gifted Dreamers Volunteer
                </a>
              </div>
            </div>
            <div>
              <img
                src={TEAM_IMG}
                alt="Volunteers collaborating on the project"
                className="rounded-xl shadow-xl w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Roles */}
      <section className="py-16 bg-[oklch(0.97_0.005_245)]">
        <div className="container">
          <div className="text-center mb-12">
            <div className="accent-bar mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-[oklch(0.18_0.04_245)] mb-3 tracking-tight">
              Open Volunteer Roles
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto font-serif">
              We are looking for contributors across four key technical areas.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {VOLUNTEER_ROLES.map((role) => {
              const Icon = role.icon;
              return (
                <div key={role.title} className="bg-white rounded-xl p-6 border border-slate-100 shadow-sm card-hover">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-[oklch(0.72_0.15_210/0.1)] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon size={22} className="text-[oklch(0.72_0.15_210)]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-[oklch(0.18_0.04_245)] mb-2">{role.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed mb-3">{role.description}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {role.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2.5 py-1 bg-[oklch(0.72_0.15_210/0.08)] text-[oklch(0.45_0.12_210)] text-xs font-medium rounded-full border border-[oklch(0.72_0.15_210/0.2)]"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[oklch(0.72_0.15_210)] text-[oklch(0.12_0.04_245)] font-semibold rounded hover:bg-[oklch(0.80_0.13_210)] transition-colors"
            >
              Apply to Volunteer <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Donation Widgets */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <div className="accent-bar mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-[oklch(0.18_0.04_245)] mb-3 tracking-tight">
                Support the Project
              </h2>
              <p className="text-slate-500 max-w-xl mx-auto font-serif">
                Donations are tax-deductible through our fiscal sponsor, Gifted Dreamers, Inc. 501(c)(3) EIN 39-3863796.
              </p>
            </div>

            {/* GiveButter Widget */}
            <div className="bg-[oklch(0.97_0.005_245)] rounded-2xl p-6 border border-slate-100 mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Heart size={18} className="text-[oklch(0.72_0.15_210)]" />
                <h3 className="font-semibold text-[oklch(0.18_0.04_245)]">Make a Donation</h3>
              </div>
              <div ref={givebuttterRef} className="min-h-[200px]" />
            </div>

            {/* DoubleTheDonation Widget */}
            <div className="bg-[oklch(0.97_0.005_245)] rounded-2xl p-6 border border-slate-100">
              <div className="flex items-center gap-2 mb-4">
                <Heart size={18} className="text-[oklch(0.72_0.15_210)]" />
                <h3 className="font-semibold text-[oklch(0.18_0.04_245)]">Double Your Donation</h3>
                <span className="text-xs text-slate-500 ml-1">— Check if your employer matches!</span>
              </div>
              <p className="text-slate-500 text-sm mb-4">
                Many employers offer matching gift programs that can double or even triple your donation. Enter your employer's name below to check eligibility.
              </p>
              <div ref={dtdRef} id="dd-container" className="mt-2" />
            </div>
          </div>
        </div>
      </section>

      {/* Fiscal Sponsor Info */}
      <section className="py-12 bg-navy">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-slate-300 text-sm leading-relaxed">
              The Common Cloud is a project of Lumiel Design Clarity, fiscally sponsored by{" "}
              <a href="https://gifteddreamers.org" target="_blank" rel="noopener noreferrer" className="text-[oklch(0.72_0.15_210)] hover:underline">
                Gifted Dreamers, Inc.
              </a>
              , a 501(c)(3) nonprofit organization (EIN: 39-3863796) based in Austin, Texas.
              All donations are tax-deductible to the extent permitted by law.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
