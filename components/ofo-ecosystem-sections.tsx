'use client'

import React from 'react'
import { useLanguage } from '@/hooks/useLanguage'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { ArrowRight, CheckCircle } from 'lucide-react'

export function OfoEcosystemSection() {
  const { t } = useLanguage()

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          {/* OFO Connect */}
          <div className="group">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 h-full hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 text-white text-2xl font-bold">
                1
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('ofoConnect')}</h3>
              <p className="text-gray-700 leading-relaxed">{t('ofoConnectDesc')}</p>
            </div>
          </div>

          {/* OFO Travel */}
          <div className="group">
            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-3xl p-8 h-full hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-emerald-600 rounded-2xl flex items-center justify-center mb-6 text-white text-2xl font-bold">
                2
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('ofoTravel')}</h3>
              <p className="text-gray-700 leading-relaxed">{t('ofoTravelDesc')}</p>
            </div>
          </div>

          {/* OFO Tourist */}
          <div className="group">
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl p-8 h-full hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-purple-600 rounded-2xl flex items-center justify-center mb-6 text-white text-2xl font-bold">
                3
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('ofoTourist')}</h3>
              <p className="text-gray-700 leading-relaxed">{t('ofoTouristDesc')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function AboutUsSection() {
  const { t } = useLanguage()

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium uppercase tracking-wide mb-6">
            Our Story
          </span>
          <h2 className="text-4xl lg:text-6xl font-light text-gray-900 mb-8 leading-tight">{t('aboutUsTitle')}</h2>
        </div>

        <div className="space-y-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <p className="text-lg text-gray-700 leading-relaxed">{t('aboutUsDesc')}</p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <p className="text-lg text-gray-700 leading-relaxed">{t('aboutUsDesc2')}</p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <p className="text-lg text-gray-700 leading-relaxed">{t('aboutUsDesc3')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export function PortfolioSection() {
  const { t } = useLanguage()

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium uppercase tracking-wide mb-6">
            Elite Partnerships
          </span>
          <h2 className="text-4xl lg:text-6xl font-light text-gray-900 mb-8 leading-tight">
            {t('portfolioTitle')}
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
            {t('portfolioSubtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 hover:shadow-xl transition-all">
            <div className="text-4xl mb-4">✈️</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Kaytrip</h3>
            <p className="text-gray-700">{t('kaytripDesc')}</p>
          </div>

          <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-3xl p-8 hover:shadow-xl transition-all">
            <div className="text-4xl mb-4">🗾</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">DreamJapan</h3>
            <p className="text-gray-700">{t('dreamJapanDescDetail')}</p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8 hover:shadow-xl transition-all">
            <div className="text-4xl mb-4">🇮🇹</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">VIT Travel</h3>
            <p className="text-gray-700">{t('vitDesc')}</p>
          </div>
        </div>

        <div className="text-center">
          <p className="text-xl text-gray-600 italic">{t('portfolioTagline')}</p>
        </div>
      </div>
    </section>
  )
}

export function GsaCapabilitiesSection() {
  const { t } = useLanguage()

  const capabilities = [
    { title: 'gsa1Title', desc: 'gsa1Desc' },
    { title: 'gsa2Title', desc: 'gsa2Desc' },
    { title: 'gsa3Title', desc: 'gsa3Desc' },
    { title: 'gsa4Title', desc: 'gsa4Desc' },
    { title: 'gsa5Title', desc: 'gsa5Desc' },
    { title: 'gsa6Title', desc: 'gsa6Desc' },
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium uppercase tracking-wide mb-6">
            Core Strengths
          </span>
          <h2 className="text-4xl lg:text-6xl font-light text-gray-900 mb-8 leading-tight">{t('gsaTitle')}</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">{t('gsaSubtitle')}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((cap, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{t(cap.title)}</h3>
                  <p className="text-gray-600 leading-relaxed">{t(cap.desc)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function WhyChooseUsSection() {
  const { t } = useLanguage()

  const reasons = [
    { title: 'whyChoose1', desc: 'whyChoose1Desc' },
    { title: 'whyChoose2', desc: 'whyChoose2Desc' },
    { title: 'whyChoose3', desc: 'whyChoose3Desc' },
    { title: 'whyChoose4', desc: 'whyChoose4Desc' },
    { title: 'whyChoose5', desc: 'whyChoose5Desc' },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium uppercase tracking-wide mb-6">
            Why Us
          </span>
          <h2 className="text-4xl lg:text-6xl font-light text-gray-900 mb-8 leading-tight">{t('whyChooseTitle')}</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">{t('whyChooseSubtitle')}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 hover:shadow-lg transition-all duration-300 border border-blue-100"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 text-white font-bold">
                  {idx + 1}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{t(reason.title)}</h3>
                  <p className="text-gray-700 leading-relaxed">{t(reason.desc)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function RegistrationSection() {
  const { t } = useLanguage()
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Handle form submission
  }

  return (
    <section className="py-24 bg-gradient-to-br from-blue-600 to-indigo-700 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-40 h-40 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 border-2 border-white rounded-full"></div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-white mb-6 leading-tight">
            {t('registrationTitle')}
          </h2>
          <p className="text-xl text-blue-100 mb-6">{t('registrationSubtitle')}</p>
          <p className="text-lg text-blue-50">{t('registrationDesc')}</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-12 shadow-2xl space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Input
              placeholder={t('firstName')}
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="rounded-xl"
            />
            <Input
              placeholder={t('lastName')}
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="rounded-xl"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Input
              placeholder={t('company')}
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="rounded-xl"
            />
            <Input
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="rounded-xl"
            />
          </div>

          <Textarea
            placeholder={t('messagePlaceholder')}
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="rounded-xl min-h-32"
          />

          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg font-medium rounded-xl transition-all duration-300"
          >
            {t('sendMessageBtn')}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>

          <p className="text-center text-gray-500 text-sm">{t('sendMessageDesc')}</p>
        </form>
      </div>
    </section>
  )
}
