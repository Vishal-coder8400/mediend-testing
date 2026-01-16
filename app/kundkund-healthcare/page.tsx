"use client";
import Image from "next/image";
import React from "react";
import {
  FaUserMd,
  FaWallet,
  FaRoute,
  FaHeadset,
} from "react-icons/fa";
import { HiOutlineLocationMarker, HiOutlineCalendar } from "react-icons/hi";
import { FiUsers } from "react-icons/fi";


export default function KundkundHealthcarePage() {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
     <section className="relative w-full min-h-[60vh] md:min-h-[85vh] flex items-center overflow-hidden">

        {/* BACKGROUND */}
  <div className="absolute inset-0 -z-10">
    <Image
      src="/assets/herobox/hero-surgery1.png"
      alt="Surgical Operation Theatre"
      fill
      priority
      className="object-cover object-center"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/65 to-white/30" />
  </div>

        {/* CONTENT */}
<div
  className="
    relative
    w-full
    px-5 sm:px-6 lg:px-8
    pt-10 sm:pt-20 md:pt-28
    text-left
  "
>


          <div className="max-w-2xl">

            {/* BADGE */}
            <span
              className="
                inline-flex items-center gap-2
                mb-6
                px-4 py-1.5
                rounded-full
                bg-[#062D4C]
                text-white
                text-xs
                font-medium
              "
            >
              ● POWERED BY KUNDKUND HEALTHCARE
            </span>

            {/* HEADING */}
            <h1
              className="
                text-[#062D4C]
                font-semibold
                leading-[1.1]
                text-[36px]
                sm:text-[42px]
                md:text-[48px]
                lg:text-[56px]
              "
            >
              mediEND — Trusted Surgical Care,
              <br />
              <span className="text-[#14967F]">
                Simplified & Accessible
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p
              className="
                mt-6
                text-[#4B5563]
                text-[15px]
                sm:text-[16px]
                max-w-xl
              "
            >
              Expert surgeons, personalized care, and hassle-free surgical
              solutions — powered by Kundkund Healthcare.
            </p>

            {/* CTA BUTTONS */}
            <div className="mt-10 flex flex-wrap gap-4">
              <button
                className="
                  bg-[#14967F]
                  hover:bg-[#12806D]
                  text-white
                  px-7 py-3.5
                  rounded-lg
                  text-sm
                  font-semibold
                  shadow-md
                  transition
                "
              >
                Book Free Consultation
              </button>

              <button
                className="
                  flex items-center gap-2
                  bg-white
                  border border-[#E5E7EB]
                  text-[#062D4C]
                  px-7 py-3.5
                  rounded-lg
                  text-sm
                  font-semibold
                  shadow-sm
                  hover:bg-[#F9FAFB]
                  transition
                "
              >
                📞 +91 87503 00099
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* ================= TRUST STATS BAR ================= */}
<section className="w-full mt-6 sm:mt-10 md:mt-16">

  {/* FULL WIDTH BAR */}
  <div
    className="
      w-full
      bg-[#062D4C]
      rounded-2xl
      py-6 sm:py-8
    "
  >
    {/* INNER CONTENT (ONLY INTERNAL PADDING) */}
    <div
      className="
        max-w-7xl mx-auto
        px-6 sm:px-10 lg:px-14
      "
    >
      <div
        className="
          grid grid-cols-2
          md:grid-cols-4
          gap-6 sm:gap-8
          text-center
        "
      >
        {/* STAT 1 */}
        <div>
          <h3 className="text-white text-[24px] sm:text-[28px] font-semibold">
            5000<span className="text-[#14967F]">+</span>
          </h3>
          <p className="mt-1 text-xs sm:text-sm text-[#CBD5E1]">
            Surgeries
          </p>
        </div>

        {/* STAT 2 */}
        <div>
          <h3 className="text-white text-[24px] sm:text-[28px] font-semibold">
            200<span className="text-[#14967F]">+</span>
          </h3>
          <p className="mt-1 text-xs sm:text-sm text-[#CBD5E1]">
            Expert Surgeons
          </p>
        </div>

        {/* STAT 3 */}
        <div>
          <h3 className="text-white text-[24px] sm:text-[28px] font-semibold">
            10000<span className="text-[#14967F]">+</span>
          </h3>
          <p className="mt-1 text-xs sm:text-sm text-[#CBD5E1]">
            Patients Treated
          </p>
        </div>

        {/* STAT 4 */}
        <div>
          <h3 className="text-white text-[24px] sm:text-[28px] font-semibold">
            10<span className="text-[#14967F]">+</span>
          </h3>
          <p className="mt-1 text-xs sm:text-sm text-[#CBD5E1]">
            Years of Excellence
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* ================= WORLD-CLASS CARE SECTION ================= */}
<section className="w-full bg-white py-14 sm:py-18 md:py-24">
  <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

    {/* HEADING */}
    <div className="text-center max-w-2xl mx-auto">
      <h2
        className="
          text-[#062D4C]
          font-semibold
          text-[26px]
          sm:text-[30px]
          md:text-[36px]
        "
      >
        World-Class Surgical Care You Can Trust
      </h2>

      <p
        className="
          mt-3
          text-[#4B5563]
          text-sm
          sm:text-[15px]
        "
      >
        Advanced treatments with modern technology and expert care.
      </p>
    </div>

    {/* FEATURES */}
    <div
      className="
        mt-12
        grid grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-4
        gap-6
      "
    >
      {/* CARD 1 */}
      <div className="bg-[#DEE6F3] rounded-xl p-6 shadow-sm border border-[#E5EAF2]">
        <div className="mb-4 text-[#14967F] text-xl"><FaUserMd /></div>
        <h4 className="text-[#062D4C] font-semibold text-base">
          Top Surgeons Network
        </h4>
        <p className="mt-2 text-sm text-[#4B5563]">
          15+ years of experience
        </p>
      </div>

      {/* CARD 2 */}
      <div className="bg-[#DEE6F3] rounded-xl p-6 shadow-sm border border-[#E5EAF2]">
        <div className="mb-4 text-[#14967F] text-xl">< FaWallet /></div>
        <h4 className="text-[#062D4C] font-semibold text-base">
          Affordable Care Plans
        </h4>
        <p className="mt-2 text-sm text-[#4B5563]">
          Transparent pricing
        </p>
      </div>

      {/* CARD 3 */}
      <div className="bg-[#DEE6F3] rounded-xl p-6 shadow-sm border border-[#E5EAF2]">
        <div className="mb-4 text-[#14967F] text-xl"><FaRoute /></div>
        <h4 className="text-[#062D4C] font-semibold text-base">
          Seamless Patient Journey
        </h4>
        <p className="mt-2 text-sm text-[#4B5563]">
          From consultation to recovery
        </p>
      </div>

      {/* CARD 4 */}
      <div className="bg-[#DEE6F3] rounded-xl p-6 shadow-sm border border-[#E5EAF2]">
        <div className="mb-4 text-[#14967F] text-xl"><FaHeadset /></div>
        <h4 className="text-[#062D4C] font-semibold text-base">
          24/7 Support & Guidance
        </h4>
        <p className="mt-2 text-sm text-[#4B5563]">
          Anytime care assistance
        </p>
      </div>
    </div>

  </div>
</section>

{/* ================= SURGICAL SPECIALTIES ================= */}
{/* ================= CORE SERVICES / SURGICAL SPECIALTIES ================= */}
<section className="w-full bg-[#F4F6F8] py-14 sm:py-18 md:py-24">
  <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

    {/* SECTION HEADING */}
    <div className="text-center max-w-2xl mx-auto">
      <h2
        className="
          text-[#062D4C]
          font-semibold
          text-[26px]
          sm:text-[30px]
          md:text-[36px]
        "
      >
        Our Surgical Specialties
      </h2>

      <p
        className="
          mt-3
          text-[#4B5563]
          text-sm
          sm:text-[15px]
        "
      >
        Explore our core surgical services delivered by experienced specialists.
      </p>
    </div>

    {/* SERVICES GRID */}
    <div
      className="
        mt-12
        grid grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        gap-6
      "
    >
      {/* CARD 1 */}
      <div className="bg-white rounded-xl overflow-hidden border border-[#E5EAF2] shadow-sm hover:shadow-md transition cursor-pointer">
        <Image
          src="/assets/specialities/aesthetics.png"
          alt="Aesthetics Surgery"
          width={400}
          height={240}
          className="w-full h-[170px] object-cover"
        />
        <div className="p-4 flex flex-col">
          <h4 className="text-[#062D4C] font-semibold text-base">
            Aesthetics Surgery
          </h4>
          <p className="mt-2 text-sm text-[#4B5563]">
            Advanced cosmetic and aesthetic surgical procedures.
          </p>
          <button className="mt-3 text-sm font-semibold text-[#14967F] hover:underline self-start">
            Explore details or request cost estimate →
          </button>
        </div>
      </div>

      {/* CARD 2 */}
      <div className="bg-white rounded-xl overflow-hidden border border-[#E5EAF2] shadow-sm hover:shadow-md transition cursor-pointer">
        <Image
          src="/assets/specialities/gynecomastia.png"
          alt="Gynecomastia & Lipoma"
          width={400}
          height={240}
          className="w-full h-[170px] object-cover"
        />
        <div className="p-4 flex flex-col">
          <h4 className="text-[#062D4C] font-semibold text-base">
            Gynecomastia & Lipoma
          </h4>
          <p className="mt-2 text-sm text-[#4B5563]">
            Safe and effective treatment for gynecomastia and lipoma conditions.
          </p>
          <button className="mt-3 text-sm font-semibold text-[#14967F] hover:underline self-start">
            Explore details or request cost estimate →
          </button>
        </div>
      </div>

      {/* CARD 3 */}
      <div className="bg-white rounded-xl overflow-hidden border border-[#E5EAF2] shadow-sm hover:shadow-md transition cursor-pointer">
        <Image
          src="/assets/specialities/laser.png"
          alt="Laser & Ophthalmic"
          width={400}
          height={240}
          className="w-full h-[170px] object-cover"
        />
        <div className="p-4 flex flex-col">
          <h4 className="text-[#062D4C] font-semibold text-base">
            Laser & Ophthalmic
          </h4>
          <p className="mt-2 text-sm text-[#4B5563]">
            Modern laser and eye care procedures with advanced technology.
          </p>
          <button className="mt-3 text-sm font-semibold text-[#14967F] hover:underline self-start">
            Explore details or request cost estimate →
          </button>
        </div>
      </div>

      {/* CARD 4 */}
      <div className="bg-white rounded-xl overflow-hidden border border-[#E5EAF2] shadow-sm hover:shadow-md transition cursor-pointer">
        <Image
          src="/assets/specialities/proctology1.png"
          alt="Proctology & Laparoscopy"
          width={400}
          height={240}
          className="w-full h-[170px] object-cover"
        />
        <div className="p-4 flex flex-col">
          <h4 className="text-[#062D4C] font-semibold text-base">
            Proctology & Laparoscopy
          </h4>
          <p className="mt-2 text-sm text-[#4B5563]">
            Minimally invasive proctology and laparoscopic surgeries.
          </p>
          <button className="mt-3 text-sm font-semibold text-[#14967F] hover:underline self-start">
            Explore details or request cost estimate →
          </button>
        </div>
      </div>

      {/* CARD 5 */}
      <div className="bg-white rounded-xl overflow-hidden border border-[#E5EAF2] shadow-sm hover:shadow-md transition cursor-pointer">
        <Image
          src="/assets/specialities/orthopedics.png"
          alt="Orthopedics & ENT"
          width={400}
          height={240}
          className="w-full h-[170px] object-cover"
        />
        <div className="p-4 flex flex-col">
          <h4 className="text-[#062D4C] font-semibold text-base">
            Orthopedics & ENT
          </h4>
          <p className="mt-2 text-sm text-[#4B5563]">
            Specialized bone, joint, and ENT surgical care.
          </p>
          <button className="mt-3 text-sm font-semibold text-[#14967F] hover:underline self-start">
            Explore details or request cost estimate →
          </button>
        </div>
      </div>

      {/* CARD 6 */}
      <div className="bg-white rounded-xl overflow-hidden border border-[#E5EAF2] shadow-sm hover:shadow-md transition cursor-pointer">
        <Image
          src="/assets/specialities/urology1.png"
          alt="Urology & Gynecology"
          width={400}
          height={240}
          className="w-full h-[170px] object-cover"
        />
        <div className="p-4 flex flex-col">
          <h4 className="text-[#062D4C] font-semibold text-base">
            Urology & Gynecology
          </h4>
          <p className="mt-2 text-sm text-[#4B5563]">
            Comprehensive urology and gynecology surgical solutions.
          </p>
          <button className="mt-3 text-sm font-semibold text-[#14967F] hover:underline self-start">
            Explore details or request cost estimate →
          </button>
        </div>
      </div>
    </div>

  </div>
</section>


{/* ================= HOW IT WORKS ================= */}
<section className="w-full bg-white py-14 sm:py-18 md:py-24">
  <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

    {/* SECTION HEADING */}
    <div className="text-center max-w-2xl mx-auto">
      <h2
        className="
          text-[#062D4C]
          font-semibold
          text-[26px]
          sm:text-[30px]
          md:text-[36px]
        "
      >
        How It Works
      </h2>

      <p
        className="
          mt-3
          text-[#4B5563]
          text-sm
          sm:text-[15px]
        "
      >
        A simple and seamless journey from consultation to recovery.
      </p>
    </div>

    {/* STEPS */}
    <div
      className="
        mt-14
        grid grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-5
        gap-6
      "
    >
      {/* STEP 1 */}
      <div className="bg-[#DEE6F3] rounded-xl p-5 text-center border border-[#E5EAF2]">
        <div className="w-10 h-10 mx-auto mb-4 rounded-full bg-[#14967F] text-white flex items-center justify-center font-semibold">
          1
        </div>
        <h4 className="text-[#062D4C] font-semibold text-sm">
          Book Free Consultation
        </h4>
      </div>

      {/* STEP 2 */}
      <div className="bg-[#DEE6F3] rounded-xl p-5 text-center border border-[#E5EAF2]">
        <div className="w-10 h-10 mx-auto mb-4 rounded-full bg-[#14967F] text-white flex items-center justify-center font-semibold">
          2
        </div>
        <h4 className="text-[#062D4C] font-semibold text-sm">
          Connect with Expert Surgeon
        </h4>
      </div>

      {/* STEP 3 */}
      <div className="bg-[#DEE6F3] rounded-xl p-5 text-center border border-[#E5EAF2]">
        <div className="w-10 h-10 mx-auto mb-4 rounded-full bg-[#14967F] text-white flex items-center justify-center font-semibold">
          3
        </div>
        <h4 className="text-[#062D4C] font-semibold text-sm">
          Understand Your Treatment Plan
        </h4>
      </div>

      {/* STEP 4 */}
      <div className="bg-[#DEE6F3] rounded-xl p-5 text-center border border-[#E5EAF2]">
        <div className="w-10 h-10 mx-auto mb-4 rounded-full bg-[#14967F] text-white flex items-center justify-center font-semibold">
          4
        </div>
        <h4 className="text-[#062D4C] font-semibold text-sm">
          Schedule Surgery & Care Support
        </h4>
      </div>

      {/* STEP 5 */}
      <div className="bg-[#DEE6F3] rounded-xl p-5 text-center border border-[#E5EAF2]">
        <div className="w-10 h-10 mx-auto mb-4 rounded-full bg-[#14967F] text-white flex items-center justify-center font-semibold">
          5
        </div>
        <h4 className="text-[#062D4C] font-semibold text-sm">
          Post-Op Follow-up & Recovery Services
        </h4>
      </div>
    </div>

  </div>
</section>


{/* ================= OUR MISSION & TRUSTED PARTNER ================= */}
<section className="w-full bg-[#ECF1FB] py-14 sm:py-18 md:py-24">
  <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

      {/* ABOUT mediEND */}
      <div className="bg-white rounded-xl p-6 sm:p-8 border border-[#E5EAF2] shadow-sm">
        <h3
          className="
            text-[#062D4C]
            font-semibold
            text-[22px]
            sm:text-[24px]
          "
        >
          Our Mission & Values
        </h3>

        <p
          className="
            mt-4
            text-[#4B5563]
            text-sm
            sm:text-[15px]
            leading-relaxed
          "
        >
          mediEND is committed to empowering patients with informed choices and
          seamless access to trusted surgical care. With technology-driven
          support, the journey from diagnosis to post-surgery care is simplified
          for every patient.
        </p>
      </div>

      {/* ABOUT KUNDKUND HEALTHCARE */}
      <div className="bg-white rounded-xl p-6 sm:p-8 border border-[#E5EAF2] shadow-sm">
        <h3
          className="
            text-[#062D4C]
            font-semibold
            text-[22px]
            sm:text-[24px]
          "
        >
          Our Trusted Healthcare Partner
        </h3>

        <p
          className="
            mt-4
            text-[#4B5563]
            text-sm
            sm:text-[15px]
            leading-relaxed
          "
        >
          mediEND is powered by{" "}
          <span className="font-semibold">
            Kundkund Healthcare Private Limited
          </span>
          , a registered healthcare company based in Uttar Pradesh, India —
          focused on dependable, transparent, and high-quality healthcare
          delivery.
        </p>

        {/* ICON LIST */}
        <ul className="mt-5 space-y-3 text-sm sm:text-[15px] text-[#4B5563]">

          <li className="flex items-center gap-3">
            <HiOutlineLocationMarker
              size={18}
              className="text-[#14967F]"
            />
            <span>
              <span className="font-medium text-[#062D4C]">Location:</span>{" "}
              Ghaziabad, UP
            </span>
          </li>

          <li className="flex items-center gap-3">
            <HiOutlineCalendar
              size={18}
              className="text-[#14967F]"
            />
            <span>
              <span className="font-medium text-[#062D4C]">Incorporated:</span>{" "}
              December 2022
            </span>
          </li>

          <li className="flex items-center gap-3">
            <FiUsers
              size={17}
              className="text-[#14967F]"
            />
            <span>
              <span className="font-medium text-[#062D4C]">Directors:</span>{" "}
              Amit Prakash Jain & Nisha Jain
            </span>
          </li>

        </ul>
      </div>

    </div>
  </div>
</section>


{/* ================= SURGICAL COST CALCULATOR ================= */}
<section className="w-full bg-[#062D4C] py-14 sm:py-18 md:py-24">
  <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

    <div className="flex justify-center">
      <div
        className="
          w-full
          max-w-xl
          bg-white
          rounded-2xl
          p-6
          sm:p-8
          shadow-lg
        "
      >
        {/* HEADER */}
        <div className="text-center">
          <h3
            className="
              text-[#062D4C]
              font-semibold
              text-[22px]
              sm:text-[24px]
            "
          >
            Surgical Cost Calculator
          </h3>
          <p className="mt-2 text-sm text-[#4B5563]">
            Get estimated surgery cost in seconds
          </p>
        </div>

        {/* FORM */}
        <div className="mt-6 space-y-4">
          {/* PROCEDURE */}
          <div>
            <label className="block text-sm font-medium text-[#062D4C] mb-1">
              Select Procedure
            </label>
            <select
              className="
                w-full
                border border-[#E5E7EB]
                rounded-lg
                px-4 py-2.5
                text-sm
                focus:outline-none
                focus:ring-2
                focus:ring-[#14967F]
              "
            >
              <option>Aesthetic Surgery</option>
              <option>Gynecomastia</option>
              <option>Laser Surgery</option>
              <option>Proctology</option>
              <option>Orthopedics</option>
              <option>Urology</option>
            </select>
          </div>

          {/* AGE */}
          <div>
            <label className="block text-sm font-medium text-[#062D4C] mb-1">
              Enter Approx. Age
            </label>
            <input
              type="number"
              placeholder="e.g. 35"
              className="
                w-full
                border border-[#E5E7EB]
                rounded-lg
                px-4 py-2.5
                text-sm
                focus:outline-none
                focus:ring-2
                focus:ring-[#14967F]
              "
            />
          </div>

          {/* PRIMARY CTA */}
          <button
            className="
              w-full
              bg-[#14967F]
              hover:bg-[#12806D]
              text-white
              py-3
              rounded-lg
              text-sm
              font-semibold
              transition
            "
          >
            Get Estimated Surgery Cost
          </button>

          {/* WHATSAPP CTA */}
          <button
            className="
              w-full
              border
              border-[#14967F]
              text-[#14967F]
              py-3
              rounded-lg
              text-sm
              font-semibold
              hover:bg-[#ECFDF5]
              transition
              flex
              items-center
              justify-center
              gap-2
            "
          >
            💬 Instant WhatsApp Quote
          </button>
        </div>
      </div>
    </div>

  </div>
</section>


{/* ================= PATIENT TESTIMONIALS ================= */}
<section className="w-full bg-white py-14 sm:py-18 md:py-24">
  <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

    {/* SECTION HEADING */}
    <div className="text-center max-w-2xl mx-auto">
      <h2
        className="
          text-[#062D4C]
          font-semibold
          text-[26px]
          sm:text-[30px]
          md:text-[36px]
        "
      >
        Patient Testimonials
      </h2>

      <p
        className="
          mt-3
          text-[#4B5563]
          text-sm
          sm:text-[15px]
        "
      >
        Real stories from patients who trusted mediEND for their care.
      </p>
    </div>

    {/* SLIDER */}
    <div
      className="
        mt-12
        flex gap-6
        overflow-x-auto
        snap-x snap-mandatory
        scrollbar-hide
        pb-4
      "
    >
      {/* TESTIMONIAL 1 */}
      <div
        className="
          min-w-[85%]
          sm:min-w-[60%]
          lg:min-w-[32%]
          bg-[#F9FAFB]
          rounded-xl
          p-6
          border border-[#E5EAF2]
          snap-center
        "
      >
        <p className="text-[#062D4C] text-sm sm:text-[15px] leading-relaxed">
          ⭐ “Life-changing experience — precise care & great support.”
        </p>
      </div>

      {/* TESTIMONIAL 2 */}
      <div
        className="
          min-w-[85%]
          sm:min-w-[60%]
          lg:min-w-[32%]
          bg-[#F9FAFB]
          rounded-xl
          p-6
          border border-[#E5EAF2]
          snap-center
        "
      >
        <p className="text-[#062D4C] text-sm sm:text-[15px] leading-relaxed">
          ⭐ “Professional team, transparent pricing — highly recommended.”
        </p>
      </div>

      {/* TESTIMONIAL 3 */}
      <div
        className="
          min-w-[85%]
          sm:min-w-[60%]
          lg:min-w-[32%]
          bg-[#F9FAFB]
          rounded-xl
          p-6
          border border-[#E5EAF2]
          snap-center
        "
      >
        <p className="text-[#062D4C] text-sm sm:text-[15px] leading-relaxed">
          ⭐ “Fast recovery with compassionate care.”
        </p>
      </div>
    </div>

  </div>
</section>


{/* ================= CONTACT & LOCATION ================= */}
{/* ================= CONTACT & LOCATION ================= */}
<section className="w-full bg-white py-14 sm:py-18 md:py-24">
  <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

      {/* LEFT: CONTACT INFO */}
      <div>
        <h2
          className="
            text-[#062D4C]
            font-semibold
            text-[26px]
            sm:text-[30px]
            md:text-[36px]
          "
        >
          Contact & Location
        </h2>

        <ul className="mt-6 space-y-4 text-sm sm:text-[15px] text-[#4B5563]">
          <li>
            📍 <span className="font-medium text-[#062D4C]">mediEND Hospital Office</span>
            <br />
            H-166, Sector 63, Noida, Uttar Pradesh
          </li>

          <li>
            📞 <span className="font-medium text-[#062D4C]">Phone:</span>{" "}
            <a
              href="tel:+918750300099"
              className="text-[#14967F] hover:underline"
            >
              +91 87503 00099
            </a>
          </li>

          <li>
            📧 <span className="font-medium text-[#062D4C]">Email:</span>{" "}
            <a
              href="mailto:info@mediend.com"
              className="text-[#14967F] hover:underline"
            >
              info@mediend.com
            </a>
          </li>

          <li>
            🕘 <span className="font-medium text-[#062D4C]">Business Hours:</span>
            <br />
            Mon–Sat: 9 AM – 7 PM
          </li>

          <li>
            🚨 <span className="font-medium text-[#062D4C]">Emergency Support:</span>
            <br />
            24/7 emergency support available
          </li>
        </ul>
      </div>

      {/* RIGHT: GOOGLE MAP */}
      <div className="w-full h-[260px] sm:h-[320px] md:h-[360px] rounded-xl overflow-hidden border border-[#E5EAF2]">
        <iframe
          src="https://www.google.com/maps?q=H-166,+Sector+63,+Noida,+Uttar+Pradesh&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="mediEND Hospital Location"
        />
      </div>

    </div>

  </div>
</section>



    </>
  );
}
