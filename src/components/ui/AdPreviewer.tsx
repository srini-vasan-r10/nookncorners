"use client";

import React, { useState } from "react";
import { 
  Utensils, Dumbbell, HeartPulse, Scissors, GraduationCap, 
  Store, Building2, Smartphone, Check, Sparkles 
} from "lucide-react";

const INDUSTRIES = [
  { id: "food", label: "Restaurant", icon: Utensils, defaultSlogan: "Delicious Food, Fast Delivery", defaultColor: "bg-orange-500" },
  { id: "gym", label: "Fitness/Gym", icon: Dumbbell, defaultSlogan: "Transform Your Body Today", defaultColor: "bg-red-500" },
  { id: "health", label: "Clinic/Hospital", icon: HeartPulse, defaultSlogan: "24/7 Quality Healthcare", defaultColor: "bg-teal-500" },
  { id: "salon", label: "Salon/Spa", icon: Scissors, defaultSlogan: "Premium Styling & Care", defaultColor: "bg-pink-500" },
  { id: "education", label: "Coaching/School", icon: GraduationCap, defaultSlogan: "Admissions Open for 2026", defaultColor: "bg-indigo-500" },
  { id: "retail", label: "Supermarket", icon: Store, defaultSlogan: "Best Deals in Madurai", defaultColor: "bg-amber-500" },
  { id: "realestate", label: "Real Estate", icon: Building2, defaultSlogan: "Premium Plots & Villas", defaultColor: "bg-blue-600" },
];

