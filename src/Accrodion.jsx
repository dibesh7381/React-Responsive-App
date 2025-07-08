import React, { useRef, useState } from "react";

const accordionData = [
  {
    id: 1,
    title: "What is React?",
    content: "React is a JavaScript library for building user interfaces."
  },
  {
    id: 2,
    title: "Why use Tailwind CSS?",
    content: "Tailwind provides utility-first classes for rapid UI development."
  },
  {
    id: 3,
    title: "What is useState?",
    content: "useState is a Hook that lets you add state to functional components."
  },
  {
    id: 4,
    title: "What is a Component?",
    content: "Components are reusable building blocks in React."
  },
  {
    id: 5,
    title: "How to make responsive designs?",
    content: "Use Tailwind’s responsive classes like sm:, md:, lg: etc."
  }
];

const AccordionItem = ({ title, content, isOpen, toggle }) => {
  const contentRef = useRef(null);

  return (
    <div className="mb-4 border border-gray-200 rounded-xl overflow-hidden shadow transition-all duration-300">
      <button
        onClick={toggle}
        className="w-full flex justify-between items-center p-4 bg-white hover:bg-gray-50 text-left text-base font-medium"
      >
        <span>{title}</span>
        <span
          className={`transform transition-transform duration-300 text-2xl ${
            isOpen ? "rotate-45 text-red-500" : "rotate-0 text-blue-500"
          }`}
        >
          +
        </span>
      </button>

      <div
        ref={contentRef}
        style={{
          maxHeight: isOpen ? contentRef.current?.scrollHeight + "px" : "0px"
        }}
        className="px-4 text-gray-700 overflow-hidden transition-all duration-300 ease-in-out"
      >
        <div className="py-2 text-sm">{content}</div>
      </div>
    </div>
  );
};

const Accordion = () => {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggle = (index) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-6 mt-10">
      {accordionData.map((item, index) => (
        <AccordionItem
          key={item.id}
          title={item.title}
          content={item.content}
          isOpen={openIndexes.includes(index)}
          toggle={() => toggle(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;


