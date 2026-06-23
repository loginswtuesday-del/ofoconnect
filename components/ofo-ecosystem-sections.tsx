'use client';

import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  Crown,
  Gem,
  Globe2,
  GraduationCap,
  Handshake,
  Landmark,
  Languages,
  LockKeyhole,
  Megaphone,
  ShieldCheck,
  Sparkles,
  TramFront,
} from 'lucide-react';
import { dreamJapanLogo } from '@/components/common/dream-japan-travel';
import { kayTripLogo } from '@/components/common/ktrip-travel';
import { vitLogo } from '@/components/common/vit-travel';
import { enmusubiLogo } from './common/enmusubi';

export function OfoEcosystemSection() {
  const { t } = useLanguage();

  const divisions = [
    {
      label: '01 / MARKET DISTRIBUTION',
      title: 'ofoConnect',
      desc: 'ofoConnectDesc',
      icon: Globe2,
      accent: 'text-[var(--luxury-gold)]',
      iconBg: 'bg-[var(--luxury-surface)]',
      border: 'border-[var(--luxury-champagne)]',
      note: 'ecosystemConnectNote',
    },
    {
      label: '02 / DESTINATION EXPERIENCE',
      title: 'ofoTravel',
      desc: 'ofoTravelDesc',
      icon: TramFront,
      accent: 'text-[var(--luxury-sage)]',
      iconBg: 'bg-[var(--luxury-surface)]',
      border: 'border-[#AAB5AE]',
      note: 'ecosystemTravelNote',
    },
    {
      label: '03 / TRUST FOUNDATION',
      title: 'ofoTourist',
      desc: 'ofoTouristDesc',
      icon: Landmark,
      accent: 'text-[var(--luxury-midnight)]',
      iconBg: 'bg-[var(--luxury-surface)]',
      border: 'border-[var(--luxury-border)]',
      note: 'ecosystemTouristNote',
    },
  ];

  return (
    <section className="py-24 bg-[var(--luxury-background)] relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--luxury-champagne)] to-transparent"></div>
      <div className="absolute right-0 top-12 h-80 w-80 rounded-full bg-[#D8C39D]/20 blur-3xl"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="max-w-3xl mb-14">
            <span className="inline-block px-4 py-2 bg-[#D8C39D]/35 text-[var(--luxury-gold)] rounded-full text-sm font-medium uppercase tracking-wide mb-6">
              {t('ecosystemLabel')}
            </span>
            <h2 className="text-4xl lg:text-5xl font-light text-[var(--luxury-ink)] leading-tight mb-6">
              {t('ecosystemTitle')}
            </h2>
            <p className="text-xl text-[var(--luxury-muted)] font-light leading-relaxed">
              {t('ecosystemDesc')}
            </p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute left-8 right-8 top-8 h-px bg-gradient-to-r from-[var(--luxury-champagne)] via-[var(--luxury-border)] to-[#AAB5AE]"></div>
            <div className="grid lg:grid-cols-3 gap-10 lg:gap-8">
              {divisions.map((division) => (
                <div key={division.title} className="relative pt-3 lg:pt-0">
                  <div className="flex lg:block gap-5">
                    <div
                      className={`relative z-10 w-16 h-16 rounded-full ${division.iconBg} ${division.border} border flex items-center justify-center flex-shrink-0`}>
                      <division.icon className={`h-7 w-7 ${division.accent}`} />
                    </div>
                    <div
                      className={`lg:mt-8 pl-5 lg:pl-0 border-l lg:border-l-0 ${division.border}`}>
                      <span className="text-xs font-semibold tracking-[0.2em] text-[var(--luxury-muted)]">
                        {division.label}
                      </span>
                      <p
                        className={`mt-4 text-sm uppercase tracking-[0.18em] font-semibold ${division.accent}`}>
                        {t(division.note)}
                      </p>
                      <h3 className="text-2xl font-bold text-[var(--luxury-ink)] mt-4 mb-4 leading-snug">
                        {t(division.title)}
                      </h3>
                      <p className="text-[var(--luxury-muted)] leading-relaxed">
                        {t(division.desc)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AboutUsSection() {
  const { t } = useLanguage();

  const pillars = [
    {
      title: 'pillarOutboundTitle',
      desc: 'pillarOutboundDesc',
      icon: BriefcaseBusiness,
      color: 'text-[var(--luxury-gold)]',
      bg: 'from-[#F3E8D5] to-[#E6D3AE]',
    },
    {
      title: 'pillarRepresentationTitle',
      desc: 'pillarRepresentationDesc',
      icon: Handshake,
      color: 'text-[var(--luxury-sage)]',
      bg: 'from-[#E7E7DE] to-[#D7DDD5]',
    },
    {
      title: 'pillarProtectedTitle',
      desc: 'pillarProtectedDesc',
      icon: LockKeyhole,
      color: 'text-[var(--luxury-midnight)]',
      bg: 'from-[#EFE7DB] to-[#DDD2C1]',
    },
  ];

  return (
    <section id="about" className="py-24 bg-[var(--luxury-alternate)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-12 lg:gap-16 items-start">
          <div className="lg:sticky lg:top-28">
            <span className="inline-block px-4 py-2 bg-[#D8C39D]/35 text-[var(--luxury-gold)] rounded-full text-sm font-medium uppercase tracking-wide mb-6">
              {t('aboutStoryLabel')}
            </span>
            <h2 className="text-4xl lg:text-6xl font-light text-[var(--luxury-ink)] mb-8 leading-tight">
              {t('aboutUsTitle')}
            </h2>
            <p className="text-xl text-[var(--luxury-muted)] font-light leading-relaxed mb-8">
              {t('aboutUsDesc2')}
            </p>

            <div className="relative overflow-hidden rounded-3xl bg-[var(--luxury-panel)] p-8 shadow-2xl">
              <div className="absolute -right-12 -top-12 w-40 h-40 rounded-full bg-[#B08A4A]/20"></div>
              <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-[#61756B]/20"></div>
              <div className="relative">
                <p className="text-sm font-medium uppercase tracking-[0.25em] text-[var(--luxury-champagne)] mb-4">
                  {t('missionStatementLabel')}
                </p>
                <p className="text-3xl font-light text-[var(--luxury-on-dark)] leading-tight mb-6">
                  {t('missionQuote')}
                </p>
                <p className="text-[#F7F1E7]/85 leading-relaxed">
                  {t('missionDesc')}
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="border-l-2 border-[var(--luxury-champagne)] pl-8">
              <p className="text-lg text-[var(--luxury-muted)] leading-relaxed">
                {t('aboutUsDesc')}
              </p>
            </div>

            <div className="divide-y divide-[var(--luxury-border)] border-y border-[var(--luxury-border)]">
              {pillars.map((pillar) => (
                <div key={pillar.title} className="group py-7">
                  <div className="flex items-start gap-5">
                    <div
                      className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${pillar.bg} flex items-center justify-center flex-shrink-0`}>
                      <pillar.icon className={`h-7 w-7 ${pillar.color}`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[var(--luxury-ink)] mb-3">
                        {t(pillar.title)}
                      </h3>
                      <p className="text-[var(--luxury-muted)] leading-relaxed">
                        {t(pillar.desc)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PortfolioSection() {
  const { t } = useLanguage();

  return (
    <section id="partners" className="py-24 bg-[var(--luxury-surface)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 bg-[#D8C39D]/35 text-[var(--luxury-gold)] rounded-full text-sm font-medium uppercase tracking-wide mb-6">
            {t('portfolioLabel')}
          </span>
          <h2 className="text-4xl lg:text-6xl font-light text-[var(--luxury-ink)] mb-8 leading-tight">
            {t('portfolioTitle')}
          </h2>
          <p className="text-xl text-[var(--luxury-muted)] max-w-4xl mx-auto font-light leading-relaxed">
            {t('portfolioSubtitle')}
          </p>
        </div>

        <div className="border-y border-[var(--luxury-border)] mb-12">
          <div className="grid md:grid-cols-[220px_1fr] gap-6 md:gap-10 py-8 border-b border-[var(--luxury-border)] items-center">
            <div className="h-16 flex items-center">
              <img
                src={`data:image/png;base64,${kayTripLogo}`}
                alt="Kaytrip"
                className="max-h-14 max-w-[180px]"
              />
            </div>
            <div className="grid lg:grid-cols-[240px_1fr] gap-3 lg:gap-8 lg:items-center">
              <h3 className="text-2xl font-bold text-[var(--luxury-ink)]">
                Kaytrip
              </h3>
              <p className="text-[var(--luxury-muted)] leading-relaxed">
                {t('kaytripDesc')}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-[220px_1fr] gap-6 md:gap-10 py-8 border-b border-[var(--luxury-border)] items-center">
            <div className="h-16 flex items-center">
              <img
                src={`data:image/png;base64,${dreamJapanLogo}`}
                alt="DreamJapan"
                className="max-h-14 max-w-[180px]"
              />
            </div>
            <div className="grid lg:grid-cols-[240px_1fr] gap-3 lg:gap-8 lg:items-center">
              <h3 className="text-2xl font-bold text-[var(--luxury-ink)]">
                DreamJapan
              </h3>
              <p className="text-[var(--luxury-muted)] leading-relaxed">
                {t('dreamJapanDescDetail')}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-[220px_1fr] gap-6 md:gap-10 py-8 items-center">
            <div className="h-16 flex items-center">
              <img
                style={{
                  width: '319px',
                  maxWidth: '200px !important',
                  height: '270px',
                  maxHeight: '150px',
                  display: 'block !important',
                  marginLeft: '-30px !important',
                }}
                src={`data:image/png;base64,${enmusubiLogo}`}
                alt="VIT"
                className="max-h-14 max-w-[180px]"
              />
            </div>
            <div className="grid lg:grid-cols-[240px_1fr] gap-3 lg:gap-8 lg:items-center">
              <h3 className="text-2xl font-bold text-[var(--luxury-ink)]">
                Enmusubi
              </h3>
              <p className="text-[var(--luxury-muted)] leading-relaxed">
                Exclusive Medical Representative of Ouji Hospital Yamaguchi in
                Vietnam, pioneering Luxury Medical & Longevity Tourism.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-[220px_1fr] gap-6 md:gap-10 py-8 items-center">
            <div className="h-16 flex items-center">
              <img
                src={`data:image/png;base64,${vitLogo}`}
                alt="VIT"
                className="max-h-14 max-w-[180px]"
              />
            </div>
            <div className="grid lg:grid-cols-[240px_1fr] gap-3 lg:gap-8 lg:items-center">
              <h3 className="text-2xl font-bold text-[var(--luxury-ink)]">
                VIT Travel
              </h3>
              <p className="text-[var(--luxury-muted)] leading-relaxed">
                {t('vitDesc')}
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-xl text-[var(--luxury-muted)] italic">
            {t('portfolioTagline')}
          </p>
        </div>
      </div>
    </section>
  );
}

export function GsaCapabilitiesSection() {
  const { t } = useLanguage();

  const capabilities = [
    {
      title: 'gsa1Title',
      desc: 'gsa1Desc',
      icon: ShieldCheck,
      color: 'text-[var(--luxury-gold)]',
      bg: 'from-[#F3E8D5] to-[#E6D3AE]',
    },
    {
      title: 'gsa2Title',
      desc: 'gsa2Desc',
      icon: Crown,
      color: 'text-[var(--luxury-gold)]',
      bg: 'from-[#F3E8D5] to-[#E6D3AE]',
    },
    {
      title: 'gsa3Title',
      desc: 'gsa3Desc',
      icon: Sparkles,
      color: 'text-[var(--luxury-midnight)]',
      bg: 'from-[#EFE7DB] to-[#DDD2C1]',
    },
    {
      title: 'gsa4Title',
      desc: 'gsa4Desc',
      icon: GraduationCap,
      color: 'text-[var(--luxury-sage)]',
      bg: 'from-[#E7E7DE] to-[#D7DDD5]',
    },
    {
      title: 'gsa5Title',
      desc: 'gsa5Desc',
      icon: Megaphone,
      color: 'text-[var(--luxury-sage)]',
      bg: 'from-[#E7E7DE] to-[#D7DDD5]',
    },
    {
      title: 'gsa6Title',
      desc: 'gsa6Desc',
      icon: BarChart3,
      color: 'text-[var(--luxury-midnight)]',
      bg: 'from-[#EFE7DB] to-[#DDD2C1]',
    },
  ];

  return (
    <section id="services" className="py-24 bg-[var(--luxury-alternate)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 bg-[#D8C39D]/35 text-[var(--luxury-gold)] rounded-full text-sm font-medium uppercase tracking-wide mb-6">
            {t('coreStrengthsLabel')}
          </span>
          <h2 className="text-4xl lg:text-6xl font-light text-[var(--luxury-ink)] mb-8 leading-tight">
            {t('gsaTitle')}
          </h2>
          <p className="text-xl text-[var(--luxury-muted)] max-w-4xl mx-auto font-light leading-relaxed">
            {t('gsaSubtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((cap, idx) => (
            <div
              key={idx}
              className="bg-[var(--luxury-surface)] rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-[var(--luxury-border)] hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cap.bg} flex items-center justify-center flex-shrink-0`}>
                  <cap.icon className={`h-7 w-7 ${cap.color}`} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[var(--luxury-ink)] mb-3">
                    {t(cap.title)}
                  </h3>
                  <p className="text-[var(--luxury-muted)] leading-relaxed">
                    {t(cap.desc)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhyChooseUsSection() {
  const { t } = useLanguage();

  const reasons = [
    {
      title: 'whyChoose1',
      desc: 'whyChoose1Desc',
      icon: Gem,
      color: 'text-[var(--luxury-gold)]',
      bg: 'from-[#F3E8D5] to-[#E6D3AE]',
    },
    {
      title: 'whyChoose2',
      desc: 'whyChoose2Desc',
      icon: Globe2,
      color: 'text-[var(--luxury-midnight)]',
      bg: 'from-[#EFE7DB] to-[#DDD2C1]',
    },
    {
      title: 'whyChoose3',
      desc: 'whyChoose3Desc',
      icon: Languages,
      color: 'text-[var(--luxury-sage)]',
      bg: 'from-[#E7E7DE] to-[#D7DDD5]',
    },
    {
      title: 'whyChoose4',
      desc: 'whyChoose4Desc',
      icon: ShieldCheck,
      color: 'text-[var(--luxury-midnight)]',
      bg: 'from-[#EFE7DB] to-[#DDD2C1]',
    },
    {
      title: 'whyChoose5',
      desc: 'whyChoose5Desc',
      icon: LockKeyhole,
      color: 'text-[var(--luxury-gold)]',
      bg: 'from-[#F3E8D5] to-[#E6D3AE]',
    },
  ];

  return (
    <section className="py-24 bg-[var(--luxury-background)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 bg-[#D8C39D]/35 text-[var(--luxury-gold)] rounded-full text-sm font-medium uppercase tracking-wide mb-6">
            {t('whyUsLabel')}
          </span>
          <h2 className="text-4xl lg:text-6xl font-light text-[var(--luxury-ink)] mb-8 leading-tight">
            {t('whyChooseTitle')}
          </h2>
          <p className="text-xl text-[var(--luxury-muted)] max-w-4xl mx-auto font-light leading-relaxed">
            {t('whyChooseSubtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-6 gap-8">
          {reasons.map((reason, idx) => (
            <div
              key={idx}
              className={`group bg-[var(--luxury-surface)] rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-[var(--luxury-border)] hover:-translate-y-1 ${
                idx === 4 ? 'lg:col-span-2 lg:col-start-3' : 'lg:col-span-2'
              }`}>
              <div className="flex items-start gap-5">
                <div
                  className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${reason.bg} flex items-center justify-center flex-shrink-0`}>
                  <reason.icon className={`h-8 w-8 ${reason.color}`} />
                  <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-[var(--luxury-midnight)] text-[var(--luxury-on-dark)] text-xs font-bold flex items-center justify-center shadow-md">
                    {idx + 1}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[var(--luxury-ink)] mb-3">
                    {t(reason.title)}
                  </h3>
                  <p className="text-[var(--luxury-muted)] leading-relaxed">
                    {t(reason.desc)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function RegistrationSection() {
  const { t } = useLanguage();
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  return (
    <section className="py-24 bg-gradient-to-br from-[var(--luxury-midnight)] to-[var(--luxury-panel)] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-40 h-40 border-2 border-[var(--luxury-champagne)] rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 border-2 border-[var(--luxury-champagne)] rounded-full"></div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-[var(--luxury-on-dark)] mb-6 leading-tight">
            {t('registrationTitle')} {t('registrationSubtitle')}
          </h2>
          <p className="text-lg text-[#D8C39D]/90">{t('registrationDesc')}</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-[var(--luxury-surface)] rounded-3xl p-12 shadow-2xl space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Input
              placeholder={t('firstName')}
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="rounded-xl border-[var(--luxury-border)] bg-[var(--luxury-background)] focus-visible:ring-[var(--luxury-gold)]"
            />
            <Input
              placeholder={t('lastName')}
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="rounded-xl border-[var(--luxury-border)] bg-[var(--luxury-background)] focus-visible:ring-[var(--luxury-gold)]"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Input
              placeholder={t('company')}
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="rounded-xl border-[var(--luxury-border)] bg-[var(--luxury-background)] focus-visible:ring-[var(--luxury-gold)]"
            />
            <Input
              type="email"
              placeholder={t('email')}
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="rounded-xl border-[var(--luxury-border)] bg-[var(--luxury-background)] focus-visible:ring-[var(--luxury-gold)]"
            />
          </div>

          <Textarea
            placeholder={t('messagePlaceholder')}
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="rounded-xl min-h-32 border-[var(--luxury-border)] bg-[var(--luxury-background)] focus-visible:ring-[var(--luxury-gold)]"
          />

          <Button
            type="submit"
            className="w-full bg-[var(--luxury-gold)] hover:bg-[#94723D] text-[var(--luxury-midnight)] py-6 text-lg font-medium rounded-xl transition-all duration-300">
            {t('sendMessageBtn')}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>

          <p className="text-center text-[var(--luxury-muted)] text-sm">
            {t('sendMessageDesc')}
          </p>
        </form>
      </div>
    </section>
  );
}
