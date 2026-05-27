"use client"

import { useLanguage } from "@/hooks/useLanguage"
import { LanguageSelector } from "@/components/language-selector"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Globe,
  Handshake,
  Users,
  Languages,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  ArrowRight,
  Target,
  Award,
  Quote,
  CheckCircle,
  UserCheck,
  Palette,
  Settings,
  BarChart,
} from "lucide-react"
import { logo } from "@/components/common/logo"
import { vitLogo } from "@/components/common/vit-travel"
import { dreamJapanLogo } from "@/components/common/dream-japan-travel"
import { kayTripLogo } from "@/components/common/ktrip-travel"
import { EuropeanBusTourMap } from "@/components/european-bus-tour-map"

export default function OfoConnectWebsite() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white backdrop-blur-md border-b border-gray-100 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <img width="150px" src={`data:image/jpeg;base64,${logo}`} alt="OFO Connect Logo" />
            </div>
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

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Beautiful travel destination with mountains and water"
            fill
            className="object-cover scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/60 to-gray-900/40" />
        </div>
        <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4 pt-20">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-blue-600/20 backdrop-blur-sm border border-blue-400/30 rounded-full text-blue-200 text-sm font-medium uppercase tracking-wide">
              General Sales Agent
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-8 leading-tight tracking-tight">
            {t("heroTagline").split(", ")[0]},<br />
            <span className="font-bold text-blue-400">{t("heroTagline").split(", ")[1]}</span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-gray-200 max-w-4xl mx-auto font-light leading-relaxed">
            {t("heroSubtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-base font-medium shadow-xl hover:shadow-2xl transition-all duration-300 rounded-lg"
            >
              {t("getInTouch")}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-base font-medium backdrop-blur-sm rounded-lg bg-transparent"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Solutions Section - Journey Map */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 border-2 border-blue-300 rounded-full"></div>
          <div className="absolute top-40 right-20 w-24 h-24 border-2 border-indigo-300 rounded-full"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 border-2 border-purple-300 rounded-full"></div>
          <div className="absolute bottom-40 right-1/3 w-20 h-20 border-2 border-blue-300 rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium uppercase tracking-wide mb-6">
              Our Process
            </span>
            <h2 className="text-4xl lg:text-6xl font-light text-gray-900 mb-6 leading-tight">{t("solutionsTitle")}</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
              {t("solutionsSubtitle")}
            </p>
          </div>

          {/* Journey Map */}
          <div className="relative">
            {/* Connection Lines */}
            <div className="hidden lg:block absolute inset-0 pointer-events-none">
              <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
                {/* Curved path connecting all steps */}
                <path
                  d="M150 120 Q300 80 450 120 T750 120 Q900 80 1050 120"
                  stroke="url(#gradient1)"
                  strokeWidth="3"
                  strokeDasharray="8,8"
                  className="animate-pulse"
                />
                <path
                  d="M150 320 Q300 280 450 320 T750 320 Q900 280 1050 320"
                  stroke="url(#gradient2)"
                  strokeWidth="3"
                  strokeDasharray="8,8"
                  className="animate-pulse"
                />
                <path
                  d="M150 520 Q600 480 1050 520"
                  stroke="url(#gradient3)"
                  strokeWidth="3"
                  strokeDasharray="8,8"
                  className="animate-pulse"
                />
                <defs>
                  <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
                    <stop offset="50%" stopColor="#6366F1" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.3" />
                  </linearGradient>
                  <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.3" />
                    <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#6366F1" stopOpacity="0.3" />
                  </linearGradient>
                  <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#10B981" stopOpacity="0.3" />
                    <stop offset="50%" stopColor="#06B6D4" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Solution Steps */}
            <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Row 1 */}
              <div className="lg:col-span-3 grid lg:grid-cols-3 gap-8">
                {/* Step 1 */}
                <div className="group relative">
                  <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2">
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      1
                    </div>
                    <div className="mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mb-4">
                        <Target className="h-8 w-8 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{t("step1Title")}</h3>
                      <p className="text-gray-600 leading-relaxed">{t("step1Desc")}</p>
                    </div>
                    <div className="flex items-center text-blue-600 font-medium text-sm">
                      <span>Market Entry</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="group relative lg:mt-12">
                  <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-indigo-200 transform hover:-translate-y-2">
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      2
                    </div>
                    <div className="mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-2xl flex items-center justify-center mb-4">
                        <Award className="h-8 w-8 text-indigo-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{t("step2Title")}</h3>
                      <p className="text-gray-600 leading-relaxed">{t("step2Desc")}</p>
                    </div>
                    <div className="flex items-center text-indigo-600 font-medium text-sm">
                      <span>Brand Voice</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="group relative">
                  <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-purple-200 transform hover:-translate-y-2">
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      3
                    </div>
                    <div className="mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mb-4">
                        <UserCheck className="h-8 w-8 text-purple-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{t("step3Title")}</h3>
                      <p className="text-gray-600 leading-relaxed">{t("step3Desc")}</p>
                    </div>
                    <div className="flex items-center text-purple-600 font-medium text-sm">
                      <span>Agent Training</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 2 */}
              <div className="lg:col-span-3 grid lg:grid-cols-3 gap-8">
                {/* Step 4 */}
                <div className="group relative lg:mt-8">
                  <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-cyan-200 transform hover:-translate-y-2">
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      4
                    </div>
                    <div className="mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-cyan-100 to-cyan-200 rounded-2xl flex items-center justify-center mb-4">
                        <Languages className="h-8 w-8 text-cyan-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{t("step4Title")}</h3>
                      <p className="text-gray-600 leading-relaxed">{t("step4Desc")}</p>
                    </div>
                    <div className="flex items-center text-cyan-600 font-medium text-sm">
                      <span>Communication</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="group relative">
                  <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-emerald-200 transform hover:-translate-y-2">
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      5
                    </div>
                    <div className="mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl flex items-center justify-center mb-4">
                        <Palette className="h-8 w-8 text-emerald-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{t("step5Title")}</h3>
                      <p className="text-gray-600 leading-relaxed">{t("step5Desc")}</p>
                    </div>
                    <div className="flex items-center text-emerald-600 font-medium text-sm">
                      <span>Marketing</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </div>

                {/* Step 6 */}
                <div className="group relative lg:mt-8">
                  <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-orange-200 transform hover:-translate-y-2">
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      6
                    </div>
                    <div className="mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center mb-4">
                        <Settings className="h-8 w-8 text-orange-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{t("step6Title")}</h3>
                      <p className="text-gray-600 leading-relaxed">{t("step6Desc")}</p>
                    </div>
                    <div className="flex items-center text-orange-600 font-medium text-sm">
                      <span>Customization</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 3 - Final Step */}
              <div className="lg:col-span-3 flex justify-center">
                <div className="group relative lg:mt-16 max-w-md">
                  <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-rose-200 transform hover:-translate-y-2">
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-rose-500 to-rose-600 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      7
                    </div>
                    <div className="mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-rose-100 to-rose-200 rounded-2xl flex items-center justify-center mb-4">
                        <BarChart className="h-8 w-8 text-rose-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{t("step7Title")}</h3>
                      <p className="text-gray-600 leading-relaxed">{t("step7Desc")}</p>
                    </div>
                    <div className="flex items-center text-rose-600 font-medium text-sm">
                      <span>Success Metrics</span>
                      <CheckCircle className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Numbers Section */}
      <section
        className="py-24"
        style={{
          backgroundImage: `url("/images/kaytrip-bg.jpg")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium uppercase tracking-wide mb-6">
              Our Impact
            </span>
            <h2 className="text-4xl lg:text-6xl font-light text-white mb-6 leading-tight">{t("numbersTitle")}</h2>
            <p className="text-xl text-white max-w-4xl mx-auto font-light leading-relaxed">{t("numbersSubtitle")}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="text-5xl font-bold text-blue-600 mb-2">{t("partnersServedCount")}</div>
                <div className="text-xl font-semibold text-gray-900 mb-2">{t("partnersServed")}</div>
                <div className="text-gray-600">{t("partnersServedDesc")}</div>
              </div>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-3xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="text-5xl font-bold text-emerald-600 mb-2">{t("agencyNetworkCount")}</div>
                <div className="text-xl font-semibold text-gray-900 mb-2">{t("agencyNetwork")}</div>
                <div className="text-gray-600">{t("agencyNetworkDesc")}</div>
              </div>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="text-5xl font-bold text-purple-600 mb-2">{t("salesVolumeCount")}</div>
                <div className="text-xl font-semibold text-gray-900 mb-2">{t("salesVolume")}</div>
                <div className="text-gray-600">{t("salesVolumeDesc")}</div>
              </div>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="text-5xl font-bold text-orange-600 mb-2">{t("marketCoverageCount")}</div>
                <div className="text-xl font-semibold text-gray-900 mb-2">{t("marketCoverage")}</div>
                <div className="text-gray-600">{t("marketCoverageDesc")}</div>
              </div>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-3xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="text-5xl font-bold text-cyan-600 mb-2">{t("yearsExperienceCount")}</div>
                <div className="text-xl font-semibold text-gray-900 mb-2">{t("yearsExperience")}</div>
                <div className="text-gray-600">{t("yearsExperienceDesc")}</div>
              </div>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-rose-50 to-rose-100 rounded-3xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="text-5xl font-bold text-rose-600 mb-2">{t("trainingProgramsCount")}</div>
                <div className="text-xl font-semibold text-gray-900 mb-2">{t("trainingPrograms")}</div>
                <div className="text-gray-600">{t("trainingProgramsDesc")}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Network Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium uppercase tracking-wide mb-6">
              Global Presence
            </span>
            <h2 className="text-4xl lg:text-6xl font-light text-gray-900 mb-6 leading-tight">
              {t("globalNetworkTitle")}
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
              {t("globalNetworkSubtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <MapPin className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{t("vietnamOffice")}</h3>
                <p className="text-gray-600 leading-relaxed">{t("vietnamOfficeDesc")}</p>
              </div>
            </div>

            <div className="text-center group">
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Handshake className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{t("regionalPartners")}</h3>
                <p className="text-gray-600 leading-relaxed">{t("regionalPartnersDesc")}</p>
              </div>
            </div>

            <div className="text-center group">
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Globe className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{t("globalReach")}</h3>
                <p className="text-gray-600 leading-relaxed">{t("globalReachDesc")}</p>
              </div>
            </div>

            <div className="text-center group">
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{t("localExpertise")}</h3>
                <p className="text-gray-600 leading-relaxed">{t("localExpertiseDesc")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* European Bus Tour Map Section */}
      <EuropeanBusTourMap />

      {/* Clients Section */}
      <section
        className="py-24"
        style={{
          backgroundImage: `url("/images/japan-bg.jpg")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium uppercase tracking-wide mb-6">
              Testimonials
            </span>
            <h2 className="text-4xl lg:text-6xl font-light text-white mb-6 leading-tight">{t("clientsTitle")}</h2>
            <p className="text-xl text-white max-w-4xl mx-auto font-light leading-relaxed">{t("clientsSubtitle")}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 relative">
              <Quote className="h-12 w-12 text-blue-600 mb-6 opacity-50" />
              <p className="text-gray-700 mb-6 leading-relaxed italic">"{t("clientTestimonial1")}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  A
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-900">Alex Johnson</div>
                  <div className="text-sm text-gray-600">CEO, European Tours</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-3xl p-8 relative">
              <Quote className="h-12 w-12 text-emerald-600 mb-6 opacity-50" />
              <p className="text-gray-700 mb-6 leading-relaxed italic">"{t("clientTestimonial2")}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold">
                  M
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-900">Maria Santos</div>
                  <div className="text-sm text-gray-600">Director, Global Adventures</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl p-8 relative">
              <Quote className="h-12 w-12 text-purple-600 mb-6 opacity-50" />
              <p className="text-gray-700 mb-6 leading-relaxed italic">"{t("clientTestimonial3")}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                  T
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-900">Takeshi Yamamoto</div>
                  <div className="text-sm text-gray-600">VP, Asia Pacific Tours</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium uppercase tracking-wide mb-6">
              Global Network
            </span>
            <h2 className="text-4xl lg:text-6xl font-light text-gray-900 mb-6 leading-tight">{t("partnersTitle")}</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
              {t("partnersSubtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
            {/* Kaytrip EU */}
            <div className="group">
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2">
                <div className="text-center">
                  <div className="w-22 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <img src={`data:image/png;base64, ${kayTripLogo}`} alt="Kaytrip EU" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{t("kaytripEuTitle")}</h3>
                  <p className="text-blue-600 font-medium mb-4">{t("kaytripEuCountry")}</p>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    Leading European tour operator specializing in premium travel experiences across Europe.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full group-hover:bg-blue-50 group-hover:border-blue-300 transition-colors bg-transparent"
                    onClick={() => window.open("https://en.kaytrip.com", "_blank")}
                  >
                    {t("visitWebsite")}
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Dream Japan */}
            <div className="group">
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-red-200 transform hover:-translate-y-2">
                <div className="text-center">
                  <div className="w-22 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <img src={`data:image/png;base64, ${dreamJapanLogo}`} alt="Dream Japan" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{t("dreamJapanTitle")}</h3>
                  <p className="text-red-600 font-medium mb-4">{t("dreamJapanCountry")}</p>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    Authentic Japanese travel experiences with deep cultural immersion and local expertise.
                  </p>
                  <p>&nbsp;</p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full group-hover:bg-red-50 group-hover:border-red-300 transition-colors bg-transparent"
                    onClick={() => window.open("https://www.dream-japan.jp/en/index_en.html", "_blank")}
                  >
                    {t("visitWebsite")}
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* VIT Travel */}
            <div className="group">
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-green-200 transform hover:-translate-y-2">
                <div className="text-center">
                  <div className="w-22 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <img src={`data:image/png;base64, ${vitLogo}`} alt="VIT Travel" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{t("vitTravelTitle")}</h3>
                  <p className="text-green-600 font-medium mb-4">{t("vitTravelCountry")}</p>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    Italian travel specialist offering authentic experiences across Italy's diverse regions.
                  </p>
                  <p>&nbsp;</p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full group-hover:bg-green-50 group-hover:border-green-300 transition-colors bg-transparent"
                    disabled
                  >
                    Coming Soon
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium uppercase tracking-wide mb-8">
              Global Presence
            </span>
            <h2 className="text-5xl lg:text-7xl font-light text-gray-900 mb-8 leading-tight tracking-tight">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              Connect with our team worldwide for personalized support and market insights.
            </p>
          </div>

          <div className="space-y-16">
            {/* Vietnam Office */}
            <div
              className="group opacity-0 animate-fade-in-up"
              style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
            >
              <div className="flex items-start space-x-8 py-12 border-b border-gray-100 hover:border-blue-200 transition-colors duration-500">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
                    <span className="text-3xl">🇻🇳</span>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                    <div className="mb-6 lg:mb-0">
                      <h3 className="text-3xl font-light text-gray-900 mb-2 tracking-tight">Vietnam</h3>
                      <p className="text-blue-600 font-medium text-lg mb-6">Headquarters & Operations</p>
                    </div>
                    <div className="space-y-4 lg:text-right lg:max-w-md">
                      <div className="flex lg:justify-end items-start space-x-3">
                        <MapPin className="h-5 w-5 text-gray-400 mt-1 flex-shrink-0" />
                        <p className="text-gray-700 leading-relaxed">
                          5th Floor, 70 Pham Ngoc Thach
                          <br />
                          Xuan Hoa Ward, HCMC, Vietnam
                        </p>
                      </div>
                      <div className="flex lg:justify-end items-center space-x-3">
                        <Phone className="h-5 w-5 text-gray-400 flex-shrink-0" />
                        <p className="text-gray-700">+84 919 888 301</p>
                      </div>
                      <div className="flex lg:justify-end items-center space-x-3">
                        <Mail className="h-5 w-5 text-gray-400 flex-shrink-0" />
                        <p className="text-gray-700">contact@ofoconnect.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* France Office */}
            <div
              className="group opacity-0 animate-fade-in-up"
              style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
            >
              <div className="flex items-start space-x-8 py-12 border-b border-gray-100 hover:border-indigo-200 transition-colors duration-500">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
                    <span className="text-3xl">🇫🇷</span>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                    <div className="mb-6 lg:mb-0">
                      <h3 className="text-3xl font-light text-gray-900 mb-2 tracking-tight">France</h3>
                      <p className="text-indigo-600 font-medium text-lg mb-6">European Operations</p>
                    </div>
                    <div className="space-y-4 lg:text-right lg:max-w-md">
                      <div className="flex lg:justify-end items-start space-x-3">
                        <MapPin className="h-5 w-5 text-gray-400 mt-1 flex-shrink-0" />
                        <p className="text-gray-700 leading-relaxed">
                          40 Avenue André Malraux
                          <br />
                          77600 Bussy Saint Georges, France
                        </p>
                      </div>
                      <div className="flex lg:justify-end items-center space-x-3">
                        <Phone className="h-5 w-5 text-gray-400 flex-shrink-0" />
                        <p className="text-gray-700">+33 6 43 52 38 72</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Japan Office */}
            <div
              className="group opacity-0 animate-fade-in-up"
              style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
            >
              <div className="flex items-start space-x-8 py-12">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
                    <span className="text-3xl">🇯🇵</span>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                    <div className="mb-6 lg:mb-0">
                      <h3 className="text-3xl font-light text-gray-900 mb-2 tracking-tight">Japan</h3>
                      <p className="text-red-600 font-medium text-lg mb-6">Asia Pacific Hub</p>
                    </div>
                    <div className="space-y-4 lg:text-right lg:max-w-md">
                      <div className="flex lg:justify-end items-start space-x-3">
                        <MapPin className="h-5 w-5 text-gray-400 mt-1 flex-shrink-0" />
                        <p className="text-gray-700 leading-relaxed">
                          #1002 Nakanosakaue Sunbright Twin
                          <br />
                          2-46-1 Honcho, Nakano-ku
                          <br />
                          Tokyo 164-0012, Japan
                        </p>
                      </div>
                      <div className="flex lg:justify-end items-center space-x-3">
                        <Phone className="h-5 w-5 text-gray-400 flex-shrink-0" />
                        <p className="text-gray-700">+81 80 8442 5452</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="rounded-lg flex items-center justify-center">
                  <img width="150px" src={`data:image/jpeg;base64,${logo}`} alt="OFO Connect Logo" />
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed max-w-md">{t("footerDescription")}</p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">f</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">in</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">@</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">{t("quickLinks")}</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="#about" className="text-gray-300 hover:text-white transition-colors">
                    {t("about")}
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-gray-300 hover:text-white transition-colors">
                    {t("services")}
                  </Link>
                </li>
                <li>
                  <Link href="#partners" className="text-gray-300 hover:text-white transition-colors">
                    {t("partners")}
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-gray-300 hover:text-white transition-colors">
                    {t("contact")}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">{t("ourPartners")}</h4>
              <ul className="space-y-3">
                <li>
                  <span className="text-gray-300">Kaytrip EU</span>
                </li>
                <li>
                  <span className="text-gray-300">Dream Japan</span>
                </li>
                <li>
                  <span className="text-gray-300">U-Tour</span>
                </li>
                <li>
                  <span className="text-gray-300">VIT Travel</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">© 2025 OFO Connect. {t("allRightsReserved")}</p>
              <p className="text-gray-500 text-sm text-center">{t("operatedUnder")}</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
