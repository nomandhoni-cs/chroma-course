import React from "react";
import { Listbox, Transition } from "@headlessui/react";

const Faq = () => {
  return (
    <div className="faq-section bg-light-secondary dark:bg-dark-secondary py-10">
      <div className="container mx-auto p-8">
        <div className="faq-heading text-center">
          <h2 className="text-3xl font-semibold mb-8 text-light-primary dark:text-dark-primary">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="space-y-4">
          <FaqItem question="What is Chroma Course">
            Chroma Course is an online learning community with thousands of
            classes for creative and curious people, on topics including UI/UX
            design crafts, programming, and more. On Chroma Course, you’ll find
            inspiration from hands-on classes and teachers at the top of their
            creative fields, so you can take the next step in your creative
            journey.
          </FaqItem>
          <FaqItem question="What can I learn from Chroma Course">
            Chroma Course has hundreds of classes in everything from UI/UX
            design crafts, programming. If it's something creative, you can
            learn it on Chroma Course.
          </FaqItem>
          <FaqItem question="Can I teach on Chroma Course">
            Yes! Chroma Course teachers are everyday creatives and professionals
            who want to share their passion, and the skills and experience
            they’ve gained in their creative disciplines with a community of
            eager learners.
          </FaqItem>
        </div>
      </div>
    </div>
  );
};

const FaqItem = ({ question, children }) => {
  return (
    <Listbox as="div" className="space-y-2">
      <Listbox.Label className="text-lg font-medium text-light-primary dark:text-dark-primary">
        {question}
      </Listbox.Label>
      <Listbox.Button className="bg-light-primary font-body dark:bg-dark-primary p-4 rounded-md mb-2 w-full">
        Show Answer
      </Listbox.Button>
      <Transition
        as={React.Fragment}
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Listbox.Options>
          <Listbox.Option>
            {({ active }) => (
              <div
                className={`p-4 bg-gray-200 text-black dark:text-white dark:bg-dark-secondary rounded-md transition ${
                  active ? "opacity-100" : "opacity-60"
                }`}
              >
                {children}
              </div>
            )}
          </Listbox.Option>
        </Listbox.Options>
      </Transition>
    </Listbox>
  );
};

export default Faq;
