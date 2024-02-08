import React from "react";
import {
  BsFillAwardFill,
  GiTakeMyMoney,
  RiRoadMapFill,
  MdPayments,
} from "react-icons/all";

const WhyUs = () => {
  const whyUsData = [
    {
      icon: <BsFillAwardFill />,
      heading: "Quality Course",
      info: "We offer the best quality of courses you can ever imagine.",
    },
    {
      icon: <GiTakeMyMoney />,
      heading: "Reasonable Price",
      info: "We offer all our courses at a reasonable price.",
    },
    {
      icon: <MdPayments />,
      heading: "Pay Once",
      info: "Pay one time and forget about billing, get access for a lifetime.",
    },
    {
      icon: <RiRoadMapFill />,
      heading: "Complete Guide",
      info: "We will guide you through the complete roadmap.",
    },
  ];

  return (
    <div className="py-10 dark:bg-dark-secondary">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-2 text-center">
          {whyUsData.map((data, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white dark:bg-dark-tertiary p-6 rounded-lg shadow-md"
            >
              <div className="text-4xl text-light-primary dark:text-dark-primary mb-4">
                {data.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
                {data.heading}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{data.info}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
