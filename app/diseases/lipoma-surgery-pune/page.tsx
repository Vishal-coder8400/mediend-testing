"use client"
import { useState } from "react";
import { Modal } from "@mantine/core";



import FAQ from './faq';
import Appointment from "../../components/Appointment/Appointment";

export default function Page() {
// ===== HERO FORM STATE =====
  const [heroForm, setHeroForm] = useState({ name: "", phone: "" });
  const [heroSubmitted, setHeroSubmitted] = useState(false);
  const [openAppointment, setOpenAppointment] = useState(false);

  // ===== APPOINTMENT FORM STATE =====
  const [appointmentForm, setAppointmentForm] = useState({
    name: "",
    phone: "",
  });
  const [appointmentSubmitted, setAppointmentSubmitted] = useState(false);
  // ===== COMMON SUBMIT FUNCTION =====
  const submitToSanity = async (data: any) => {
    try {
      await fetch("/api/post-consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.error("Submission failed", error);
    }
  };

  return (
    <>
      {/* 1. STATIC LANDING HEADER — Reduced Height to 60px for Mobile */}
      <div
        className="fixed top-0 left-0 w-full bg-[#062D4C] h-[60px] flex items-center px-4 z-[9999]"
      >
        <div className="flex w-full justify-between items-center">
          {/* Logo */}
          <img
            src="/logo.png"
            alt="logo"
            className="w-[100px] md:w-[120px] cursor-pointer"
          />

          {/* Right Button - Teal */}
          <button
           onClick={() => setOpenAppointment(true)}
          className="bg-[#14967F] text-white px-4 py-1.5 rounded-full text-[11px] md:text-xs font-bold uppercase tracking-wide shadow-md">
            Book Now
          </button>
        </div>
      </div>

{/* HEADER SPACER — MUST MATCH HEADER HEIGHT */}
<div className="h-[60px]"></div>

<section className="
  w-full max-w-[1300px] mx-auto
  px-3
  pt-0.5 md:pt-0      /* ↓ reduced top gap for both */
  pb-3
  grid grid-cols-2 lg:grid-cols-3
  gap-x-2 gap-y-2
  items-center
  md:pb-6
">

  {/* COL 1: TEXT CONTENT */}
  <div className="col-span-1 flex flex-col justify-start mt-0">

    {/* Heading — EXACT mobile match */}
            <h1
  className="
    font-extrabold text-black

    /* MOBILE — DO NOT TOUCH */
    text-[clamp(15px,4.2vw,18px)]
    leading-[1.28]
    mb-2

    /* DESKTOP FIX */
    md:text-[30px]        /* ↓ reduced from 32 */
    lg:text-[38px]        /* ↓ reduced from 42 */
    md:leading-[1.15]
    md:mb-4
    md:max-w-[520px]      /* 👈 forces 2-line wrap */
  "
>
  Permanent Surgery for
  <br className="hidden md:block" />
  Lipoma in{" "}
  <span className="text-[#2563EB]">Pune</span>
</h1>


    {/* Bullet List */}
   <ul className="space-y-2 text-black mb-3">

  {[
    "50% Off on Surgery",
    "30 Minutes Procedure",
    "All Insurance Accepted"
  ].map((text, i) => (
    <li
      key={i}
      className="flex items-center gap-2"
    >
      {/* PERFECT DOT */}
      <span className="w-[6px] h-[6px] bg-[#14967F] rounded-full shrink-0" />

      {/* TEXT */}
      <span
        className="
          font-medium
          text-[clamp(12px,3.4vw,13px)]
          leading-[1.35]
        "
      >
        {text}
      </span>
    </li>
  ))}

</ul>

    {/* FREE CONSULTATION */}
    <div className="
      border border-[#0B3C5D]
      rounded-md
      px-3 py-1
      inline-flex items-center gap-2
      w-fit
      bg-white
    ">
      <span className="font-bold text-[#0B3C5D] text-[10px] leading-tight">
        FREE <br /> CONSULTATION
      </span>

      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#0B3C5D"
        strokeWidth="2"
      >
        <path d="M6 3v12a4 4 0 0 0 8 0v-4" />
        <path d="M14 11a4 4 0 0 0 8 0V5" />
        <path d="M6 3a4 4 0 0 1 8 0" />
      </svg>
    </div>

  </div>

  {/* COL 2: IMAGE */}
  <div
  className="
    col-span-1
    flex justify-center items-center
    mt-2
    md:mt-0
  "
>
  <img
    src="/assets/diseases/lipomanew.png"
    alt="Lipoma Surgery Illustration"
    className="
      w-full
      max-w-[180px]     /* small phones */
      sm:max-w-[200px] /* large phones */
      md:max-w-[220px] /* tablets */
      lg:max-w-[240px] /* desktop */

      object-contain
    "
  />
</div>

  {/* COL 3: FORM */}
   <div className="
    col-span-2 lg:col-span-1
    w-full mt-2 lg:mt-0
    bg-[#E0F7FA] lg:bg-white
    rounded-2xl shadow-sm lg:shadow-xl
    p-5 lg:p-8
    border border-teal-100 lg:border-none
  ">
    <h2 className="text-[18px] lg:text-2xl font-extrabold text-black mb-3 text-center lg:text-left">
      Surgery Cost Calculator
    </h2>

    <input
      type="text"
      placeholder="Your Name *"
       value={heroForm.name}
            onChange={(e) =>
              setHeroForm({ ...heroForm, name: e.target.value })
            }
      className="w-full bg-white border border-gray-300 rounded-full px-4 py-3 mb-3 outline-none text-sm text-gray-700 focus:border-[#14967F] shadow-sm"
    />

    <input
      type="text"
      placeholder="Mobile Number *"
      value={heroForm.phone}
            onChange={(e) =>
              setHeroForm({ ...heroForm, phone: e.target.value })
            }
      className="w-full bg-white border border-gray-300 rounded-full px-4 py-3 mb-4 outline-none text-sm text-gray-700 focus:border-[#14967F] shadow-sm"
    />

    <button
    onClick={async () => {
              if (!heroForm.name || !heroForm.phone) return;
              await submitToSanity({
                name: heroForm.name,
                phone: heroForm.phone,
                disease: "Lipoma",
                source: "lipoma-calculator",
              });
              setHeroSubmitted(true);
              setHeroForm({ name: "", phone: "" });
            }}
    className="w-full bg-[#14967F] text-white font-bold py-3 rounded-full text-[16px] shadow hover:opacity-90 transition">
      Calculate Now
    </button>
     {heroSubmitted && (
            <p className="mt-2 text-center text-sm text-green-600 font-medium">
              ✅ Thank you! Our team will contact you shortly.
            </p>
          )}
  </div>

</section>

   {/* 3. STATS SECTION — Compact Height */}
      <section className="w-full bg-[#14967F] py-2.5 mt-2 border-t border-white/20">
        <div className="
          max-w-[1300px] mx-auto
          grid grid-cols-4 
          divide-x divide-white/30 
          text-center items-center
        ">
          <div className="px-1">
            <h3 className="text-white text-[14px] md:text-[20px] font-extrabold leading-none">2 Lacs+</h3>
            <p className="text-white text-[8px] md:text-xs font-bold uppercase mt-0.5 leading-tight">Satisfied<br/>Patients</p>
          </div>
          <div className="px-1">
            <h3 className="text-white text-[14px] md:text-[20px] font-extrabold leading-none">400+</h3>
            <p className="text-white text-[8px] md:text-xs font-bold uppercase mt-0.5 leading-tight">Specialist<br/>Doctors</p>
          </div>
          <div className="px-1">
            <h3 className="text-white text-[14px] md:text-[20px] font-extrabold leading-none">800+</h3>
            <p className="text-white text-[8px] md:text-xs font-bold uppercase mt-0.5 leading-tight">Surgery<br/>Centers</p>
          </div>
          <div className="px-1">
            <h3 className="text-white text-[14px] md:text-[20px] font-extrabold leading-none">40+</h3>
            <p className="text-white text-[8px] md:text-xs font-bold uppercase mt-0.5 leading-tight">Cities</p>
          </div>
        </div>
      </section>
  {/* 4. WHY OPT SECTION — Compact List */}
     <section className="w-full max-w-[1300px] mx-auto px-4 py-4">
        
        {/* GRID LAYOUT: 1 Column on Mobile, 2 Columns on Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">

          {/* === BOX 1 === */}
          <div className="bg-[#E9F1FF] rounded-2xl p-6 lg:p-8">
            <h2 className="text-[18px] lg:text-xl font-extrabold text-black mb-4">
              Why opt for Lipoma Surgery?
            </h2>
            <ul className="space-y-3">
              {[
                "Sudden increase in size or pain",
                "Medication is ineffective",
                "Avoid side effects of steroids",
                "Lipoma excision is the only solution*"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-[#14967F] font-bold text-lg leading-none mt-0.5">✓</span>
                  <span className="text-gray-800 text-[14px] lg:text-[16px] font-medium leading-tight">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* === BOX 2 === */}
          <div className="bg-[#E9F1FF] rounded-2xl p-6 lg:p-8">
            <h2 className="text-[18px] lg:text-xl font-extrabold text-black mb-4">
             Benefits of Lipoma excision procedure
            </h2>
            <ul className="space-y-3">
              {[
                "Minimal Pain Procedure",
                "No recurrence",
                "30 mins procedure | 1-day discharge",
                "Resume work 1 day"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-[#14967F] font-bold text-lg leading-none mt-0.5">✓</span>
                  <span className="text-gray-800 text-[14px] lg:text-[16px] font-medium leading-tight">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* === BOX 3 === */}
          <div className="bg-[#E9F1FF] rounded-2xl p-6 lg:p-8">
            <h2 className="text-[18px] lg:text-xl font-extrabold text-black mb-4">
              Why MediEnd ?
            </h2>
            <ul className="space-y-3">
              {[
                "15+ Years Experience Plastic surgeons.",
                "10,000+ successful procedures.",
                "USFDA approved.",
                "0 cost EMI."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-[#14967F] font-bold text-lg leading-none mt-0.5">✓</span>
                  <span className="text-gray-800 text-[14px] lg:text-[16px] font-medium leading-tight">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* === BOX 4 === */}
          <div className="bg-[#E9F1FF] rounded-2xl p-6 lg:p-8">
            <h2 className="text-[18px] lg:text-xl font-extrabold text-black mb-4">
              Hassle-free Insurance Approval
            </h2>
            <ul className="space-y-3">
              {[
                "All Insurances covered",
                "No Hidden Charges",
                "Assistance for Insurance Paperwork",
                "Resume work in 2 days"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-[#14967F] font-bold text-lg leading-none mt-0.5">✓</span>
                  <span className="text-gray-800 text-[14px] lg:text-[16px] font-medium leading-tight">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

  <section className="w-full  py-20">
        <div className="max-w-[1300px] mx-auto px-6">

          {/* SAME HEIGHT GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

            {/* LEFT TEXT CENTERED VERTICALLY */}
            <div className="flex justify-center lg:justify-start">
              <div>
                <h2 className="text-4xl sm:text-5xl font-extrabold text-black leading-tight">
                  Book Your <br /> Appointment Now
                </h2>
              </div>
            </div>

            {/* RIGHT FORM */}
             <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-[520px] bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.1)] p-10 border border-gray-100">

                <label className="text-sm font-medium text-gray-700 mb-1 block">Your Name *</label>
                <input
                  type="text"
                  placeholder="Your name"
                  value={appointmentForm.name}
                 onChange={(e) =>
                  setAppointmentForm({
                  ...appointmentForm,
                  name: e.target.value,
                })
              }
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 mb-5 outline-none shadow-sm focus:border-[#14967F]"
                />

                <label className="text-sm font-medium text-gray-700 mb-1 block">Mobile Number *</label>
                <input
                  type="text"
                  placeholder="+91 1112223333"
                   value={appointmentForm.phone}
              onChange={(e) =>
                setAppointmentForm({
                  ...appointmentForm,
                  phone: e.target.value,
                })
              }
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 mb-6 outline-none shadow-sm focus:border-[#14967F]"
                />

                <button 
                 onClick={async () => {
                if (!appointmentForm.name || !appointmentForm.phone) return;
                await submitToSanity({
                  name: appointmentForm.name,
                  phone: appointmentForm.phone,
                  disease: "Lipoma",
                  source: "lipoma-appointment",
                });
                setAppointmentSubmitted(true);
                setAppointmentForm({ name: "", phone: "" });
              }}
                className="w-full bg-[#14967F] text-white font-semibold py-3 rounded-xl text-lg shadow hover:opacity-95 transition">
                  Book Appointment Now
                </button>
 {appointmentSubmitted && (
              <p className="mt-3 text-center text-sm text-green-600 font-medium">
                ✅ Appointment request submitted successfully.
              </p>
            )}
              </div>
            </div>


          </div>

        </div>
      </section>

   <section className="w-full bg-[#ECF1FB] py-10">
        <div className="
          max-w-[1200px] mx-auto 
          grid grid-cols-2 md:grid-cols-4 
          gap-6 md:gap-10 
          px-4
        ">

          {/* ITEM 1 */}
          <div className="flex items-start md:items-center justify-start gap-3">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" 
              stroke="#14967F" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="9"></circle>
              <path d="M8 12h8M9.5 9l5 6M14.5 9l-5 6"></path>
            </svg>
            <div className="flex flex-col leading-tight">
              <span className="text-[14px] md:text-[18px] font-semibold text-black">USFDA</span>
              <span className="text-[14px] md:text-[18px] font-semibold text-black">Approved Procedures</span>
            </div>
          </div>

          {/* ITEM 2 */}
          <div className="flex items-start md:items-center justify-start gap-3">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" 
              stroke="#14967F" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="9"></circle>
              <line x1="8" y1="8" x2="16" y2="16" />
              <line x1="16" y1="8" x2="8" y2="16" />
            </svg>
            <div className="flex flex-col leading-tight">
              <span className="text-[14px] md:text-[18px] font-semibold text-black">Minimum</span>
              <span className="text-[14px] md:text-[18px] font-semibold text-black">Stitches/Scars</span>
            </div>
          </div>

          {/* ITEM 3 */}
          <div className="flex items-start md:items-center justify-start gap-3">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" 
              stroke="#14967F" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 7l8-4 8 4v5c0 5-4 9-8 9s-8-4-8-9V7z"></path>
              <path d="M12 11v4"></path>
              <path d="M10 13h4"></path>
            </svg>
            <div className="flex flex-col leading-tight">
              <span className="text-[14px] md:text-[18px] font-semibold text-black">No-Cost EMI</span>
              <span className="text-[14px] md:text-[18px] font-semibold text-black">Available</span>
            </div>
          </div>

          {/* ITEM 4 */}
          <div className="flex items-start md:items-center justify-start gap-3">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" 
              stroke="#14967F" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="2" x2="12" y2="4" />
              <line x1="12" y1="20" x2="12" y2="22" />
              <line x1="4.9" y1="4.9" x2="6.3" y2="6.3" />
              <line x1="17.7" y1="17.7" x2="19.1" y2="19.1" />
              <line x1="2" y1="12" x2="4" y2="12" />
              <line x1="20" y1="12" x2="22" y2="12" />
            </svg>
            <div className="flex flex-col leading-tight">
              <span className="text-[14px] md:text-[18px] font-semibold text-black">Day Care</span>
              <span className="text-[14px] md:text-[18px] font-semibold text-black">Procedure</span>
            </div>
          </div>

        </div>
      </section>

  <section className="w-full py-10 lg:py-14 bg-white">

        {/* HEADING */}
        <h2 className="text-center text-2xl lg:text-4xl font-extrabold text-black mb-6 lg:mb-10 leading-tight px-4">
          Why opt for Minimally Invasive Lipoma Procedure?
        </h2>

        {/* TABLE CONTAINER */}
        <div className="max-w-[1200px] mx-auto bg-[#F1F3F8] rounded-xl overflow-hidden border border-[#E5E7EB]">

          {/* FIXED HEADER INSIDE BOX */}
          <div className="grid grid-cols-3 py-4 px-2 lg:py-6 lg:px-6 font-bold text-[11px] sm:text-[14px] lg:text-[18px] bg-[#F1F3F8]">

            {/* Empty alignment column */}
            <div></div>

            {/* Traditional - Using Teal to match brand */}
            <div className="text-center text-[#14967F] whitespace-nowrap">
              Traditional
            </div>

            {/* Minimally Invasive - Using Teal to match brand */}
            <div className="text-center text-[#2563EB] whitespace-nowrap">
              Minimally Invasive
            </div>
          </div>

          {/* TABLE ROWS */}
          {[
            ["Incision Size", "5–7 CM", "1–2 CM"],
            ["Scars", "BIG SCARS", " SMALL SCARS "],
            ["Success Rate", "LOW", "HIGH"],
            ["Recovery Time", "1 MONTH", "1 WEEK"],
            ["Blood Loss", "HEAVY", "MINIMAL"],
            ["Skin Tightening", "NON UNIFORM", "UNIFORM"],
            ["Anaesthesia Required", "GENERAL", "LOCAL"],
            ["Pain", "PAINFUL", "MINIMAL"],
          ].map((row, index) => (
            <div
              key={index}
              className="
                grid grid-cols-3 
                border-t border-[#E5E7EB] 
                py-3 lg:py-7 
                px-2 lg:px-6 
                items-center
              "
            >
              
              {/* LABEL (Left Column) */}
              <p className="font-semibold text-[10px] sm:text-[13px] lg:text-[16px] text-gray-800 text-left leading-tight pr-1">
                {row[0]}
              </p>

              {/* LEFT VALUE (White Pill) */}
              <div className="flex justify-center">
                <div className="
                  bg-white rounded-full shadow-sm border border-gray-100
                  px-1 py-1.5 lg:px-10 lg:py-3
                  text-[9px] sm:text-[11px] lg:text-[15px] font-bold text-gray-700
                  w-full max-w-[90px] lg:max-w-[180px] text-center
                  whitespace-nowrap
                ">
                  {row[1]}
                </div>
              </div>

              {/* RIGHT VALUE (Teal Pill) */}
              <div className="flex justify-center">
                <div className="
                  bg-[#2563EB] text-white rounded-full shadow-sm
                  px-1 py-1.5 lg:px-10 lg:py-3
                  text-[9px] sm:text-[11px] lg:text-[15px] font-bold
                  w-full max-w-[90px] lg:max-w-[180px] text-center
                  whitespace-nowrap
                ">
                  {row[2]}
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

{/*  Our Lipoma Specialist */}
       <section className="w-full py-10 lg:py-16 bg-[#F5F6F8]">
        <h2 className="text-center text-2xl lg:text-4xl font-extrabold text-black mb-8 lg:mb-12">
          Our Lipoma Specialist
        </h2>

        <div className="max-w-[1200px] mx-auto flex flex-col gap-4 lg:gap-10 px-4">

          {/* === DOCTOR CARD 1 === */}
          <div className="bg-white shadow-md rounded-2xl lg:rounded-3xl p-4 lg:p-6 flex flex-row items-start gap-3 lg:gap-5">

            {/* Left Image - Smaller for mobile match */}
            <img 
              src="/assets/doctors/Dr. Manoj.png" 
              className="w-[70px] h-[70px] lg:w-[180px] lg:h-[180px] rounded-full object-cover mt-1 shrink-0"
            />

            {/* Right Content */}
            <div className="flex-1 min-w-0">

              {/* Name & Rating */}
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start">
                <h3 className="text-[15px] lg:text-2xl font-extrabold text-black leading-tight flex flex-wrap items-center gap-1">   
               Dr. Manoj Dinkar Pawar
                  <span className="inline-flex items-center gap-0.5 bg-white lg:bg-transparent">
                     <span className="text-orange-500 text-xs lg:text-xl">★</span>
                     <span className="text-black text-xs lg:text-base font-semibold">5</span>
                  </span>
                </h3>

                {/* Desktop Location */}
                <p className="hidden lg:flex text-gray-700 items-center gap-1 text-[16px]">
                  <span className="text-orange-500 text-xl">📍</span> Pune
                </p>
              </div>

              {/* Qualification */}
              <p className="mt-1 text-gray-600 text-[11px] lg:text-[17px] font-medium leading-[1.3]">
               Plastic and Reconstructive Surgeon
              MBBS, MS General Surgery, MCh Plastic and Reconstructive Surgery, DNB Plastic Surgery
              </p>
              
              {/* Experience */}
              <p className="text-gray-600 text-[11px] lg:text-[17px] font-medium leading-[1.3]">
                19+ Years Experience Overall
              </p>

              {/* Mobile Location */}
              <p className="lg:hidden mt-1 text-gray-600 flex items-center gap-1 text-[11px] font-medium">
                <span className="text-orange-500 text-sm">📍</span> Pune
              </p>

              {/* Button - COMPACT & FIXED */}
              <button className="mt-3 lg:mt-6 w-full bg-[#14967F] text-white text-[12px] lg:text-lg font-bold py-2 lg:py-4 rounded-full shadow-sm hover:opacity-90 transition">
                Book Appointment Now
              </button>
            </div>
          </div>

          {/* === DOCTOR CARD 2 === */}
          <div className="bg-white shadow-md rounded-2xl lg:rounded-3xl p-4 lg:p-6 flex flex-row items-start gap-3 lg:gap-5">

            {/* Left Image */}
            <img 
              src="/assets/doctors/Dr. Surajsinh.png" 
              className="w-[70px] h-[70px] lg:w-[180px] lg:h-[180px] rounded-full object-cover mt-1 shrink-0"
            />

            {/* Right Content */}
            <div className="flex-1 min-w-0">

              {/* Name & Rating */}
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start">
                <h3 className="text-[15px] lg:text-2xl font-extrabold text-black leading-tight flex flex-wrap items-center gap-1">
                Dr. Surajsinh Chauhan
                  <span className="inline-flex items-center gap-0.5 bg-white lg:bg-transparent">
                     <span className="text-orange-500 text-xs lg:text-xl">★</span>
                     <span className="text-black text-xs lg:text-base font-semibold">5</span>
                  </span>
                </h3>

                {/* Desktop Location */}
                <p className="hidden lg:flex text-gray-700 items-center gap-1 text-[16px]">
                  <span className="text-orange-500 text-xl">📍</span>Pune
                </p>
              </div>

              {/* Qualification */}
              <p className="mt-1 text-gray-600 text-[11px] lg:text-[17px] font-medium leading-[1.3]">
                Aesthetics and Plastic Surgeon
                MBBS, MS, DNB- Plastic Surgery
              </p>
             

              {/* Experience */}
              <p className="text-gray-600 text-[11px] lg:text-[17px] font-medium leading-[1.3]">
                18+ Years Experience Overall
              </p>

              {/* Mobile Location */}
              <p className="lg:hidden mt-1 text-gray-600 flex items-center gap-1 text-[11px] font-medium">
                <span className="text-orange-500 text-sm">📍</span> Pune
              </p>

              {/* Button - COMPACT & FIXED */}
              <button className="mt-3 lg:mt-6 w-full bg-[#14967F] text-white text-[12px] lg:text-lg font-bold py-2 lg:py-4 rounded-full shadow-sm hover:opacity-90 transition">
                Book Appointment Now
              </button>
            </div>
          </div>

        </div>
      </section>

         <section className="w-full py-6 md:py-10 bg-white">
        <div className="max-w-[1250px] mx-auto px-6">

          {/* Add space-y-10 for mobile spacing */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center space-y-10 md:space-y-0">

            {/* ===== IMAGE ===== */}
            <div className="order-2 md:order-1 w-full flex justify-center md:justify-start">
             <img
                src="/assets/diseases/lipomanew.png"
                alt="Gynecomastia"
                className="w-[160px] md:w-[200px] lg:w-[230px] object-contain"
              />
            </div>

            {/* ===== HEADING + PARAGRAPH ===== */}
            <div className="order-1 md:order-2 text-center md:text-left">

              <h2 className="text-3xl md:text-5xl font-extrabold text-black mb-4 leading-tight">
                What is <span className="text-black">Lipoma?</span>
              </h2>

              <p className="text-[17px] md:text-[19px] text-gray-700 leading-[1.8] font-medium">
               A lipoma is a slow-growing, fatty lump that&apos;s situated between your skin and the underlying muscle layer.
              </p>

            </div>

          </div>
        </div>
      </section>

 <section className="w-full bg-[#F4F6F8] py-16">
        <div className="max-w-[1250px] mx-auto grid grid-cols-1 md:grid-cols-3 
          gap-y-14 gap-x-10 md:gap-y-10 px-6">

          {/* COLUMN 1 — GRADES (with right border) */}
          <div className="md:border-r md:pr-10 border-gray-300">
            <h3 className="text-[26px] font-extrabold text-black mb-5">
              A lipoma can form on any part of the body, but they typically appear on the:
            </h3>

            <ul className="space-y-3 text-[17px] text-gray-700 leading-[1.7]">
              <li className="flex items-center gap-3">
                <span className="w-3 h-3 bg-[#14967F] rounded-full mt-1"></span>
                Neck
              </li>
              <li className="flex items-center gap-3">
                <span className="w-3 h-3 bg-[#14967F] rounded-full mt-1"></span>
                Shoulders
              </li>
              <li className="flex items-center gap-3">
                <span className="w-3 h-3 bg-[#14967F] rounded-full mt-1"></span>
                Forearms
              </li>
              <li className="flex items-center gap-3">
                <span className="w-3 h-3 bg-[#14967F] rounded-full mt-1"></span>
                Arms
              </li>
              <li className="flex items-center gap-3">
                <span className="w-3 h-3 bg-[#14967F] rounded-full mt-1"></span>
                Thighs, Etc
              </li>
            </ul>
          </div>

          {/* COLUMN 2 — PROCEDURE (with right border) */}
          <div className="md:border-r md:px-10 border-gray-300">
            <h3 className="text-[26px] font-extrabold text-black mb-5">
              What is Lipoma Removal?
            </h3>

            <p className="text-[17px] text-gray-700 leading-[1.7] mb-4">
              Since there is no medication of Lipoma, it becomes necessary to consult a surgeon. Mediend performs a minimally invasive procedure which has the following benefits:
            </p>

            <ul className="space-y-3 text-[17px] text-gray-700 leading-[1.7]">
              <li className="flex items-center gap-3">
                <span className="w-3 h-3 bg-[#14967F] rounded-full mt-1"></span>
                Barely Visible Scars
              </li>
              <li className="flex items-center gap-3">
                <span className="w-3 h-3 bg-[#14967F] rounded-full mt-1"></span>
                Minimal Pain Procedure
              </li>
              <li className="flex items-center gap-3">
                <span className="w-3 h-3 bg-[#14967F] rounded-full mt-1"></span>
                Fast Recovery and Quick Discharge
              </li>
            </ul>
          </div>

          {/* COLUMN 3 — COST (NO BORDER) */}
          <div className="md:pl-10">
            <h3 className="text-[26px] font-extrabold text-black mb-5">
              What is the Cost of Lipoma Treatment?
            </h3>

            <ul className="space-y-3 text-[17px] text-gray-700 leading-[1.7]">
              <li className="flex items-center gap-3">
                <span className="w-3 h-3 bg-[#14967F] rounded-full mt-1"></span>
                Cost of the surgery depends on the following factors
              </li>
              <li className="flex items-center gap-3">
                <span className="w-3 h-3 bg-[#14967F] rounded-full mt-1"></span>
                Number & Size of Lipomas
              </li>
              <li className="flex items-center gap-3">
                <span className="w-3 h-3 bg-[#14967F] rounded-full mt-1"></span>
                Location of lipoma (Body Part)
              </li>
              <li className="flex items-center gap-3">
                <span className="w-3 h-3 bg-[#14967F] rounded-full mt-1"></span>
                Technique and equipment used
              </li>
            </ul>
          </div>

        </div>
      </section>

        {/* ⭐ FAQ SECTION — Modern, Clean, Real-world Design ⭐ */}
            <section className="w-full pt-8 pb-0 bg-white">
              <div className="max-w-[950px] md:max-w-[1100px] lg:max-w-[1250px] mx-auto px-6">
      
                {/* HEADING */}
                <h2 className="text-center text-4xl font-extrabold text-gray-900 mb-12">
                  Frequently Asked Questions
                </h2>
      
                {/* FAQ ACCORDION */}
                <FAQ/>
              </div>
            </section>

        {/* NEED HELP SECTION – EXACT SAME DESIGN BUT TEAL */}
      {/* 🌟 1. NEED HELP SECTION */}

      <section className="w-full bg-[#14967F] py-6 md:py-10 mt-10">
        <div className="max-w-[1200px] mx-auto px-6 text-center">

          <h2 className="text-xl md:text-3xl font-extrabold text-white mb-4 md:mb-6">
            Need Help ?
          </h2>

          <button
          onClick={() => setOpenAppointment(true)}
            className="
              bg-black text-white font-semibold
              px-5 py-2.5 md:px-8 md:py-3
              rounded-full text-sm md:text-base
              w-[160px] md:w-auto mx-auto
              hover:opacity-90 transition
            "
          >
            Get a Call Back
          </button>

        </div>
      </section>


     {/* 🌟 2. FOOTER SECTION */}
<footer className="w-full bg-[#F3F3F3] py-6 text-center">

  <p className="text-[14px] font-semibold text-gray-800 mb-1">
    ©2023 MediEnd. All Rights Reserved
  </p>

  <p className="text-[12px] text-gray-600">
    DISCLAIMER: The result and experience may vary from patient to patient.
  </p>

</footer>

{/* ⭐ Mobile safety spacer so footer doesn't hide sticky bar */}
{/* MOBILE SAFETY SPACER — PREVENTS FIXED CTA OVERLAP */}
<div className="h-[120px] md:h-0"></div>


{/* 🌟 3. GET FREE DOCTOR CONSULTATION SECTION */}
{!openAppointment && (
<section
  className="
    w-full bg-[#062D4C]
    fixed bottom-0 left-0 right-0
    md:static
    md:sticky md:bottom-0
    z-[9999]
  "
>
  <div
    className="
      max-w-[1200px] mx-auto
      px-4 py-4
      text-center
    "
  >
    <h2
      className="
        font-extrabold text-white
        mb-2
        text-[clamp(16px,5vw,19px)]
      "
    >
      Get Free Doctor Consultation
    </h2>

    <button
     onClick={() => setOpenAppointment(true)}
      className="
        bg-[#14967F] text-white font-semibold
        px-6 py-2.5
        rounded-full
        text-[14px]
        w-[170px] mx-auto
        hover:opacity-90 transition
      "
    >
      Book Now
    </button>
  </div>
</section>
)}

<Modal
  opened={openAppointment}
  onClose={() => setOpenAppointment(false)}
  centered
  size="xl"
  padding={0}
  radius="lg"
  withCloseButton={false}
  overlayProps={{ blur: 3 }}
  styles={{
    content: {
      maxHeight: "90vh",
      overflow: "hidden",
    },
    body: {
      padding: 0,
      maxHeight: "90vh",
      overflowY: "auto",
    },
  }}
>
  <Appointment />
</Modal>


    </>
  );
}