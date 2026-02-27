/**
 * Volunteer Page — The Common Cloud / Lumiel Design Clarity
 * Design: Precision Civic Tech — Navy/Teal, Space Grotesk + Source Serif 4
 *
 * Widgets:
 * - GiveButter donate widget (account: PWF9tXFflbTG12rU)
 * - DoubleTheDonation employer match plugin (key: 6HMm5sEaYqgnLZmU)
 * - Volunteer application form → n8n webhook: /webhook/volunteer-form
 */

import { useEffect, useRef, useState } from "react";
import { Code2, Brain, LayoutDashboard, BarChart3, ArrowRight, Heart, ExternalLink, CheckCircle, AlertCircle } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

declare global {
  interface Window {
    Givebutter?: ((...args: unknown[]) => void) & { q?: unknown[] };
    doublethedonation?: {
      plugin?: {
        v2?: {
          load_plugin: (el: HTMLElement, key: string, opts: object) => void;
        };
      };
    };
    DD?: { plugin?: { init: () => void } };
    DDCONF?: { API_KEY: string };
  }
}

const VOLUNTEER_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663235442573/NRqzMbZCkFgJSaZmsJS4BR/volunteer-hero_730fba60.webp";
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

const SKILLS = [
  { value: "python", label: "Python Backend" },
  { value: "llm", label: "LLM / Prompt Engineering" },
  { value: "react", label: "Frontend (React)" },
  { value: "statistics", label: "Applied Statistics" },
  { value: "decision-science", label: "Decision Science" },
  { value: "ai-ml", label: "AI / Machine Learning" },
  { value: "devops", label: "DevOps / Infrastructure" },
  { value: "design", label: "UX / Graphic Design" },
  { value: "content", label: "Content Creation" },
  { value: "community", label: "Community Management" },
];

// ── GiveButter Donate Widget ─────────────────────────────────────────────────
// Uses GiveButter's hosted donation page via an iframe embed.
// Campaign slug must be set in your GiveButter account at givebutter.com.
// The account ID PWF9tXFflbTG12rU belongs to Gifted Dreamers.
function GiveButterWidget() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Load GiveButter elements script for the custom element to work
    const existingScript = document.querySelector('script[src*="js.givebutter.com/elements"]');
    if (!existingScript) {
      const w = window as Window;
      if (!w.Givebutter) {
        const gb = ((...args: unknown[]) => {
          (gb as Window["Givebutter"] & { q: unknown[] }).q = (gb as Window["Givebutter"] & { q: unknown[] }).q || [];
          (gb as Window["Givebutter"] & { q: unknown[] }).q.push(args);
        }) as Window["Givebutter"];
        w.Givebutter = gb;
      }
      w.Givebutter!("setOptions", { accountId: "PWF9tXFflbTG12rU" });

      const s1 = document.createElement("script");
      s1.async = true;
      s1.src = "https://js.givebutter.com/elements/latest.js";
      s1.onload = () => setLoaded(true);
      document.body.appendChild(s1);

      const s2 = document.createElement("script");
      s2.async = true;
      s2.src = "https://widgets.givebutter.com/latest.umd.cjs?acct=PWF9tXFflbTG12rU&p=other";
      document.body.appendChild(s2);
    } else {
      setLoaded(true);
    }
  }, []);

  return (
    <div ref={containerRef} className="w-full">
      {/* GiveButter hosted campaign widget - campaign slug must match your GiveButter campaign */}
      {/* @ts-ignore */}
      <givebutter-widget id="gifteddreamers"></givebutter-widget>
      {/* Fallback donate button if widget doesn't render */}
      <div className={`mt-4 text-center ${loaded ? '' : ''}`}>
        <a
          href="https://givebutter.com/gifteddreamers"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-[oklch(0.72_0.15_210)] hover:bg-[oklch(0.65_0.15_210)] text-[oklch(0.12_0.04_245)] font-bold rounded-lg transition-colors text-base shadow-md"
        >
          <Heart size={18} />
          Donate via GiveButter
        </a>
        <p className="text-xs text-slate-500 mt-2">
          Secure donation processing by GiveButter. Tax-deductible through Gifted Dreamers, Inc. 501(c)(3).
        </p>
      </div>
    </div>
  );
}

