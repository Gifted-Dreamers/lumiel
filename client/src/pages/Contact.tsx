/*
 * Contact Page — The Common Cloud
 * Design: Precision Civic Tech — Navy/Teal
 * Features: n8n webhook contact form, LinkedIn, Gifted Dreamers links
 */
import { useState } from "react";
import { Send, CheckCircle, AlertCircle, Linkedin, ExternalLink, Mail, MapPin } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// n8n webhook URL
const N8N_WEBHOOK_URL = "https://n8n.cloudpublica.org/webhook/lumiel-contact";

type FormState = "idle" | "submitting" | "success" | "error";

interface FormData {
  name: string;
  email: string;
  subject: string;
  interest: string;
  message: string;
}

export default function Contact() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    interest: "",
    message: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");
    setErrorMessage("");

    try {
      const response = await fetch(N8N_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          interest: formData.interest,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setFormState("success");
        setFormData({ name: "", email: "", subject: "", interest: "", message: "" });
      } else {
        throw new Error(`Server responded with ${response.status}`);
      }
    } catch (err) {
      setFormState("error");
      setErrorMessage(
        "There was an issue sending your message. Please try again or email us directly."
      );
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Page Header */}
      <section className="pt-28 pb-16 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 30% 60%, oklch(0.72 0.15 210 / 0.4) 0%, transparent 50%)`,
          }}
        />
        <div className="container relative z-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <div className="accent-bar mb-4" />
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Contact Us</h1>
              <p className="text-xl text-slate-300 max-w-2xl font-serif">
                Reach out to learn more, volunteer, or support Lumiel Design Clarity.
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

      {/* Contact Content */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Contact Info */}
            <div className="lg:col-span-1">
              <div className="accent-bar mb-5" />
              <h2 className="text-2xl font-bold text-[oklch(0.18_0.04_245)] mb-5 tracking-tight">
                Get in Touch
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-8 font-serif">
                Whether you are interested in volunteering, have questions about the project, or want to discuss a partnership, we would love to hear from you.
              </p>

              {/* Contact Cards */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4 p-4 bg-[oklch(0.97_0.005_245)] rounded-xl">
                  <div className="w-9 h-9 bg-[oklch(0.72_0.15_210/0.1)] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Linkedin size={17} className="text-[oklch(0.72_0.15_210)]" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-[oklch(0.18_0.04_245)] uppercase tracking-wider mb-1">LinkedIn</div>
                    <a
                      href="https://www.linkedin.com/in/katherine-hardin-231b8b284/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[oklch(0.72_0.15_210)] text-sm hover:underline flex items-center gap-1"
                    >
                      Katherine Hardin <ExternalLink size={11} />
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-[oklch(0.97_0.005_245)] rounded-xl">
                  <div className="w-9 h-9 bg-[oklch(0.72_0.15_210/0.1)] rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin size={17} className="text-[oklch(0.72_0.15_210)]" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-[oklch(0.18_0.04_245)] uppercase tracking-wider mb-1">Fiscal Sponsor</div>
                    <a
                      href="https://gifteddreamers.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[oklch(0.72_0.15_210)] text-sm hover:underline flex items-center gap-1"
                    >
                      Gifted Dreamers, Inc. <ExternalLink size={11} />
                    </a>
                    <div className="text-slate-500 text-xs mt-0.5">501(c)(3) · EIN 39-3863796 · Austin, TX</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-[oklch(0.97_0.005_245)] rounded-xl">
                  <div className="w-9 h-9 bg-[oklch(0.72_0.15_210/0.1)] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail size={17} className="text-[oklch(0.72_0.15_210)]" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-[oklch(0.18_0.04_245)] uppercase tracking-wider mb-1">Project</div>
                    <div className="text-slate-600 text-sm">Lumiel Design Clarity</div>
                    <div className="text-slate-500 text-xs mt-0.5">thecommoncloud.org</div>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-navy rounded-xl p-5">
                <h3 className="text-white text-sm font-semibold mb-3">Quick Links</h3>
                <div className="space-y-2">
                  {[
                    { href: "/volunteer", label: "Volunteer Opportunities" },
                    { href: "/faq", label: "Frequently Asked Questions" },
                    { href: "https://gifteddreamers.org", label: "Gifted Dreamers", external: true },
                    { href: "https://www.linkedin.com/in/katherine-hardin-231b8b284/", label: "LinkedIn Profile", external: true },
                  ].map((link) => (
                    link.external ? (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between text-slate-400 hover:text-[oklch(0.72_0.15_210)] text-sm transition-colors py-1"
                      >
                        {link.label}
                        <ExternalLink size={12} />
                      </a>
                    ) : (
                      <a
                        key={link.href}
                        href={link.href}
                        className="flex items-center justify-between text-slate-400 hover:text-[oklch(0.72_0.15_210)] text-sm transition-colors py-1"
                      >
                        {link.label}
                      </a>
                    )
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
                <h2 className="text-2xl font-bold text-[oklch(0.18_0.04_245)] mb-2 tracking-tight">
                  Send Us a Message
                </h2>
                <p className="text-slate-500 text-sm mb-6">
                  Fill out the form below and we will get back to you as soon as possible.
                </p>

                {formState === "success" ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div className="w-16 h-16 bg-[oklch(0.72_0.15_210/0.1)] rounded-full flex items-center justify-center mb-4">
                      <CheckCircle size={32} className="text-[oklch(0.72_0.15_210)]" />
                    </div>
                    <h3 className="text-xl font-bold text-[oklch(0.18_0.04_245)] mb-2">Message Sent!</h3>
                    <p className="text-slate-500 text-sm max-w-sm">
                      Thank you for reaching out. We will review your message and get back to you shortly.
                    </p>
                    <button
                      onClick={() => setFormState("idle")}
                      className="mt-6 px-5 py-2.5 bg-[oklch(0.72_0.15_210)] text-[oklch(0.12_0.04_245)] text-sm font-semibold rounded hover:bg-[oklch(0.80_0.13_210)] transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-xs font-semibold text-[oklch(0.18_0.04_245)] uppercase tracking-wider mb-2">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          className="w-full px-4 py-3 bg-[oklch(0.97_0.005_245)] border border-slate-200 rounded-lg text-sm text-[oklch(0.18_0.04_245)] placeholder-slate-400 focus:outline-none focus:border-[oklch(0.72_0.15_210)] focus:ring-1 focus:ring-[oklch(0.72_0.15_210)] transition-colors"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-xs font-semibold text-[oklch(0.18_0.04_245)] uppercase tracking-wider mb-2">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          className="w-full px-4 py-3 bg-[oklch(0.97_0.005_245)] border border-slate-200 rounded-lg text-sm text-[oklch(0.18_0.04_245)] placeholder-slate-400 focus:outline-none focus:border-[oklch(0.72_0.15_210)] focus:ring-1 focus:ring-[oklch(0.72_0.15_210)] transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="interest" className="block text-xs font-semibold text-[oklch(0.18_0.04_245)] uppercase tracking-wider mb-2">
                        I am interested in
                      </label>
                      <select
                        id="interest"
                        name="interest"
                        value={formData.interest}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[oklch(0.97_0.005_245)] border border-slate-200 rounded-lg text-sm text-[oklch(0.18_0.04_245)] focus:outline-none focus:border-[oklch(0.72_0.15_210)] focus:ring-1 focus:ring-[oklch(0.72_0.15_210)] transition-colors"
                      >
                        <option value="">Select an option...</option>
                        <option value="volunteering">Volunteering / Contributing</option>
                        <option value="donating">Making a Donation</option>
                        <option value="partnership">Partnership / Collaboration</option>
                        <option value="general">General Inquiry</option>
                        <option value="press">Press / Media</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-xs font-semibold text-[oklch(0.18_0.04_245)] uppercase tracking-wider mb-2">
                        Subject <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Brief subject line"
                        className="w-full px-4 py-3 bg-[oklch(0.97_0.005_245)] border border-slate-200 rounded-lg text-sm text-[oklch(0.18_0.04_245)] placeholder-slate-400 focus:outline-none focus:border-[oklch(0.72_0.15_210)] focus:ring-1 focus:ring-[oklch(0.72_0.15_210)] transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-xs font-semibold text-[oklch(0.18_0.04_245)] uppercase tracking-wider mb-2">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about yourself and how you would like to get involved..."
                        className="w-full px-4 py-3 bg-[oklch(0.97_0.005_245)] border border-slate-200 rounded-lg text-sm text-[oklch(0.18_0.04_245)] placeholder-slate-400 focus:outline-none focus:border-[oklch(0.72_0.15_210)] focus:ring-1 focus:ring-[oklch(0.72_0.15_210)] transition-colors resize-none"
                      />
                    </div>

                    {formState === "error" && (
                      <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-lg">
                        <AlertCircle size={16} className="text-red-500 flex-shrink-0 mt-0.5" />
                        <p className="text-red-600 text-sm">{errorMessage}</p>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={formState === "submitting"}
                      className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-[oklch(0.72_0.15_210)] text-[oklch(0.12_0.04_245)] font-semibold rounded-lg hover:bg-[oklch(0.80_0.13_210)] disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
                    >
                      {formState === "submitting" ? (
                        <>
                          <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          Send Message
                        </>
                      )}
                    </button>

                    <p className="text-xs text-slate-400 text-center">
                      By submitting this form, you agree to be contacted about Lumiel Design Clarity.
                      We respect your privacy and will not share your information.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
