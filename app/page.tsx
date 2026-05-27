"use client"

import { useLanguage } from "@/hooks/useLanguage"
import { LanguageSelector } from "@/components/language-selector"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react"
import { logo } from "@/components/common/logo"
import {
  OfoEcosystemSection,
  AboutUsSection,
  PortfolioSection,
  GsaCapabilitiesSection,
  WhyChooseUsSection,
  RegistrationSection,
} from "@/components/ofo-ecosystem-sections"

export default function OfoConnectWebsite() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-[var(--luxury-background)] text-[var(--luxury-ink)]">
      <nav className="fixed top-0 w-full bg-[#F5F1EA]/95 backdrop-blur-md border-b border-[var(--luxury-border)] z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="#" className="flex items-center space-x-3" aria-label="OFO Connect home">
              <img width="150" src={`data:image/jpeg;base64,${logo}`} alt="OFO Connect Logo" />
            </Link>
            <div className="hidden lg:flex space-x-8 items-center">
              <Link
                href="#about"
                className="text-[var(--luxury-muted)] hover:text-[var(--luxury-gold)] transition-colors font-medium text-sm uppercase tracking-wide"
              >
                {t("about")}
              </Link>
              <Link
                href="#services"
                className="text-[var(--luxury-muted)] hover:text-[var(--luxury-gold)] transition-colors font-medium text-sm uppercase tracking-wide"
              >
                {t("services")}
              </Link>
              <Link
                href="#partners"
                className="text-[var(--luxury-muted)] hover:text-[var(--luxury-gold)] transition-colors font-medium text-sm uppercase tracking-wide"
              >
                {t("partners")}
              </Link>
              <Link
                href="#contact"
                className="text-[var(--luxury-muted)] hover:text-[var(--luxury-gold)] transition-colors font-medium text-sm uppercase tracking-wide"
              >
                {t("contact")}
              </Link>
              <LanguageSelector />
            </div>
            <div className="lg:hidden">
              <LanguageSelector />
            </div>
          </div>
        </div>
      </nav>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-partnership-puzzle.png"
            alt="Two partners connecting puzzle pieces in a premium business setting"
            fill
            className="object-cover object-[72%_center] lg:object-center scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#151C27]/90 via-[#151C27]/72 to-[#151C27]/45" />
        </div>
        <div className="relative z-10 text-center lg:text-left text-[var(--luxury-on-dark)] w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="max-w-3xl">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-[#B08A4A]/15 backdrop-blur-sm border border-[#D8C39D]/45 rounded-full text-[var(--luxury-champagne)] text-sm font-medium uppercase tracking-wide">
                {t("heroEyebrow")}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-8 leading-tight tracking-tight">
              {t("heroTagline")}
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-[#F7F1E7]/90 max-w-3xl mx-auto lg:mx-0 font-light leading-relaxed">
              {t("heroSubtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="bg-[var(--luxury-gold)] hover:bg-[#94723D] text-[var(--luxury-midnight)] px-8 py-4 text-base font-medium shadow-xl hover:shadow-2xl transition-all duration-300 rounded-lg"
              >
                <Link href="#contact">
                  {t("getInTouch")}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-[#D8C39D]/65 text-[var(--luxury-on-dark)] hover:bg-[#D8C39D]/10 hover:text-[var(--luxury-on-dark)] px-8 py-4 text-base font-medium backdrop-blur-sm rounded-lg bg-transparent"
              >
                <Link href="#about">{t("heroSecondaryCta")}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <OfoEcosystemSection />
      <AboutUsSection />
      <PremiumTravelVisualsSection />
      <PortfolioSection />
      <GsaCapabilitiesSection />
      <WhyChooseUsSection />
      <ContactOfficesSection />
      <RegistrationSection />

      <footer className="bg-[var(--luxury-midnight)] text-[var(--luxury-on-dark)] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 border-b border-[#D8C39D]/20 pb-8">
            <div>
              <img width="150" src={`data:image/jpeg;base64,${logo}`} alt="OFO Connect Logo" />
              <p className="text-[#D8C39D]/85 mt-4 leading-relaxed max-w-md">{t("footerDescription")}</p>
            </div>
            <div className="flex flex-wrap gap-6 text-sm uppercase tracking-wide">
              <Link href="#about" className="text-[#D8C39D]/85 hover:text-[var(--luxury-on-dark)] transition-colors">
                {t("about")}
              </Link>
              <Link href="#services" className="text-[#D8C39D]/85 hover:text-[var(--luxury-on-dark)] transition-colors">
                {t("services")}
              </Link>
              <Link href="#partners" className="text-[#D8C39D]/85 hover:text-[var(--luxury-on-dark)] transition-colors">
                {t("partners")}
              </Link>
              <Link href="#contact" className="text-[#D8C39D]/85 hover:text-[var(--luxury-on-dark)] transition-colors">
                {t("contact")}
              </Link>
            </div>
          </div>
          <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#D8C39D]/75 text-sm">© 2025 OFO Connect. {t("allRightsReserved")}</p>
            <p className="text-[#D8C39D]/60 text-sm text-center">{t("operatedUnder")}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function PremiumTravelVisualsSection() {
  const visuals = [
    {
      title: "visualPremiumTitle",
      description: "visualPremiumDesc",
      src: "/images/luxury-couple-service.png",
      alt: "visualPremiumAlt",
    },
    {
      title: "visualShinkansenTitle",
      description: "visualShinkansenDesc",
      src: "/images/minimal-shinkansen-cabin.png",
      alt: "visualShinkansenAlt",
    },
    {
      title: "visualEuropeTitle",
      description: "visualEuropeDesc",
      src: "/images/luxury-european-street.png",
      alt: "visualEuropeAlt",
    },
  ]
  const { t } = useLanguage()

  return (
    <section className="py-24 bg-[var(--luxury-background)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#D8C39D]/35 text-[var(--luxury-gold)] rounded-full text-sm font-medium uppercase tracking-wide mb-6">
            {t("travelAtmosphereLabel")}
          </span>
          <h2 className="text-4xl lg:text-6xl font-light text-[var(--luxury-ink)] mb-6 leading-tight">
            {t("travelAtmosphereTitle")}
          </h2>
          <p className="text-xl text-[var(--luxury-muted)] max-w-4xl mx-auto font-light leading-relaxed">
            {t("travelAtmosphereDesc")}
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.45fr_0.85fr] gap-6">
          <div className="group relative min-h-[520px] overflow-hidden rounded-[2rem]">
            <Image
              src={visuals[0].src}
              alt={t(visuals[0].alt)}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(min-width: 1024px) 58vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#101827]/80 via-[#101827]/12 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-[var(--luxury-on-dark)]">
              <p className="text-sm uppercase tracking-[0.2em] text-[var(--luxury-champagne)] mb-3">{t("premiumServiceLabel")}</p>
              <h3 className="text-3xl font-light mb-3">{t(visuals[0].title)}</h3>
              <p className="max-w-xl text-[#F7F1E7]/85 leading-relaxed">{t(visuals[0].description)}</p>
            </div>
          </div>

          <div className="grid gap-6">
            {visuals.slice(1).map((visual) => (
              <div key={visual.title} className="group relative min-h-[247px] overflow-hidden rounded-[2rem]">
                <Image
                  src={visual.src}
                  alt={t(visual.alt)}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(min-width: 1024px) 34vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101827]/80 via-[#101827]/12 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-[var(--luxury-on-dark)]">
                  <h3 className="text-2xl font-light mb-2">{t(visual.title)}</h3>
                  <p className="text-sm text-[#F7F1E7]/85 leading-relaxed">{t(visual.description)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactOfficesSection() {
  const { t } = useLanguage()

  const offices = [
    {
      title: t("vietnamOfficeTitle"),
      subtitle: t("vietnamOfficeSubtitle"),
      flag: "🇻🇳",
      address: t("vietnamAddress"),
      phone: t("vietnamPhone"),
      email: t("vietnamEmail"),
    },
    {
      title: t("franceOfficeTitle"),
      subtitle: t("franceOfficeSubtitle"),
      flag: "🇫🇷",
      address: t("franceAddress"),
      phone: t("francePhone"),
    },
    {
      title: t("japanOfficeTitle"),
      subtitle: t("japanOfficeSubtitle"),
      flag: "🇯🇵",
      address: t("japanAddress"),
      phone: t("japanPhone"),
    },
  ]

  return (
    <section id="contact" className="py-24 bg-[var(--luxury-alternate)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#D8C39D]/35 text-[var(--luxury-gold)] rounded-full text-sm font-medium uppercase tracking-wide mb-6">
            {t("globalPresenceLabel")}
          </span>
          <h2 className="text-4xl lg:text-6xl font-light text-[var(--luxury-ink)] mb-6 leading-tight">{t("contactTitle")}</h2>
          <p className="text-xl text-[var(--luxury-muted)] max-w-3xl mx-auto font-light leading-relaxed">
            {t("contactSubtitle")}
          </p>
        </div>

        <div className="border-y border-[var(--luxury-border)] bg-[var(--luxury-surface)] px-6 sm:px-8">
          {offices.map((office) => (
            <div
              key={office.title}
              className="grid lg:grid-cols-[220px_1fr_220px] gap-6 lg:gap-10 py-8 border-b border-[var(--luxury-border)] last:border-b-0 items-start"
            >
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span aria-hidden="true" className="text-3xl leading-none">{office.flag}</span>
                  <h3 className="text-2xl font-bold text-[var(--luxury-ink)]">{office.title}</h3>
                </div>
                <p className="text-[var(--luxury-gold)] font-medium">{office.subtitle}</p>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[var(--luxury-gold)] mt-1 flex-shrink-0" />
                <p className="text-[var(--luxury-muted)] leading-relaxed">{office.address}</p>
              </div>
              <div className="space-y-4 lg:text-right">
                <div className="flex lg:justify-end items-center gap-3">
                  <Phone className="h-5 w-5 text-[var(--luxury-gold)] flex-shrink-0" />
                  <p className="text-[var(--luxury-muted)]">{office.phone}</p>
                </div>
                {office.email ? (
                  <div className="flex lg:justify-end items-center gap-3">
                    <Mail className="h-5 w-5 text-[var(--luxury-gold)] flex-shrink-0" />
                    <p className="text-[var(--luxury-muted)]">{office.email}</p>
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
