import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../context/PlaceContext";
import "../index.css";
import Carousel from "./Carousel/Carousel";
import CarCards from "./CarCards";
import Packages from "./Packages";
import { Helmet } from "react-helmet-async";

const Cardinfo = () => {
  const { placeName } = useParams(); // Extract the place name from the URL.
  const places = useContext(DataContext);

  if (!places) {
    return <div className="p-6 text-center">Loading...</div>; // Handle null/undefined places
  }

  const place = places.find((p) => p.name === placeName);

  const HighlightedText = ({ text, highlights }) => {
    if (!highlights) return <p>{text}</p>;
    const highlightedText = highlights.reduce((acc, highlight) => {
      const regex = new RegExp(`(${highlight})`, "gi");
      return acc.replace(
        regex,
        `<span class="bg-yellow-300 font-bold">$1</span>`
      );
    }, text);

    return <p dangerouslySetInnerHTML={{ __html: highlightedText }} />;
  };

  if (!place) {
    return <div className="p-6 text-center">Place not found.</div>;
  }

  const isCarousel = Array.isArray(place.images) && place.autoplay;

  return (
    <>
      <Helmet>
        <title>{place.title}</title>
        <meta
          name="description"
          content={place.metaDesc}
        />
      </Helmet>
      <div className="p-6 w-full mx-auto bg-slate-800">
        <h1
          className="text-4xl md:text-5xl font-bold text-black mb-4 px-9 py-3 bg-yellow-400 text-center border-b-2 border-slate-600 "
          style={{ fontFamily: "Samarkan, cursive" }}
        >
          {place.name}
        </h1>
        <section
          className="w-full h-auto md:h-auto flex flex-col md:grid md:grid-col-2 md:grid-flow-col justify-evenly items-top bg-[url('/assets/bg-white.jpg')] bg-cover bg-center"
          style={{
            backgroundAttachment: "fixed", // Optional for parallax effect
          }}
        >
          {/* Image Section */}
          <div className="flex justify-center items-center max-h-[80vh] my-4 overflow-hidden shadow-lg">
            {isCarousel ? (
              <div className="flex justify-center items-center overflow-hidden m-5 p-2 md:p-7 object-contain h-[100%] w-full ">
                <Carousel
                  images={place.images}
                  autoplayEnabled={place.autoplay}
                  autoplayDelay={1000}
                />
              </div>
            ) : (
              <img
                src={place.img || "/placeholder-image.jpg"} // Fallback for missing image
                alt={place.name}
                className="w-full h-[80vh] md:h-full md:w-full object-cover p-3 object-top rounded-lg  shadow-lg"
                loading="lazy"
              />
            )}
          </div>

          {/* Info Section */}
          <div
            id="info"
            className=" max-w-[220ch] md:max-w-[70ch] text-justify py-4"
            style={{
              backgroundAttachment: "fixed", // Optional for parallax effect
            }}
          >
            <h2 className="text-center text-lg md:text-2xl flex justify-center items-center bg-black text-gray-50 p-5">
              <img
                className="h-12 md:h-20 mx-1 md:mx-2"
                src={place.logoimg[0]}
                alt="First Logo"
              />
              <span className="border-y-2 border-yellow-400 ">
                {place.name}
              </span>
              <img
                className="h-12 md:h-20 mx-1 md:mx-2"
                src={place.logoimg[1]}
                alt="Last Logo"
              />
            </h2>
            <p className="text-base md:text-lg text-gray-600 p-5 md:p-10">
              <HighlightedText
                text={place.description}
                highlights={place.highlights}
              />
            </p>

            {/* Safely Render Details List */}
            {Array.isArray(place.details) && (
              <div className="border-[1px] border-gray-500 w-full h-auto">
                <h3 className="bg-black text-white p-2">
                  Choose our AC cab options for a comfortable Sightseeing Taxi
                  Tour Packages:
                </h3>

                {Array.isArray(place.details) && (
                  <ul className="p-4">
                    {place.details.map((detail, index) => (
                      <li
                        className="p-1 text-base md:text-lg font-bold"
                        key={index}
                        dangerouslySetInnerHTML={{ __html: detail }}
                      />
                    ))}
                  </ul>
                )}
              </div>
            )}
            <h3 className="text-red-500 font-bold p-4">
              Facilities Offered by Shiv Shakti Tours & Travels:
            </h3>
            <ul className="list-disc px-8 py-0">
              <li>Air-Conditioned Vehicles</li>
              <li>Safe and Sanitized Cabs</li>
              <li>Professional and Experienced Drivers</li>
              <li>Customized Tour Packages</li>
              <li>Flexible Booking Options </li>
              <li>Well-Maintained Vehicles</li>
              <li>Comfortable Seating with Spacious Interiors</li>
              <li>Affordable Pricing with Transparent Billing</li>
              <li>Sightseeing and Tourist Spot Guidance</li>
              <li>Airport and Hotel Transfers</li>
            </ul>
            {place.destinations?.length > 0 && (
              <div className="max-w-xl border-4 border-red-500 border-dotted px-5 m-4 ">
                <h1 className="text-lg md:text-2xl text-white bg-[#D32F2F] font-bold max-w-max p-2 my-4 text-center md:text-left">
                  Important Fare Information ℹ️
                </h1>
                <p
                  className="py-4 text-lg md:text-xl text-slate-800 font-medium"
                  style={{ fontFamily: "OpenSans, cursive" }}
                >
                  Additional charges of Rs. 200 per hour will apply after 8
                  hours or 80 km.
                </p>
              </div>
            )}
          </div>
        </section>
        {place.destinations?.length > 0 && (
          <section className="h-auto w-full bg-slate-900 p-4 md:p-8">
            <h2 className="text-yellow-400 text-2xl md:text-4xl text-center border-4 border-yellow-400 p-5 mb-8 md:mb-4">
              Explore Our Handpicked Destinations & Sightseeing
            </h2>
            <div className="text-white">
              <strong className="border-b-2 border-yellow-400 ">
                Explore:
              </strong>{" "}
              {place.destinations}
            </div>
          </section>
        )}
        <Packages placeName={placeName} />
        <section id="more" className="h-full w-full ">
          <h2 className="text-center text-2xl md:text-3xl my-4 p-5 bg-slate-800 text-white border-4 border-yellow-400">
            Available Cars in {place.name}
          </h2>
          <CarCards placeName={placeName} />
        </section>
      </div>
    </>
  );
};

export default Cardinfo;
