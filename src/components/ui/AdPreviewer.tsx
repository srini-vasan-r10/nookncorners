"use client";

import React, { useState, useEffect } from "react";
import { 
  Utensils, Dumbbell, HeartPulse, Scissors, GraduationCap, 
  Store, Building2, Sparkles, Lightbulb, Check, HelpCircle, 
  ArrowRight, Settings, Loader2, RefreshCw
} from "lucide-react";

export const INDUSTRIES = [
  { id: "retail", label: "Supermarket", icon: Store, defaultSlogan: "Best Deals in Madurai", defaultColor: "bg-amber-500", tip: "Yellow/Amber has maximum contrast and readability on Madurai streets." },
  { id: "food", label: "Restaurant", icon: Utensils, defaultSlogan: "Delicious Food, Fast Delivery", defaultColor: "bg-orange-500", tip: "Warm colors like Orange stimulate appetite and stand out at night." },
  { id: "gym", label: "Fitness/Gym", icon: Dumbbell, defaultSlogan: "Transform Your Body Today", defaultColor: "bg-red-650", defaultColorClass: "bg-red-600", tip: "Red is aggressive and attention-grabbing—perfect for fitness campaigns." },
  { id: "health", label: "Clinic/Hospital", icon: HeartPulse, defaultSlogan: "24/7 Quality Healthcare", defaultColor: "bg-teal-600", tip: "Teal and Green represent safety, trust, and cleanliness in medical services." },
  { id: "salon", label: "Salon/Spa", icon: Scissors, defaultSlogan: "Premium Styling & Care", defaultColor: "bg-pink-500", tip: "Pink and Purple shades are highly effective for lifestyle and beauty brands." },
  { id: "education", label: "Coaching/School", icon: GraduationCap, defaultSlogan: "Admissions Open for 2026", defaultColor: "bg-indigo-650", defaultColorClass: "bg-indigo-600", tip: "Deep Blue and Indigo represent academic excellence, structure, and reliability." },
  { id: "realestate", label: "Real Estate", icon: Building2, defaultSlogan: "Premium Plots & Villas", defaultColor: "bg-blue-600", tip: "Royal blue is premium, representing corporate security and high-value properties." },
];

interface AdPreviewerProps {
  businessName: string;
  setBusinessName: (val: string) => void;
  slogan: string;
  setSlogan: (val: string) => void;
  phone: string;
  setPhone: (val: string) => void;
  industry: typeof INDUSTRIES[0];
  setIndustry: (val: typeof INDUSTRIES[0]) => void;
  adColor: string;
  setAdColor: (val: string) => void;
}

