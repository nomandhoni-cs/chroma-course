import { Disclosure, Transition } from "@headlessui/react";
import { HiPlus } from "react-icons/hi2";

const Faq = () => {
  const faqs = [
    {
      question: "What is Chroma Course?",
      answer:
        "Chroma Course is an online learning community with thousands of classes for creative and curious people, on topics including UI/UX design crafts, programming, and more. On Chroma Course, you’ll find inspiration from hands-on classes and teachers at the top of their creative fields, so you can take the next step in your creative journey.",
    },
    {
      question: "What can I learn from Chroma Course?",
      answer:
        "Chroma Course has hundreds of classes in everything from UI/UX design crafts, programming. If it's something creative, you can learn it on Chroma Course.",
    },
    {
      question: "Can I teach on Chroma Course?",
      answer:
        "Yes! Chroma Course teachers are everyday creatives and professionals who want to share their passion, and the skills and experience they’ve gained in their creative disciplines with a community of eager learners.",
    },
    {
      question: "How do I sign up for Chroma Course?",
      answer:
        "You can sign up for Chroma Course by visiting our website and clicking on the 'Sign Up' button. You'll need to provide some basic information like your name and email address, and then you can start exploring our classes right away!",
    },
    {
      question: "Is there a fee to join Chroma Course?",
      answer:
        "Chroma Course offers both free and premium classes. You can explore a wide range of classes for free, but premium classes require a subscription. We believe in providing a flexible learning environment, so we offer various subscription plans to fit your needs.",
    },
    {
      question: "Can I cancel my Chroma Course subscription?",
      answer:
        "Yes, you can cancel your Chroma Course subscription at any time. We value your feedback, so if you choose to cancel, we'd appreciate it if you could let us know why so we can continue to improve our services.",
    },
  ];

  return (
    <div className="faq-section bg-light-secondary dark:bg-dark-secondary py-10">
      <div className="container mx-auto p-8">
        <div className="faq-heading text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold font-heading mb-8 text-light-primary dark:text-dark-primary">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <Disclosure key={index}>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between px-4 py-2 text-left text-xl md:text-2xl lg:text-3xl font-heading font-medium text-light-primary dark:text-dark-primary hover:bg-light-tertiary dark:hover:bg-dark-tertiary border-2 border-transparent border-b-light-primary dark:border-b-dark-primary">
                    <span>{faq.question}</span>
                    <HiPlus
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-8 w-8 text-light-primary dark:text-dark-primary`}
                    />
                  </Disclosure.Button>
                  <Transition
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Disclosure.Panel className="px-4 pb-2 pt-4 font-body text-base md:text-lg lg:text-xl text-gray-700 dark:text-gray-200">
                      {faq.answer}
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
