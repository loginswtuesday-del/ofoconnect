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
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full bg-white backdrop-blur-md border-b border-gray-100 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="#" className="flex items-center space-x-3" aria-label="OFO Connect home">
              <img width="150" src={`data:image/jpeg;base64,${logo}`} alt="OFO Connect Logo" />
            </Link>
            <div className="hidden lg:flex space-x-8 items-center">
              <Link
                href="#about"
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium text-sm uppercase tracking-wide"
              >
                {t("about")}
              </Link>
              <Link
                href="#services"
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium text-sm uppercase tracking-wide"
              >
                {t("services")}
              </Link>
              <Link
                href="#partners"
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium text-sm uppercase tracking-wide"
              >
                {t("partners")}
              </Link>
              <Link
                href="#contact"
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium text-sm uppercase tracking-wide"
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
            src="/images/hero-bg.jpg"
            alt="Premium travel landscape"
            fill
            className="object-cover scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950/85 via-gray-900/70 to-gray-900/45" />
        </div>
        <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4 pt-20">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-blue-600/20 backdrop-blur-sm border border-blue-400/30 rounded-full text-blue-200 text-sm font-medium uppercase tracking-wide">
              General Sales Agent & Outbound Sales
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-8 leading-tight tracking-tight">
            {t("heroTagline")}
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-gray-200 max-w-4xl mx-auto font-light leading-relaxed">
            {t("heroSubtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-base font-medium shadow-xl hover:shadow-2xl transition-all duration-300 rounded-lg"
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
              className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-base font-medium backdrop-blur-sm rounded-lg bg-transparent"
            >
              <Link href="#about">Connect with Our GSA Team</Link>
            </Button>
          </div>
        </div>
      </section>

      <OfoEcosystemSection />
      <AboutUsSection />
      <PortfolioSection />
      <GsaCapabilitiesSection />
      <WhyChooseUsSection />
      <ContactOfficesSection />
      <RegistrationSection />

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 border-b border-gray-800 pb-8">
            <div>
              <img width="150" src={`data:image/jpeg;base64,${logo}`} alt="OFO Connect Logo" />
              <p className="text-gray-300 mt-4 leading-relaxed max-w-md">{t("footerDescription")}</p>
            </div>
            <div className="flex flex-wrap gap-6 text-sm uppercase tracking-wide">
              <Link href="#about" className="text-gray-300 hover:text-white transition-colors">
                {t("about")}
              </Link>
              <Link href="#services" className="text-gray-300 hover:text-white transition-colors">
                {t("services")}
              </Link>
              <Link href="#partners" className="text-gray-300 hover:text-white transition-colors">
                {t("partners")}
              </Link>
              <Link href="#contact" className="text-gray-300 hover:text-white transition-colors">
                {t("contact")}
              </Link>
            </div>
          </div>
          <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">© 2025 OFO Connect. {t("allRightsReserved")}</p>
            <p className="text-gray-500 text-sm text-center">{t("operatedUnder")}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function ContactOfficesSection() {
  const { t } = useLanguage()

  const offices = [
    {
      title: t("vietnamOfficeTitle"),
      subtitle: "Headquarters & Operations",
      address: t("vietnamAddress"),
      phone: t("vietnamPhone"),
      email: t("vietnamEmail"),
    },
    {
      title: t("franceOfficeTitle"),
      subtitle: "European Operations",
      address: t("franceAddress"),
      phone: t("francePhone"),
    },
    {
      title: t("japanOfficeTitle"),
      subtitle: "Japan Office",
      address: t("japanAddress"),
      phone: t("japanPhone"),
    },
  ]

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium uppercase tracking-wide mb-6">
            Global Presence
          </span>
          <h2 className="text-4xl lg:text-6xl font-light text-gray-900 mb-6 leading-tight">{t("contactTitle")}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            {t("contactSubtitle")}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {offices.map((office) => (
            <div key={office.title} className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{office.title}</h3>
              <p className="text-blue-600 font-medium mb-6">{office.subtitle}</p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-gray-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 leading-relaxed">{office.address}</p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-gray-400 flex-shrink-0" />
                  <p className="text-gray-700">{office.phone}</p>
                </div>
                {office.email ? (
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-gray-400 flex-shrink-0" />
                    <p className="text-gray-700">{office.email}</p>
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
