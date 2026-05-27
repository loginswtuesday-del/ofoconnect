"use client"

import { useState, useRef } from "react"
import { useLanguage } from "@/hooks/useLanguage"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, Users, ArrowRight, X, ExternalLink } from "lucide-react"

interface City {
  id: string
  name: string
  x: number
  y: number
  icon: string
  description: string
  highlights: string[]
  image?: string
}

interface RouteSegment {
  id: string
  from: string
  to: string
  path: string
  length: number
  duration: string
}

interface CityInfoPanelProps {
  city: City | null
  onClose: () => void
}

function CityInfoPanel({ city, onClose }: CityInfoPanelProps) {
  if (!city) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">{city.name}</h3>
            <p className="text-gray-600">{city.description}</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <X className="h-5 w-5" />
          </button>
        </div>

        {city.image && (
          <div className="mb-4">
            <img
              src={city.image || "/placeholder.svg"}
              alt={city.name}
              className="w-full h-32 object-cover rounded-lg"
            />
          </div>
        )}

        <div className="space-y-2 mb-6">
          {city.highlights.map((highlight, index) => (
            <div key={index} className="flex items-center text-sm text-gray-700">
              <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
              {highlight}
            </div>
          ))}
        </div>

        <Button className="w-full bg-purple-600 hover:bg-purple-700">
          Explore this stop
          <ExternalLink className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

export function EuropeanBusTourMap() {
  const { t } = useLanguage()
  const [hoveredSegment, setHoveredSegment] = useState<string | null>(null)
  const [selectedCity, setSelectedCity] = useState<City | null>(null)
  const [busPosition, setBusPosition] = useState({ x: 0, y: 0, rotation: 0, visible: false })
  const svgRef = useRef<SVGSVGElement>(null)
  const animationRef = useRef<number>()

  const cities: City[] = [
    {
      id: "paris",
      name: "Paris",
      x: 280,
      y: 320,
      icon: "🗼",
      description: "City of Light",
      highlights: ["Eiffel Tower & Seine River", "Louvre Museum & Notre-Dame", "Champs-Élysées shopping"],
      image: "/placeholder.svg?height=128&width=400&text=Paris",
    },
    {
      id: "luxembourg",
      name: "Luxembourg",
      x: 350,
      y: 280,
      icon: "🏰",
      description: "Medieval Charm",
      highlights: ["UNESCO Old Quarter", "Grand Ducal Palace", "Chemin de la Corniche"],
      image: "/placeholder.svg?height=128&width=400&text=Luxembourg",
    },
    {
      id: "trier",
      name: "Trier",
      x: 380,
      y: 250,
      icon: "🏛️",
      description: "Roman Heritage",
      highlights: ["Porta Nigra Roman Gate", "Imperial Roman Baths", "Trier Cathedral"],
      image: "/placeholder.svg?height=128&width=400&text=Trier",
    },
    {
      id: "heidelberg",
      name: "Heidelberg",
      x: 420,
      y: 270,
      icon: "🏰",
      description: "Castle Views",
      highlights: ["Heidelberg Castle ruins", "Old Bridge & Neckar River", "Historic University"],
      image: "/placeholder.svg?height=128&width=400&text=Heidelberg",
    },
    {
      id: "frankfurt",
      name: "Frankfurt",
      x: 430,
      y: 240,
      icon: "🏢",
      description: "Financial Hub",
      highlights: ["Modern skyline district", "Römerberg Old Town", "Main River cruises"],
      image: "/placeholder.svg?height=128&width=400&text=Frankfurt",
    },
    {
      id: "cologne",
      name: "Cologne",
      x: 380,
      y: 200,
      icon: "⛪",
      description: "Gothic Cathedral",
      highlights: ["Cologne Cathedral (Dom)", "Rhine River promenade", "Museum Ludwig"],
      image: "/placeholder.svg?height=128&width=400&text=Cologne",
    },
    {
      id: "hague",
      name: "The Hague",
      x: 320,
      y: 160,
      icon: "🏛️",
      description: "Royal Residence",
      highlights: ["Peace Palace & Int'l Court", "Binnenhof Parliament", "Scheveningen Beach"],
      image: "/placeholder.svg?height=128&width=400&text=The+Hague",
    },
    {
      id: "amsterdam",
      name: "Amsterdam",
      x: 340,
      y: 140,
      icon: "🚲",
      description: "Canal Rings",
      highlights: ["UNESCO Canal District", "Van Gogh & Rijksmuseum", "Jordaan neighborhood"],
      image: "/placeholder.svg?height=128&width=400&text=Amsterdam",
    },
    {
      id: "brussels",
      name: "Brussels",
      x: 300,
      y: 200,
      icon: "🍫",
      description: "European Capital",
      highlights: ["Grand Place & Atomium", "Royal Museums & EU Quarter", "Belgian chocolate & waffles"],
      image: "/placeholder.svg?height=128&width=400&text=Brussels",
    },
  ]

  const routeSegments: RouteSegment[] = [
    {
      id: "paris-luxembourg",
      from: "paris",
      to: "luxembourg",
      path: "M 280 320 Q 315 300 350 280",
      length: 80,
      duration: "3h 30m",
    },
    {
      id: "luxembourg-trier",
      from: "luxembourg",
      to: "trier",
      path: "M 350 280 Q 365 265 380 250",
      length: 40,
      duration: "1h 15m",
    },
    {
      id: "trier-heidelberg",
      from: "trier",
      to: "heidelberg",
      path: "M 380 250 Q 400 260 420 270",
      length: 50,
      duration: "2h 00m",
    },
    {
      id: "heidelberg-frankfurt",
      from: "heidelberg",
      to: "frankfurt",
      path: "M 420 270 Q 425 255 430 240",
      length: 35,
      duration: "1h 30m",
    },
    {
      id: "frankfurt-cologne",
      from: "frankfurt",
      to: "cologne",
      path: "M 430 240 Q 405 220 380 200",
      length: 70,
      duration: "2h 45m",
    },
    {
      id: "cologne-hague",
      from: "cologne",
      to: "hague",
      path: "M 380 200 Q 350 180 320 160",
      length: 75,
      duration: "3h 15m",
    },
    {
      id: "hague-amsterdam",
      from: "hague",
      to: "amsterdam",
      path: "M 320 160 Q 330 150 340 140",
      length: 25,
      duration: "45m",
    },
    {
      id: "amsterdam-brussels",
      from: "amsterdam",
      to: "brussels",
      path: "M 340 140 Q 320 170 300 200",
      length: 65,
      duration: "2h 30m",
    },
    {
      id: "brussels-paris",
      from: "brussels",
      to: "paris",
      path: "M 300 200 Q 290 260 280 320",
      length: 120,
      duration: "4h 00m",
    },
  ]

  const animateBusAlongPath = (pathElement: SVGPathElement, segmentId: string) => {
    if (!pathElement) return

    const pathLength = pathElement.getTotalLength()
    let progress = 0
    const duration = 3000 // 3 seconds
    const startTime = Date.now()

    const animate = () => {
      const elapsed = Date.now() - startTime
      progress = Math.min(elapsed / duration, 1)

      const point = pathElement.getPointAtLength(progress * pathLength)
      const nextPoint = pathElement.getPointAtLength(Math.min((progress + 0.02) * pathLength, pathLength))

      const angle = Math.atan2(nextPoint.y - point.y, nextPoint.x - point.x) * (180 / Math.PI)

      setBusPosition({
        x: point.x,
        y: point.y,
        rotation: angle,
        visible: true,
      })

      if (progress < 1 && hoveredSegment === segmentId) {
        animationRef.current = requestAnimationFrame(animate)
      } else if (hoveredSegment !== segmentId) {
        setBusPosition((prev) => ({ ...prev, visible: false }))
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
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current)
    }
    setBusPosition((prev) => ({ ...prev, visible: false }))
  }

  const handleCityClick = (city: City) => {
    setSelectedCity(city)
  }

  // European map outline path (simplified)
  const europeMapPath = `
    M 200 100 
    Q 250 80 300 90 
    Q 350 85 400 95 
    Q 450 90 500 110 
    Q 520 130 530 160 
    Q 535 200 520 240 
    Q 500 280 470 310 
    Q 440 340 400 360 
    Q 350 370 300 365 
    Q 250 360 200 340 
    Q 150 320 140 280 
    Q 135 240 145 200 
    Q 150 160 170 130 
    Q 185 110 200 100 Z
  `

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-purple-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-purple-300 rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border-2 border-blue-300 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border-2 border-purple-300 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium uppercase tracking-wide mb-6">
            Premium European Tours
          </span>
          <h2 className="text-4xl lg:text-6xl font-light text-gray-900 mb-6 leading-tight">
            European Bus Circular Tour
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
            Experience Europe's most iconic cities in a carefully crafted circular journey through history, culture, and
            breathtaking landscapes.
          </p>
        </div>

        {/* Tour Stats */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center space-x-8 bg-white rounded-2xl px-8 py-4 shadow-lg border border-gray-100">
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-purple-600" />
              <span className="text-gray-700 font-medium">14 Days</span>
            </div>
            <div className="w-px h-6 bg-gray-200"></div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-blue-600" />
              <span className="text-gray-700 font-medium">9 Cities</span>
            </div>
            <div className="w-px h-6 bg-gray-200"></div>
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-emerald-600" />
              <span className="text-gray-700 font-medium">Small Groups</span>
            </div>
          </div>
        </div>

        {/* Interactive Map */}
        <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 mb-12 relative">
          <div className="relative">
            <svg
              ref={svgRef}
              viewBox="0 0 700 500"
              className="w-full h-auto max-h-[600px]"
              style={{ filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.05))" }}
            >
              {/* Definitions */}
              <defs>
                <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#06B6D4" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.8" />
                </linearGradient>
                <linearGradient id="routeGradientHover" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#7C3AED" stopOpacity="1" />
                  <stop offset="50%" stopColor="#0891B2" stopOpacity="1" />
                  <stop offset="100%" stopColor="#7C3AED" stopOpacity="1" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <filter id="shadow">
                  <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.2" />
                </filter>
              </defs>

              {/* Europe Map Background */}
              <path
                d={europeMapPath}
                fill="none"
                stroke="#E5E7EB"
                strokeWidth="2"
                strokeDasharray="5,5"
                opacity="0.3"
              />

              {/* Country Labels */}
              <text x="200" y="200" textAnchor="middle" fontSize="12" fill="#9CA3AF" opacity="0.6">
                FRANCE
              </text>
              <text x="350" y="180" textAnchor="middle" fontSize="12" fill="#9CA3AF" opacity="0.6">
                GERMANY
              </text>
              <text x="320" y="120" textAnchor="middle" fontSize="12" fill="#9CA3AF" opacity="0.6">
                NETHERLANDS
              </text>
              <text x="300" y="240" textAnchor="middle" fontSize="12" fill="#9CA3AF" opacity="0.6">
                BELGIUM
              </text>

              {/* Route Paths */}
              {routeSegments.map((segment) => (
                <g key={segment.id}>
                  {/* Main route path */}
                  <path
                    id={`path-${segment.id}`}
                    d={segment.path}
                    stroke={hoveredSegment === segment.id ? "url(#routeGradientHover)" : "url(#routeGradient)"}
                    strokeWidth={hoveredSegment === segment.id ? "6" : "4"}
                    fill="none"
                    strokeLinecap="round"
                    className="transition-all duration-300"
                    style={{
                      filter: hoveredSegment === segment.id ? "url(#glow)" : "none",
                    }}
                  />

                  {/* Invisible wider path for easier hovering */}
                  <path
                    d={segment.path}
                    stroke="transparent"
                    strokeWidth="20"
                    fill="none"
                    className="cursor-pointer"
                    onMouseEnter={() => handleSegmentHover(segment.id)}
                    onMouseLeave={handleSegmentLeave}
                  />

                  {/* Direction arrow */}
                  {hoveredSegment === segment.id && (
                    <g>
                      <defs>
                        <marker
                          id={`arrow-${segment.id}`}
                          viewBox="0 0 10 10"
                          refX="9"
                          refY="3"
                          markerWidth="6"
                          markerHeight="6"
                          orient="auto"
                        >
                          <path d="M0,0 L0,6 L9,3 z" fill="#7C3AED" />
                        </marker>
                      </defs>
                      <path
                        d={segment.path}
                        stroke="transparent"
                        strokeWidth="2"
                        fill="none"
                        markerEnd={`url(#arrow-${segment.id})`}
                      />
                    </g>
                  )}
                </g>
              ))}

              {/* City Markers */}
              {cities.map((city) => (
                <g key={city.id}>
                  {/* City Circle Background */}
                  <circle
                    cx={city.x}
                    cy={city.y}
                    r="24"
                    fill="white"
                    stroke="url(#routeGradient)"
                    strokeWidth="3"
                    className="cursor-pointer transition-all duration-300 hover:r-28"
                    style={{ filter: "url(#shadow)" }}
                    onClick={() => handleCityClick(city)}
                  />

                  {/* Transfer City Indicator */}
                  <circle
                    cx={city.x + 18}
                    cy={city.y - 18}
                    r="6"
                    fill="#10B981"
                    stroke="white"
                    strokeWidth="2"
                    style={{ filter: "url(#shadow)" }}
                  />

                  {/* City Icon */}
                  <text
                    x={city.x}
                    y={city.y + 6}
                    textAnchor="middle"
                    fontSize="18"
                    className="pointer-events-none select-none"
                  >
                    {city.icon}
                  </text>

                  {/* City Name */}
                  <text
                    x={city.x}
                    y={city.y + 45}
                    textAnchor="middle"
                    fontSize="14"
                    fontWeight="600"
                    fill="#374151"
                    className="pointer-events-none select-none"
                  >
                    {city.name}
                  </text>

                  {/* Hover tooltip */}
                  <g className="opacity-0 hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                    <rect
                      x={city.x - 60}
                      y={city.y - 80}
                      width="120"
                      height="30"
                      rx="6"
                      fill="rgba(0,0,0,0.8)"
                      style={{ filter: "url(#shadow)" }}
                    />
                    <text
                      x={city.x}
                      y={city.y - 62}
                      textAnchor="middle"
                      fontSize="12"
                      fill="white"
                      className="select-none"
                    >
                      {city.description}
                    </text>
                  </g>
                </g>
              ))}

              {/* Animated Bus */}
              {busPosition.visible && (
                <g
                  transform={`translate(${busPosition.x}, ${busPosition.y}) rotate(${busPosition.rotation})`}
                  className="transition-transform duration-100"
                >
                  <circle
                    cx="0"
                    cy="0"
                    r="16"
                    fill="#EF4444"
                    stroke="white"
                    strokeWidth="3"
                    style={{ filter: "url(#shadow)" }}
                  />
                  <text x="0" y="5" textAnchor="middle" fontSize="16" className="pointer-events-none select-none">
                    🚍
                  </text>
                </g>
              )}
            </svg>
          </div>

          {/* Map Legend */}
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500"></div>
              <span>Tour Route</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 rounded-full bg-red-500 flex items-center justify-center text-white text-xs">
                🚍
              </div>
              <span>Tour Bus</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 rounded-full bg-emerald-500"></div>
              <span>Transfer City</span>
            </div>
            <div className="text-gray-400 italic">* Non real map, only route examples</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-base font-medium shadow-xl hover:shadow-2xl transition-all duration-300 rounded-lg"
          >
            Explore This Tour
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <p className="text-gray-500 text-sm mt-4">
            Hover over route segments to see the bus in action • Click cities for details
          </p>
        </div>
      </div>

      {/* City Info Panel */}
      <CityInfoPanel city={selectedCity} onClose={() => setSelectedCity(null)} />
    </section>
  )
}
