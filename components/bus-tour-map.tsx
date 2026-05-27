"use client"

import { useState, useRef } from "react"
import { useLanguage } from "@/hooks/useLanguage"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, Users, ArrowRight } from "lucide-react"

interface City {
  id: string
  name: string
  x: number
  y: number
  icon: string
  description: string
}

interface RouteSegment {
  from: string
  to: string
  path: string
  length: number
}

export function BusTourMap() {
  const { t } = useLanguage()
  const [hoveredSegment, setHoveredSegment] = useState<string | null>(null)
  const [selectedCity, setSelectedCity] = useState<string | null>(null)
  const [busPosition, setBusPosition] = useState({ x: 0, y: 0, rotation: 0 })
  const svgRef = useRef<SVGSVGElement>(null)

  const cities: City[] = [
    { id: "paris", name: t("cities.paris"), x: 200, y: 300, icon: "🗼", description: t("cityDescriptions.paris") },
    {
      id: "luxembourg",
      name: t("cities.luxembourg"),
      x: 280,
      y: 250,
      icon: "🏰",
      description: t("cityDescriptions.luxembourg"),
    },
    { id: "trier", name: t("cities.trier"), x: 320, y: 220, icon: "🏛️", description: t("cityDescriptions.trier") },
    {
      id: "heidelberg",
      name: t("cities.heidelberg"),
      x: 380,
      y: 200,
      icon: "🏰",
      description: t("cityDescriptions.heidelberg"),
    },
    {
      id: "frankfurt",
      name: t("cities.frankfurt"),
      x: 420,
      y: 180,
      icon: "🏢",
      description: t("cityDescriptions.frankfurt"),
    },
    {
      id: "cologne",
      name: t("cities.cologne"),
      x: 350,
      y: 150,
      icon: "⛪",
      description: t("cityDescriptions.cologne"),
    },
    { id: "hague", name: t("cities.hague"), x: 300, y: 120, icon: "🏛️", description: t("cityDescriptions.hague") },
    {
      id: "amsterdam",
      name: t("cities.amsterdam"),
      x: 320,
      y: 100,
      icon: "🚲",
      description: t("cityDescriptions.amsterdam"),
    },
    {
      id: "brussels",
      name: t("cities.brussels"),
      x: 250,
      y: 180,
      icon: "🍫",
      description: t("cityDescriptions.brussels"),
    },
  ]

  const routeSegments: RouteSegment[] = [
    { from: "paris", to: "luxembourg", path: "M 200 300 Q 240 270 280 250", length: 100 },
    { from: "luxembourg", to: "trier", path: "M 280 250 Q 300 235 320 220", length: 50 },
    { from: "trier", to: "heidelberg", path: "M 320 220 Q 350 210 380 200", length: 70 },
    { from: "heidelberg", to: "frankfurt", path: "M 380 200 Q 400 190 420 180", length: 50 },
    { from: "frankfurt", to: "cologne", path: "M 420 180 Q 385 165 350 150", length: 80 },
    { from: "cologne", to: "hague", path: "M 350 150 Q 325 135 300 120", length: 60 },
    { from: "hague", to: "amsterdam", path: "M 300 120 Q 310 110 320 100", length: 30 },
    { from: "amsterdam", to: "brussels", path: "M 320 100 Q 285 140 250 180", length: 100 },
    { from: "brussels", to: "paris", path: "M 250 180 Q 225 240 200 300", length: 130 },
  ]

  const animateBusAlongPath = (pathElement: SVGPathElement, segmentId: string) => {
    if (!pathElement) return

    const pathLength = pathElement.getTotalLength()
    let progress = 0
    const duration = 2000 // 2 seconds
    const startTime = Date.now()

    const animate = () => {
      const elapsed = Date.now() - startTime
      progress = Math.min(elapsed / duration, 1)

      const point = pathElement.getPointAtLength(progress * pathLength)
      const nextPoint = pathElement.getPointAtLength(Math.min((progress + 0.01) * pathLength, pathLength))

      const angle = Math.atan2(nextPoint.y - point.y, nextPoint.x - point.x) * (180 / Math.PI)

      setBusPosition({
        x: point.x,
        y: point.y,
        rotation: angle,
      })

      if (progress < 1 && hoveredSegment === segmentId) {
        requestAnimationFrame(animate)
      }
    }

    animate()
  }

  const handleSegmentHover = (segmentId: string) => {
    setHoveredSegment(segmentId)
    const pathElement = document.getElementById(`path-${segmentId}`) as SVGPathElement
    if (pathElement) {
      animateBusAlongPath(pathElement, segmentId)
    }
  }

  const handleSegmentLeave = () => {
    setHoveredSegment(null)
  }

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-purple-300 rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border-2 border-teal-300 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border-2 border-purple-300 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium uppercase tracking-wide mb-6">
            Premium Tours
          </span>
          <h2 className="text-4xl lg:text-6xl font-light text-gray-900 mb-6 leading-tight">{t("busTourTitle")}</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">{t("busTourSubtitle")}</p>
        </div>

        {/* Tour Stats */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center space-x-8 bg-white rounded-2xl px-8 py-4 shadow-lg border border-gray-100">
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-purple-600" />
              <span className="text-gray-700 font-medium">{t("tourDuration")}</span>
            </div>
            <div className="w-px h-6 bg-gray-200"></div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-teal-600" />
              <span className="text-gray-700 font-medium">9 Cities</span>
            </div>
            <div className="w-px h-6 bg-gray-200"></div>
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-indigo-600" />
              <span className="text-gray-700 font-medium">Small Groups</span>
            </div>
          </div>
        </div>

        {/* Interactive Map */}
        <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 mb-12">
          <div className="relative">
            <svg
              ref={svgRef}
              viewBox="0 0 600 400"
              className="w-full h-auto max-h-96"
              style={{ filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.05))" }}
            >
              {/* Background Map Outline */}
              <defs>
                <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#06B6D4" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.8" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Route Paths */}
              {routeSegments.map((segment, index) => (
                <g key={`${segment.from}-${segment.to}`}>
                  <path
                    id={`path-${segment.from}-${segment.to}`}
                    d={segment.path}
                    stroke="url(#routeGradient)"
                    strokeWidth="4"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray="8,4"
                    className="cursor-pointer transition-all duration-300 hover:stroke-width-6"
                    style={{
                      filter: hoveredSegment === `${segment.from}-${segment.to}` ? "url(#glow)" : "none",
                      strokeDashoffset: hoveredSegment === `${segment.from}-${segment.to}` ? "0" : "12",
                    }}
                    onMouseEnter={() => handleSegmentHover(`${segment.from}-${segment.to}`)}
                    onMouseLeave={handleSegmentLeave}
                  />
                  {/* Invisible wider path for easier hovering */}
                  <path
                    d={segment.path}
                    stroke="transparent"
                    strokeWidth="20"
                    fill="none"
                    className="cursor-pointer"
                    onMouseEnter={() => handleSegmentHover(`${segment.from}-${segment.to}`)}
                    onMouseLeave={handleSegmentLeave}
                  />
                </g>
              ))}

              {/* City Markers */}
              {cities.map((city, index) => (
                <g key={city.id}>
                  {/* City Circle */}
                  <circle
                    cx={city.x}
                    cy={city.y}
                    r="20"
                    fill="white"
                    stroke="url(#routeGradient)"
                    strokeWidth="3"
                    className="cursor-pointer transition-all duration-300 hover:r-24 hover:stroke-width-4"
                    style={{
                      filter: selectedCity === city.id ? "url(#glow)" : "drop-shadow(0 2px 4px rgba(0,0,0,0.1))",
                    }}
                    onClick={() => setSelectedCity(selectedCity === city.id ? null : city.id)}
                  />

                  {/* City Icon */}
                  <text
                    x={city.x}
                    y={city.y + 6}
                    textAnchor="middle"
                    fontSize="16"
                    className="pointer-events-none select-none"
                  >
                    {city.icon}
                  </text>

                  {/* City Name */}
                  <text
                    x={city.x}
                    y={city.y + 40}
                    textAnchor="middle"
                    fontSize="12"
                    fontWeight="600"
                    fill="#374151"
                    className="pointer-events-none select-none"
                  >
                    {city.name}
                  </text>

                  {/* City Tooltip */}
                  {selectedCity === city.id && (
                    <g>
                      <rect
                        x={city.x - 100}
                        y={city.y - 80}
                        width="200"
                        height="50"
                        rx="8"
                        fill="white"
                        stroke="#E5E7EB"
                        strokeWidth="1"
                        style={{ filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))" }}
                      />
                      <text
                        x={city.x}
                        y={city.y - 60}
                        textAnchor="middle"
                        fontSize="10"
                        fill="#6B7280"
                        className="pointer-events-none select-none"
                      >
                        <tspan x={city.x} dy="0">
                          {city.description.split(" • ")[0]}
                        </tspan>
                        <tspan x={city.x} dy="12">
                          {city.description.split(" • ")[1]}
                        </tspan>
                      </text>
                    </g>
                  )}
                </g>
              ))}

              {/* Animated Bus */}
              {hoveredSegment && (
                <g
                  transform={`translate(${busPosition.x}, ${busPosition.y}) rotate(${busPosition.rotation})`}
                  className="transition-transform duration-100"
                >
                  <circle
                    cx="0"
                    cy="0"
                    r="12"
                    fill="#EF4444"
                    stroke="white"
                    strokeWidth="2"
                    style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.2))" }}
                  />
                  <text
                    x="0"
                    y="4"
                    textAnchor="middle"
                    fontSize="12"
                    fill="white"
                    className="pointer-events-none select-none"
                  >
                    🚌
                  </text>
                </g>
              )}
            </svg>
          </div>

          {/* Legend */}
          <div className="flex justify-center mt-8">
            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-teal-500"></div>
                <span>Tour Route</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 rounded-full bg-red-500 flex items-center justify-center text-white text-xs">
                  🚌
                </div>
                <span>Tour Bus</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-purple-600" />
                <span>{t("transferCity")}</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-teal-600 hover:from-purple-700 hover:to-teal-700 text-white px-8 py-4 text-base font-medium shadow-xl hover:shadow-2xl transition-all duration-300 rounded-lg"
          >
            {t("exploreTour")}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <p className="text-gray-500 text-sm mt-4">Hover over route segments to see the bus in action</p>
        </div>
      </div>
    </section>
  )
}
