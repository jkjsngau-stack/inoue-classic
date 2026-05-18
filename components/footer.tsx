import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="px-6 md:px-12 py-20 md:py-32">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Logo & Tagline */}
          <div className="md:col-span-5">
            <Link href="/" className="font-serif text-2xl md:text-3xl tracking-wider">
              Inoue.Co.ltd
            </Link>
            <p className="mt-6 font-serif text-lg md:text-xl text-primary-foreground/60 italic">
              Crafting Space. Defining Beauty.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <h3 className="text-xs tracking-[0.2em] uppercase mb-6 text-primary-foreground/40">
              ナビゲーション
            </h3>
            <nav className="flex flex-col gap-4">
              <Link href="/" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors duration-300">
                ホーム
              </Link>
              <Link href="/works" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors duration-300">
                施工実績
              </Link>
              <Link href="/about" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors duration-300">
                私たちについて
              </Link>
              <Link href="/contact" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors duration-300">
                お問い合わせ
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-4">
            <h3 className="text-xs tracking-[0.2em] uppercase mb-6 text-primary-foreground/40">
              お問い合わせ
            </h3>
            <div className="space-y-4 text-sm text-primary-foreground/70">
              <p>
                <span className="block text-primary-foreground/40 mb-1">電話番号</span>
                <a href="tel:0761-71-2659" className="hover:text-accent transition-colors duration-300">
                  0761-71-2659
                </a>
              </p>
              <p>
                <span className="block text-primary-foreground/40 mb-1">メールアドレス</span>
                <a href="mailto:inoue.co.ltd@live.jp" className="hover:text-accent transition-colors duration-300">
                  inoue.co.ltd@live.jp
                </a>
              </p>
              <p>
                <span className="block text-primary-foreground/40 mb-1">住所</span>
                石川県加賀市合河町ホ135番地
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-primary-foreground/40">
              © {new Date().getFullYear()} Inoue.Co.ltd. All rights reserved.
            </p>
            <div className="flex items-center gap-8">
              <span className="text-xs text-primary-foreground/40">
                エクステリア・外構工事
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
