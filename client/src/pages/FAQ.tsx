/*
 * FAQ Page — The Common Cloud
 * Design: Precision Civic Tech — Navy/Teal accordion layout
 * Content: FAQ adapted from Gifted Dreamers + project-specific questions
 */
import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const FAQ_HERO = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663235442573/oucFeqZnyexwvBup.jpg";

const FAQ_CATEGORIES = [
  {
    category: "About The Common Cloud",
    questions: [
      {
        q: "What is The Common Cloud?",
        a: "The Common Cloud is an open-source civic technology platform being developed by Lumiel Design Clarity. It combines structured analytical methods — including evidence grading, probabilistic reasoning, and causal inference — with conversational AI to help users navigate complex, high-stakes decisions with greater transparency and confidence.",
      },
      {
        q: "Who is this platform for?",
        a: "The platform is designed for individuals, small organizations, nonprofits, and civic groups who need to make important decisions but lack access to the sophisticated analytical tools available to large institutions. Our goal is to close that gap by making institutional-grade decision support accessible to everyone.",
      },
      {
        q: "What stage of development is the project in?",
        a: "The Common Cloud is currently in early development. We are building the foundational architecture and actively seeking volunteer technical contributors. We do not yet have a public beta release, but we are working toward one.",
      },
      {
        q: "Is The Common Cloud free to use?",
        a: "Yes. The Common Cloud is released under the MIT License and will be free and open source. We believe that the tools for clear thinking should be a public resource, not a proprietary advantage.",
      },
      {
        q: "What does 'open source' mean for this project?",
        a: "Open source means the source code is publicly available for anyone to view, use, modify, and distribute. The MIT License is one of the most permissive open-source licenses, meaning you can use the code in your own projects, including commercial ones, with minimal restrictions.",
      },
    ],
  },
  {
    category: "Volunteering",
    questions: [
      {
        q: "How can I volunteer with The Common Cloud?",
        a: "We are actively seeking volunteers with experience in Python backend development, LLM integration and prompt engineering, frontend development (React), and applied statistics or decision science. Visit our Volunteer page to learn more about open roles, or contact us directly through the Contact page.",
      },
      {
        q: "Do I need to be a technical expert to contribute?",
        a: "While our current priority needs are technical (Python, React, LLMs, statistics), we welcome contributions from anyone with relevant skills. This includes documentation, user research, domain expertise in decision science, and organizational support.",
      },
      {
        q: "How much time do I need to commit as a volunteer?",
        a: "We are flexible. Even a few hours per month can make a meaningful contribution. We work asynchronously and accommodate contributors across different time zones and availability levels.",
      },
      {
        q: "Will I receive any compensation for volunteering?",
        a: "Currently, all contributors are volunteers. As the project grows and secures funding, we hope to be able to compensate contributors. All volunteer work is acknowledged and credited in the project.",
      },
    ],
  },
  {
    category: "Donations & Tax Information",
    questions: [
      {
        q: "Is my donation tax-deductible?",
        a: "Yes. The Common Cloud is a project of Lumiel Design Clarity, fiscally sponsored by Gifted Dreamers, Inc., a 501(c)(3) nonprofit organization (EIN: 39-3863796). Donations are tax-deductible to the extent permitted by law. You will receive a tax receipt for your donation.",
      },
      {
        q: "Who is Gifted Dreamers, Inc.?",
        a: "Gifted Dreamers, Inc. is a 501(c)(3) nonprofit organization based in Austin, Texas (EIN: 39-3863796). They serve as the fiscal sponsor for The Common Cloud, which means they provide legal and financial infrastructure for the project while it operates as a fiscally sponsored project rather than an independent nonprofit. Learn more at gifteddreamers.org.",
      },
      {
        q: "What is fiscal sponsorship?",
        a: "Fiscal sponsorship is a formal arrangement in which a 501(c)(3) nonprofit organization (the sponsor) provides legal and financial infrastructure to a project or initiative that shares its mission. This allows the project to accept tax-deductible donations and operate under the sponsor's nonprofit status without needing to form its own independent nonprofit organization.",
      },
      {
        q: "How are donations used?",
        a: "Donations support the operational costs of the project, including hosting, tooling, and eventually compensating contributors. As a fiscally sponsored project, all funds are managed by Gifted Dreamers, Inc. in accordance with their financial policies and IRS requirements.",
      },
      {
        q: "Does my employer match donations?",
        a: "Many employers offer matching gift programs. Use the DoubleTheDonation tool on our Volunteer page to check if your employer participates. Employer matches can double or even triple the impact of your donation.",
      },
      {
        q: "Can I make a recurring donation?",
        a: "Yes. You can set up a recurring donation through our GiveButter donation page. Recurring donations provide stable, predictable support that helps us plan and sustain the project over time.",
      },
    ],
  },
  {
    category: "Technical Questions",
    questions: [
      {
        q: "What technologies does the platform use?",
        a: "The platform is being built with Python for the backend (FastAPI), React and TypeScript for the frontend, and integrates with large language model APIs for the conversational AI layer. We use structured analytical frameworks from intelligence analysis, clinical research, and decision science.",
      },
      {
        q: "What analytical methods does the platform use?",
        a: "The platform draws on structured analytic techniques (SATs) from intelligence analysis, evidence-based medicine frameworks for grading evidence quality, Bayesian and probabilistic reasoning tools, causal inference methods (including directed acyclic graphs and counterfactual analysis), and decision theory frameworks.",
      },
      {
        q: "How does the conversational AI component work?",
        a: "The conversational AI layer uses large language models (LLMs) to guide users through analytical frameworks in natural language. Rather than replacing structured analysis, the AI acts as a facilitator — asking the right questions, surfacing relevant frameworks, and helping users articulate their reasoning in a structured way.",
      },
      {
        q: "Where can I find the source code?",
        a: "The project is hosted on GitHub. As we are in early development, the repository is being set up. Check our website for the latest link to the GitHub repository.",
      },
    ],
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="faq-item py-4">
      <button
        className="w-full flex items-start justify-between gap-4 text-left group"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="text-[oklch(0.18_0.04_245)] font-medium text-sm md:text-base leading-snug group-hover:text-[oklch(0.72_0.15_210)] transition-colors">
          {q}
        </span>
        <span className="flex-shrink-0 mt-0.5">
          {open
            ? <ChevronUp size={18} className="text-[oklch(0.72_0.15_210)]" />
            : <ChevronDown size={18} className="text-slate-400 group-hover:text-[oklch(0.72_0.15_210)] transition-colors" />
          }
        </span>
      </button>
      {open && (
        <div className="mt-3 pr-8">
          <p className="text-slate-600 text-sm leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Page Header */}
      <section className="pt-28 pb-16 bg-navy relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${FAQ_HERO})` }}
        />
        <div className="absolute inset-0 bg-[oklch(0.18_0.04_245/0.80)]" />
        <div className="container relative z-10">
          <div className="accent-bar mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl font-serif">
            Answers to common questions about The Common Cloud, volunteering, and donations.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            {FAQ_CATEGORIES.map((cat) => (
              <div key={cat.category} className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-[oklch(0.72_0.15_210/0.1)] rounded-lg flex items-center justify-center">
                    <HelpCircle size={16} className="text-[oklch(0.72_0.15_210)]" />
                  </div>
                  <h2 className="text-xl font-bold text-[oklch(0.18_0.04_245)] tracking-tight">
                    {cat.category}
                  </h2>
                </div>
                <div className="bg-[oklch(0.97_0.005_245)] rounded-xl px-6 divide-y divide-slate-200">
                  {cat.questions.map((item) => (
                    <FAQItem key={item.q} q={item.q} a={item.a} />
                  ))}
                </div>
              </div>
            ))}

            {/* Still have questions */}
            <div className="bg-navy rounded-2xl p-8 text-center mt-8">
              <h3 className="text-xl font-bold text-white mb-3">Still have questions?</h3>
              <p className="text-slate-300 text-sm mb-5 font-serif">
                We are happy to answer any questions about the project, volunteering, or donations.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[oklch(0.72_0.15_210)] text-[oklch(0.12_0.04_245)] font-semibold rounded hover:bg-[oklch(0.80_0.13_210)] transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
