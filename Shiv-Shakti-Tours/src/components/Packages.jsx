
const PackageData = {
  "Delhi Darshan": [
    {
      name: "One Day Delhi Sightseeing Tour",
      info: "Explore the top 8 iconic tourist attractions of Delhi in just one day with our Delhi Local Sightseeing Tour Package. Travel comfortably in our AC cabs, accompanied by an experienced and professional taxi driver.",
      taxiPrice: [
        "Ertiga - ₹2,600",
        "Sedan - ₹1,700",
        "Crysta - ₹3,600",
        "Tampo-Traveller - ₹7,500",
      ],
      taxiHead: "One Day Delhi Darshan",
      image: "/assets/indiagate.jpg",
      id: "one-day-delhi"
    },
    {
      name: "Two Day Delhi Sightseeing Tour",
      info: "Discover the top 16 famous tourist attractions of Delhi, including bustling bazaars, historic monuments, and serene temples, with our 2-Day Delhi City Sightseeing Tour. Enjoy a comfortable journey with our professional and experienced cab drivers.",
      taxiPrice: [
        "Ertiga - ₹5,200",
        "Sedan - ₹3,300",
        "Crysta - ₹7,000",
        "Tampo-Traveller - ₹15,000",
      ],
      taxiHead: "Two Day Delhi Darshan",
      image: "/assets/Lotus.jpg",
    },
  ],
  "Jaipur Tour": [
    {
      name: "One Day Jaipur Sightseeing Tour",
      info: "Experience a One-Day Jaipur Tour, exploring iconic landmarks like Amer Fort, Nahargarh Fort, Jal Mahal, and Hawa Mahal. Travel in comfort with AC cabs and a professional driver for a seamless journey.",
      taxiPrice: [
        "Ertiga - ₹9,300",
        "Sedan - ₹6,400",
        "Crysta - ₹14,000",
        "Tampo-Traveller - ₹18,000",
      ],
      taxiHead: "One Day Jaipur Tour",
      image: "/assets/Jaipur_oneday.jpg",
    },
  ],
  "Khatu Shyam Ji & Salasar Balaji Temple": [
    {
      name: "One Day khatu Shyamji Tour",
      info: "Embark on a soulful journey to Khatu Shyam Ji Temple, a revered pilgrimage site in Rajasthan. Travel hassle-free with our sanitized and comfortable transport, ensuring a peaceful and seamless experience. Seek blessings and immerse yourself in the temple’s divine aura and rich heritage.",
      taxiPrice: [
        "Ertiga - ₹11,000",
        "Sedan - ₹8,700",
        "Crysta - ₹14,500",
        "Tampo-Traveller - ₹18,000",
      ],
      taxiHead: "One Day khatu shyam ji Tour",
      image: "/assets/placeImg/shyamji1.jpg",
    },
    {
      name: "Two Day khatu Shyamji & Salasar Balaji Tour",
      info: "Experience the spiritual essence of Khatu Shyam Ji and Salasar Balaji, two of Rajasthan’s most sacred temples. Our well-organized 2-day tour ensures a smooth journey with sanitized transport, letting you focus on devotion and divine blessings. Witness the faith, history, and sacred energy of these holy sites.",
      taxiPrice: [
        "Ertiga - ₹20,000",
        "Sedan - ₹15,000",
        "Crysta - ₹22,000",
        "Tampo-Traveller - ₹28,000",
      ],
      taxiHead: "Two Day khatu Shyamji & Salasar Balaji Tour",
      image: "/assets/placeImg/cropped-salasar1.jpeg",
    },
  ],
  "Mathura - Vrindavan Tour": [
    {
      name: "One Day Agra-Mathura-Vrindavan Tour",
      info: "Embark on a spiritual journey to Agra, Mathura, and Vrindavan, exploring iconic landmarks like the Taj Mahal and sacred temples. Enjoy hassle-free travel with sanitized transport, ensuring comfort and peace throughout the day. Immerse yourself in the divine ambiance and rich cultural heritage of these revered destinations.",
      taxiPrice: [
        "Ertiga - ₹7,400",
        "Sedan - ₹5,400",
        "Crysta - ₹11,400",
        "Tampo-Traveller - ₹16,000",
      ],
      taxiHead: "One Day Agra-Mathura-Vrindavan Tour",
      image: "/assets/golden-triangle1.png",
    },
    {
      name: "Two Day Mathura - Vrindavan Tour",
      info: "Set off on a divine two-day journey to Mathura and Vrindavan, where you’ll explore the sacred birthplaces and temples of Lord Krishna. Immerse yourself in the spiritual vibes, vibrant ghats, and rich cultural history of these holy towns. Travel in comfort with sanitized transport for a peaceful and seamless experience.",
      taxiPrice: [
        "Ertiga - ₹13,500",
        "Sedan - ₹10,000",
        "Crysta - ₹17,000",
        "Tampo-Traveller",
      ],
      taxiHead: "Two Day Mathura - Vrindavan Tour",
      image: "/assets/Prem__mandir.png",
    },
  ],
  "Agra Tour": [
    {
      name: "One Day Agra-Mathura-Vrindavan Tour",
      info: "Embark on a soulful journey to Khatu Shyam Ji Temple, a revered pilgrimage site in Rajasthan. Travel hassle-free with our sanitized and comfortable transport, ensuring a peaceful and seamless experience. Seek blessings and immerse yourself in the temple’s divine aura and rich heritage.",
      taxiPrice: [
        "Ertiga - ₹7,400",
        "Sedan - ₹5,400",
        "Crysta - ₹11,400",
        "Tampo-Traveller - ₹16,000",
      ],
      taxiHead: "One Day Agra-Mathura-Vrindavan Tour",
      image: "/assets/golden-triangle1.png",
    },
    {
      name: "Sunrise Taj Mahal Agra Tour",
      info: "Experience a two-day journey to Agra, the city of the Taj Mahal, exploring its timeless Mughal heritage. Travel in sanitized cabs and uncover the grandeur of the Taj Mahal, Agra Fort, and more with comfort and ease. Day 1: Depart from Delhi at midnight, reach Agra early morning, and visit the Taj Mahal, Agra Fort, and Mehtab Bagh. Day 2: Explore Fatehpur Sikri (optional at additional cost) and enjoy some local sightseeing before returning to Delhi by evening.",
      taxiPrice: [
        "Ertiga - ₹9,000",
        "Sedan - ₹7,400",
        "Crysta - ₹14,000",
        "Tampo-Traveller"
      ],
      taxiHead: "Sunrise Taj Mahal Agra Tour",
      image: "/assets/sunrise_tajmahal.png",
    },
  ],
};

