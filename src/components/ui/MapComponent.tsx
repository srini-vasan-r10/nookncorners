"use client";

import React, { useState } from "react";
import { MapPin, Navigation, TrendingUp, Users2, Eye } from "lucide-react";

interface AreaData {
  id: string;
  name: string;
  traffic: "Extreme" | "High" | "Moderate";
  impressions: string;
  audience: string;
  demand: "Selling Out" | "High Demand" | "Available";
  description: string;
  coordX: number; // SVG X coordinate
  coordY: number; // SVG Y coordinate
}

const AREAS: AreaData[] = [
  {
    id: "mattuthavani",
    name: "Mattuthavani Bus Stand",
    traffic: "Extreme",
    impressions: "4,500+ daily views",
    audience: "Travelers, shoppers, market vendors, students",
    demand: "Selling Out",
    description: "Madurai's largest transit terminal, integrated flower market, and central business hub. Guaranteed maximum visibility.",
    coordX: 360,
    coordY: 120,
  },
  {
    id: "periyar",
    name: "Periyar / Railway Station",
    traffic: "Extreme",
    impressions: "5,000+ daily views",
    audience: "Commuters, tourists, shoppers, business owners",
    demand: "Selling Out",
    description: "The historical heart of Madurai. Massive footfall with thousands of trains, local buses, and autos circulating 24/7.",
    coordX: 180,
    coordY: 260,
  },
  {
    id: "goripalayam",
    name: "Goripalayam Junction",
    traffic: "High",
    impressions: "4,000+ daily views",
    audience: "Students, medical professionals, hospital visitors",
    demand: "High Demand",
    description: "Crucial bridge crossing connecting North and South Madurai. Feeds directly into Government Rajaji Hospital and colleges.",
    coordX: 250,
    coordY: 170,
  },
  {
    id: "kalavasal",
    name: "Kalavasal Junction",
    traffic: "High",
    impressions: "3,800+ daily views",
    audience: "Highway commuters, shoppers, bypass travelers",
    demand: "Available",
    description: "Major highway intersection. Connecting bypass road to major commercial showrooms, cinemas, and restaurants.",
    coordX: 100,
    coordY: 190,
  },
  {
    id: "annanagar",
    name: "Anna Nagar",
    traffic: "Moderate",
    impressions: "3,200+ daily views",
    audience: "High-income families, upscale shoppers, cafe visitors",
    demand: "High Demand",
    description: "Madhurai's premium commercial and residential locality. Perfect for targeting high-spending demographics.",
    coordX: 380,
    coordY: 230,
  },
  {
    id: "teppakulam",
    name: "Teppakulam & Kamarajar Salai",
    traffic: "Moderate",
    impressions: "3,000+ daily views",
    audience: "Devotees, college students, residents, local buyers",
    demand: "Available",
    description: "Culturally rich district with huge traffic around the temple tank. Connects core city to eastern suburbs.",
    coordX: 320,
    coordY: 300,
  },
  {
    id: "kpudur",
    name: "K. Pudur",
    traffic: "Moderate",
    impressions: "2,800+ daily views",
    audience: "Industrial workers, families, school kids",
    demand: "Available",
    description: "Industrial estate and high-density residential zone. Great local coverage for retail brands.",
    coordX: 300,
    coordY: 80,
  },
];

