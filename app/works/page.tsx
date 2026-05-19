import fs from "fs"
import path from "path"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function WorksPage() {
  const worksDir = path.join(process.cwd(), "public/images/works")
  let images: string[] = []
  try {
    images = fs
      .readdirSync(worksDir)
      .filter((f) => /\.(jpg|jpeg|png|webp|gif)$/i.test(f))
      .sort()
  } catch {}

  return (
    <main className="min-h-screen">
      <Header />

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
            北陸各地にわたる施工実績をご紹介します。卓越した職人技と
            素材へのこだわりを映し出すプロジェクトをご覧ください。
          </p>
        </ScrollReveal>
      </section>

      <section className="px-6 md:px-12 pb-24 md:pb-40">
        {images.length === 0 ? (
          <p className="text-muted-foreground text-sm">施工事例を準備中です。</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {images.map((file, index) => (
              <ScrollReveal key={file} delay={(index % 4) * 80}>
                <div className="group">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={`/images/works/${file}`}
                      alt={`施工事例 ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-500" />
                  </div>
                  <div className="mt-4">
                    <p className="font-serif text-lg">施工事例 {index + 1}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        )}
      </section>

      <Footer />
    </main>
  )
}
