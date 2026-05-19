"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ScrollReveal } from "@/components/scroll-reveal"
import { cn } from "@/lib/utils"

const services = [
  {
    number: "01",
    title: "エクステリアデザイン",
    titleJa: "Exterior Design",
    description: "建築と自然を融合させた、洗練された屋外空間を創造します。",
  },
  {
    number: "02",
    title: "モルタル造形",
    titleJa: "Mortar Sculpture",
    description: "職人の技によるモルタル造形で、空間を唯一無二の造形美へと変貌させます。",
  },
  {
    number: "03",
    title: "MORTEX施工",
    titleJa: "MORTEX Application",
    description: "優れた耐久性と審美性を兼ね備えたプレミアムミネラルコーティング施工。",
  },
  {
    number: "04",
    title: "エイジング塗装",
    titleJa: "Aging Finish",
    description: "熟練の技で現代空間に時を超えた風格を与えるエイジング仕上げ。",
  },
]

const featuredWorks = [
  {
    id: 1,
    title: "施工事例",
    location: "北陸",
    category: "エクステリア",
    image: "/images/works/S__15966213_0.jpg",
  },
  {
    id: 2,
    title: "施工事例",
    location: "北陸",
    category: "モルタル造形",
    image: "/images/works/S__15966220_0.jpg",
  },
  {
    id: 3,
    title: "施工事例",
    location: "北陸",
    category: "MORTEX",
    image: "/images/works/S__15966228_0.jpg",
  },
]

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80"
          alt="高級エクステリア建築"
          fill
          className={cn(
            "object-cover transition-all duration-[2000ms]",
            isLoaded ? "scale-100 opacity-100" : "scale-110 opacity-0"
          )}
          priority
        />
        <div className="absolute inset-0 bg-foreground/30" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-end px-6 md:px-12 pb-20 md:pb-32">
        <div className="max-w-4xl">
          <h1
            className={cn(
              "font-serif text-4xl md:text-6xl lg:text-7xl text-primary-foreground leading-tight transition-all duration-1000",
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
            style={{ transitionDelay: "500ms" }}
          >
            <span className="text-balance">Crafting Space.</span>
            <br />
            <span className="text-balance italic text-accent">Defining Beauty.</span>
          </h1>
          <p
            className={cn(
              "mt-8 text-sm md:text-base text-primary-foreground/80 max-w-xl leading-relaxed transition-all duration-1000",
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
            style={{ transitionDelay: "700ms" }}
          >
            日常を超える特別な外構空間を創造します。
            すべてのプロジェクトは、緻密な職人技と時を超えるデザインの証です。
          </p>
          <div
            className={cn(
              "mt-12 transition-all duration-1000",
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
            style={{ transitionDelay: "900ms" }}
          >
            <Link
              href="/works"
              className="inline-flex items-center gap-4 text-xs tracking-[0.2em] uppercase text-primary-foreground hover:text-accent transition-colors duration-300"
            >
              <span>施工実績を見る</span>
              <span className="w-12 h-px bg-current" />
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={cn(
          "absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-1000",
          isLoaded ? "opacity-100" : "opacity-0"
        )}
        style={{ transitionDelay: "1200ms" }}
      >
        <span className="text-[10px] tracking-[0.2em] uppercase text-primary-foreground/60">
          スクロール
        </span>
        <div className="w-px h-8 bg-primary-foreground/40 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-primary-foreground animate-pulse" />
        </div>
      </div>
    </section>
  )
}

export function ServicesSection() {
  return (
    <section className="px-6 md:px-12 py-24 md:py-40">
      <ScrollReveal>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 md:mb-24">
          <div>
            <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
              サービス
            </span>
            <h2 className="mt-4 font-serif text-3xl md:text-5xl text-balance">
              私たちが創るもの
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
            北陸を拠点に、エクステリア・内装・外構工事を手がけています。
            モルタル造形・MORTEX・エイジング塗装など、
            素材と技術にこだわった空間づくりをご提供します。
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
        {services.map((service, index) => (
          <ScrollReveal key={service.number} delay={index * 100}>
            <div className="bg-background p-8 md:p-12 group hover:bg-secondary transition-colors duration-500">
              <span className="text-accent font-serif text-2xl">{service.number}</span>
              <h3 className="mt-6 font-serif text-2xl md:text-3xl">{service.title}</h3>
              <p className="mt-2 text-xs tracking-[0.15em] text-muted-foreground">
                {service.titleJa}
              </p>
              <p className="mt-6 text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
              <div className="mt-8 w-8 h-px bg-foreground/20 group-hover:w-16 group-hover:bg-accent transition-all duration-500" />
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}

export function FeaturedWorksSection() {
  return (
    <section className="px-6 md:px-12 py-24 md:py-40 border-t border-border">
      <ScrollReveal>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 md:mb-24">
          <div>
            <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
              施工実績
            </span>
            <h2 className="mt-4 font-serif text-3xl md:text-5xl text-balance">
              ポートフォリオ
            </h2>
          </div>
          <Link
            href="/works"
            className="inline-flex items-center gap-4 text-xs tracking-[0.2em] uppercase text-foreground hover:text-accent transition-colors duration-300"
          >
            <span>すべて見る</span>
            <span className="w-8 h-px bg-current" />
          </Link>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
        {featuredWorks.map((work, index) => (
          <ScrollReveal
            key={work.id}
            delay={index * 150}
            className={cn(
              index === 0 ? "md:col-span-7" : "md:col-span-5",
              index === 2 && "md:col-span-12"
            )}
          >
            <Link href="/works" className="group block">
              <div
                className={cn(
                  "relative overflow-hidden",
                  index === 0 ? "aspect-[4/3]" : index === 1 ? "aspect-square" : "aspect-[21/9]"
                )}
              >
                <Image
                  src={work.image}
                  alt={work.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-500" />
              </div>
              <div className="mt-6 flex items-start justify-between">
                <div>
                  <h3 className="font-serif text-xl md:text-2xl group-hover:text-accent transition-colors duration-300">
                    {work.title}
                  </h3>
                  <p className="mt-1 text-xs tracking-[0.15em] text-muted-foreground">
                    {work.location}
                  </p>
                </div>
                <span className="text-xs tracking-[0.15em] uppercase text-muted-foreground">
                  {work.category}
                </span>
              </div>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}

export function StatementSection() {
  return (
    <section className="px-6 md:px-12 py-24 md:py-40 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <blockquote className="font-serif text-2xl md:text-4xl lg:text-5xl leading-relaxed text-center">
            <span className="text-accent">&ldquo;</span>
            外構空間とは単なる機能的なものではなく、
            <span className="italic">建築を体験する様式を定義する芸術</span>であると、私たちは信じています。
            <span className="text-accent">&rdquo;</span>
          </blockquote>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <div className="mt-12 flex justify-center">
            <div className="text-center">
              <p className="text-sm tracking-[0.15em]">Inoue.Co.ltd</p>
              <p className="mt-1 text-xs text-muted-foreground">北陸、日本</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export function ContactCTASection() {
  return (
    <section className="px-6 md:px-12 py-24 md:py-40 border-t border-border">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-center">
        <ScrollReveal className="md:col-span-6">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80"
              alt="職人の技"
              fill
              className="object-cover"
            />
          </div>
        </ScrollReveal>

        <div className="md:col-span-5 md:col-start-8">
          <ScrollReveal delay={200}>
            <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
              お問い合わせ
            </span>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl lg:text-5xl">
              プロジェクトを始める
            </h2>
            <p className="mt-6 text-sm text-muted-foreground leading-relaxed">
              すべての特別な空間は会話から始まります。あなたのビジョンをお聞かせください。
              期待を超える空間へと実現します。
            </p>
            <div className="mt-12 space-y-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center w-full md:w-auto px-12 py-4 bg-foreground text-primary-foreground text-xs tracking-[0.2em] uppercase hover:bg-accent transition-colors duration-300"
              >
                お問い合わせはこちら
              </Link>
              <p className="text-xs text-muted-foreground">
                またはお電話で{" "}
                <a href="tel:0761-71-2659" className="text-foreground hover:text-accent transition-colors duration-300">
                  0761-71-2659
                </a>
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
