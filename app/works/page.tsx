import sharp from "sharp"
import fs from "fs"
import path from "path"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { WorksGallery } from "@/components/works-gallery"
import {
  excludedWorkImages,
  workImageCategoryMap,
  type WorkCategory,
} from "@/lib/work-images"

type WorkImage = {
  file: string
  width: number
  height: number
  category: WorkCategory
}

async function getImages(): Promise<WorkImage[]> {
  const worksDir = path.join(process.cwd(), "public/images/works")
  let files: string[] = []
  try {
    files = fs
      .readdirSync(worksDir)
      .filter((f) => /\.(jpg|jpeg|png|webp|gif)$/i.test(f))
      .filter((f) => !excludedWorkImages.has(f))
      .sort()
  } catch {
    return []
  }

  const images: WorkImage[] = []
  for (const file of files) {
    try {
      const category = workImageCategoryMap.get(file)
      if (!category) continue
      const meta = await sharp(path.join(worksDir, file)).metadata()
      images.push({
        file,
        width: meta.width ?? 800,
        height: meta.height ?? 600,
        category,
      })
    } catch {}
  }
  return images
}

export default async function WorksPage() {
  const images = await getImages()

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

      <WorksGallery images={images} />

      <Footer />
    </main>
  )
}
