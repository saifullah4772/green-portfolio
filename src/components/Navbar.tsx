import { useState, useEffect } from "react";
import { CgMenu, CgClose } from "react-icons/cg";
const Navbar = () => {
  const [active, setActive] = useState("home");
  const [isMobile, setIsMobile] = useState(false);
  const [isTop, setIsTop] = useState(true);
  const Navigation = [
    { name: "Home", link: "#home", id: "home" },
    { name: "About", link: "#about", id: "about" },
    { name: "Skills", link: "#skills", id: "skills" },
    { name: "Experience", link: "#experience", id: "experience" },
    { name: "Projects", link: "#projects", id: "projects" },
    { name: "Contact", link: "#contact", id: "contact" },
  ];
  useEffect(() => {
    setActive(window.location.hash.substr(1) || "home");

    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsTop(false);
      } else {
        setIsTop(true);
      }
    };

    // Add a scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={`py-4 fixed top-0 left-0 w-full duration-300 z-50 ${
        !isTop ? "bg-neutral-200" : "bg-transparent"
      }`}
    >
      <div className="container">
        <div className="flex justify-between items-center">
          <a href="/" className="brand-logo text-green-500 z-50 text-4xl">
            <img src="/favicon.png" className="w-24" alt="favicon" />
          </a>
          <div className="hidden md:flex justify-center items-center gap-4 lg:gap-8">
            <ul className="flex justify-between items-center gap-4 lg:gap-8">
              {Navigation.map((nav, index) => (
                <li
                  key={index}
                  onClick={() => {
                    setActive(nav.id);
                  }}
                >
                  <a
                    href={nav.link}
                    className={`text-md text-gray-600 font-bold border-b-[3px] duration-300 hover:border-green-500 ${
                      active === nav.id
                        ? "border-green-500"
                        : "border-transparent"
                    }`}
                  >
                    {nav.name}
                  </a>
                </li>
              ))}
            </ul>
            <a
              className="bg-green-600 py-3 px-4 hover:bg-green-700 rounded-md text-neutral-50"
              href="/"
              download
            >
              Resume
            </a>
          </div>
          <div className={isMobile ? "block z-30" : "hidden"}>
            <div className="fixed top-0 left-0 flex flex-col md:hidden justify-center items-center bg-neutral-100 h-screen w-screen md:w-auto md:h-auto gap-8">
              <ul className="flex flex-col justify-between items-center gap-4 text-xl">
                {Navigation.map((nav, index) => (
                  <li
                    key={index}
                    onClick={() => {
                      setActive(nav.id);
                      setIsMobile(false);
                    }}
                  >
                    <a
                      href={nav.link}
                      className={`text-md text-gray-600 font-bold border-b-[3px] duration-300 ${
                        active === nav.id
                          ? "border-green-500"
                          : "border-transparent"
                      }`}
                    >
                      {nav.name}
                    </a>
                  </li>
                ))}
              </ul>
              <a
                className="bg-green-600 py-3 px-4  hover:bg-green-700 rounded-md text-neutral-50"
                href="/"
                download
              >
                Resume
              </a>
            </div>
          </div>
          <div className="block md:hidden z-50">
            {!isMobile ? (
              <span onClick={() => setIsMobile(true)}>
                <CgMenu size={35} />
              </span>
            ) : (
              <span className="z-50" onClick={() => setIsMobile(false)}>
                <CgClose size={35} />
              </span>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
