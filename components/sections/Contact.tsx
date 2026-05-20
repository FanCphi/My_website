"use client";

import { useState } from "react";
import FadeIn from "@/components/ui/FadeIn";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    setLoading(true);
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: JSON.stringify({
        access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
        name: data.get("name"),
        email: data.get("email"),
        message: data.get("message"),
        subject: "New message from Mr.Green website",
      }),
      headers: { "Content-Type": "application/json" },
    });
    const json = await res.json();
    setLoading(false);

    if (json.success) {
      setSubmitted(true);
      form.reset();
    }
  }

  return (
    <section id="contact" className="py-24 px-6 bg-light-gray/20 pattern-cloud">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
            Contact
          </h2>
          <p className="text-mid-gray mb-12 max-w-xl">
            有想法或合作意向？欢迎联系我。
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Form */}
          <FadeIn delay={0.1}>
            {submitted ? (
              <div className="flex items-center justify-center h-full">
                <p className="text-green font-mono text-sm">
                  消息已收到，谢谢！
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm text-dark/70 mb-1.5"
                  >
                    姓名
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2.5 bg-card border border-light-gray/50 rounded-sm text-sm text-dark placeholder:text-mid-gray focus:outline-none focus:border-green transition-colors duration-200"
                    placeholder="你的名字"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm text-dark/70 mb-1.5"
                  >
                    邮箱
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2.5 bg-card border border-light-gray/50 rounded-sm text-sm text-dark placeholder:text-mid-gray focus:outline-none focus:border-green transition-colors duration-200"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm text-dark/70 mb-1.5"
                  >
                    留言
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-2.5 bg-card border border-light-gray/50 rounded-sm text-sm text-dark placeholder:text-mid-gray focus:outline-none focus:border-green transition-colors duration-200 resize-none"
                    placeholder="想说些什么..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full px-5 py-2.5 bg-dark text-light text-sm font-mono rounded-sm hover:bg-dark/90 transition-colors duration-200 disabled:opacity-50"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </FadeIn>

          {/* Info */}
          <FadeIn delay={0.2}>
            <div className="space-y-8">
              <div>
                <h3 className="font-heading text-base font-semibold text-dark mb-2">
                  联系方式
                </h3>
                <p className="text-dark/60 text-sm leading-relaxed">
                  如果你对我的研究或项目感兴趣，或者有任何合作想法，欢迎通过表单或以下方式联系我。
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-mid-gray text-sm font-mono w-16">
                    Email
                  </span>
                  <a
                    href="mailto:19155111230@163.com"
                    className="text-dark hover:text-green text-sm transition-colors duration-200"
                  >
                    19155111230@163.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-mid-gray text-sm font-mono w-16">
                    GitHub
                  </span>
                  <a
                    href="https://github.com/FanCphi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dark hover:text-green text-sm transition-colors duration-200"
                  >
                    github.com/FanCphi
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-mid-gray text-sm font-mono w-16">
                    WeChat
                  </span>
                  <span className="text-dark text-sm">
                    19155111230
                  </span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
