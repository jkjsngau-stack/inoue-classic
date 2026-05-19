import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"

const values = [
  {
    number: "01",
    title: "職人技",
    description:
      "細部まで妥協しない。すべてのプロジェクトを、熟練職人の精度と誠実さをもって取り組みます。",
  },
  {
    number: "02",
    title: "革新",
    description:
      "伝統的な技術と現代の素材・工法を融合させ、卓越した仕上がりを追求します。",
  },
  {
    number: "03",
    title: "誠実さ",
    description:
      "透明性のあるコミュニケーションと誠実な関係こそが、私たちの仕事の基盤です。",
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6 md:px-12">
        <ScrollReveal>
          <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
            私たちについて
          </span>
          <h1 className="mt-4 font-serif text-4xl md:text-6xl lg:text-7xl text-balance">
            私たちのストーリー
          </h1>
        </ScrollReveal>
      </section>

      {/* Introduction */}
      <section className="px-6 md:px-12 pb-24 md:pb-40">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-start">
          <ScrollReveal className="md:col-span-5">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80"
                alt="Inoue.Co.ltd の作業風景"
                fill
                className="object-cover"
              />
            </div>
          </ScrollReveal>

          <div className="md:col-span-6 md:col-start-7">
            <ScrollReveal delay={200}>
              <p className="font-serif text-2xl md:text-3xl leading-relaxed">
                北陸を拠点に、住宅・店舗・商業施設の外構・内装工事を手がけています。
                素材へのこだわりと職人の技術で、お客様の理想の空間を実現します。
              </p>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <p className="mt-8 text-sm text-muted-foreground leading-relaxed">
                石川県加賀市を拠点として、この地域を代表するエクステリアデザイン・施工会社として
                確立されました。伝統的な職人技から、MORTEX施工やエイジング仕上げといった
                最先端の技術まで、幅広い工事を手掛けています。
              </p>
            </ScrollReveal>
            <ScrollReveal delay={400}>
              <p className="mt-6 text-sm text-muted-foreground leading-relaxed">
                屋外空間は建築の延長であり、人々を鼓舞し永続する環境を生み出す機会だと考えています。
                手掛けるすべてのプロジェクトに、卓越性への追求と空間を芸術へと昇華する情熱が宿っています。
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-6 md:px-12 py-24 md:py-40 border-t border-border">
        <ScrollReveal>
          <div className="mb-16 md:mb-24">
            <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
              哲学
            </span>
            <h2 className="mt-4 font-serif text-3xl md:text-5xl text-balance">
              私たちの価値観
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {values.map((value, index) => (
            <ScrollReveal key={value.number} delay={index * 150}>
              <div className="group">
                <span className="text-accent font-serif text-2xl">{value.number}</span>
                <h3 className="mt-6 font-serif text-2xl">{value.title}</h3>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
                <div className="mt-8 w-8 h-px bg-foreground/20 group-hover:w-16 group-hover:bg-accent transition-all duration-500" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="px-6 md:px-12 py-24 md:py-40 border-t border-border">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <ScrollReveal className="md:col-span-5">
            <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
              専門分野
            </span>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl text-balance">
              私たちの仕事
            </h2>
          </ScrollReveal>

          <div className="md:col-span-6 md:col-start-7">
            <ScrollReveal delay={200}>
              <ul className="space-y-6">
                {[
                  { title: "外構工事", ja: "Exterior Construction" },
                  { title: "TFシリーズ認定施工店", ja: "TF WALL Certified" },
                  { title: "MORTEX認定施工店", ja: "MORTEX Certified" },
                  { title: "モルタル造形", ja: "Mortar Sculpture" },
                ].map((service, index) => (
                  <li
                    key={index}
                    className="flex items-baseline justify-between py-4 border-b border-border group"
                  >
                    <span className="font-serif text-lg md:text-xl group-hover:text-accent transition-colors duration-300">
                      {service.title}
                    </span>
                    <span className="text-xs tracking-[0.15em] text-muted-foreground">
                      {service.ja}
                    </span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="px-6 md:px-12 py-24 md:py-40 border-t border-border">
        <ScrollReveal>
          <div className="mb-16 md:mb-24">
            <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
              会社情報
            </span>
            <h2 className="mt-4 font-serif text-3xl md:text-5xl text-balance">
              会社概要
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl">
            {[
              { label: "会社名", value: "Inoue.Co.ltd" },
              { label: "住所", value: "石川県加賀市合河町ホ135番地" },
              { label: "電話番号", value: "0761-71-2659" },
              { label: "メールアドレス", value: "inoue.co.ltd@live.jp" },
            ].map((item, index) => (
              <div key={index} className="py-4 border-b border-border">
                <span className="text-xs tracking-[0.15em] uppercase text-muted-foreground block mb-2">
                  {item.label}
                </span>
                <span className="text-sm">{item.value}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      <Footer />
    </main>
  )
}