const Packages = ({ placeName }) => {
  const Packs = PackageData[placeName] || [];

  return (
    <section className="h-auto">
      {Packs.length === 2 ? (
        // Two Packages -> Grid Layout (Same as before)
        <div className="grid grid-flow-row md:grid-flow-col my-4 gap-4">
          {Packs.map((pack, index) => (
            <div
              key={index}
              className='flex flex-col h-full w-full bg-[url("/assets/bg-white.jpg")] bg-cover bg-center bg-fixed'
            >
              <img src={pack.image} alt={pack.name} className="bg-yellow-400 object-cover h-full w-full"/>
              <div className="p-4 md:px-16 flex flex-col justify-between h-full">
                <h1 className="text-center text-2xl border-y-2 border-slate-600 font-bold p-4">
                  {pack.name}
                </h1>
                <p
                  className="text-sm font-normal py-2"
                  style={{ fontFamily: "OpenSans, cursive" }}
                >
                  {pack.info}
                </p>
                <h2 className="font-bold text-slate-700 text-xl">
                  Fare for {pack.taxiHead} by Car:
                </h2>
                <ul className="font-mono p-4 list-disc text-[#42a0df] font-bold">
                  {pack.taxiPrice.map((price, idx) => (
                    <li key={idx} style={{ fontFamily: "OpenSans, cursive" }}>
                      {price}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      ) : (
        // Single Package -> Horizontal Layout
        Packs.map((pack, index) => (
          <div
            key={index}
            className='flex flex-col md:flex-row my-4 bg-[url("https://www.imageshine.in/uploads/gallery/White-elegant-texture-screensaver.jpg")] bg-cover bg-center bg-fixed'
          >
            <img
              src={pack.image}
              alt={pack.name}
              className="md:w-1/3 h-auto p-2 object-contain"
            />
            <div className="p-4 md:w-2/3">
              <h1 className="text-2xl border-y-2 text-center border-slate-600 font-bold p-4">
                {pack.name}
              </h1>
              <p
                className="text-sm font-normal py-2"
                style={{ fontFamily: "OpenSans, cursive" }}
              >
                {pack.info}
              </p>
              <h2 className="font-bold text-slate-700 text-xl">
                Fare for {pack.taxiHead} by Car:
              </h2>
              <ul className="font-mono p-4 list-disc text-[#42a0df] font-bold">
                {pack.taxiPrice.map((price, idx) => (
                  <li key={idx} style={{ fontFamily: "OpenSans, cursive" }}>
                    {price}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))
      )}
    </section>
  );
};

export default Packages;
