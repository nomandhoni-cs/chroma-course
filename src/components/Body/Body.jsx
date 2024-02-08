// Body.jsx
import React from "react";
import { BannerImg } from "../BannerImg/BannerImg.jsx";
import { BannerText } from "../BannerText/BannerText.jsx";

export const Body = ({ halfBanner }) => {
  return (
    <div className="hero-section bg-light-secondary dark:bg-dark-secondary">
      <div className="container mx-auto rounded-lg bg-light-tertiary mt-5 dark:bg-dark-tertiary">
        <div className="top-banner p-12 md:p-16 lg:p-20">
          <div className="flex flex-col items-center md:flex-row">
            <div className="mb-8 md:mb-0">
              <BannerText
                heading={"Looking for upgrading your "}
                highlitedWord={"Skill?"}
                subheading={"Don't worry, you found the right place!"}
              />
            </div>
            <BannerImg halfBanner={halfBanner} />
          </div>
        </div>
        {/* <hr className="border-light my-8" /> */}
      </div>
    </div>
  );
};
