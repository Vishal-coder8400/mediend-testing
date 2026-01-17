"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
  FaUserMd,
  FaWallet,
  FaRoute,
  FaHeadset,
} from "react-icons/fa";
import { HiOutlineLocationMarker, HiOutlineCalendar } from "react-icons/hi";
import { FiAlertCircle, FiUsers ,FiMapPin, FiPhone, FiMail, FiClock} from "react-icons/fi";
import { Modal } from "@mantine/core";
import Appointment from "../components/Appointment/Appointment";




export default function KundkundHealthcarePage() {
   const [openAppointment, setOpenAppointment] = useState(false);
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

  {/* CONTENT WRAPPER */}
  <div
    className="
      relative
      w-full
      px-5 sm:px-6 lg:px-8
      pt-10 sm:pt-20 md:pt-28
    "
  >
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

      {/* LEFT CONTENT */}
      <div className="max-w-2xl">

        {/* BADGE */}
        <span
          className="
            inline-flex
            items-center
            gap-2
            mb-6
            px-4 sm:px-10 lg:px-16
            py-2 sm:py-2.5
            rounded-full
            bg-[#062D4C]
            text-white
            text-sm sm:text-lg lg:text-xl
            font-semibold
            whitespace-nowrap
            overflow-hidden
            text-ellipsis
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
        <div className="mt-10 flex flex-wrap mb-4 gap-4">
          <button
          onClick={() => setOpenAppointment(true)}
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

          <a
             href="https://wa.me/918750300099?text=Hi%2C%20I%20need%20help%20with%20surgical%20services."
            target="_blank"
             rel="noopener noreferrer"
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
          </a>
        </div>
      </div>

      {/* RIGHT WHATSAPP HELP CARD */}
      <div className="hidden lg:flex justify-end">
        <div
          className="
            bg-white
            rounded-2xl
            shadow-xl
            border border-[#E5E7EB]
            p-8
            max-w-sm
            w-full
          "
        >
          <h3 className="text-[#062D4C] font-semibold text-xl">
            Your Surgical Journey Starts Here
          </h3>

          <p className="mt-3 text-sm text-[#4B5563]">
           Connect instantly with mediEND’s care experts on WhatsApp for surgeon consultation, treatment details, and hassle-free appointment booking—powered by Kundkund Healthcare.
          </p>

          <a
            href="https://wa.me/918750300099?text=Hi%2C%20I%20need%20help%20with%20surgical%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="
              mt-6
              flex
              items-center
              justify-center
              gap-2
              w-full
              bg-[#14967F]
              hover:bg-[#12806D]
              text-white
              py-3
              rounded-lg
              text-sm
              font-semibold
              shadow-md
              transition
            "
          >
            Start WhatsApp Chat
          </a>

          <p className="mt-4 text-xs text-center text-[#6B7280]">
            +91 87503 00099
          </p>
        </div>
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


{/* ================= COMPANY OVERVIEW ================= */}
{/* ================= COMPANY OVERVIEW ================= */}
<section className="w-full bg-[#ECF1FB] py-12 sm:py-16 md:py-20">
  <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

    <div className="max-w-3xl mx-auto bg-white rounded-xl p-5 sm:p-7 border border-[#E5EAF2] shadow-sm">

      <h2
        className="
          text-[#062D4C]
          font-semibold
          text-[24px]
          sm:text-[28px]
          md:text-[32px]
          text-center
        "
      >
        KUNDKUND HEALTHCARE PRIVATE LIMITED
      </h2>

      <div
        className="
          mt-5
          text-[#4B5563]
          text-sm
          sm:text-[14px]
          leading-snug
          space-y-4
          text-left
        "
      >
        <p>
          <span className="font-semibold">KUNDKUND HEALTHCARE PRIVATE LIMITED</span> is a dynamic healthcare services
          company incorporated on 8th December 2022, registered with the
          RoC-Kanpur and based in Vasundhara, Ghaziabad, Uttar Pradesh. Built on a
          foundation of integrity and compliance, the company focuses on
          delivering dependable value through ethical practices and long-term
          stakeholder relationships. As a privately held entity, it is committed
          to enhancing healthcare access and outcomes across India.
        </p>

        <p>
          A key initiative under the company’s umbrella is{" "}
          <span className="font-semibold">mediEND</span>, a specialized healthcare
          brand powered by KUNDKUND HEALTHCARE. mediEND is dedicated to providing
          advanced, affordable, and hassle-free surgical care with a strong
          patient-centric approach. Through mediEND, patients gain access to a
          broad network of qualified surgeons, personalized consultations, and
          comprehensive care from diagnosis through post-operative recovery.
          The platform’s mission is to simplify surgical journeys, making safe
          and modern surgical services more accessible for everyone. Guided by
          experienced leadership and a commitment to innovation, KUNDKUND
          HEALTHCARE and its mediEND brand continue to reshape how surgical care
          is delivered — combining technology with compassion for better patient
          outcomes.
        </p>
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
        md:grid-cols-3
        lg:grid-cols-4
        gap-6
      "
    >
      {[
        {
          title: "Aesthetics",
          slug: "aesthetics",
          img: "/assets/specialities/aesthetics2.png",
          p1: "Enhance your appearance with advanced aesthetic procedures designed for natural, confident results.",
          p2: "Our expert surgeons focus on precision, safety, and personalized cosmetic care."
        },
        {
          title: "Ophthalmology",
          slug: "ophthalmology",
          img: "/assets/specialities/ophthalmology2.png",
          p1: "Comprehensive eye care solutions for clear vision and long-term eye health.",
          p2: "We offer advanced surgical treatments using modern technology and experienced specialists."
        },
        {
          title: "Proctology",
          slug: "proctology",
          img: "/assets/specialities/proctology2.png",
          p1: "Effective treatment for piles, fissures, fistula, and other anorectal conditions.",
          p2: "Our minimally invasive procedures ensure faster recovery and maximum comfort."
        },
        {
          title: "Laparoscopy",
          slug: "laparoscopy",
          img: "/assets/specialities/Laparoscopy1.png",
          p1: "Minimally invasive laparoscopic surgeries for faster healing and reduced pain.",
          p2: "We deliver precise surgical outcomes with shorter hospital stays and quick recovery."
        },
        {
          title: "Urology",
          slug: "urology",
          img: "/assets/specialities/urology2.png",
          p1: "Advanced care for urinary and male reproductive system disorders.",
          p2: "Our urology specialists provide accurate diagnosis and minimally invasive treatments."
        },
        {
          title: "Orthopedics",
          slug: "orthopedics",
          img: "/assets/specialities/orthopedics3.png",
          p1: "Expert treatment for bone, joint, and spine conditions.",
          p2: "We help restore mobility and improve quality of life through advanced orthopedic care."
        },
        {
          title: "Vascular",
          slug: "vascular",
          img: "/assets/specialities/vascular2.png",
          p1: "Specialized care for vein and vascular disorders using modern techniques.",
          p2: "Our treatments focus on improving circulation, comfort, and long-term vascular health."
        },
        {
          title: "ENT",
          slug: "ent",
          img: "/assets/specialities/ENT2.png",
          p1: "Complete care for ear, nose, and throat conditions under one roof.",
          p2: "Our specialists ensure accurate diagnosis and effective surgical solutions."
        },
        {
          title: "Gynecology",
          slug: "gynaecology",
          img: "/assets/specialities/gynaecology2.png",
          p1: "Comprehensive women’s healthcare with advanced gynecological procedures.",
          p2: "We focus on safe, compassionate, and personalized treatment at every stage of life."
        },
        {
          title: "Fertility",
          slug: "fertility",
          img: "/assets/specialities/fertility1.png",
          p1: "Advanced fertility treatments designed to support your journey to parenthood.",
          p2: "Our experts offer personalized care using proven reproductive technologies."
        },
        {
          title: "Weight Loss",
          slug: "weight-loss",
          img: "/assets/specialities/weight-loss1.png",
          p1: "Medically supervised weight-loss surgeries for long-term, sustainable results.",
          p2: "We help you achieve better health, confidence, and improved lifestyle outcomes."
        }
      ].map((card, index) => (
        <div
  key={index}
  className="
    bg-white
    rounded-xl
    overflow-hidden
    border border-[#E5EAF2]
    shadow-sm
    hover:shadow-lg
    transition
    group
    cursor-pointer
  "
>
 <Image
  src={card.img}
  alt={card.title}
  width={400}
  height={220}
  className="
    w-full
    h-[140px]
    sm:h-[160px]
    object-cover
    object-top
    transition
    duration-300
    group-hover:scale-105
  "
/>


  <div className="p-3 flex flex-col h-full">
    <h4 className="text-[#062D4C] font-semibold text-base">
      {card.title}
    </h4>

    <p className="mt-1.5 text-sm text-[#4B5563] leading-snug">
      {card.p1}
    </p>

    <p className="mt-1.5 text-sm text-[#4B5563] leading-snug">
      {card.p2}
    </p>

   <Link
  href={`/department/${encodeURIComponent(card.slug.toLowerCase())}`}
  className="mt-3 text-sm font-semibold text-[#14967F] hover:underline self-start"
>

      Explore details or request cost estimate →
    </Link>
  </div>
</div>

      ))}
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

          {/* NAME */}
          <div>
            <label className="block text-sm font-medium text-[#062D4C] mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder=""
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

          {/* PHONE */}
          <div>
            <label className="block text-sm font-medium text-[#062D4C] mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder=""
              maxLength={10}
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
              <option value="Aesthetic Surgery">Aesthetic Surgery</option>
              <option value="Gynecomastia">Gynecomastia</option>
              <option value="Laser Surgery">Laser Surgery</option>
              <option value="Proctology">Proctology</option>
              <option value="Orthopedics">Orthopedics</option>
              <option value="Urology">Urology</option>
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
              min="1"
              max="120"
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
          <a
            href="https://wa.me/918750300099?text=Hi%2C%20I%20would%20like%20to%20get%20an%20estimated%20surgery%20cost.%20Here%20are%20my%20details%3A"
            target="_blank"
            rel="noopener noreferrer"
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
          </a>

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
<section className="w-full bg-white py-14 sm:py-18 md:py-24">
  <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

      {/* LEFT: CONTACT INFO */}
      <div>
        <h2 className="text-[#062D4C] font-semibold text-[26px] sm:text-[30px] md:text-[36px]">
          Contact & Location
        </h2>

        <ul className="mt-6 space-y-5 text-sm sm:text-[15px] text-[#4B5563]">

          <li className="flex items-start gap-3">
            <FiMapPin className="text-[#14967F] text-lg mt-1" />
            <div>
              <span className="font-medium text-[#062D4C]">
                mediEND Hospital Office
              </span>
              <br />
              H-166, Sector 63, Noida, Uttar Pradesh
            </div>
          </li>

          <li className="flex items-center gap-3">
            <FiPhone className="text-[#14967F] text-lg" />
            <span className="font-medium text-[#062D4C]">Phone:</span>
            <a
              href="tel:+918750300099"
              className="text-[#14967F] hover:underline"
            >
              +91 87503 00099
            </a>
          </li>

          <li className="flex items-center gap-3">
            <FiMail className="text-[#14967F] text-lg" />
            <span className="font-medium text-[#062D4C]">Email:</span>
            <a
              href="mailto:info@mediend.com"
              className="text-[#14967F] hover:underline"
            >
              info@mediend.com
            </a>
          </li>

          <li className="flex items-start gap-3">
            <FiClock className="text-[#14967F] text-lg mt-1" />
            <div>
              <span className="font-medium text-[#062D4C]">
                Business Hours:
              </span>
              <br />
              Mon–Sat: 9 AM – 7 PM
            </div>
          </li>

          <li className="flex items-start gap-3">
            <FiAlertCircle className="text-[#14967F] text-lg mt-1" />
            <div>
              <span className="font-medium text-[#062D4C]">
                Emergency Support:
              </span>
              <br />
              24/7 emergency support available
            </div>
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
