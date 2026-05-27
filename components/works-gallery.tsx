"use client"

import { useMemo, useState } from "react"
import Image from "next/image"
import { ScrollReveal } from "@/components/scroll-reveal"
import { cn } from "@/lib/utils"
import { workCategories, type WorkCategory } from "@/lib/work-images"

export type GalleryImage = {
  file: string
  width: number
  height: number
  category: WorkCategory
}

type Filter = "すべて" | WorkCategory

const filters: Filter[] = ["すべて", ...workCategories]

export function WorksGallery({ images }: { images: GalleryImage[] }) {
  const [activeFilter, setActiveFilter] = useState<Filter>("すべて")

  const filteredImages = useMemo(() => {
    if (activeFilter === "すべて") {
      return images
    }
    return images.filter((image) => image.category === activeFilter)
  }, [activeFilter, images])

  const leftCol = filteredImages.filter((_, i) => i % 2 === 0)
  const rightCol = filteredImages.filter((_, i) => i % 2 === 1)

  return (
    <section className="px-6 md:px-12 pb-24 md:pb-40">
      <div className="mb-10 md:mb-14 -mx-6 md:mx-0 overflow-x-auto no-scrollbar">
        <div className="flex w-max gap-2 px-6 md:px-0">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={cn(
                "whitespace-nowrap border px-4 py-2 text-xs tracking-[0.12em] transition-colors duration-300",
                activeFilter === filter
                  ? "border-foreground bg-foreground text-primary-foreground"
                  : "border-border bg-background text-muted-foreground hover:border-accent hover:text-foreground",
              )}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {filteredImages.length === 0 ? (
        <p className="text-muted-foreground text-sm">施工事例を準備中です。</p>
      ) : (
        <div className="flex gap-4 md:gap-8 items-start">
          <div className="flex-1 flex flex-col gap-4 md:gap-8">
            {leftCol.map((img, i) => (
              <ScrollReveal key={img.file} delay={i * 60}>
                <div className="overflow-hidden group">
                  <Image
                    src={`/images/works/${img.file}`}
                    alt={`${img.category} 施工事例 ${i * 2 + 1}`}
                    width={img.width}
                    height={img.height}
                    style={{ width: "100%", height: "auto", display: "block" }}
                    className="transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="flex-1 flex flex-col gap-4 md:gap-8 mt-12 md:mt-20">
            {rightCol.map((img, i) => (
              <ScrollReveal key={img.file} delay={i * 60 + 30}>
                <div className="overflow-hidden group">
                  <Image
                    src={`/images/works/${img.file}`}
                    alt={`${img.category} 施工事例 ${i * 2 + 2}`}
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
  )
}