export default function MapComponent() {
  const [selectedArea, setSelectedArea] = useState<AreaData>(AREAS[0]);

  return (
    <div className="w-full max-w-5xl mx-auto glass-card rounded-3xl overflow-hidden border border-slate-200/80 p-6 md:p-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Side: Map Interactive Container */}
        <div className="lg:col-span-7 bg-slate-900 rounded-2xl border border-slate-950 p-4 flex flex-col justify-between relative overflow-hidden min-h-[350px] md:min-h-[420px]">
          
          {/* Map Header */}
          <div className="z-10 relative flex justify-between items-start">
            <div>
              <h4 className="text-white font-bold text-lg flex items-center gap-2">
                <Navigation className="w-5 h-5 text-amber-400 rotate-45" /> Madurai Route Matrix
              </h4>
              <p className="text-slate-400 text-xs mt-0.5">
                Click on neighborhood hotspots to see target reach.
              </p>
            </div>
            
            <div className="bg-slate-800/80 backdrop-blur px-2.5 py-1 rounded-lg border border-slate-700/50 text-[10px] text-slate-300 font-bold uppercase tracking-wider">
              🟢 Live Coverage
            </div>
          </div>

          {/* SVG Map Layout */}
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <svg
              viewBox="0 0 500 380"
              className="w-full h-full max-h-[340px] opacity-90 transition-all select-none"
            >
              {/* Grid System for tech design */}
              <defs>
                <pattern id="map-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#map-grid)" />

              {/* Faint road networks */}
              {/* Bypass road */}
              <path d="M 50,300 L 100,190 L 150,80 L 300,80 L 360,120 L 450,150" fill="none" stroke="rgba(100, 116, 139, 0.25)" strokeWidth="3" strokeDasharray="3 3" />
              {/* Ring road */}
              <path d="M 100,190 L 180,260 L 320,300 L 380,230 L 360,120" fill="none" stroke="rgba(100, 116, 139, 0.25)" strokeWidth="3" />
              {/* Central roads radiating from Periyar */}
              <line x1="180" y1="260" x2="250" y2="170" stroke="rgba(100, 116, 139, 0.3)" strokeWidth="4" />
              <line x1="180" y1="260" x2="100" y2="190" stroke="rgba(100, 116, 139, 0.3)" strokeWidth="4" />
              <line x1="250" y1="170" x2="360" y2="120" stroke="rgba(100, 116, 139, 0.3)" strokeWidth="4" />
              <line x1="250" y1="170" x2="300" y2="80" stroke="rgba(100, 116, 139, 0.3)" strokeWidth="4" />
              <line x1="180" y1="260" x2="320" y2="300" stroke="rgba(100, 116, 139, 0.3)" strokeWidth="4" />
              <line x1="320" y1="300" x2="380" y2="230" stroke="rgba(100, 116, 139, 0.3)" strokeWidth="4" />

              {/* Vaigai River (Feminine curves dividing North and South Madurai) */}
              <path
                d="M 20,130 Q 120,120 220,200 T 420,210 T 500,190"
                fill="none"
                stroke="#0284c7"
                strokeWidth="8"
                strokeLinecap="round"
                className="opacity-45"
              />
              <path
                d="M 20,130 Q 120,120 220,200 T 420,210 T 500,190"
                fill="none"
                stroke="#38bdf8"
                strokeWidth="2"
                strokeLinecap="round"
                className="opacity-60"
              />
              <text x="50" y="115" fill="#38bdf8" className="text-[9px] font-semibold italic opacity-50 tracking-wider">
                VAIGAI RIVER
              </text>

              {/* Pulsating / interactive nodes */}
              {AREAS.map((area) => {
                const isSelected = selectedArea.id === area.id;
                return (
                  <g
                    key={area.id}
                    className="cursor-pointer group"
                    onClick={() => setSelectedArea(area)}
                  >
                    {/* Ripple animation ring */}
                    <circle
                      cx={area.coordX}
                      cy={area.coordY}
                      r={isSelected ? "14" : "10"}
                      fill={isSelected ? "#fbbf24" : "#0284c7"}
                      className="opacity-30 transition-all duration-300"
                    >
                      {isSelected && (
                        <>
                          <animate
                            attributeName="r"
                            values="10;22;10"
                            dur="2s"
                            repeatCount="indefinite"
                          />
                          <animate
                            attributeName="opacity"
                            values="0.4;0;0.4"
                            dur="2s"
                            repeatCount="indefinite"
                          />
                        </>
                      )}
                    </circle>
                    {/* Inner node */}
                    <circle
                      cx={area.coordX}
                      cy={area.coordY}
                      r={isSelected ? "7" : "5"}
                      fill={isSelected ? "#fbbf24" : "#38bdf8"}
                      stroke="#0f172a"
                      strokeWidth="2"
                      className="transition-all duration-300"
                    />
                    {/* Node Text Label (Visible on hover or if selected) */}
                    <text
                      x={area.coordX}
                      y={area.coordY - 12}
                      textAnchor="middle"
                      fill={isSelected ? "#fbbf24" : "#cbd5e1"}
                      className={`text-[9px] font-bold tracking-wide pointer-events-none transition-all duration-300 ${
                        isSelected ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                      }`}
                    >
                      {area.name.replace(" Bus Stand", "").replace(" Junction", "")}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Map Footer legend */}
          <div className="z-10 relative flex justify-between text-[10px] text-slate-400 border-t border-slate-800/60 pt-3 mt-auto">
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block" /> Selected Zone
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-sky-400 inline-block" /> Transit Routes
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-1 bg-sky-600 inline-block rounded" /> Vaigai River
            </span>
          </div>

        </div>

        {/* Right Side: Area Information & Statistics */}
        <div className="lg:col-span-5 flex flex-col justify-between bg-slate-50 rounded-2xl border border-slate-200/60 p-6">
          <div className="space-y-5">
            {/* Header info */}
            <div>
              <span className="text-[10px] bg-slate-200 text-slate-700 font-bold px-2 py-0.5 rounded uppercase tracking-wider inline-block">
                Hotspot Analysis
              </span>
              <h4 className="text-xl font-bold text-slate-900 mt-2 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-amber-500" />
                {selectedArea.name}
              </h4>
              <p className="text-slate-500 text-sm mt-2 leading-relaxed">
                {selectedArea.description}
              </p>
            </div>

            {/* Statistics */}
            <div className="space-y-3 pt-2">
              {/* Daily reach */}
              <div className="flex items-center justify-between p-3 bg-white rounded-xl border border-slate-100 shadow-sm">
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-lg bg-sky-50 text-sky-600">
                    <Eye className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-semibold text-slate-600">Est. Daily Views</span>
                </div>
                <span className="text-sm font-bold text-slate-800">{selectedArea.impressions}</span>
              </div>

              {/* Traffic Index */}
              <div className="flex items-center justify-between p-3 bg-white rounded-xl border border-slate-100 shadow-sm">
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-lg bg-orange-50 text-orange-600">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-semibold text-slate-600">Traffic Density</span>
                </div>
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                  selectedArea.traffic === "Extreme" 
                    ? "bg-red-100 text-red-700" 
                    : selectedArea.traffic === "High" 
                    ? "bg-orange-100 text-orange-700" 
                    : "bg-amber-100 text-amber-700"
                }`}>
                  {selectedArea.traffic} Traffic
                </span>
              </div>

              {/* Target Audience */}
              <div className="flex items-center justify-between p-3 bg-white rounded-xl border border-slate-100 shadow-sm">
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-lg bg-indigo-50 text-indigo-600">
                    <Users2 className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-semibold text-slate-600">Primary Audience</span>
                </div>
                <span className="text-xs font-medium text-slate-700 max-w-[180px] text-right truncate">
                  {selectedArea.audience}
                </span>
              </div>
            </div>
          </div>

          {/* CTA Link to Form */}
          <div className="pt-6 border-t border-slate-200 mt-6 lg:mt-0">
            <div className="flex justify-between items-center mb-3">
              <span className="text-xs font-bold text-slate-500 uppercase">Availability</span>
              <span className={`text-xs font-bold ${
                selectedArea.demand === "Selling Out" 
                  ? "text-red-600" 
                  : selectedArea.demand === "High Demand" 
                  ? "text-amber-600" 
                  : "text-emerald-600"
              }`}>
                ● {selectedArea.demand}
              </span>
            </div>
            <a
              href="#booking-calculator"
              className="w-full inline-flex justify-center items-center py-2.5 px-4 rounded-xl text-center text-xs font-bold text-white bg-slate-900 hover:bg-brand-blue-700 transition-all duration-200 shadow"
            >
              Select {selectedArea.name.replace(" Bus Stand", "").replace(" Junction", "")} Zone
            </a>
          </div>

        </div>

      </div>
    </div>
  );
}
