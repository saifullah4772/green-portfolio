import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <img src="/favicon.png" className="w-24" alt="" />
          <span className="ml-3 text-xl">Portfolio</span>
        </a>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © {new Date().getFullYear()} portfolio
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a href="#" className="text-gray-500">
            <BsFacebook size={20} />
          </a>
          <a href="#" className="ml-3 text-gray-500">
            <BsTwitter size={20} />
          </a>
          <a href="#" className="ml-3 text-gray-500">
            <BsInstagram size={20} />
          </a>
          <a href="#" className="ml-3 text-gray-500">
            <BsLinkedin size={20} />
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
