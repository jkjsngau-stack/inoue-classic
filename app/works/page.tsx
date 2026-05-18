"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { cn } from "@/lib/utils"

const categories = ["すべて", "エクステリア", "MORTEX", "ランドスケープ", "インテリア"]

const works = [
  {
    id: 1,
    title: "個人住宅",
    location: "金沢",
    category: "エクステリア",
    year: "2024",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
  },
  {
    id: 2,
    title: "ガーデンテラス",
    location: "加賀",
    category: "ランドスケープ",
    year: "2024",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
  },
  {
    id: 3,
    title: "商業施設ファサード",
    location: "福井",
    category: "MORTEX",
    year: "2024",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=80",
  },
  {
    id: 4,
    title: "中庭デザイン",
    location: "金沢",
    category: "ランドスケープ",
    year: "2023",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80",
  },
  {
    id: 5,
    title: "レストラン内装",
    location: "小松",
    category: "インテリア",
    year: "2023",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80",
  },
  {
    id: 6,
    title: "ヴィラエントランス",
    location: "羽咋",
    category: "エクステリア",
    year: "2023",
    image: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=1200&q=80",
  },
  {
    id: 7,
    title: "スパバスルーム",
    location: "加賀",
    category: "MORTEX",
    year: "2023",
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200&q=80",
  },
  {
    id: 8,
    title: "モダンパティオ",
    location: "富山",
    category: "エクステリア",
    year: "2022",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
  },
]

export default function WorksPage() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredWorks = activeCategory === "すべて"
    ? works
    : works.filter((work) => work.category === activeCategory)

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6 md:px-12">
        <ScrollReveal>
          <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
            ポートフォリオ
          </span>
          <h1 className="mt-4 font-serif text-4xl md:text-6xl lg:text-7xl text-balance">
            施工実績
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <p className="mt-8 text-sm md:text-base text-muted-foreground max-w-2xl leading-relaxed">
            北陸各地にわたる最高の施工実績をご紹介します。卓越した職人技と
            時を超えるデザインへの真摯な取り組みを映し出すプロジェクトを厳選しています。
          </p>
        </ScrollReveal>
      </section>

      {/* Filter */}
      <section className="px-6 md:px-12 pb-12">
        <ScrollReveal delay={300}>
          <div className="flex flex-wrap gap-4 md:gap-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "text-xs tracking-[0.15em] uppercase transition-colors duration-300",
                  activeCategory === category
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {category}
                {activeCategory === category && (
                  <span className="block w-full h-px bg-accent mt-2" />
                )}
              </button>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* Works Grid */}
      <section className="px-6 md:px-12 pb-24 md:pb-40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {filteredWorks.map((work, index) => (
            <ScrollReveal key={work.id} delay={index * 100}>
              <Link href={`/works`} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={work.image}
                    alt={work.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-500" />
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
                  <div className="text-right">
                    <span className="text-xs tracking-[0.15em] uppercase text-muted-foreground block">
                      {work.category}
                    </span>
                    <span className="text-xs text-muted-foreground/60 block mt-1">
                      {work.year}
                    </span>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
