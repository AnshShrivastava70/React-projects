import React, { useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../context/PlaceContext";

import "../index.css";

const Cards = () => {
  const places = useContext(DataContext);
  const scrollContainerRef = useRef(null);

  return (
    <div
      id="Cards"
      className="w-full h-full bg-slate-100"
      data-scroll-container
      ref={scrollContainerRef}
    >
      <div className="flex justify-center items-center bg-slate-900 text-white p-5 border-4 border-yellow-400">
        <img
          className="bg-none h-12 md:h-20 m-0"
          src="/assets/place.gif"
          alt="Logo"
        />
        <h1 className="md:text-5xl text-center">Destinations We Offer</h1>
      </div>
      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-10">
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-5">
          {places && places.length > 0
            ? places.map((place, index) => {
                const { cardName, cardImg, cardDesc, link } = place;
                // Skip card if no image is available
                if (!cardImg) return null;
                return (
                  <div
                    className="main"
                    key={index}
                    data-scroll
                    data-scroll-class="in-view"
                    data-scroll-repeat
                  >
                    <div className="place-card">
                      <div className="front">
                        <div className="w-full h-full bg-slate-300">
                          <img
                            className="w-full h-full object-contain"
                            src={cardImg}
                            alt={cardName || "Default Name"}
                          />
                        </div>
                      </div>
                      <div className="back flex flex-col justify-between items-center p-3 bg-slate-300 md:bg-slate-300 md:text-black">
                        <span className="block w-full text-2xl border-b-2 border-yellow-500 text-center">
                          {cardName || "Default Name"}
                        </span>
                        <p className="max-w-[35ch] text-justify text-sm">
                          {cardDesc || "Description not available"}
                        </p>
                        {link ? (
                          <Link
                            to={link}
                            className="md:text-purple-600 md:hover:text-yellow-50 p-2 w-1/2 border-2 text-center border-purple-800 hover:bg-purple-800 rounded-md transition-all"
                          >
                            More Info.
                          </Link>
                        ) : (
                          <Link className="p-2 w-1/2 text-center rounded-md transition-all"></Link>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })
            : ""}
        </div>
      </div>
    </div>
  );
};

export default Cards;
