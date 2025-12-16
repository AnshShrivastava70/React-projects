import React from "react";
import LocomotiveScrollWrapper from "./LocomotiveScrollWrapper";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const OneDayTour = () => {
  return (
    <>
      <Helmet>
        <title>Best One-Day Tours | Explore Top Destinations in a Day</title>
        <meta
          name="description"
          content="Discover the best one-day tours to Delhi, Agra, Jaipur, and more. Enjoy hassle-free travel with expert drivers and comfortable cabs. Book now for a memorable trip!"
        />
      </Helmet>

      <LocomotiveScrollWrapper>
        <div className="p-6 w-full mx-auto bg-slate-800 ">
          <h1
            className="text-5xl font-bold text-black mb-4 px-9 py-3 bg-yellow-400 text-center  border-slate-600 "
            style={{ fontFamily: "Samarkan, cursive" }}
          >
            ONE DAY TOURS
          </h1>
          <section className="flex flex-col justify-center items-center">
            <img
              style={{
                objectFit: "cover",
                mask: "linear-gradient(to bottom, #000 20%, transparent)",
              }}
              className="aspect-[20/8] md:aspect-[20/6] "
              src="/assets/ONEDAYTOUR.jpg"
              alt="one day tour"
            />
            <p
              className="text-white px-auto mt-[-30px] md:mt-[-60px] text-center text-sm md:text-xl max-w-[70ch]"
              style={{ fontFamily: "OpenSans, cursive" }}
              data-scroll
              data-scroll-class="in-view"
              data-scroll-repeat
            >
              Want to make the most of your day? Our
              <strong> One-Day Tours</strong> offer a perfect mix of culture,
              history, and spirituality. Explore Delhi’s must-see landmarks or
              dive into the architectural and spiritual wonders of Agra,
              Vrindavan, and Mathura. With expert guides, you’ll experience the
              best of these cities in just one day.
            </p>
          </section>
          <section className="flex flex-col justify-center items-center  md:p-40 w-full h-auto">
            <div
              className="grid  grid-flow-row md:grid-flow-col md:grid-cols-2 w-full m-20 bg-[url('/assets/bg-white.jpg')] bg-cover bg-center bg-fixed"
              data-scroll
              data-scroll-class="in-view"
              data-scroll-repeat
            >
              <div className=" h-72 border-dotted border-4 border-red-500">
                <img
                  className="h-full w-full p-4"
                  src="/assets/delhi.jpg"
                  alt=""
                />
              </div>
              <div className="px-4 pb-8">
                <h3 className="text-xl md:text-2xl border-l-4 border-red-600 p-3 my-4 ">
                  One Day Delhi Tour
                </h3>
                <p className="text-slate-600 text-sm md:text-base">
                  Explore the{" "}
                  <strong className="text-red-400">
                    top 8 iconic tourist attractions of Delhi
                  </strong>
                  top 8 iconic tourist attractions of Delhi in just one day with
                  our Delhi Local Sightseeing Tour Package. Travel comfortably
                  in our AC cabs, accompanied by an experienced and professional
                  taxi driver.
                </p>
                <Link
                  to="/places/Delhi Darshan"
                  className="mt-4 inline-block px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
                >
                  View Pricing
                </Link>
              </div>
            </div>
            <div
              className="grid grid-cols-1 md:grid-cols-2 w-full mx-36 bg-[url('/assets/bg-white.jpg')] bg-cover bg-center bg-fixed"
              data-scroll
              data-scroll-class="in-view"
              data-scroll-repeat
            >
              <div className="order-2 md:order-1 px-6  pb-4">
                <h3 className="text-xl md:text-2xl border-l-4 border-red-600 p-3 my-4">
                  One Day Agra-Vrindavan-Mathura Tour
                </h3>
                <p className="text-slate-600 text-sm md:text-base">
                  Experience the best of
                  <strong className="text-red-400">
                    Agra, Mathura, and Vrindavan
                  </strong>{" "}
                  in a single day with our expertly curated tour. Enjoy
                  hassle-free travel in AC cabs, guided by a knowledgeable and
                  friendly driver.
                </p>
                <Link
                  to="/places/Mathura - Vrindavan Tour"
                  className="mt-4 inline-block px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
                >
                  View Pricing
                </Link>
              </div>
              <div className="order-1 md:order-2 h-72 border-dotted border-4 border-red-500">
                <img
                  className="h-full p-4"
                  src="/assets/golden-triangle.png"
                  alt=""
                />
              </div>
            </div>
            <div
              className="grid  grid-flow-row md:grid-flow-col md:grid-cols-2 w-full m-20 bg-[url('/assets/bg-white.jpg')] bg-cover bg-center bg-fixed"
              data-scroll
              data-scroll-class="in-view"
              data-scroll-repeat
            >
              <div className=" h-72 border-dotted border-4 border-red-500">
                <img
                  className="h-full w-full p-4"
                  src="/assets/jaipur_Onedaytour.jpg"
                  alt=""
                />
              </div>
              <div className="px-4 pb-8">
                <h3 className="text-xl md:text-2xl border-l-4 border-red-600 p-3 my-4 ">
                  One Day Jaipur Tour
                </h3>
                <p className="text-slate-600 text-sm md:text-base">
                  <strong className="text-red-400">
                    Discover the Pink City in a day!
                  </strong>
                  Visit Jaipur’s top attractions,{" "}
                  <strong className="text-red-400">
                    including Amber Fort, Hawa Mahal, City Palace, and Jantar
                    Mantar
                  </strong>
                  . Travel comfortably in AC cabs with an expert driver for a
                  seamless experience.
                </p>
                <Link
                  to="/places/Jaipur Tour"
                  className="mt-4 inline-block px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </section>
        </div>
      </LocomotiveScrollWrapper>
    </>
  );
};

export default OneDayTour;
