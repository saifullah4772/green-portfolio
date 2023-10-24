import { BsFacebook, BsGithub, BsInstagram } from "react-icons/bs";

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
        <span className="flex gap-4 justify-center items-center sm:ml-auto sm:mt-0 mt-4">
          <a
            href="https://www.facebook.com/blackdevil2743"
            target="_blank"
            className="text-gray-700"
          >
            <BsFacebook size={25} />
          </a>
          <a
            href="https://github.com/saifullah4772"
            target="_blank"
            className="text-gray-700"
          >
            <BsGithub size={25} />
          </a>
          <a
            href="https://www.instagram.com/dark.devil.143"
            target="_blank"
            className="text-gray-700"
          >
            <BsInstagram size={25} />
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
