"use client";

import React, { useState } from "react";
import { 
  CheckCircle2, Compass, ArrowRight, Star, ChevronDown, 
  HelpCircle, Phone, Mail, MapPin, ShieldCheck, Zap, 
  Sparkles, Award, Users, Image as ImageIcon, Flame 
} from "lucide-react";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import AdPreviewer from "@/components/ui/AdPreviewer";
import MapComponent from "@/components/ui/MapComponent";
import CampaignCalculator from "@/components/ui/CampaignCalculator";

// Logo list for the running ticker
const LOCAL_BUSINESS_CATEGORIES = [
  "Local Restaurants", "Dental Clinics", "Fitness Gyms", "Beauty Salons", 
  "Coaching Academies", "Supermarkets", "Jewellery Stores", "Real Estate Promoters",
  "Apparel Boutiques", "Diagnostics Labs", "Furniture Showrooms", "Sweets & Bakeries"
];

// Testimonials data
const TESTIMONIALS = [
  {
    quote: "We placed banners on 5 autos around Anna Nagar for our gym opening. Starting at just ₹750, we got over 40 walk-ins in the first week. Outstanding local reach!",
    author: "Ranjith Kumar",
    business: "Owner, Steel & Iron Gym",
    location: "Anna Nagar, Madurai",
    stars: 5,
  },
  {
    quote: "For clinics, visibility is everything. TransitAds placed our banners on routes leading to the hospital. The proof photo they sent on WhatsApp gave us peace of mind.",
    author: "Dr. Deepa R.",
    business: "Chief Dentist, Mathi Dental Care",
    location: "K. Pudur, Madurai",
    stars: 5,
  },
  {
    quote: "Very simple and budget-friendly. We didn't have to spend thousands on newspaper ads. ₹150 for 2 weeks per auto is perfect for small sweet shops like ours.",
    author: "M. Sethupathi",
    business: "Manager, Meenakshi Sweets & Snacks",
    location: "Simmakkal, Madurai",
    stars: 5,
  },
];

// FAQ items
const FAQS = [
  {
    question: "How much does it cost to advertise?",
    answer: "It costs just ₹150 flat per auto-rickshaw for a 2-week campaign. This covers driver coordination, installation, mounting, and monitoring. Please note that flex printing expenses are borne by the client.",
  },
  {
    question: "How do I know my ad is actually on the auto?",
    answer: "Once your campaign is launched, we send you a geotagged proof photo of each auto-rickshaw with your banner installed, showing the auto's registration number (TN 59 xx xxxx) directly to your WhatsApp or email.",
  },
  {
    question: "What is the size of the auto advertisement banner?",
    answer: "The standard advertisement banner size is 24 inches wide by 14 inches high (2 feet x 1.1 feet). You can print your design on weather-resistant flex, and we will mount it securely on the rear panel board of the auto-rickshaw.",
  },
  {
    question: "Can I choose which areas in Madurai the autos will drive?",
    answer: "Yes! You can specify your preferred target areas (like Mattuthavani, Periyar, Kalavasal, Anna Nagar, K.Pudur, etc.) during booking. We will coordinate with auto drivers who regularly operate in those specific neighborhoods.",
  },
  {
    question: "Do you design the advertisement banner for us?",
    answer: "Yes, we help you prepare the design layout with your name, phone, and logo for free! Once the design is ready, we guide you on getting it printed (borne by you), and we handle the installation.",
  },
  {
    question: "How do I pay and start my campaign?",
    answer: "You can book by planning your campaign on our calculator and clicking 'Book on WhatsApp'. Our team will contact you to collect your design requirements, after which you can pay securely via UPI (GPay/PhonePe/Paytm) once the design is finalized.",
  },
];