// ── DoubleTheDonation Widget ─────────────────────────────────────────────────
function DoubleTheDonationWidget({ containerId }: { containerId: string }) {
  const DTD_KEY = "6HMm5sEaYqgnLZmU";

  useEffect(() => {
    const initPlugin = () => {
      const el = document.getElementById(containerId);
      if (!el) { setTimeout(initPlugin, 100); return; }
      if (window.doublethedonation?.plugin?.v2?.load_plugin) {
        window.doublethedonation.plugin.v2.load_plugin(el, DTD_KEY, {
          sections: ["volunteer", "match", "payroll-giving"],
        });
      } else if (window.DD?.plugin) {
        window.DDCONF = { API_KEY: DTD_KEY };
        window.DD.plugin.init();
      } else {
        setTimeout(initPlugin, 200);
      }
    };

    if (document.querySelector('script[src="https://doublethedonation.com/api/js/ddplugin.js"]')) {
      setTimeout(initPlugin, 100);
    } else {
      const script = document.createElement("script");
      script.src = "https://doublethedonation.com/api/js/ddplugin.js";
      script.async = true;
      script.onload = () => setTimeout(initPlugin, 200);
      document.head.appendChild(script);
    }
  }, [containerId]);

  return <div id={containerId} className="w-full min-h-[300px]" />;
}

// ── Volunteer Application Form ───────────────────────────────────────────────
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  skills: string[];
  message: string;
}

