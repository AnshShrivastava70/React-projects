import { children, createContext } from "react";

export const DataContext = createContext();

const PlaceContext = ({ children }) => {
  const places = [
    {
      name: "Delhi Darshan",
      images: [
        "/assets/placeImg/India_Gate.jpg",
        "/assets/placeImg/Akshardham.jpg",
        "/assets/placeImg/Golden_Temple.jpg",
        "/assets/placeImg/Lotus_Temple.jpg",
        "/assets/placeImg/Qutub_minar.jpg",
        "/assets/placeImg/Red_Fort.jpg",
      ],
      logoimg: [
        "/assets/placeImg/indiagate.png",
        "/assets/placeImg/indiagate.png",
      ],
      cardImg: "/assets/cardImages/Delhi Darshan.jpg",
      cardName: "Delhi Darshan",
      cardDesc:
        "Delhi, India’s capital, blends rich history and modernity. From majestic monuments like the Red Fort to bustling markets and diverse cuisines, it offers a vibrant cultural experience. Explore ancient ruins, scenic gardens, and a diverse range of attractions.",
      link: "/places/Delhi Darshan",
      title: "Delhi Darshan Tour | One-Day Delhi Sightseeing by Cab",
      metaDesc:
        "Explore the heart of India with our Delhi Darshan Tour! Visit India Gate, Qutub Minar, Lotus Temple, and more in a single day with AC cabs and expert drivers.",

      description:
        "Discover the heart of India with a journey through Delhi's rich heritage and culture. Visit the majestic Red Fort, towering Qutub Minar, and serene Lotus Temple. Explore the bustling lanes of Chandni Chowk, savor street food, and shop for souvenirs. Witness the grandeur of India Gate, Rashtrapati Bhavan, and the architectural beauty of Humayun's Tomb. End your day with a tranquil visit to Akshardham Temple or a stroll at Connaught Place, blending history, spirituality, and modern charm.",
      highlights: [
        "Red Fort",
        "Qutub Minar",
        "Lotus Temple",
        "Chandni Chowk",
        "India Gate",
        "Rashtrapati Bhavan",
        `Humayun's Tomb`,
        "Akshardham Temple",
        "Connaught Place",
        "street food",
        "Discover the heart of India",
      ],
      details: [
        "<strong class='text-lg md:text-xl  text-cyan-600'>- Duration:</strong> 8 Hours",
        "<strong class='text-lg md:text-xl text-cyan-600'>- Destinations Covered:</strong> All major attractions in Delhi",
        "<strong class='text-lg md:text-xl text-cyan-600'>- Major Attractions:</strong> India Gate, Qutub Minar, Red Fort, Lotus Temple, Humayun's Tomb, Akshardham Temple",
      ],
      destinations: [
        " Qutub Minar → Red Fort → Raj Ghat → Jantar Mantar → Chandni Chowk → Lakshmi Narayan Birla Temple → Indira Gandhi Memorial → President House → Parliament House → India Gate → Agrasen ki Baoli → Lotus Temple → Akshardham Temple → Humayun’s Tomb → Jama Masjid → Nizamuddin Dargha → Lodhi Garden → Iskcon Temple → National Museum → Gurudwara Bangla Sahib",
      ],
      autoplay: true,
    },
    {
      name: "Agra Tour",
      img: "/assets/placeImg/Agra.jpg",
      logoimg: [
        "/assets/placeImg/left_taj.png",
        "/assets/placeImg/right_taj.png",
      ],
      cardImg: "/assets/cardImages/Agra.jpg",
      cardName: "Agra Tour",
      cardDesc:
        "Home to the magnificent Taj Mahal, Agra is a city steeped in Mughal history and grandeur. With stunning architecture, vibrant bazaars, and a legacy of love, it is a destination that captivates every traveler’s heart.",
      link: "/places/Agra Tour",
      title: "Agra Tour | Taj Mahal & Agra Fort One-Day Trip",
      metaDesc:
        "Visit the Taj Mahal, Agra Fort, and Mehtab Bagh in our Agra Tour. Enjoy a comfortable one-day trip from Delhi with professional taxi services.",
      description:
        "Experience the grandeur of Mughal heritage with a visit to Agra, the city of the iconic Taj Mahal. From exploring the majestic Agra Fort to marveling at the timeless beauty of the Taj, our multi-day Agra tour promises a blend of history, culture, and luxury. Travel in our sanitized, air-conditioned cabs and immerse yourself in the architectural brilliance that defines this historic city.",
      highlights: [
        "Experience the grandeur of Mughal heritage",
        "Agra Fort",
        "Taj Mahal",
        "architectural brilliance",
        "the timeless beauty of the Taj",
        "a blend of history, culture, and luxury",
      ],
      details: [
        "<strong class='text-lg md:text-xl text-cyan-600'>- Duration:</strong> 1-2 Days",
        "<strong class='text-lg md:text-xl text-cyan-600'>- Destinations Covered:</strong> Delhi to Agra",
        "<strong class='text-lg md:text-xl text-cyan-600'>- Major Attractions:</strong> Taj Mahal, Agra Fort, and <strong class='text-lg md:text-xl text-red-600'>Fatehpur Sikri (available at an additional cost)</strong>",
      ],
    },
    {
      name: "Mathura - Vrindavan Tour",
      img: "/assets/placeImg/Vrindavan.jpg",
      logoimg: ["/assets/placeImg/matke.png", "/assets/placeImg/matke.png"],
      cardImg: "/assets/cardImages/Vrindavan.jpg",
      cardName: "Mathura - Vrindavan Tour",
      cardDesc:
        "Mathura and Vrindavan, the birthplaces of Lord Krishna, are steeped in spirituality and devotion. Surrounded by beautiful temples, sacred ghats, and lively markets, they offer a serene escape into religious heritage. Immerse yourself in the rich culture and divine ambiance of these revered towns.",
      link: "/places/Mathura - Vrindavan Tour",
      title: "Mathura-Vrindavan Tour | Krishna Janmabhoomi Yatra",
      metaDesc:
        "Explore the sacred lands of Mathura and Vrindavan. Visit Krishna Janmabhoomi, Banke Bihari Temple, and Prem Mandir in our spiritual one-day tour.",
      description:
        "Discover the divine charm of Mathura-Vrindavan, the sacred land of Lord Krishna. Explore enchanting destinations such as the famous Banke Bihari Temple, Prem Mandir, Mathura Vrindavan Temples, and sacred sites like Raman Reti and Govardhan Hill. Stroll through these spiritual hubs while soaking in the rich cultural heritage and spiritual energy. Experience vibrant traditions and festivals that bring the essence of Krishna's life to every corner. Our organized Mathura-Vrindavan tour ensures a hassle-free experience with sanitized vehicles and expert planning, allowing you to fully immerse yourself in this sacred journey.",
      highlights: [
        "sacred land of Lord Krishna",
        "Mathura Vrindavan Temples",
        "sacred land of Lord Krishna",
        "Raman Reti",
        "Govardhan Hill",
        "Banke Bihari Temple",
        "Prem Mandir",
        "Sacred Sites",
        "rich cultural heritage and spiritual energy",
        "vibrant traditions and festivals",
      ],
      details: [
        "<strong class='text-lg md:text-xl text-cyan-600'>- Duration:</strong> 1-2 Days",
        "<strong class='text-lg md:text-xl text-cyan-600'>- Destinations Covered:</strong> Delhi To Mathura & Vrindavan",
        "<strong class='text-lg md:text-xl text-cyan-600'>- Major Attractions:</strong> Banke Bihari Temple, Prem Mandir, Mathura Vrindavan Temples, Govardhan Hill",
      ],
      autoplay: false,
    },
    {
      name: "Mata Vaishno Devi Temple",
      img: "/assets/placeImg/Vaishno Devi.jpg",
      description:
        "Embark on a spiritual journey to the revered Mata Vaishno Devi Temple, nestled in the serene Trikuta Mountains. Join us for a well-organized pilgrimage tour, ensuring your comfort and convenience with our sanitized and air-conditioned cabs. Experience the divine energy as you trek to the sacred shrine, revered by millions for its spiritual significance. Let us make your visit to this holy abode truly fulfilling with our tailored travel services.",
      highlights: [
        "Spiritual Journey",
        "Trikuta Mountains",
        "Pilgrimage Tour",
        "trek to the sacred shrine",
        "Experience the divine energy",
      ],
      logoimg: ["/assets/placeImg/mata.png", "/assets/placeImg/mata.png"],
      cardImg: "/assets/cardImages/mata.jpg",
      cardName: "Mata Vaishno Devi Temple",
      cardDesc:
        "Perched amidst the scenic Trikuta Mountains, Vaishno Devi Mandir is one of the holiest shrines in India. A journey of faith and devotion, it offers blessings and spiritual serenity to all who visit.",
      link: "/places/Mata Vaishno Devi Temple",
      title: "Mata Vaishno Devi Yatra | Holy Pilgrimage Tour",
      metaDesc:
        "Embark on a spiritual journey to Mata Vaishno Devi Temple. Enjoy a seamless pilgrimage experience with our tour services. Book your trip now!",
      details: [
        "<strong class='text-lg md:text-xl text-cyan-600'>- Duration:</strong> 3-4 days",
        "<strong class='text-lg md:text-xl text-cyan-600'>- Destinations Covered:</strong> Delhi to Mata Vaishno Devi Temple",
        "<strong class='text-lg md:text-xl text-cyan-600'>- Major Attractions:</strong> Mata Vaishno Devi Temple, Patnitop, Shiv Khori, Raghunath Temple",
      ],
      autoplay: false,
    },
    {
      name: "Char Dham Yatra",
      img: ["/assets/placeImg/CHARDHAM.jpg"],
      logoimg: [
        "/assets/placeImg/kedarnath.png",
        "/assets/placeImg/kedarnath.png",
      ],
      cardImg: "/assets/cardImages/chardham.jpg",
      cardName: "Char Dham Yatra",
      cardDesc:
        "Embark on the sacred Char Dham Yatra, a spiritual journey to the revered shrines of Yamunotri, Gangotri, Kedarnath, and Badrinath. Seek divine blessings and immerse yourself in the tranquil Himalayan landscapes.",
      link: "/places/Char Dham Yatra",
      title: "Chaar Dham Yatra | Sacred Pilgrimage to Uttarakhand Temples",
      metaDesc:
        "Embark on a divine Chaar Dham Yatra! Visit Yamunotri, Gangotri, Kedarnath, and Badrinath with our seamless and comfortable pilgrimage services.",
      description:
        "Experience the divine essence of the Chaar Dham Yatra, a sacred pilgrimage to the four holy shrines—Yamunotri, Gangotri, Kedarnath, and Badrinath—nestled in the serene Himalayas. This spiritual journey takes you through breathtaking landscapes, ancient temples, and revered sites, offering peace, devotion, and adventure. Travel comfortably with our well-planned itinerary and sanitized cabs, ensuring a hassle-free pilgrimage. Let your soul be enriched as you seek blessings and immerse yourself in the divine aura of these sacred destinations.",
      highlights: [
        "the Chaar Dham Yatra, a sacred pilgrimage to the four holy shrines",
        "Yamunotri",
        "Gangotri",
        "Kedarnath",
        "Badrinath",
        "nestled in the serene Himalayas",
        "spiritual journey",
        "breathtaking landscapes",
        "ancient temples",
        "revered sites, offering peace, devotion, and adventure",
      ],
      details: [
        "<strong class='text-lg md:text-xl text-cyan-600'>- Price & duration: </strong> Depend on chosen destinations and customization. ",
        "<strong class='text-lg md:text-xl text-cyan-600'>- Destinations Covered:</strong> Delhi To Uttarakhand",
        "<strong class='text-lg md:text-xl text-cyan-600'>- Major Attractions:</strong> Yamunotri, Gangotri, Kedarnath, and Badrinath",
      ],
      autoplay: false,
    },
    //,
    // {
    //   name: "Shiv Shakti Tours & Travels",
    //   cardImg: "/assets/cardImages/ShivShakti.jpg",
    //   cardName: "Shiv Shakti Tours & Travels",
    //   cardDesc:
    //     "At Shiv Shakti Tours & Travels, we focus on delivering exceptional travel experiences in select destinations. Offering personalized tours, comfortable transport, and expert guidance, we ensure your journey is stress-free and unforgettable. Explore with us and immerse yourself in the beauty and culture of your chosen destination.",
    //   logoimg: ["/assets/placeImg/peacock.png", "/assets/placeImg/peacock.png"],
    // }
    {
      name: "Jaipur Tour",
      img: "/assets/placeImg/Elephant.jpg",
      logoimg: [
        "/assets/placeImg/elephant1.png",
        "/assets/placeImg/elephant2.png",
      ],
      cardImg: "/assets/cardImages/Jaipur.jpg",
      cardName: "Jaipur Tour",
      cardDesc:
        "The Pink City of Jaipur is a treasure trove of royal heritage.From grand palaces and imposing forts to vibrant markets and rich traditions, it offers a mesmerizing glimpse into Rajasthan’s regal past.",
      link: "/places/Jaipur Tour",
      title: "Jaipur Tour | Explore the Pink City in One Day",
      metaDesc:
        "Discover the royal heritage of Jaipur with our one-day tour. Visit Amber Fort, Hawa Mahal, City Palace, and more with AC cabs and expert guides.",
      description:
        "Planning a trip from Delhi to Jaipur? Our expert team is here to organize a memorable multi-day Jaipur tour for you! Travel in our sanitized, air-conditioned cabs and taxis for a comfortable and hassle-free experience. Immerse yourself in the rich heritage of the Pink City as you explore majestic forts, opulent havelis, stunning palaces, vibrant markets, and indulge in authentic Rajasthani cuisine. Let us make your journey truly special with our tailored travel services!",
      highlights: [
        "majestic forts",
        "opulent havelis",
        "authentic Rajasthani cuisine",
        "stunning palaces",
        "the rich heritage of the Pink City",
        "vibrant markets",
        "Jaipur ",
      ],
      details: [
        "<strong class='text-lg md:text-xl text-cyan-600'>- Duration:</strong> 1-2 day",
        "<strong class='text-lg md:text-xl text-cyan-600'>- Destinations Covered:</strong> Delhi to Jaipur",
        "<strong class='text-lg md:text-xl text-cyan-600'>- Major Attractions:</strong> Hawa Mahal, Amer Fort, Nahargarh Fort, Albert Hall Museum, Jal Mahal",
      ],
      autoplay: false,
    },
    {
      name: "Khatu Shyam Ji & Salasar Balaji Temple",
      images: [
        "/assets/placeImg/khatu shyam ji.jpg",
        "/assets/placeImg/Salasar ji.jpeg",
      ],
      cardImg: "/assets/cardImages/Khatushyam.jpg",
      cardName: "Khatu Shyam Ji  & Salasar Balaji Temple",
      cardDesc:
        "Dedicated to Shyam Baba and Salasar Balaji, these sacred temples are revered pilgrimage sites, drawing devotees from all over. Known for their vibrant festivals and deep spiritual significance, they offer a profound sense of faith and divine blessings.",
      link: "/places/Khatu Shyam Ji & Salasar Balaji Temple",
      title: "Khatu Shyam Ji & Salasar Balaji Tour | Divine Pilgrimage",
      metaDesc:
        "Visit the revered temples of Khatu Shyam Ji and Salasar Balaji. Experience a soulful journey with comfortable cabs and expert guides.",
      description:
        "Experience the divine essence of Khatu Shyam Ji and Salasar Balaji, two of Rajasthan’s most revered spiritual sites. Immerse yourself in their sacred aura, rich heritage, and deep devotion while enjoying a seamless and comfortable journey. Let us take care of the travel, so you can focus on seeking blessings and embracing the spiritual serenity of these holy places.",
      highlights: [
        "divine essence of Khatu Shyam Ji and Salasar Balaji",
        "most revered spiritual sites",
        " sacred aura, rich heritage, and deep devotion",
        "seeking blessings and embracing the spiritual serenity of these holy places.",
      ],
      logoimg: ["/assets/placeImg/peacock.png", "/assets/placeImg/peacock.png"],
      details: [
        "<strong class='text-lg md:text-xl text-cyan-600'>- Duration:</strong> 1-2 Days",
        "<strong class='text-lg md:text-xl text-cyan-600'>- Destinations Covered:</strong> Delhi to Khatu Shyam Ji & Salasar Balaji Temple ",
        "<strong class='text-lg md:text-xl text-cyan-600'>- Major Attractions:</strong> Khatu Shyam Ji Temple and Salasar Balaji Temple ",
      ],
      autoplay: true,
    },

    {
      name: "Ayodhya Tour",
      img: "/assets/placeImg/Ram lalla.jpeg",
      logoimg: ["/assets/placeImg/ramji.png", "/assets/placeImg/ramji.png"],
      cardImg: "/assets/cardImages/Ayodhya.jpg",
      cardName: "Ayodhya Tour",
      cardDesc:
        "Ayodhya, the birthplace of Lord Rama, is a city of profound spiritual significance. With its ancient temples, sacred ghats, and deep-rooted mythology, it invites visitors on a journey of faith and history.",
      link: "/places/Ayodhya Tour",
      title: "Ayodhya Tour | Visit Ram Janmabhoomi & Hanuman Garhi",
      metaDesc:
        "Explore the sacred city of Ayodhya, birthplace of Lord Rama. Visit Ram Janmabhoomi, Hanuman Garhi, and other divine sites with our comfortable tour packages.",
      description:
        "Step into the spiritual heart of India with a visit to Ayodhya, the birthplace of Lord Ram. Explore the sacred ghats, magnificent temples, and serene surroundings that narrate tales of divine significance. Our Ayodhya tour ensures a smooth and comfortable journey, offering an immersive experience into the cultural and spiritual essence of this ancient city.",
      highlights: [
        "spiritual heart of India",
        "Ayodhya tour",
        "smooth and comfortable journey",
        "Lord Ram",
        "sacred ghats",
        "magnificent temples",
        "cultural and spiritual essence",
        "ancient city",
      ],
      details: [
        "<strong class='text-lg md:text-xl text-cyan-600'>- Duration:</strong> 3 Days ",
        "<strong class='text-lg md:text-xl text-cyan-600'>- Destinations Covered:</strong> Delhi to Ayodhya",
        "<strong class='text-lg md:text-xl text-cyan-600'>- Major Attractions:</strong> Ram JanmaBhoomi, Hanuman Garhi, Kanak Bhavan, Sri Ramlala Virajman, Saryu River",
      ],
      autoplay: false,
    },
    {
      name: "Himachal Pradesh Tour",
      img: "/assets/placeImg/Manali.jpg",
      logoimg: [
        "/assets/placeImg/mountains.png",
        "/assets/placeImg/mountains.png",
      ],
      cardImg: "/assets/cardImages/Manali.jpg",
      cardName: "Himachal Pradesh Tour",
      cardDesc:
        "Himachal Pradesh, including the enchanting destinations of Manali, offers breathtaking Himalayan landscapes, lush valleys, and snow-capped peaks. Experience the serene beauty of hill stations like Manali and indulge in adventure activities while soaking in the tranquil charm of the region.",
      link: "/places/Himachal Pradesh Tour",
      title: "Himachal Pradesh Tour | Manali, Shimla & More",
      metaDesc:
        "Experience the breathtaking beauty of Himachal Pradesh with our tour. Visit Manali, Shimla, Dharamshala, and more with guided trips and scenic journeys.",
      description:
        "Embark on a breathtaking journey to Himachal Pradesh, the land of majestic mountains, lush valleys, and serene landscapes. Known for its picturesque hill stations like Shimla, Manali, and Dharamshala, Himachal offers a perfect blend of natural beauty, adventure, and cultural experiences. Whether you're strolling through apple orchards, exploring ancient monasteries, or indulging in thrilling activities like paragliding and trekking, Himachal promises an unforgettable escape. Discover tranquil lakes, cascading waterfalls, and the warm hospitality of the locals as you immerse yourself in the charm of the Himalayas.",
      highlights: [
        "Himachal Pradesh",
        "the land of majestic mountains, lush valleys, and serene landscapes.",
        "Shimla, Manali",
        "Dharamshala",
        "ancient monasteries",
        "tranquil lakes",
        "the charm of the Himalayas",
        "paragliding and trekking",
        "cascading waterfalls",
        "apple orchards",
      ],
      details: [
        "<strong class='text-lg md:text-xl text-cyan-600'>- Price & duration: </strong> Depend on chosen destinations and customization. ",
        "<strong class='text-lg md:text-xl text-cyan-600'>- Destinations Covered:</strong> Delhi to Himachal Pradesh",
        "<strong class='text-lg md:text-xl text-cyan-600'>- Major Attractions:</strong> Manali, Shimla, Dalhousie, Dharamshala, Tirth Valley, 9 Devi Temples",
      ],
      autoplay: false,
    },
    {
      name: "Omkareshwar & Mahakaleshwar Temple",
      images: [
        "/assets/placeImg/Omkareshwar.jpeg",
        "/assets/placeImg/Mahakaleshwar.jpg",
      ],
      logoimg: ["/assets/placeImg/om.png", "/assets/placeImg/om.png"],
      cardImg: "/assets/cardImages/Mahakaleshwar.jpg",
      cardName: "Omkareshwar & Mahakaleshwar Temple",
      cardDesc:
        "Omkareshwar and Mahakaleshwar, two revered Jyotirlingas, offer spiritual serenity. Omkareshwar rests on the sacred 'Om'-shaped island, while Mahakaleshwar is famed for its unique Bhasma Aarti.",
      link: "/places/Omkareshwar & Mahakaleshwar Temple",
      title: "Omkareshwar & Mahakaleshwar Tour | Sacred Jyotirlinga Visit",
      metaDesc:
        "Seek divine blessings at Omkareshwar & Mahakaleshwar Temples. Visit two sacred Jyotirlingas with our hassle-free travel services.",
      description:
        "Experience the divinity of Omkareshwar and Mahakaleshwar, two of the 12 sacred Jyotirlingas of Lord Shiva. Omkareshwar, set on the serene banks of the Narmada River, captivates with its spiritual charm and natural beauty. Mahakaleshwar, known for its unique Bhasma Aarti, offers a profound and vibrant spiritual experience. Travel hassle-free with our well-organized tours and sanitized cabs, and immerse yourself in the peaceful ambiance of these holy sites.",
      highlights: [
        "Omkareshwar and Mahakaleshwar",
        "12 sacred Jyotirlingas",
        "Lord Shiva",
        "Narmada River",
        "spiritual charm and natural beauty",
        "Bhasma Aarti",
        "profound and vibrant spiritual experience",
      ],
      details: [
        "<strong class='text-lg md:text-xl text-cyan-600'>- Price & duration: </strong> Depend on chosen destinations and customization.",
        "<strong class='text-lg md:text-xl text-cyan-600'>- Destinations Covered:</strong> Delhi to Omkareshwar & Mahakaleshwar Temple",
        "<strong class='text-lg md:text-xl text-cyan-600'>- Major Attractions:</strong> Mahakaleshwar and Omkareshwar Temple",
      ],
      autoplay: true,
    },
    {
      name: "Uttarakhand Tour",
      images: [
        "/assets/placeImg/GangaArti.jpg",
        "/assets/placeImg/yoga.jpg",
        "/assets/placeImg/Ganga.jpeg",
      ],
      logoimg: [
        "/assets/placeImg/kedarnath.png",
        "/assets/placeImg/kedarnath.png",
      ],
      cardImg: "/assets/cardImages/Uttarakhand.jpg",
      cardName: "Uttarakhand Tour",
      cardDesc:
        "Explore the spiritual and natural beauty of Uttarakhand, known for its serene landscapes and sacred temples. From the holy Haridwar and Rishikesh to the picturesque Nainital, Uttarakhand offers a perfect blend of spirituality and adventure, making it an ideal destination for peace and rejuvenation.",
      link: "/places/Uttarakhand Tour",
      title: "Uttarakhand Tour | Rishikesh, Nainital & Mussoorie Trips",
      metaDesc:
        "Discover the serene beauty of Uttarakhand! Visit Rishikesh, Nainital, Mussoorie, and more with our expertly curated travel packages.",
      description:
        "Discover the breathtaking charm of Uttarakhand, a paradise where spirituality meets adventure. Stroll through the tranquil streets of Rishikesh, the yoga capital of the world, and embrace inner peace along the serene banks of the Ganga. Unwind in the picturesque hill town of Nainital, with its shimmering lake and lush surroundings. For thrill-seekers, Uttarakhand offers an array of adventure activities, from river rafting to trekking through the majestic Himalayas. With our expertly curated tours and sanitized cabs, experience the perfect blend of relaxation, adventure, and spiritual rejuvenation in this heavenly destination.",
      highlights: [
        "Uttarakhand",
        "spirituality meets adventure",
        "Rishikesh",
        "yoga capital of the world",
        "Nainital",
        "adventure activities",
        "majestic Himalayas",
        "serene banks of the Ganga",
        "river rafting to trekking",
      ],
      details: [
        "<strong class='text-lg md:text-xl text-cyan-600'>- Price & duration: </strong> Depend on chosen destinations and customization. ",
        "<strong class='text-lg md:text-xl text-cyan-600'>- Destinations Covered:</strong> Delhi To Uttarakhand",
        "<strong class='text-lg md:text-xl text-cyan-600'>- Major Attractions:</strong> Haridwar, Rishikesh, Nainital, and the sacred Chardham Yatra (Yamunotri, Gangotri, Kedarnath, Badrinath)",
      ],
      autoplay: true,
    },
    {
      name: "Amritsar Tour",
      img: ["/assets/placeImg/goldenTemple.jpg"],
      logoimg: ["/assets/placeImg/Khalsa.png", "/assets/placeImg/Khalsa.png"],
      cardImg: "/assets/cardImages/Amritsar.jpg",
      cardName: "Amritsar Tour",
      cardDesc:
        "Omkareshwar and Mahakaleshwar, two revered Jyotirlingas, offer spiritual serenity. Omkareshwar rests on the sacred 'Om'-shaped island, while Mahakaleshwar is famed for its unique Bhasma Aarti.",
      link: "/places/Amritsar Tour",
      title: "Amritsar Tour | Golden Temple & Wagah Border Trip",
      metaDesc:
        "Explore Amritsar’s top attractions! Visit the Golden Temple, Jallianwala Bagh, and Wagah Border with our seamless tour services.",
      description:
        "Immerse yourself in the rich heritage and spiritual aura of Amritsar, a city that echoes history and devotion. Visit the Golden Temple, a mesmerizing symbol of peace, and witness the electrifying Attari Border Ceremony. Walk through the bustling streets of the old city, savoring authentic Punjabi delicacies and exploring the Partition Museum. Pay tribute at Jallianwala Bagh, a landmark of resilience and history. With our expertly curated tours and sanitized cabs, experience the perfect blend of culture, patriotism, and spirituality in this iconic destination. ",
      highlights: [
        "Amritsar",
        "Golden Temple",
        "Attari Border Ceremony",
        "old city",
        "authentic Punjabi delicacies",
        "Partition Museum",
        "Jallianwala Bagh",
        "culture, patriotism, and spirituality",
      ],
      details: [
        "<strong class='text-lg md:text-xl text-cyan-600'>- Duration:</strong> 2-3 Days",
        "<strong class='text-lg md:text-xl text-cyan-600'>- Destinations Covered:</strong> Delhi To Amritsar",
        "<strong class='text-lg md:text-xl text-cyan-600'>- Major Attractions:</strong> Golden Temple, Attari Border, Jallianwala Bagh",
      ],
      autoplay: false,
    },
    {
      name: "Char Dham Yatra",
      img: ["/assets/placeImg/CHARDHAM.jpg"],
      logoimg: [
        "/assets/placeImg/kedarnath.png",
        "/assets/placeImg/kedarnath.png",
      ],
      link: "/places/Char Dham Yatra",
      title: "Chaar Dham Yatra | Sacred Pilgrimage to Uttarakhand Temples",
      metaDesc:
        "Embark on a divine Chaar Dham Yatra! Visit Yamunotri, Gangotri, Kedarnath, and Badrinath with our seamless and comfortable pilgrimage services.",
      description:
        "Experience the divine essence of the Chaar Dham Yatra, a sacred pilgrimage to the four holy shrines—Yamunotri, Gangotri, Kedarnath, and Badrinath—nestled in the serene Himalayas. This spiritual journey takes you through breathtaking landscapes, ancient temples, and revered sites, offering peace, devotion, and adventure. Travel comfortably with our well-planned itinerary and sanitized cabs, ensuring a hassle-free pilgrimage. Let your soul be enriched as you seek blessings and immerse yourself in the divine aura of these sacred destinations.",
      highlights: [
        "the Chaar Dham Yatra, a sacred pilgrimage to the four holy shrines",
        "Yamunotri",
        "Gangotri",
        "Kedarnath",
        "Badrinath",
        "nestled in the serene Himalayas",
        "spiritual journey",
        "breathtaking landscapes",
        "ancient temples",
        "revered sites, offering peace, devotion, and adventure",
      ],
      details: [
        "<strong class='text-lg md:text-xl text-cyan-600'>- Duration:</strong> 2-3 Days",
        "<strong class='text-lg md:text-xl text-cyan-600'>- Destinations Covered:</strong> Delhi To Uttarakhand",
        "<strong class='text-lg md:text-xl text-cyan-600'>- Major Attractions:</strong> Yamunotri, Gangotri, Kedarnath, and Badrinath",
      ],
      autoplay: false,
    },
  ];

  return (
    <div>
      <DataContext.Provider value={places}>{children}</DataContext.Provider>
    </div>
  );
};

export default PlaceContext;