export default function AdPreviewer({
  businessName,
  setBusinessName,
  slogan,
  setSlogan,
  phone,
  setPhone,
  industry,
  setIndustry,
  adColor,
  setAdColor
}: AdPreviewerProps) {
  const [showAd, setShowAd] = useState(true);
  const [typingText, setTypingText] = useState("");
  
  // AI Settings State (stored in browser localstorage)
  const [apiKey, setApiKey] = useState("");
  const [selectedModel, setSelectedModel] = useState("meta-llama/llama-3.3-70b-instruct:free");
  const [showSettings, setShowSettings] = useState(false);
  const [isLoadingAi, setIsLoadingAi] = useState(false);
  const [aiResponse, setAiResponse] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setApiKey(localStorage.getItem("nc_openrouter_key") || "");
      setSelectedModel(localStorage.getItem("nc_openrouter_model") || "meta-llama/llama-3.3-70b-instruct:free");
    }
  }, []);

  const saveSettings = (key: string, model: string) => {
    const trimmed = key.trim();
    setApiKey(trimmed);
    setSelectedModel(model);
    if (typeof window !== "undefined") {
      localStorage.setItem("nc_openrouter_key", trimmed);
      localStorage.setItem("nc_openrouter_model", model);
    }
  };

  // Welcome static guide message
  const welcomeMessage = "Vanakkam! I'm Vani, your N&C Campaign Guide. 🛺 Fill in your business name, catchphrase, and phone number below to design your banner. Click the 🔄 icon next to my name to consult the AI for a real-time design review!";

  // Fetch feedback from OpenRouter if Key is present
  const fetchAiFeedback = async () => {
    const trimmedKey = apiKey.trim();
    if (!trimmedKey) {
      setAiResponse("Please configure your OpenRouter API key in the settings panel below to consult the AI guide!");
      return;
    }
    
    setIsLoadingAi(true);
    try {
      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${trimmedKey}`,
          "HTTP-Referer": "https://srini-vasan-r10.github.io/nookncorners/",
          "X-Title": "N&C Campaign Assistant",
        },
        body: JSON.stringify({
          model: selectedModel,
          messages: [
            {
              role: "system",
              content: `You are Vani, a friendly local campaign guide for N&C (nook & corner) transit ads in Madurai.
              Analyze the user's ad layout and give a constructive, super-short (max 2 sentences) review or tip.
              Mention Madurai roads, traffic spots (like Goripalayam, Simmakkal, Periyar), or local motorists looking at the banner if relevant.
              Always write in a warm, welcoming tone. Speak as Vani.`
            },
            {
              role: "user",
              content: `Please analyze my current N&C ad details:
              - Business Name: "${businessName || "Not set"}"
              - Slogan/Offer: "${slogan || "Not set"}"
              - Phone: "${phone || "Not set"}"
              - Category: "${industry.label}"

              How can I optimize this layout for maximum high-contrast visibility on Madurai roads?`
            }
          ]
        })
      });

      const data = await response.json();
      
      if (data.error) {
        setAiResponse(`OpenRouter Error: ${data.error.message || JSON.stringify(data.error)}`);
        return;
      }

      const text = data.choices?.[0]?.message?.content;
      if (text) {
        setAiResponse(text);
      } else {
        setAiResponse("Unable to retrieve AI advice. Check your OpenRouter key.");
      }
    } catch (err) {
      console.error(err);
      setAiResponse("Failed to connect to OpenRouter. Check your network or API token.");
    } finally {
      setIsLoadingAi(false);
    }
  };

  // Handle typing display text using direct substring slicing to avoid state race conditions
  useEffect(() => {
    let index = 1;
    const baseMessage = aiResponse || welcomeMessage;
    setTypingText(baseMessage.slice(0, 1));
    
    const interval = setInterval(() => {
      if (index < baseMessage.length) {
        setTypingText(baseMessage.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 8);
    return () => clearInterval(interval);
  }, [aiResponse]);

  const handleIndustrySelect = (ind: typeof INDUSTRIES[0]) => {
    setIndustry(ind);
    setAdColor(ind.defaultColorClass || ind.defaultColor);
    setSlogan(ind.defaultSlogan);
  };

  const IconComponent = industry.icon;

  return (
    <div className="w-full max-w-6xl mx-auto glass-card rounded-3xl overflow-hidden p-6 md:p-10 border border-slate-200/80">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Control Panel & Onboarding Assistant */}
        <div className="lg:col-span-6 flex flex-col justify-between bg-slate-900 text-white rounded-2xl border border-slate-950 p-6 shadow-xl relative overflow-hidden">
          {/* Subtle background gradient glow */}
          <div className="absolute -top-12 -left-12 w-40 h-40 bg-brand-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="space-y-5 z-10 relative">
            
            {/* Header / Guide Title */}
            <div className="flex justify-between items-center border-b border-slate-800/80 pb-3">
              <div className="flex gap-1.5 items-center">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block animate-pulse" />
                <span className="text-[11px] uppercase tracking-widest text-slate-400 font-bold">
                  Campaign Assistant
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowSettings(!showSettings)}
                  className={`p-1.5 rounded-lg border border-slate-800 hover:bg-slate-800 transition-colors ${
                    apiKey ? "text-emerald-400" : "text-slate-400"
                  }`}
                  title="Configure OpenRouter AI"
                >
                  <Settings className="w-3.5 h-3.5" />
                </button>
                <span className="text-xs font-bold text-amber-400 bg-amber-400/15 px-2 py-0.5 rounded-md">
                  Vani Guide
                </span>
              </div>
            </div>

            {/* AI CONFIG DRAWER */}
            {showSettings && (
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                <h5 className="text-[11px] font-black uppercase tracking-wider text-slate-300">
                  ⚙️ OpenRouter API Settings
                </h5>
                <div className="space-y-1">
                  <label className="text-[9px] text-slate-500 uppercase font-bold block">OpenRouter API Key</label>
                  <input
                    type="password"
                    value={apiKey}
                    onChange={(e) => saveSettings(e.target.value, selectedModel)}
                    placeholder="sk-or-v1-..."
                    className="w-full px-3 py-1.5 bg-slate-900 border border-slate-800 rounded text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[9px] text-slate-500 uppercase font-bold block">AI Model</label>
                  <select
                    value={selectedModel}
                    onChange={(e) => saveSettings(apiKey, e.target.value)}
                    className="w-full px-3 py-1.5 bg-slate-900 border border-slate-800 rounded text-xs text-white focus:outline-none"
                  >
                    <option value="meta-llama/llama-3.3-70b-instruct:free">Llama 3.3 70B (Free / High Quality)</option>
                    <option value="cohere/north-mini-code:free">Cohere North Mini Code (Free / Fast)</option>
                    <option value="google/gemma-4-31b-it:free">Gemma 4 31B IT (Free / Stable)</option>
                  </select>
                </div>
                <p className="text-[9px] text-slate-500 italic">
                  Key is saved locally in your browser's localStorage. It is never sent to our servers.
                </p>
              </div>
            )}

            {/* Guide Avatar & Bubble */}
            <div className="flex items-start gap-3">
              {/* Avatar circle */}
              <div className="relative flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-400 to-amber-300 flex items-center justify-center font-bold text-slate-950 shadow-md">
                  👩‍💼
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border border-slate-900" />
              </div>
              
              {/* Chat Bubble */}
              <div className="bg-slate-800/80 border border-slate-700/50 p-4 rounded-2xl rounded-tl-none text-slate-200 text-xs md:text-sm leading-relaxed shadow-sm min-h-[70px] flex-1 relative group">
                <span className="font-bold text-[10px] text-amber-400 uppercase tracking-wider block mb-1 flex items-center justify-between">
                  <span>Vani (N&C Guide)</span>
                  <div className="flex items-center gap-1.5">
                    {isLoadingAi && (
                      <span className="flex items-center gap-1 text-[9px] text-slate-400 lowercase font-normal italic">
                        <Loader2 className="w-2.5 h-2.5 animate-spin" /> consulting AI...
                      </span>
                    )}
                    <button
                      onClick={fetchAiFeedback}
                      disabled={isLoadingAi}
                      className="p-1 rounded bg-slate-900 hover:bg-slate-950 border border-slate-700 text-amber-400 transition-colors flex items-center gap-1 text-[10px] font-bold"
                      title="Consult Vani for layout analysis"
                    >
                      <RefreshCw className={`w-3 h-3 ${isLoadingAi ? "animate-spin" : ""}`} />
                      <span>Consult AI</span>
                    </button>
                  </div>
                </span>
                {typingText}
              </div>
            </div>

            {/* UNIFIED OPTIONS FORM - Single Spot Editor */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 space-y-4">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Option 1: Business Name */}
                <div className="space-y-1.5">
                  <label className="block text-[9px] font-bold text-slate-400 uppercase tracking-wider">
                    Business Name
                  </label>
                  <input
                    type="text"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    maxLength={26}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-800 bg-slate-900 text-white text-xs focus:outline-none focus:ring-1 focus:ring-amber-400 transition-all font-semibold"
                    placeholder="e.g. Kumar Jewellery"
                  />
                </div>

                {/* Option 3: Phone Number */}
                <div className="space-y-1.5">
                  <label className="block text-[9px] font-bold text-slate-400 uppercase tracking-wider">
                    WhatsApp / Call Number
                  </label>
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    maxLength={15}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-800 bg-slate-900 text-white text-xs focus:outline-none focus:ring-1 focus:ring-amber-400 transition-all font-semibold tracking-wider"
                    placeholder="e.g. 89027 20129"
                  />
                </div>
              </div>

              {/* Option 2: Slogan */}
              <div className="space-y-1.5">
                <label className="block text-[9px] font-bold text-slate-400 uppercase tracking-wider">
                  Slogan / Banner Offer text
                </label>
                <input
                  type="text"
                  value={slogan}
                  onChange={(e) => setSlogan(e.target.value)}
                  maxLength={40}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-800 bg-slate-900 text-white text-xs focus:outline-none focus:ring-1 focus:ring-amber-400 transition-all font-semibold"
                  placeholder="e.g. your brand. every nook. every corner."
                />
              </div>

              {/* Option 4: Category Select */}
              <div className="space-y-1.5">
                <label className="block text-[9px] font-bold text-slate-400 uppercase tracking-wider">
                  Choose Design Category
                </label>
                <div className="grid grid-cols-4 md:grid-cols-7 gap-1.5">
                  {INDUSTRIES.map((ind) => {
                    const IndIcon = ind.icon;
                    const isSelected = industry.id === ind.id;
                    return (
                      <button
                        key={ind.id}
                        onClick={() => handleIndustrySelect(ind)}
                        type="button"
                        className={`flex flex-col items-center justify-center py-2 px-1 rounded-lg border text-center transition-all ${
                          isSelected 
                            ? "border-amber-400 bg-amber-400/10 text-amber-400 font-bold" 
                            : "border-slate-800 hover:border-slate-700 text-slate-400 bg-slate-900"
                        }`}
                        title={ind.label}
                      >
                        <IndIcon className="w-3.5 h-3.5 mb-1" />
                        <span className="text-[8px] leading-tight truncate w-full">{ind.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* Dynamic Lightbulb Helper Tip */}
            <div className="flex gap-2 p-3 bg-amber-400/5 border border-amber-400/10 rounded-xl text-[11px] leading-relaxed text-amber-200/90 z-10 relative">
              <Lightbulb className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-amber-400 block mb-0.5">Tip:</span>
                {industry.tip}
              </div>
            </div>

          </div>

          {/* Navigation Controls */}
          <div className="flex gap-3 pt-4 border-t border-slate-800/80 mt-5 z-10 relative">
            <a
              href="#booking-calculator"
              className="flex-1 flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl bg-brand-blue-600 hover:bg-brand-blue-700 text-white transition-all font-bold text-xs shadow-md"
            >
              Calculate Budget & Book <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Right Photorealistic Mockup Frame */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center bg-slate-100/60 rounded-2xl p-4 md:p-8 border border-slate-200/50 relative overflow-hidden min-h-[380px]">
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
              With Ad <span className="text-[9px] bg-amber-400 text-slate-950 px-1.5 py-0.5 rounded-full font-bold">₹150</span>
            </button>
          </div>

          {/* Auto Rickshaw Image with Photorealistic Mockup Overlay */}
          <div className="relative w-full max-w-[300px] md:max-w-[320px] aspect-[768/1024] rounded-2xl overflow-hidden shadow-xl border border-slate-300 bg-white select-none transition-all">
            
            {/* The real auto-rickshaw photo */}
            <img
              src="/nookncorners/auto-back.jpg"
              alt="Auto Rickshaw Mockup"
              className="w-full h-full object-cover"
            />

            {/* PHOTOREALISTIC AD POSTER OVERLAY (Mounted on the back) */}
            {showAd && (
              <div 
                className="absolute transition-all duration-300 overflow-hidden"
                style={{
                  top: "18.6%",
                  left: "12.8%",
                  width: "74.4%",
                  height: "30.8%",
                  borderRadius: "5px",
                  boxShadow: "inset 0 3px 8px rgba(0,0,0,0.5), 0 1px 3px rgba(0,0,0,0.1)",
                }}
              >
                {/* Vinyl texture & reflection gloss overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none z-10 mix-blend-overlay" />
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/20 z-10" />
                
                {/* The actual ad poster content */}
                <div className={`w-full h-full ${adColor} p-2 md:p-3 flex flex-col justify-between items-center text-white transition-all duration-500 relative`}>
                  
                  {/* Decorative inner dotted border */}
                  <div className="absolute inset-1 border border-white/20 border-dashed rounded pointer-events-none" />

                  {/* Header Badge */}
                  <div className="flex items-center gap-1 bg-black/15 px-2 py-0.5 rounded-full text-[7px] md:text-[8px] uppercase tracking-wider font-extrabold border border-white/10">
                    <IconComponent className="w-2.5 h-2.5" />
                    <span>{industry.label}</span>
                  </div>

                  {/* Main Business Name */}
                  <div className="text-center w-full px-1">
                    <h4 className="font-black text-[12px] md:text-[14px] leading-none uppercase tracking-wide drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,0.5)] truncate">
                      {businessName || "Your Brand"}
                    </h4>
                  </div>

                  {/* Slogan with Call to Action */}
                  <div className="w-full text-center">
                    <p className="text-[7.5px] md:text-[9.5px] font-bold leading-tight text-amber-300 drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)] truncate italic">
                      &ldquo;{slogan || "your brand. every nook. every corner."}&rdquo;
                    </p>
                  </div>

                  {/* Footer Bar */}
                  <div className="w-full flex items-center justify-between border-t border-white/15 pt-1 mt-0.5 text-[6.5px] md:text-[8px] font-bold text-white/90">
                    <span className="bg-white/15 px-1.5 py-0.5 rounded-sm">
                      📍 N&C NETWORK
                    </span>
                    <span className="flex items-center gap-0.5 bg-black/20 px-1.5 py-0.5 rounded-sm">
                      📞 {phone || "98765 43210"}
                    </span>
                  </div>

                </div>
              </div>
            )}
            
          </div>

          {/* Ad Stats Overlay */}
          <div className="mt-6 flex flex-wrap gap-3 justify-center relative z-10">
            <div className="bg-white/80 backdrop-blur px-3 py-1.5 rounded-xl text-center border border-slate-200/60 shadow-sm text-xs">
              <span className="text-[9px] text-slate-500 font-bold uppercase block tracking-wider leading-none mb-1">
                Daily Views
              </span>
              <span className="font-bold text-slate-800">
                2,500+ Impressions
              </span>
            </div>
            <div className="bg-white/80 backdrop-blur px-3 py-1.5 rounded-xl text-center border border-slate-200/60 shadow-sm text-xs">
              <span className="text-[9px] text-slate-500 font-bold uppercase block tracking-wider leading-none mb-1">
                Term
              </span>
              <span className="font-bold text-slate-800">
                14 Days (2 weeks)
              </span>
            </div>
            <div className="bg-white/80 backdrop-blur px-3 py-1.5 rounded-xl text-center border border-slate-200/60 shadow-sm text-xs">
              <span className="text-[9px] text-slate-500 font-bold uppercase block tracking-wider leading-none mb-1">
                Cost Per Auto
              </span>
              <span className="font-bold text-brand-blue-600">
                ₹150 Flat
              </span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
