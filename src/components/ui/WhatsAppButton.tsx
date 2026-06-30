"use client";

import React from "react";
import { MessageSquare } from "lucide-react";

export default function WhatsAppButton() {
  const phoneNumber = "918903720129";
  const message = "Hi TransitAds Madurai! I want to launch an auto advertisement campaign for my business. Please share details.";
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-emerald-500 text-white rounded-full shadow-lg hover:bg-emerald-600 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-emerald-300 group"
      aria-label="Contact on WhatsApp"
      id="whatsapp-floating-btn"
    >
      <span className="absolute right-16 bg-slate-900 text-white text-xs font-medium px-3 py-1.5 rounded-lg shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Chat with Us
      </span>
      {/* Custom WhatsApp Icon or MessageSquare */}
      <svg
        className="w-7 h-7 fill-current"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.963C16.593 1.981 14.13 1.98 11.999 1.98c-5.444 0-9.866 4.372-9.87 9.802 0 1.764.476 3.49 1.38 5.02L2.592 21.07l4.055-1.916zM17.91 14.8c-.326-.162-1.927-.938-2.222-1.045-.296-.108-.51-.162-.725.162-.215.324-.834 1.045-1.022 1.261-.188.216-.376.243-.702.082-.325-.162-1.374-.5-.262-2.117-.689-1.89-1.125-3.178-1.562-3.864-.437-.687.05-1.06.376-1.22.293-.146.65-.757.97-.757.324 0 .428.054.51.216.082.162.834 2.016.906 2.161.072.146.108.314.01.503-.098.19-.215.309-.323.438-.108.125-.224.262-.323.364-.1.103-.205.216-.089.378.115.162 1.503 2.446 3.229 3.967 1.002.883 1.912 1.157 2.612 1.096.7-.061 2.222-.89 2.534-1.754.312-.865.312-1.608.219-1.764-.093-.157-.31-.243-.637-.405z" />
      </svg>
    </a>
  );
}