export default function LandingPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="flex-1 bg-slate-50 overflow-x-hidden">
      {/* Sticky Header */}
      <header className="sticky top-0 z-40 w-full glass-nav backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-amber-400 rounded-lg flex items-center justify-center font-black text-slate-900 shadow-sm">
              🛺
            </div>
            <span className="text-md sm:text-lg font-black tracking-tight text-slate-900">
              N&C <span className="text-brand-blue-500">(nook & corner)</span>
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-slate-600">
            <a href="#how-it-works" className="hover:text-brand-blue-600 transition-colors">How It Works</a>
            <a href="#benefits" className="hover:text-brand-blue-600 transition-colors">Benefits</a>
            <a href="#coverage-map" className="hover:text-brand-blue-600 transition-colors">Coverage Map</a>
            <a href="#ad-customizer" className="hover:text-brand-blue-600 transition-colors">Ad Previewer</a>
            <a href="#faq" className="hover:text-brand-blue-600 transition-colors">FAQ</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="tel:+918903720129"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200/80 px-3.5 py-2 rounded-xl transition-all"
            >
              <Phone className="w-3.5 h-3.5" /> Call Us
            </a>
            <a
              href="#booking-calculator"
              className="inline-flex items-center gap-1 text-xs font-bold text-white bg-slate-900 hover:bg-brand-blue-600 px-4 py-2 rounded-xl transition-all shadow-sm"
            >
              Start My Campaign <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white pt-16 pb-24 md:py-32 overflow-hidden">
        {/* Soft decorative radial gradients */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-brand-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Copy Panel */}
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-400/10 text-amber-400 border border-amber-400/20">
                <Flame className="w-3.5 h-3.5 text-amber-400 animate-pulse" /> Hyperlocal Moving Advertisements
              </span>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1] font-sans">
                Put Your Business on the <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-300">Streets of Madurai</span>.
              </h1>
              
              <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
                <span className="text-amber-400 font-semibold block mb-1">your brand. every nook. every corner.</span>
                Reach thousands of people every day through moving auto advertisements starting at just <span className="text-amber-400 font-extrabold text-xl">₹150</span> for 2 weeks.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-2">
                <a
                  href="#booking-calculator"
                  className="px-6 py-3.5 bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold rounded-xl text-center shadow-lg transition-all duration-200 hover:scale-[1.01]"
                >
                  Start My Campaign
                </a>
                <a
                  href="#benefits"
                  className="px-6 py-3.5 bg-slate-800 hover:bg-slate-700/80 border border-slate-700/60 text-white font-bold rounded-xl text-center transition-all duration-200"
                >
                  See Benefits
                </a>
              </div>

              {/* Quick Trust Badges */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-800/80 max-w-md mx-auto lg:mx-0">
                <div>
                  <span className="block text-2xl font-black text-amber-400">₹150</span>
                  <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Flat Campaign</span>
                </div>
                <div>
                  <span className="block text-2xl font-black text-white">2,500+</span>
                  <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Daily Views/Auto</span>
                </div>
                <div>
                  <span className="block text-2xl font-black text-white">100%</span>
                  <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">WhatsApp Proof</span>
                </div>
              </div>
            </div>

            {/* Right Interactive/Animated Art Board */}
            <div className="lg:col-span-6 flex flex-col justify-center items-center relative min-h-[300px] md:min-h-[400px] select-none">
              
              {/* SKYLINE & RADIAL SUNSET BACKGROUND */}
              <div className="w-full max-w-[460px] h-[320px] rounded-3xl bg-gradient-to-b from-slate-900 via-slate-850 to-slate-950 border border-slate-800/60 shadow-2xl relative overflow-hidden flex flex-col justify-end">
                
                {/* Floating location pins with views badges */}
                <div className="absolute top-12 left-16 animate-float z-20 flex items-center gap-1.5 bg-slate-950/80 backdrop-blur px-2.5 py-1 rounded-full border border-slate-800 text-[10px] text-amber-400 font-bold">
                  <MapPin className="w-3.5 h-3.5 text-amber-400 fill-current" /> Anna Nagar
                </div>

                <div className="absolute top-24 right-10 animate-float-delayed z-20 flex items-center gap-1.5 bg-slate-950/80 backdrop-blur px-2.5 py-1 rounded-full border border-slate-800 text-[10px] text-sky-400 font-bold">
                  <MapPin className="w-3.5 h-3.5 text-sky-400 fill-current" /> Mattuthavani
                </div>

                {/* TEMPLE GOPURAM SILHOUETTES (Representing Madurai) */}
                <div className="absolute bottom-12 left-0 right-0 h-40 flex justify-center items-end gap-6 px-8 z-10 pointer-events-none opacity-45">
                  {/* Left Gopuram (Small) */}
                  <svg className="w-20 h-28 fill-slate-800" viewBox="0 0 100 150">
                    <path d="M 30,150 L 32,120 L 36,120 L 38,90 L 42,90 L 44,60 L 47,60 L 49,30 L 51,30 L 53,60 L 56,60 L 58,90 L 62,90 L 64,120 L 68,120 L 70,150 Z" />
                    <line x1="50" y1="30" x2="50" y2="10" stroke="currentColor" strokeWidth="2" />
                  </svg>

                  {/* Center Gopuram (Large Meenakshi Temple) */}
                  <svg className="w-32 h-40 fill-slate-800" viewBox="0 0 100 150">
                    <path d="M 20,150 L 23,120 L 28,120 L 31,90 L 36,90 L 39,60 L 44,60 L 47,30 L 49,30 L 49,20 L 51,20 L 51,30 L 53,30 L 56,60 L 61,60 L 64,90 L 69,90 L 72,120 L 77,120 L 80,150 Z" />
                    <circle cx="50" cy="12" r="3" fill="#f59e0b" />
                  </svg>

                  {/* Right Gopuram (Medium) */}
                  <svg className="w-24 h-32 fill-slate-800" viewBox="0 0 100 150">
                    <path d="M 25,150 L 27,120 L 32,120 L 34,90 L 39,90 L 41,60 L 45,60 L 48,30 L 52,30 L 55,60 L 59,60 L 61,90 L 66,90 L 68,120 L 73,120 L 75,150 Z" />
                    <line x1="50" y1="30" x2="50" y2="15" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </div>

                {/* STATIC HORIZON BASE */}
                <div className="w-full h-4 bg-slate-950 border-t border-slate-800 relative z-20" />

                {/* Skyline Info Bar Overlay */}
                <div className="absolute bottom-6 left-4 z-20 flex items-center gap-1.5 bg-slate-950/80 backdrop-blur px-2.5 py-1 rounded-lg border border-slate-800 text-[10px] text-slate-300 font-bold">
                  📍 Goripalayam Bridge Crossing
                </div>

              </div>

              {/* Small caption */}
              <p className="text-slate-400 text-xs mt-4 italic text-center max-w-sm">
                Stylized illustration: High-visibility gopurams in the Madurai city skyline.
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* Social Proof / Logo Ticker */}
      <section className="bg-slate-100 py-8 border-y border-slate-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center mb-4">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            Empowering Hyperlocal Brands in Madurai
          </p>
        </div>
        <div className="relative w-full flex items-center overflow-x-hidden">
          {/* Moving track */}
          <div className="flex gap-8 md:gap-12 animate-[marquee_40s_linear_infinite] whitespace-nowrap text-slate-500 text-sm font-semibold tracking-wide">
            {LOCAL_BUSINESS_CATEGORIES.map((cat, idx) => (
              <span key={idx} className="flex items-center gap-2">
                <span className="text-amber-500">✦</span> {cat}
              </span>
            ))}
            {/* Duplicate for seamless loop */}
            {LOCAL_BUSINESS_CATEGORIES.map((cat, idx) => (
              <span key={`dup-${idx}`} className="flex items-center gap-2">
                <span className="text-amber-500">✦</span> {cat}
              </span>
            ))}
          </div>
        </div>
        {/* Simple inline keyframe definition since Tailwind custom animations can sometimes compile differently in standard CSS modules */}
        <style jsx global>{`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-slate-50 scroll-mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-brand-blue-600 bg-brand-blue-50 px-3 py-1 rounded-full uppercase tracking-wider">
              Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-4">
              4 Steps to Launch Your Campaign
            </h2>
            <p className="text-slate-500 text-sm sm:text-base mt-2">
              From designing your banner to checking the proof, we make street advertising incredibly easy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Step 1 */}
            <div className="bg-white border border-slate-200/60 shadow-sm rounded-3xl p-6 relative hover:scale-[1.02] transition-transform">
              <span className="absolute -top-4 left-6 w-8 h-8 rounded-lg bg-amber-400 text-slate-900 flex items-center justify-center font-black text-sm shadow-sm">
                1
              </span>
              <div className="pt-2">
                <h4 className="font-bold text-slate-900 text-lg">Customize Your Ad</h4>
                <p className="text-slate-500 text-xs mt-2 leading-relaxed">
                  Use our live Ad Previewer to draft your company name, slogan, and phone number, or send us your pre-made logo.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white border border-slate-200/60 shadow-sm rounded-3xl p-6 relative hover:scale-[1.02] transition-transform">
              <span className="absolute -top-4 left-6 w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center font-black text-sm shadow-sm">
                2
              </span>
              <div className="pt-2">
                <h4 className="font-bold text-slate-900 text-lg">Select Route Areas</h4>
                <p className="text-slate-500 text-xs mt-2 leading-relaxed">
                  Choose which routes (like Mattuthavani, Periyar, Kalavasal, or Anna Nagar) match your store location to target nearby buyers.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white border border-slate-200/60 shadow-sm rounded-3xl p-6 relative hover:scale-[1.02] transition-transform">
              <span className="absolute -top-4 left-6 w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center font-black text-sm shadow-sm">
                3
              </span>
              <div className="pt-2">
                <h4 className="font-bold text-slate-900 text-lg">We Mount & Coordinate</h4>
                <p className="text-slate-500 text-xs mt-2 leading-relaxed">
                  We collect your printed banner (flex printing managed by client) and mount it professionally on select auto back panels.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-white border border-slate-200/60 shadow-sm rounded-3xl p-6 relative hover:scale-[1.02] transition-transform">
              <span className="absolute -top-4 left-6 w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center font-black text-sm shadow-sm">
                4
              </span>
              <div className="pt-2">
                <h4 className="font-bold text-slate-900 text-lg">Geotagged Photo Proof</h4>
                <p className="text-slate-500 text-xs mt-2 leading-relaxed">
                  Receive actual photo proofs of your installed banners with auto-registration numbers on your WhatsApp.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Coverage Map Section */}
      <section id="coverage-map" className="py-20 bg-slate-100 border-y border-slate-200 scroll-mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold text-brand-blue-600 bg-brand-blue-100 px-3 py-1 rounded-full uppercase tracking-wider">
              Madurai Map
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">
              Hyperlocal Geographic Targeting
            </h2>
            <p className="text-slate-500 text-sm mt-2">
              Select specific neighborhood zones in Madurai to launch your auto-rickshaw ads where your target customers live and shop.
            </p>
          </div>

          <MapComponent />
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-slate-50 scroll-mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-brand-blue-600 bg-brand-blue-50 px-3 py-1 rounded-full uppercase tracking-wider">
              Benefits
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">
              Why Auto Ads Work Best for Local Shops
            </h2>
            <p className="text-slate-500 text-sm mt-2">
              Unlike static billboards that people ignore, auto advertisements move around high-congestion traffic spots, getting maximum eye-level attention.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Benefit 1 */}
            <div className="bg-white border border-slate-200/60 shadow-sm rounded-3xl p-6 space-y-4 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center">
                <Zap className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-slate-900">Extremely Low Entry Barrier</h4>
              <p className="text-slate-500 text-xs leading-relaxed">
                Starting at just ₹150 for 2 weeks, street marketing is accessible to every single shop owner, clinic, and cafe. No huge budgets needed.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-white border border-slate-200/60 shadow-sm rounded-3xl p-6 space-y-4 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-800 flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-slate-900">Eye-Level Stop & Go Traffic</h4>
              <p className="text-slate-500 text-xs leading-relaxed">
                Autos stand directly in front of motorists and pedestrians at crucial junctions like Goripalayam, Simmakkal, and Periyar, forcing engagement.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-white border border-slate-200/60 shadow-sm rounded-3xl p-6 space-y-4 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-slate-900">Professional Flex Mounting</h4>
              <p className="text-slate-500 text-xs leading-relaxed">
                Banners are mounted on high-durability boards on the auto back frame. Waterproof flex printing expenses are to be borne by the client.
              </p>
            </div>

            {/* Benefit 4 */}
            <div className="bg-white border border-slate-200/60 shadow-sm rounded-3xl p-6 space-y-4 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-800 flex items-center justify-center">
                <Compass className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-slate-900">Hyperlocal Route Locking</h4>
              <p className="text-slate-500 text-xs leading-relaxed">
                We assign your banners to autos that routinely service your target neighborhoods, ensuring your ad gets seen repeatedly in your business radius.
              </p>
            </div>

            {/* Benefit 5 */}
            <div className="bg-white border border-slate-200/60 shadow-sm rounded-3xl p-6 space-y-4 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-red-100 text-red-800 flex items-center justify-center">
                <ImageIcon className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-slate-900">Geotagged Proof on WhatsApp</h4>
              <p className="text-slate-500 text-xs leading-relaxed">
                You get WhatsApp photo proofs showing the auto registration plate and the installed banner, guaranteeing your campaign is live.
              </p>
            </div>

            {/* Benefit 6 */}
            <div className="bg-white border border-slate-200/60 shadow-sm rounded-3xl p-6 space-y-4 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-800 flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-slate-900">Dedicated Driver Network</h4>
              <p className="text-slate-500 text-xs leading-relaxed">
                Our drivers are incentivized to keep the banners clean and report daily routes. We build a premium, trusted ecosystem.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Ad Customizer Gallery Section */}
      <section id="ad-customizer" className="py-20 bg-slate-100 border-y border-slate-200 scroll-mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold text-brand-blue-600 bg-brand-blue-100 px-3 py-1 rounded-full uppercase tracking-wider">
              Interactive Preview
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">
              Design Your Rickshaw Banner
            </h2>
            <p className="text-slate-500 text-sm mt-2">
              Type your company name and contact info below to preview your high-contrast auto banner instantly.
            </p>
          </div>

          <AdPreviewer />
        </div>
      </section>

      {/* Pricing / Booking Calculator Section */}
      <section id="pricing" className="py-20 bg-slate-50 scroll-mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-brand-blue-600 bg-brand-blue-50 px-3 py-1 rounded-full uppercase tracking-wider">
              Campaign Booking
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">
              Choose Autos & Schedule
            </h2>
            <p className="text-slate-500 text-sm mt-2">
              Use the sliding scale to choose the number of auto advertisements. Book instantly on WhatsApp to activate slots.
            </p>
          </div>

          <CampaignCalculator />
        </div>
      </section>

      {/* Testimonials Section (Commented out/hidden until real testimonials are available) */}
      {false && (
        <section className="py-20 bg-slate-900 text-white scroll-mt-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full uppercase tracking-wider">
                Testimonials
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 tracking-tight">
                Trusted by Local Shops & Owners
              </h2>
              <p className="text-slate-400 text-sm mt-2">
                Read how small businesses in Madurai are boosting their local walk-ins with our transit campaigns.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {TESTIMONIALS.map((t, idx) => (
                <div key={idx} className="bg-slate-800 border border-slate-800/80 rounded-3xl p-6 flex flex-col justify-between space-y-6">
                  
                  {/* Rating stars */}
                  <div className="flex gap-1">
                    {[...Array(t.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-slate-300 text-sm leading-relaxed italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="border-t border-slate-700/60 pt-4 flex items-center justify-between">
                    <div>
                      <h5 className="font-bold text-sm text-white">{t.author}</h5>
                      <p className="text-[11px] text-slate-400">{t.business}</p>
                    </div>
                    <span className="text-[10px] bg-slate-950 px-2 py-1 rounded text-slate-400 font-semibold">
                      📍 {t.location.split(",")[0]}
                    </span>
                  </div>

                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-slate-50 scroll-mt-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-brand-blue-600 bg-brand-blue-50 px-3 py-1 rounded-full uppercase tracking-wider">
              FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-500 text-sm mt-2">
              Clear answers to help you start your auto advertising campaign smoothly.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div 
                  key={idx} 
                  className="bg-white border border-slate-200/60 rounded-2xl overflow-hidden shadow-sm transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="font-bold text-slate-800 text-sm sm:text-base flex items-center gap-2">
                      <HelpCircle className="w-5 h-5 text-slate-400 flex-shrink-0" />
                      {faq.question}
                    </span>
                    <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? "transform rotate-180" : ""
                    }`} />
                  </button>

                  <div className={`transition-all duration-300 overflow-hidden ${
                    isOpen ? "max-h-[200px] border-t border-slate-100" : "max-h-0"
                  }`}>
                    <p className="p-6 text-xs sm:text-sm text-slate-600 leading-relaxed bg-slate-50/50">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Manual Contact / Info */}
      <section className="py-12 bg-slate-100 border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          
          <div className="flex flex-col md:flex-row items-center gap-4 bg-white p-5 rounded-2xl border border-slate-200/50 shadow-sm">
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider block">Call / WhatsApp</span>
              <a href="tel:+918903720129" className="text-sm font-bold text-slate-800 hover:text-brand-blue-600 transition-colors">
                +91 8903720129
              </a>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4 bg-white p-5 rounded-2xl border border-slate-200/50 shadow-sm">
            <div className="p-3 bg-sky-50 text-sky-600 rounded-xl">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider block">Email Support</span>
              <a href="mailto:sv100204@gmail.com" className="text-sm font-bold text-slate-800 hover:text-brand-blue-600 transition-colors">
                sv100204@gmail.com
              </a>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4 bg-white p-5 rounded-2xl border border-slate-200/50 shadow-sm">
            <div className="p-3 bg-amber-50 text-amber-600 rounded-xl">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider block">Target Service area</span>
              <span className="text-sm font-bold text-slate-800">
                Madurai City, Tamil Nadu
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-amber-400 rounded-lg flex items-center justify-center font-black text-slate-900 shadow-sm">
                🛺
              </div>
              <span className="text-md font-black tracking-tight text-white">
                N&C <span className="text-brand-blue-500">(nook & corner)</span>
              </span>
            </div>

            <p className="text-xs text-slate-500 text-center md:text-right">
              &copy; {new Date().getFullYear()} N&C (nook & corner). All rights reserved. 
              <br />
              Smart street-level advertising for hyperlocal business growth.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
}
