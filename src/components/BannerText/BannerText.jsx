// BannerText.jsx
import React from "react";
import Button from "../Button/Button";
import { Transition } from "@headlessui/react";

export const BannerText = ({ heading, highlitedWord, subheading }) => {
  return (
    <div className="flex flex-col justify-start items-start">
      <h1 className="text-5xl md:text-7xl lg:text-8xl leading-tight font-heading font-bold mb-6 text-black dark:text-white">
        {heading}
        <span className="highlited-word text-light-primary dark:text-dark-primary">
          {highlitedWord}
        </span>
      </h1>
      <Transition
        show={true}
        enter="transition-opacity duration-500"
        enterFrom="opacity-0"
        enterTo="opacity-100"
      >
        <h3 className="text-lg md:text-xl lg:text-2xl text-black dark:text-white">
          {subheading}
        </h3>
      </Transition>
      <Button
        text={"Explore"}
        styleClass={
          "mt-8 bg-light-primary text-white hover:text-light-primary dark:text-black dark:bg-dark-primary hover:bg-light-tertiary hover:border-light-primary dark:hover:bg-dark-tertiary dark:hover:text-white dark:hover:border-dark-primary"
        }
      />
    </div>
  );
};
