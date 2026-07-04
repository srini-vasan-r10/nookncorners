"use client";

import React, { useState, useEffect } from "react";
import { Calculator, MessageSquare, Info, Calendar, Sparkles } from "lucide-react";

interface CampaignCalculatorProps {
  businessName: string;
  setBusinessName: (val: string) => void;
  phoneNumber: string;
  setPhoneNumber: (val: string) => void;
  slogan: string;
}

export default function CampaignCalculator({
  businessName,
  setBusinessName,
  phoneNumber,
  setPhoneNumber,
  slogan
}: CampaignCalculatorProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const [autoCount, setAutoCount] = useState(5);
  const [targetArea, setTargetArea] = useState("Mattuthavani");
  const [contactName, setContactName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const pricePerAuto = 150; // ₹150
  const durationWeeks = 2; // 2 weeks
  const dailyImpressionsPerAuto = 2500;

  const totalCost = autoCount * pricePerAuto;
  const totalDailyViews = autoCount * dailyImpressionsPerAuto;
  const totalCampaignViews = totalDailyViews * 14;

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const hostPhone = "918903720129";
    const textMsg = `Hi TransitAds Madurai! 👋 
I'd like to book an auto campaign. Here are my details:
🏢 Business Name: ${businessName || "Not provided"}
👤 Contact Person: ${contactName || "Not provided"}
📞 Phone: ${phoneNumber}
✉️ Email: ${emailAddress || "Not provided"}
🛺 Rickshaw Count: ${autoCount} Auto(s)
📍 Targeted Area: ${targetArea}
📅 Duration: 2 Weeks (14 Days)
💰 Estimate Total: ₹${totalCost}

Please confirm my booking and share the design guidelines.`;

    const waUrl = `https://wa.me/${hostPhone}?text=${encodeURIComponent(textMsg)}`;
    
    // Redirect after a brief simulation delay
    setTimeout(() => {
      setIsSubmitting(false);
      window.open(waUrl, "_blank");
    }, 800);
  };

  return (
    <div id="booking-calculator" className="w-full max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      
      {/* Left: Interactive Cost Slider & Package Details */}
      <div className="lg:col-span-6 bg-white border border-slate-200/80 shadow-sm rounded-3xl p-6 md:p-8 space-y-6">
        
        {/* Header */}
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-amber-100 text-amber-800">
            <Calculator className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-xl font-bold text-slate-900 tracking-tight">Campaign Planner</h4>
            <p className="text-slate-500 text-xs">Estimate your reach and advertising budget.</p>
          </div>
        </div>

        {/* Flat Price Display */}
        <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 flex justify-between items-center">
          <div className="space-y-1">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Flat Rate Plan</span>
            <span className="text-lg font-extrabold text-slate-800">₹150 <span className="text-xs font-normal text-slate-500">per auto</span></span>
          </div>
          <div className="flex items-center gap-1 bg-amber-50 text-amber-800 px-3 py-1 rounded-full text-xs font-bold border border-amber-200">
            <Calendar className="w-3.5 h-3.5" /> 2 Weeks Run
          </div>
        </div>

        {/* Auto Slider */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <label className="text-sm font-semibold text-slate-700">Number of Rickshaws</label>
            <span className="text-2xl font-black text-brand-blue-600 bg-brand-blue-50 px-3.5 py-1 rounded-xl">
              {autoCount} <span className="text-xs font-medium text-slate-500">Autos</span>
            </span>
          </div>
          
          <input
            type="range"
            min="1"
            max="50"
            value={autoCount}
            onChange={(e) => setAutoCount(parseInt(e.target.value))}
            className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-brand-blue-600 focus:outline-none"
          />

          <div className="flex justify-between text-[10px] text-slate-400 font-semibold px-1">
            <span>1 Auto</span>
            <span>10 Autos</span>
            <span>25 Autos</span>
            <span>50 Autos</span>
          </div>
        </div>

        {/* Live Estimator Output */}
        <div className="grid grid-cols-2 gap-4 pt-2">
          
          <div className="p-4 bg-slate-50/50 rounded-2xl border border-slate-100 text-center">
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Daily Reach</span>
            <span className="text-lg font-bold text-slate-800 mt-1 block">
              {mounted ? totalDailyViews.toLocaleString() : totalDailyViews}+
            </span>
            <span className="text-[10px] text-slate-500">Local Impressions</span>
          </div>

          <div className="p-4 bg-slate-50/50 rounded-2xl border border-slate-100 text-center">
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Total Views</span>
            <span className="text-lg font-bold text-slate-800 mt-1 block">
              {mounted ? totalCampaignViews.toLocaleString() : totalCampaignViews}+
            </span>
            <span className="text-[10px] text-slate-500">Over 14 Days</span>
          </div>
          
        </div>

        {/* What's Included */}
        <div className="space-y-3 pt-2">
          <h5 className="text-xs font-bold text-slate-400 uppercase tracking-widest">What's Included:</h5>
          <ul className="space-y-2 text-xs text-slate-600">
            <li className="flex items-center gap-2">
              <span className="text-emerald-500">✔</span> Professional mounting and auto installation (24&quot; x 14&quot; board)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-emerald-500">✔</span> Active fleet driver coordination (Printing costs borne by client)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-emerald-500">✔</span> Live tracking photo proof of installation sent on WhatsApp
            </li>
            <li className="flex items-center gap-2">
              <span className="text-emerald-500">✔</span> Clean banner removal after 2 weeks
            </li>
          </ul>
        </div>

      </div>

      {/* Right: Booking Form */}
      <div className="lg:col-span-6 bg-slate-900 border border-slate-950 text-white rounded-3xl p-6 md:p-8 space-y-6 relative overflow-hidden">
        
        {/* Soft background glow */}
        <div className="absolute top-0 right-0 w-44 h-44 bg-brand-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex items-center gap-2">
          <span className="bg-amber-400 text-slate-900 px-2 py-0.5 rounded-md text-[10px] font-black uppercase tracking-wider">
            Step 2
          </span>
          <h4 className="text-lg font-bold">Secure Your Ad Slots</h4>
        </div>

        <form onSubmit={handleBooking} className="space-y-4">
          
          {/* Business Name */}
          <div>
            <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-2">
              Business / Shop Name *
            </label>
            <input
              type="text"
              required
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-800 bg-slate-950/80 text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all"
              placeholder="e.g. Madurai Biryani Centre"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Contact Person */}
            <div>
              <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-2">
                Your Name *
              </label>
              <input
                type="text"
                required
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-800 bg-slate-950/80 text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all"
                placeholder="e.g. Ramesh Kumar"
              />
            </div>

            {/* Target Area dropdown */}
            <div>
              <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-2">
                Preferred Area
              </label>
              <select
                value={targetArea}
                onChange={(e) => setTargetArea(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-800 bg-slate-950/80 text-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all"
              >
                <option value="Mattuthavani">Mattuthavani</option>
                <option value="Periyar / Town">Periyar Bus Stand</option>
                <option value="Goripalayam">Goripalayam</option>
                <option value="Kalavasal">Kalavasal</option>
                <option value="Anna Nagar">Anna Nagar</option>
                <option value="Teppakulam">Teppakulam</option>
                <option value="K. Pudur">K. Pudur</option>
                <option value="All Over Madurai">All Over Madurai</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Phone Number */}
            <div>
              <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-2">
                WhatsApp Number *
              </label>
              <input
                type="tel"
                required
                pattern="[0-9]{10}"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-800 bg-slate-950/80 text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all"
                placeholder="e.g. 9876543210"
              />
            </div>

            {/* Email Address */}
            <div>
              <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={emailAddress}
                onChange={(e) => setEmailAddress(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-800 bg-slate-950/80 text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all"
                placeholder="e.g. shop@gmail.com"
              />
            </div>
          </div>

          {/* Pricing Summary Block */}
          <div className="bg-slate-950 border border-slate-800 p-4 rounded-2xl flex justify-between items-center mt-6">
            <div>
              <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Estimated Total Cost</span>
              <span className="text-2xl font-black text-amber-400">₹{totalCost}</span>
            </div>
            <div className="text-right text-[10px] text-slate-400">
              <p>For {autoCount} Rickshaw(s)</p>
              <p>2 Weeks Campaign</p>
            </div>
          </div>

          {/* Submit CTA */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-bold bg-amber-400 hover:bg-amber-500 text-slate-950 transition-all duration-200 hover:scale-[1.01] shadow-lg disabled:opacity-50"
          >
            {isSubmitting ? (
              <span className="animate-pulse">Formatting booking proposal...</span>
            ) : (
              <>
                <MessageSquare className="w-5 h-5 fill-current" /> Book Campaign on WhatsApp
              </>
            )}
          </button>
          
          <div className="flex justify-center items-center gap-1.5 text-[10px] text-slate-400 pt-2 text-center">
            <Info className="w-3.5 h-3.5" />
            <span>Redirects to WhatsApp business chat. No payment required upfront.</span>
          </div>

        </form>

      </div>
      
    </div>
  );
}