function VolunteerForm() {
  const [form, setForm] = useState<FormData>({
    firstName: "", lastName: "", email: "", company: "", skills: [], message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const toggleSkill = (value: string) => {
    setForm((prev) => ({
      ...prev,
      skills: prev.skills.includes(value)
        ? prev.skills.filter((s) => s !== value)
        : [...prev.skills, value],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");
    setErrorMsg("");
    try {
      const res = await fetch("https://n8n.cloudpublica.org/webhook/lumiel-volunteer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `${form.firstName} ${form.lastName}`.trim(),
          email: form.email,
          company: form.company,
          skills: form.skills,
          message: form.message,
        }),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      setForm({ firstName: "", lastName: "", email: "", company: "", skills: [], message: "" });
    } catch {
      setStatus("error");
      setErrorMsg("There was an error submitting your application. Please try again or email katherine@gifteddreamers.org");
    } finally {
      setLoading(false);
    }
  };

  if (status === "success") {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-green-800 mb-2">Application Submitted!</h3>
        <p className="text-green-700">Thank you for your interest in volunteering. We'll be in touch soon!</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-xl shadow-sm border border-slate-200">
      {status === "error" && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
          <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
          <p className="text-red-700 text-sm">{errorMsg}</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">First Name *</label>
          <input type="text" name="firstName" value={form.firstName} onChange={handleChange} required
            className="w-full rounded-md border border-slate-300 p-2.5 text-sm outline-none focus:border-teal-500 transition-colors" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Last Name *</label>
          <input type="text" name="lastName" value={form.lastName} onChange={handleChange} required
            className="w-full rounded-md border border-slate-300 p-2.5 text-sm outline-none focus:border-teal-500 transition-colors" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">Email *</label>
        <input type="email" name="email" value={form.email} onChange={handleChange} required
          className="w-full rounded-md border border-slate-300 p-2.5 text-sm outline-none focus:border-teal-500 transition-colors" />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">
          Company <span className="text-slate-400 font-normal">(for volunteer grant lookup)</span>
        </label>
        <input type="text" name="company" value={form.company} onChange={handleChange}
          placeholder="e.g., Microsoft, Google, Salesforce"
          className="w-full rounded-md border border-slate-300 p-2.5 text-sm outline-none focus:border-teal-500 transition-colors" />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">
          Skills / Interests <span className="text-slate-400 font-normal">(select all that apply)</span>
        </label>
        <div className="grid grid-cols-2 gap-2">
          {SKILLS.map((skill) => (
            <label key={skill.value}
              className={`flex items-center gap-2 p-3 rounded-lg border cursor-pointer transition-colors ${
                form.skills.includes(skill.value)
                  ? "bg-teal-50 border-teal-500 text-teal-800"
                  : "bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-700"
              }`}
            >
              <input type="checkbox" checked={form.skills.includes(skill.value)}
                onChange={() => toggleSkill(skill.value)} className="sr-only" />
              <span className={`w-4 h-4 rounded border flex items-center justify-center flex-shrink-0 ${
                form.skills.includes(skill.value) ? "bg-teal-500 border-teal-500" : "border-slate-300"
              }`}>
                {form.skills.includes(skill.value) && (
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </span>
              <span className="text-sm">{skill.label}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">Tell us about yourself</label>
        <textarea name="message" value={form.message} onChange={handleChange} rows={4}
          placeholder="What interests you about contributing to Lumiel Design Clarity? What would you like to learn or build?"
          className="w-full rounded-md border border-slate-300 p-2.5 text-sm outline-none focus:border-teal-500 transition-colors resize-y" />
      </div>

      <button type="submit" disabled={loading}
        className="w-full py-3 px-6 bg-teal-600 hover:bg-teal-700 disabled:bg-teal-400 text-white font-semibold rounded-lg transition-colors text-sm">
        {loading ? "Submitting..." : "Submit Volunteer Application"}
      </button>

      <p className="text-xs text-slate-500 text-center">
        By submitting, you agree to be contacted about volunteer opportunities. Your information will be stored securely and never shared with third parties.
      </p>
    </form>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────
export default function Volunteer() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero */}
      <section className="pt-28 pb-16 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${VOLUNTEER_IMG})` }} />
        <div className="absolute inset-0 bg-[oklch(0.18_0.04_245/0.75)]" />
        <div className="container relative z-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <div className="accent-bar mb-4" />
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Volunteer</h1>
              <p className="text-xl text-slate-300 max-w-2xl font-serif">
                Join us in building open-source tools that make rigorous decision support accessible to everyone.
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

      {/* Intro */}
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
                <a href="https://gifteddreamers.org" target="_blank" rel="noopener noreferrer"
                  className="text-[oklch(0.72_0.15_210)] hover:underline">
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
                <Link href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[oklch(0.72_0.15_210)] text-[oklch(0.12_0.04_245)] font-semibold rounded hover:bg-[oklch(0.80_0.13_210)] transition-colors">
                  Contact Us <ArrowRight size={15} />
                </Link>
                <a href="https://gifteddreamers.org/volunteer" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-[oklch(0.72_0.15_210/0.4)] text-[oklch(0.72_0.15_210)] font-medium rounded hover:bg-[oklch(0.72_0.15_210/0.1)] transition-colors">
                  <ExternalLink size={14} />
                  Gifted Dreamers Volunteer
                </a>
              </div>
            </div>
            <div>
              <img src={TEAM_IMG} alt="Volunteers collaborating on the project"
                className="rounded-xl shadow-xl w-full object-cover" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Open Roles */}
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
                          <span key={skill}
                            className="px-2.5 py-1 bg-[oklch(0.72_0.15_210/0.08)] text-[oklch(0.45_0.12_210)] text-xs font-medium rounded-full border border-[oklch(0.72_0.15_210/0.2)]">
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
        </div>
      </section>

      {/* Volunteer Grants: Get Paid to Volunteer */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <div className="accent-bar mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-[oklch(0.18_0.04_245)] mb-3 tracking-tight">
                Get Paid to Volunteer
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto font-serif">
                Your employer probably donates to Gifted Dreamers when you volunteer — and offers you extra paid time off to do it. You learn skills. We get help. Everyone wins.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-12">
              {[{ stat: "$50", label: "Max per hour" }, { stat: "10+", label: "Skill areas" }, { stat: "100%", label: "Remote friendly" }].map(({ stat, label }) => (
                <div key={label} className="text-center">
                  <div className="text-4xl font-bold text-[oklch(0.18_0.04_245)] font-display">{stat}</div>
                  <div className="text-sm text-slate-500 mt-1">{label}</div>
                </div>
              ))}
            </div>

            {/* Volunteer Grants + DTD side by side */}
            <div className="bg-[oklch(0.97_0.005_245)] rounded-2xl p-8 border border-slate-100">
              <div className="md:flex gap-12 items-start">
                <div className="md:w-1/2 mb-8 md:mb-0">
                  <h3 className="text-xl font-bold text-[oklch(0.18_0.04_245)] mb-4">Volunteer Grants: The Hidden Perk</h3>
                  <p className="text-slate-600 text-sm mb-5">
                    Thousands of companies donate to nonprofits when their employees volunteer. When you volunteer 10 hours with us, your employer might donate $250–$500. You don't pay anything. Neither do we. Your company funds the work.
                  </p>
                  <ul className="space-y-2">
                    {[
                      { company: "Microsoft", amount: "$25/hour" },
                      { company: "Google", amount: "$50/hour" },
                      { company: "Salesforce", amount: "$10,000+ annually" },
                    ].map(({ company, amount }) => (
                      <li key={company} className="flex items-center text-slate-700 bg-white p-3 rounded-md border border-slate-100">
                        <span className="font-bold w-28 text-sm">{company}</span>
                        <span className="text-teal-700 font-medium text-sm">{amount}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="md:w-1/2 bg-white rounded-xl p-6 border border-slate-200">
                  <h4 className="font-bold text-slate-900 mb-2 text-center">Does Your Employer Match?</h4>
                  <p className="text-sm text-slate-600 mb-4 text-center">
                    Many companies have programs you've never heard of. Search your employer below.
                  </p>
                  <DoubleTheDonationWidget containerId="dtd-plugin-grants" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donate Section */}
      <section className="py-16 bg-[oklch(0.97_0.005_245)]">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <div className="accent-bar mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-[oklch(0.18_0.04_245)] mb-3 tracking-tight">
                Support the Project
              </h2>
              <p className="text-slate-500 max-w-xl mx-auto font-serif">
                Donations are tax-deductible through our fiscal sponsor,{" "}
                <a href="https://gifteddreamers.org" target="_blank" rel="noopener noreferrer"
                  className="text-[oklch(0.72_0.15_210)] hover:underline">
                  Gifted Dreamers, Inc.
                </a>{" "}
                501(c)(3) EIN 39-3863796.
              </p>
            </div>

            {/* GiveButter Donate Widget */}
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Heart size={18} className="text-[oklch(0.72_0.15_210)]" />
                <h3 className="font-semibold text-[oklch(0.18_0.04_245)]">Make a Donation</h3>
              </div>
              <GiveButterWidget />
            </div>

            {/* DoubleTheDonation Matching Widget */}
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <Heart size={18} className="text-[oklch(0.72_0.15_210)]" />
                <h3 className="font-semibold text-[oklch(0.18_0.04_245)]">Double Your Donation</h3>
                <span className="text-xs text-slate-500 ml-1">— Check if your employer matches!</span>
              </div>
              <p className="text-slate-500 text-sm mb-4">
                Many employers offer matching gift programs that can double or even triple your donation. Enter your employer's name below to check eligibility.
              </p>
              <DoubleTheDonationWidget containerId="dtd-plugin-donate" />
            </div>
          </div>
        </div>
      </section>

      {/* Fiscal Sponsor Banner */}
      <section className="py-12 bg-navy">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-slate-300 text-sm leading-relaxed">
              Lumiel Design Clarity is fiscally sponsored by{" "}
              <a href="https://gifteddreamers.org" target="_blank" rel="noopener noreferrer"
                className="text-[oklch(0.72_0.15_210)] hover:underline">
                Gifted Dreamers, Inc.
              </a>
              , a 501(c)(3) nonprofit organization (EIN: 39-3863796) based in Austin, Texas.
              All donations are tax-deductible to the extent permitted by law.
            </p>
          </div>
        </div>
      </section>

      {/* Volunteer Application Form */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <div className="accent-bar mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-[oklch(0.18_0.04_245)] tracking-tight">
                Interested in Volunteering?
              </h2>
              <p className="text-slate-500 mt-2 font-serif">
                Fill out the form below and we'll be in touch with next steps.
              </p>
            </div>
            <VolunteerForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
