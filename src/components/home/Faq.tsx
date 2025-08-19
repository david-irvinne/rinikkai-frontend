import { useState } from "react";
import { ChevronDown } from "lucide-react";

type FaqItemProps = {
  question: string;
  answer: string;
};

function FaqItem({ question, answer }: FaqItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border rounded-lg p-3 bg-white shadow-sm">
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-between w-full text-left"
        aria-expanded={open}
      >
        <span className="font-medium">{question}</span>
        <ChevronDown
          className={`transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <p className="mt-2 text-gray-600 text-sm">{answer}</p>
      )}
    </div>
  );
}

export default function FaqSection() {
  const faqs = [
    { question: "Question1", answer: "Answer for question 1 goes here." },
    { question: "Question2", answer: "Answer for question 2 goes here." },
    { question: "Question3", answer: "Answer for question 3 goes here." },
    { question: "Question4", answer: "Answer for question 4 goes here." },
  ];

  return (
    <section className="p-6 bg-gray-50 rounded-xl">
      <h2 className="text-xl font-bold mb-4 bg-gradient-to-r from-[#4E87CE] to-[#F1F2F3] text-white px-4 py-2 rounded-lg w-fit">
        FAQ
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {faqs.map((faq, idx) => (
          <FaqItem key={idx} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  );
}
