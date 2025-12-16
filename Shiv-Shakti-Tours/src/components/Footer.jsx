import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="https://flowbite.com/" className="flex items-center">
              <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
                {" "}
              </span>
            </a>
          </div>
          <div className="grid grid-rows gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase ">Contact</h2>
              <ul className="text-gray-400 font-medium flex flex-col justify-between">
                <li className="mb-4 text-sm md:text-base">
                  <a target="_blank" className="flex items-start">
                    <svg
                      class="w-8 pr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="m20.487 17.14-4.065-3.696a1.001 1.001 0 0 0-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 0 0 .043-1.391L6.859 3.513a1 1 0 0 0-1.391-.087l-2.17 1.861a1 1 0 0 0-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 0 0 .648-.291l1.86-2.171a.997.997 0 0 0-.085-1.39z"></path>
                    </svg>
                    Phone: +91-9560756716
                    <br />
                    Helpline: +91-9811573457
                  </a>
                </li>
                <li className="mb-4 text-sm md:text-base overflow-hidden">
                  <a target="_blank" className="flex items-start">
                    <svg
                      class="w-8 pr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4.7-8 5.334L4 8.7V6.297l8 5.333 8-5.333V8.7z"></path>
                    </svg>
                    Email: shivshaktitours100@gmail.com
                  </a>
                </li>

                <li className="mb-4 text-sm md:text-base ">
                  <a target="_blank" className="flex items-start font-normal">
                    <svg
                      className="w-16 pr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                    </svg>
                    Address: C/37, Swami Dyanand Colony, Padam Nagar Near Sarai
                    Rohilla Railway Station, New Delhi, Delhi-110007 (India)
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col md:items-center ">
              <h2 className="mb-6 text-sm font-semibold uppercase ">
                Follow us
              </h2>
              <ul className="text-gray-400 font-medium bg-black grid grid-cols-2">
                <li className="p-4 bg-gray-800 flex justify-center items-center cursor-pointer group">
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    className="text-blue-600 transition-all group-hover:scale-150 group-hover:text-white"
                  >
                    <svg
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-10 h-10"
                      viewBox="0 0 24 24"
                    >
                      <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                    </svg>
                    <span className="sr-only">Facebook page</span>
                  </a>
                </li>
                <li className="p-4 flex justify-center items-cente cursor-pointer group">
                  {" "}
                  <a
                    href="https://www.instagram.com/shivshaktitoursandtravels/"
                    target="_blank"
                    className="text-[#962fbf] transition-all group-hover:scale-150 group-hover:text-white"
                  >
                    <svg
                      className="w-10 h-10"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path>
                      <circle cx="16.806" cy="7.207" r="1.078"></circle>
                      <path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"></path>
                    </svg>
                    <span className="sr-only">Instagram page</span>
                  </a>
                </li>
                <li className="p-4 flex justify-center items-center cursor-pointer group">
                  <a
                    href="https://api.whatsapp.com/send?phone=918920068776"
                    target="_blank"
                    className="text-green-500 transition-all group-hover:scale-150 group-hover:text-white"
                  >
                    <svg
                      className="w-10 h-10"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.403 5.633A8.919 8.919 0 0 0 12.053 3c-4.948 0-8.976 4.027-8.978 8.977 0 1.582.413 3.126 1.198 4.488L3 21.116l4.759-1.249a8.981 8.981 0 0 0 4.29 1.093h.004c4.947 0 8.975-4.027 8.977-8.977a8.926 8.926 0 0 0-2.627-6.35m-6.35 13.812h-.003a7.446 7.446 0 0 1-3.798-1.041l-.272-.162-2.824.741.753-2.753-.177-.282a7.448 7.448 0 0 1-1.141-3.971c.002-4.114 3.349-7.461 7.465-7.461a7.413 7.413 0 0 1 5.275 2.188 7.42 7.42 0 0 1 2.183 5.279c-.002 4.114-3.349 7.462-7.461 7.462m4.093-5.589c-.225-.113-1.327-.655-1.533-.73-.205-.075-.354-.112-.504.112s-.58.729-.711.879-.262.168-.486.056-.947-.349-1.804-1.113c-.667-.595-1.117-1.329-1.248-1.554s-.014-.346.099-.458c.101-.1.224-.262.336-.393.112-.131.149-.224.224-.374s.038-.281-.019-.393c-.056-.113-.505-1.217-.692-1.666-.181-.435-.366-.377-.504-.383a9.65 9.65 0 0 0-.429-.008.826.826 0 0 0-.599.28c-.206.225-.785.767-.785 1.871s.804 2.171.916 2.321c.112.15 1.582 2.415 3.832 3.387.536.231.954.369 1.279.473.537.171 1.026.146 1.413.089.431-.064 1.327-.542 1.514-1.066.187-.524.187-.973.131-1.067-.056-.094-.207-.151-.43-.263"
                      ></path>
                    </svg>
                  </a>
                </li>
                <li className="p-4 bg-gray-800 flex justify-center items-center cursor-pointer group">
                  <a
                    href="https://mail.google.com/mail/"
                    target="_blank"
                    className="text-red-600  transition-all group-hover:scale-150 group-hover:text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-10 h-10"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19.545 15.025v-2.421h2.422v-1.815h-2.422V8.368H17.73v2.421h-2.421v1.815h2.421v2.421zM8.052 8.302c1.133 0 1.896.484 2.33.896l1.722-1.67c-1.048-.98-2.415-1.58-4.052-1.58C4.714 5.947 2 8.659 2 12s2.714 6.053 6.052 6.053c3.493 0 5.812-2.457 5.812-5.913 0-.503-.064-.86-.153-1.24H8.049v2.256h3.332c-.158.951-1.011 2.556-3.329 2.556-2.003 0-3.637-1.665-3.637-3.704 0-2.042 1.634-3.706 3.637-3.706z"></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            {/* <div>
              <h2 className="mb-6 text-sm font-semibold uppercase ">Legal</h2>
              <ul className="text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div> */}
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase">
                Quick Links
              </h2>
              <ul className="text-gray-400 text-sm">
                <li className="mb-1">
                  ➤{" "}
                  <Link to="/places/OneDayTour" className="hover:underline">
                    One Day Tours
                  </Link>
                </li>
                <li className="mb-1">
                  ➤{" "}
                  <Link to="/places/Delhi Darshan" className="hover:underline">
                    Delhi Darshan
                  </Link>
                </li>
                <li className="mb-1">
                  ➤
                  <Link to="/places/Char Dham Yatra" className="hover:underline">
                    Char Dham Yatra
                  </Link>
                </li>
                <li className="mb-1">
                  ➤{" "}
                  <Link to="/places/Agra Tour" className="hover:underline">
                    Agra Tour
                  </Link>
                </li>
                <li className="mb-1">
                  ➤{" "}
                  <Link to="/places/Jaipur Tour" className="hover:underline">
                    Jaipur Tour
                  </Link>
                </li>
                <li className="mb-1">
                  ➤{" "}
                  <Link
                    to="/places/Mata Vaishno Devi Temple"
                    className="hover:underline"
                  >
                    Mata Vaishno Devi Temple
                  </Link>
                </li>
                <li className="mb-1">
                  ➤{" "}
                  <Link to="/places/Ayodhya Tour" className="hover:underline">
                    Ayodhya Tour
                  </Link>
                </li>
                <li className="mb-1">
                  ➤{" "}
                  <Link
                    to="/places/Himachal Pradesh Tour"
                    className="hover:underline"
                  >
                    Himachal Pradesh Tour
                  </Link>
                </li>
                <li className="mb-1">
                  ➤{" "}
                  <Link
                    to="/places/Omkareshwar & Mahakaleshwar Temple"
                    className="hover:underline"
                  >
                    Omkareshwar & Mahakaleshwar
                  </Link>
                </li>
                <li className="mb-1">
                  ➤{" "}
                  <Link
                    to="/places/Mathura - Vrindavan Tour"
                    className="hover:underline"
                  >
                    Mathura - Vrindavan Tour
                  </Link>
                </li>
                <li className="mb-1">
                  ➤{" "}
                  <Link
                    to="/places/Khatu Shyam Ji & Salasar Balaji Temple"
                    className="hover:underline"
                  >
                    Khatu Shyam Ji & Salasar Balaji
                  </Link>
                </li>
                <li className="mb-1">
                  ➤{" "}
                  <Link
                    to="/places/Uttarakhand Tour"
                    className="hover:underline"
                  >
                    Uttarakhand Tour
                  </Link>
                </li>
                <li className="mb-1">
                  ➤{" "}
                  <Link to="/places/Amritsar Tour" className="hover:underline">
                    Amritsar Tour
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="flex items-center justify-between">
          <span className="text-xs md:text-sm text-gray-500 text-wrap ">
            © 2025 ShivShaktiTour™. All Rights Reserved. | Developed by
            Ansh Shrivastava (ansh47shrivastava@gmail.com)
          </span>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
