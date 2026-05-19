"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { cn } from "@/lib/utils"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      })
      if (res.ok) {
        setIsSubmitted(true)
        setFormState({ name: "", email: "", phone: "", message: "" })
      } else {
        setError("送信に失敗しました。お手数ですがお電話にてご連絡ください。")
      }
    } catch {
      setError("送信に失敗しました。お手数ですがお電話にてご連絡ください。")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6 md:px-12">
        <ScrollReveal>
          <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
            お問い合わせ
          </span>
          <h1 className="mt-4 font-serif text-4xl md:text-6xl lg:text-7xl text-balance">
            お気軽にご連絡ください
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <p className="mt-8 text-sm md:text-base text-muted-foreground max-w-2xl leading-relaxed">
            プロジェクトのご相談をお待ちしております。明確なビジョンをお持ちの方も、
            インスピレーションをお求めの方も、まずはお気軽にご相談ください。
          </p>
        </ScrollReveal>
      </section>

      {/* Contact Content */}
      <section className="px-6 md:px-12 pb-24 md:pb-40">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8">
          {/* Contact Info */}
          <div className="md:col-span-4">
            <ScrollReveal>
              <div className="space-y-12">
                <div>
                  <h3 className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">
                    所在地
                  </h3>
                  <p className="text-sm leading-relaxed">
                    石川県加賀市合河町ホ135番地
                  </p>
                </div>

                <div>
                  <h3 className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">
                    電話番号
                  </h3>
                  <a
                    href="tel:0761-71-2659"
                    className="text-sm hover:text-accent transition-colors duration-300"
                  >
                    0761-71-2659
                  </a>
                </div>

                <div>
                  <h3 className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">
                    メールアドレス
                  </h3>
                  <a
                    href="mailto:inoue.co.ltd@live.jp"
                    className="text-sm hover:text-accent transition-colors duration-300"
                  >
                    inoue.co.ltd@live.jp
                  </a>
                </div>

                <div className="pt-8 border-t border-border">
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    お急ぎの方はお電話ください。
                    メールでのお問い合わせには通常24時間以内にご返信いたします。
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-7 md:col-start-6">
            <ScrollReveal delay={200}>
              {isSubmitted ? (
                <div className="py-20 text-center">
                  <span className="text-accent font-serif text-4xl">ありがとうございます</span>
                  <p className="mt-4 text-sm text-muted-foreground">
                    お問い合わせを受け付けました。近日中にご返信いたします。
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div>
                    <label
                      htmlFor="name"
                      className="text-xs tracking-[0.15em] uppercase text-muted-foreground block mb-3"
                    >
                      お名前 <span className="text-accent">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      className="w-full bg-transparent border-b border-border py-3 text-sm focus:outline-none focus:border-accent transition-colors duration-300"
                      placeholder="お名前を入力してください"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="text-xs tracking-[0.15em] uppercase text-muted-foreground block mb-3"
                    >
                      メールアドレス <span className="text-accent">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      className="w-full bg-transparent border-b border-border py-3 text-sm focus:outline-none focus:border-accent transition-colors duration-300"
                      placeholder="メールアドレスを入力してください"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="text-xs tracking-[0.15em] uppercase text-muted-foreground block mb-3"
                    >
                      電話番号
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formState.phone}
                      onChange={(e) =>
                        setFormState({ ...formState, phone: e.target.value })
                      }
                      className="w-full bg-transparent border-b border-border py-3 text-sm focus:outline-none focus:border-accent transition-colors duration-300"
                      placeholder="電話番号を入力してください"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="text-xs tracking-[0.15em] uppercase text-muted-foreground block mb-3"
                    >
                      メッセージ <span className="text-accent">*</span>
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      className="w-full bg-transparent border-b border-border py-3 text-sm focus:outline-none focus:border-accent transition-colors duration-300 resize-none"
                      placeholder="プロジェクトについてお聞かせください"
                    />
                  </div>

                  {error && (
                    <p className="text-sm text-red-500">{error}</p>
                  )}

                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={cn(
                        "inline-flex items-center justify-center px-12 py-4 bg-foreground text-primary-foreground text-xs tracking-[0.2em] uppercase transition-all duration-300",
                        isSubmitting
                          ? "opacity-50 cursor-not-allowed"
                          : "hover:bg-accent"
                      )}
                    >
                      {isSubmitting ? "送信中..." : "送信する"}
                    </button>
                  </div>
                </form>
              )}
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
