"use client";

import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

function FAQ() {
  const faqs = [
    {
      q: "Does Insurance cover Lipoma excision procedure?",
      a: "This surgery is covered under all personal and corporate insurance as per policy terms & conditions"
    },
    {
      q: "How long does the procedure take?",
      a: "Generally, the procedure takes a minimum of 30 mins, depending on the number of Lipomas."
    },
    {
      q: "Do I have to stay in the hospital?",
      a: "The patient can go home on the same day of procedure (in case of cash payments), Whereas 24-hours hospitalization is required for Insurance Patients."
    },
    {
      q: "How much time should I take off from work or school?",
      a: "In 90% cases, you can resume your normal routine on the next day of your procedure, but healing time may vary and should be discussed with your surgeon."
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
