import React, { useState } from "react";
import LocomotiveScrollWrapper from "../components/LocomotiveScrollWrapper";

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <LocomotiveScrollWrapper>
        <div
          className="bg-[url('/assets/black-image.jpg')] bg-cover bg-center p-1"
          style={{
            backgroundAttachment: "fixed", // Optional for parallax effect
          }}
        >
          <div
            className="
        bg-center bg-no-repeat
        bg-[length:auto_16rem]
        bg-fixed
        md:bg-[length:auto_25rem]
      "
            style={{
              backgroundImage: "url('/assets/logo_shivShakti2.png')",
            }}
          >
            <section
              id="about"
              className="relative flex flex-col items-center h-auto m-2 py-5 md:py-0 px-4 md:m-8 border-2 bg-black bg-opacity-70  border-yellow-300"
            >
              <h1
                className="text-3xl text-center md:text-7xl lg:text-7xl text-yellow-400 md:m-20"
                style={{ fontFamily: "Samarkan, cursive" }}
                data-scroll
                data-scroll-class="in-view"
                data-scroll-repeat
              >
                Shiv Shakti Tours & Travels
              </h1>

              <p
                className="text-[.6rem] md:text-lg text-gray-200 max-w-[200ch] text-justify md:text-center py-4 md:p-8 "
                data-scroll
                data-scroll-class="in-view"
                data-scroll-repeat
              >
                <strong>Shiv Shakti Tours & Travels</strong> is a trusted tour and travel company
                based in Delhi, specializing in journeys to iconic destinations
                such as Agra, Mathura, Vrindavan, Khatushyamji Temple, Vaishno
                Devi Mata Temple, and Jaipur. With years of experience, we take
                pride in offering well-organized and comfortable travel
                experiences for pilgrims and explorers alike. Our commitment to
                excellence and unwavering focus on customer satisfaction have
                earned us a reputation for reliability and trustworthiness. At
                Shiv Shakti Tours & Travels, goodwill and customer happiness are
                our utmost priorities, ensuring every journey with us is safe,
                memorable, and fulfilling.
              </p>

              <div
                className={`relative overflow-hidden text-xs md:text-sm p-4 transition-all duration-500 ${
                  isExpanded ? "max-h-screen" : "max-h-0"
                }`}
              >
                <p className="text-[.6rem] md:text-lg text-gray-200 mt-4">
                  Additional information about our company includes our mission
                  to innovate and inspire. We focus on sustainability and
                  prioritize our impact on the community. Our achievements span
                  across multiple industries, making us a trusted name in the
                  market.
                </p>
                <ul className="text-[.6rem] md:text-sm text-gray-200 p-4">
                  <li className="list-disc">
                    Effortless booking process for a seamless travel experience.
                  </li>
                  <li className="list-disc">
                    Round-the-clock customer support through inquiry forms,
                    phone services, or even in-person consultations.
                  </li>
                  <li className="list-disc">
                    Tailor-made holiday and tour packages designed to suit your
                    preferences.
                  </li>
                  <li className="list-disc">
                    Fleet of owned cabs and Tempo Travellers for reliable
                    transport services.
                  </li>
                  <li className="list-disc">
                    Partnering exclusively with verified and registered cab and
                    Tempo vendors to prioritize your safety.
                  </li>
                  <li className="list-disc">
                    24/7 access to backup vehicles, ensuring uninterrupted and
                    on-time journeys.
                  </li>
                </ul>
              </div>
              <button
                onClick={toggleExpand}
                className="mt-4 text-xs md:text-lg text-blue-500 hover:text-blue-700 focus:outline-none"
              >
                {isExpanded ? "Show Less..." : "Show More..."}
              </button>
            </section>
          </div>
        </div>
      </LocomotiveScrollWrapper>
    </>
  );
};

export default About;
