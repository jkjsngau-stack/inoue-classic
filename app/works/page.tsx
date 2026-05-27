import sharp from "sharp"
import fs from "fs"
import path from "path"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"

type WorkImage = {
  file: string
  width: number
  height: number
}

const excludedWorkImages = new Set([
  // Promotional graphics and unrelated logos/illustrations kept in the folder but hidden from the works gallery.
  "S__15966213_0.webp",
  "S__15966214_0.webp",
  "S__15966218_0.webp",
  "S__15966219_0.webp",
  "S__38625288.webp",
  "S__41648190_0.webp",
  "S__41648192_0.webp",
  "S__41648193_0.webp",
  "S__41648194_0.webp",
  "S__41648195_0.webp",
  "S__41648196_0.webp",
  "S__41648197_0.webp",
  "S__41648203.webp",
  "S__41664525.webp",
  "S__4194369.webp",
  "S__4194370.webp",
  "S__4194371.webp",
  "S__4669544.webp",
  "S__7299075.webp",
  "S__7315476(1).webp",
  "S__7315476.webp",
  "S__7315477_0.webp",
  "S__7315478_0.webp",
  "S__7315479_0.webp",
  "S__9568300.webp",
  "S__9568301.webp",
])

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
      const meta = await sharp(path.join(worksDir, file)).metadata()
      images.push({ file, width: meta.width ?? 800, height: meta.height ?? 600 })
    } catch {}
  }
  return images
}

export default async function WorksPage() {
  const images = await getImages()

  // 2列マソンリー用に奇数・偶数インデックスで分割
  const leftCol = images.filter((_, i) => i % 2 === 0)
  const rightCol = images.filter((_, i) => i % 2 === 1)

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
          /* マソンリーグリッド：各列を独立したフレックスカラムで積む */
          <div className="flex gap-4 md:gap-8 items-start">
            {/* 左列 */}
            <div className="flex-1 flex flex-col gap-4 md:gap-8">
              {leftCol.map((img, i) => (
                <ScrollReveal key={img.file} delay={i * 60}>
                  <div className="overflow-hidden group">
                    <Image
                      src={`/images/works/${img.file}`}
                      alt={`施工事例 ${i * 2 + 1}`}
                      width={img.width}
                      height={img.height}
                      style={{ width: "100%", height: "auto", display: "block" }}
                      className="transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* 右列 */}
            <div className="flex-1 flex flex-col gap-4 md:gap-8 mt-12 md:mt-20">
              {rightCol.map((img, i) => (
                <ScrollReveal key={img.file} delay={i * 60 + 30}>
                  <div className="overflow-hidden group">
                    <Image
                      src={`/images/works/${img.file}`}
                      alt={`施工事例 ${i * 2 + 2}`}
                      width={img.width}
                      height={img.height}
                      style={{ width: "100%", height: "auto", display: "block" }}
                      className="transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        )}
      </section>

      <Footer />
    </main>
  )
}
