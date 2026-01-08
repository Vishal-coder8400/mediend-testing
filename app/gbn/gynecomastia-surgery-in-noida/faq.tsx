"use client";

import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

function FAQ() {
  const faqs = [
    {
      q: "What is the right age for Gynecomastia surgery?",
      a: "Usually 18 years+ is the recommended age for surgery but in some cases patient can go for surgery before this age also."
    },
    {
      q: "What is the success rate for Gynecomastia surgery?",
      a: "The result of Gynecomastia surgery are permanent. Taking care of self with diet and exercise will help sustain the results achieved."
    },
    {
      q: "How long does the surgery take?",
      a: "Generally, the procedure takes 45 mins to 1 hr and once you are comfortable then we will discharge on the same day."
    },
    {
      q: "Do I have to stay in the hospital?",
      a: "It is a day care procedure so no admission or stay is required. Within few hours of the surgery you can yourself go back to your home comfortably spend the night in your home."
    }
  ];

  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {faqs.map((item, index) => (
        <div key={index} className="border-b border-gray-300 pb-4">
          
          {/* Question */}
          <button
            className="w-full flex justify-between items-center text-left"
            onClick={() => setOpen(open === index ? null : index)}
          >
            <span className="text-[20px] font-semibold text-gray-900">
              {item.q}
            </span>

            {open === index ? (
              <FiMinus size={26} className="text-[#14967F]" />
            ) : (
              <FiPlus size={26} className="text-[#14967F]" />
            )}
          </button>

          {/* Answer */}
          <div
            className={`transition-all duration-300 text-[17px] text-gray-600 leading-[1.7] overflow-hidden ${
              open === index ? "max-h-[300px] mt-3 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            {item.a}
          </div>

        </div>
      ))}
    </div>
  );
}

export default FAQ;