export default function AdPreviewer() {
  const [businessName, setBusinessName] = useState("N&C (nook & corner)");
  const [slogan, setSlogan] = useState("your brand. every nook. every corner.");
  const [phone, setPhone] = useState("98765 43210");
  const [industry, setIndustry] = useState(INDUSTRIES[5]); // Default Supermarket
  const [adColor, setAdColor] = useState("bg-amber-500");
  const [showAd, setShowAd] = useState(true);

  const handleIndustryChange = (ind: typeof INDUSTRIES[0]) => {
    setIndustry(ind);
    setAdColor(ind.defaultColor);
    setSlogan(ind.defaultSlogan);
  };

  const IconComponent = industry.icon;

  return (
    <div className="w-full max-w-5xl mx-auto glass-card rounded-3xl overflow-hidden p-6 md:p-10 border border-slate-200/80">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Editor Controls */}
        <div className="lg:col-span-5 space-y-6">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-800 mb-3">
              <Sparkles className="w-3.5 h-3.5" /> Ad Customizer
            </span>
            <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
              Visualize Your Brand
            </h3>
            <p className="text-slate-500 text-sm mt-1">
              Design your rickshaw banner and see it driving across Madurai.
            </p>
          </div>

          <div className="space-y-4">
            {/* Business Name */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                Business Name
              </label>
              <input
                type="text"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                maxLength={30}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue-500 bg-white text-sm text-slate-800 transition-all"
                placeholder="e.g. Madurai Biryani"
              />
            </div>

            {/* Slogan */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                Slogan / Offer text
              </label>
              <input
                type="text"
                value={slogan}
                onChange={(e) => setSlogan(e.target.value)}
                maxLength={45}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue-500 bg-white text-sm text-slate-800 transition-all"
                placeholder="e.g. Free Home Delivery"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                Contact Number
              </label>
              <div className="relative">
                <span className="absolute left-4 top-2.5 text-slate-400 text-sm">
                  📞
                </span>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  maxLength={15}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue-500 bg-white text-sm text-slate-800 transition-all"
                  placeholder="e.g. 98765 43210"
                />
              </div>
            </div>

            {/* Industry selector */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                Choose Industry Template
              </label>
              <div className="grid grid-cols-4 gap-2">
                {INDUSTRIES.map((ind) => {
                  const IndIcon = ind.icon;
                  const isSelected = industry.id === ind.id;
                  return (
                    <button
                      key={ind.id}
                      onClick={() => handleIndustryChange(ind)}
                      type="button"
                      className={`flex flex-col items-center justify-center py-2.5 px-1.5 rounded-xl border text-center transition-all ${
                        isSelected 
                          ? "border-brand-blue-500 bg-brand-blue-50/70 text-brand-blue-600 font-medium" 
                          : "border-slate-100 hover:border-slate-300 text-slate-500 bg-slate-50/50"
                      }`}
                    >
                      <IndIcon className="w-5 h-5 mb-1.5" />
                      <span className="text-[10px] leading-tight truncate w-full">{ind.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Visualizer Frame */}
        <div className="lg:col-span-7 flex flex-col items-center justify-center bg-slate-100/60 rounded-2xl p-6 md:p-10 border border-slate-200/50 relative overflow-hidden min-h-[380px]">
          {/* Parallax background grid */}
          <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
          
          {/* Toggle View */}
          <div className="absolute top-4 right-4 z-10 flex bg-white p-1 rounded-full border border-slate-200/80 shadow-sm text-xs font-semibold">
            <button
              onClick={() => setShowAd(false)}
              className={`px-3 py-1.5 rounded-full transition-all ${
                !showAd 
                  ? "bg-slate-900 text-white" 
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              Plain Auto
            </button>
            <button
              onClick={() => setShowAd(true)}
              className={`px-3 py-1.5 rounded-full transition-all flex items-center gap-1 ${
                showAd 
                  ? "bg-brand-blue-600 text-white shadow-sm" 
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              With Ad <span className="text-[9px] bg-amber-400 text-slate-950 px-1.5 py-0.5 rounded-full">₹150</span>
            </button>
          </div>

          {/* Auto Rickshaw Image with Mockup Overlay */}
          <div className="relative w-full max-w-[320px] md:max-w-[340px] aspect-[768/1024] rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-white select-none">
            
            {/* The real auto-rickshaw photo */}
            <img
              src="/auto-back.jpg"
              alt="Auto Rickshaw Mockup"
              className="w-full h-full object-cover"
            />

            {/* AD POSTER BOARD OVERLAY (Mounted on the back) */}
            {showAd && (
              <div 
                className="absolute transition-all duration-300"
                style={{
                  top: "18.8%",
                  left: "13%",
                  width: "74%",
                  height: "30.5%",
                }}
              >
                <div className={`w-full h-full ${adColor} p-2 md:p-3 flex flex-col justify-between items-center text-white transition-all duration-500 relative rounded-sm shadow-inner`}>
                  
                  {/* Decorative border */}
                  <div className="absolute inset-0.5 border border-white/20 rounded pointer-events-none" />

                  {/* Ad Header with Icon */}
                  <div className="flex items-center gap-1.5 w-full justify-center">
                    <IconComponent className="w-3.5 h-3.5 text-white drop-shadow-md" />
                    <span className="font-extrabold text-[10px] md:text-[12px] uppercase tracking-wider truncate drop-shadow-sm text-center leading-none">
                      {businessName || "Your Brand"}
                    </span>
                  </div>

                  {/* Slogan */}
                  <div className="w-full text-center">
                    <p className="text-[7.5px] md:text-[9px] font-medium leading-tight text-white/95 truncate tracking-wide italic px-1 drop-shadow-sm">
                      &ldquo;{slogan || "Your advertising message"}&rdquo;
                    </p>
                  </div>

                  {/* Footer: Phone/Call CTA */}
                  <div className="w-full flex items-center justify-between border-t border-white/20 pt-1 mt-0.5 text-[7px] md:text-[8px]">
                    <span className="font-semibold bg-white/15 px-1.5 py-0.5 rounded leading-none">
                      📍 N&C REACH
                    </span>
                    <span className="font-bold flex items-center gap-0.5 bg-slate-950/20 px-1.5 py-0.5 rounded leading-none">
                      📞 {phone || "98765 43210"}
                    </span>
                  </div>
                  
                </div>
              </div>
            )}
            
          </div>

          {/* Ad Stats Overlay */}
          <div className="mt-6 flex flex-wrap gap-4 justify-center relative z-10">
            <div className="bg-white/80 backdrop-blur px-4 py-2 rounded-xl text-center border border-slate-200/60 shadow-sm">
              <span className="text-[10px] text-slate-500 font-bold uppercase block tracking-wider">
                Daily Views
              </span>
              <span className="text-sm font-bold text-slate-800">
                2,500+ Impressions
              </span>
            </div>
            <div className="bg-white/80 backdrop-blur px-4 py-2 rounded-xl text-center border border-slate-200/60 shadow-sm">
              <span className="text-[10px] text-slate-500 font-bold uppercase block tracking-wider">
                Campaign Term
              </span>
              <span className="text-sm font-bold text-slate-800">
                14 Days (2 weeks)
              </span>
            </div>
            <div className="bg-white/80 backdrop-blur px-4 py-2 rounded-xl text-center border border-slate-200/60 shadow-sm">
              <span className="text-[10px] text-slate-500 font-bold uppercase block tracking-wider">
                Cost Per Auto
              </span>
              <span className="text-sm font-bold text-slate-800 text-brand-blue-600">
                ₹150 Flat
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
