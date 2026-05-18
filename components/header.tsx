"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/", label: "ホーム" },
  { href: "/works", label: "施工実績" },
  { href: "/about", label: "私たちについて" },
  { href: "/contact", label: "お問い合わせ" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMenuOpen])

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled ? "bg-background/95 backdrop-blur-sm" : "bg-transparent"
        )}
      >
        <div className="flex items-center justify-between px-6 md:px-12 py-6">
          {/* Logo */}
          <Link 
            href="/" 
            className="font-serif text-lg md:text-xl tracking-wider text-foreground hover:text-accent transition-colors duration-300"
          >
            Inoue.Co.ltd
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-12">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-xs tracking-[0.2em] uppercase transition-colors duration-300",
                  pathname === item.href
                    ? "text-accent"
                    : "text-foreground/70 hover:text-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5"
            aria-label="メニューを開閉する"
          >
            <span
              className={cn(
                "w-6 h-px bg-foreground transition-all duration-300",
                isMenuOpen && "rotate-45 translate-y-[4px]"
              )}
            />
            <span
              className={cn(
                "w-6 h-px bg-foreground transition-all duration-300",
                isMenuOpen && "-rotate-45 -translate-y-[3px]"
              )}
            />
          </button>
        </div>

        {/* Thin line under header */}
        <div className={cn(
          "h-px bg-foreground/10 transition-opacity duration-500",
          isScrolled ? "opacity-100" : "opacity-0"
        )} />
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-background transition-all duration-500 md:hidden",
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-12">
          {navItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className={cn(
                "font-serif text-4xl tracking-wider transition-all duration-300",
                pathname === item.href
                  ? "text-accent"
                  : "text-foreground hover:text-accent",
                isMenuOpen && "animate-fade-in-up",
                `animation-delay-${(index + 1) * 100}`
              )}
              style={{ 
                opacity: isMenuOpen ? 1 : 0,
                animationDelay: `${(index + 1) * 100}ms`
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  )
}
