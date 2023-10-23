import { BsLinkedin } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import { FaLocationDot } from "react-icons/fa6";
const Contact = () => {
  return (
    <section className="py-28 bg-neutral-100">
      <div className="container">
        <h2 className="text-green-700 font-bold text-2xl pb-4 uppercase tracking-[0.2em]">
          Contact
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3">
          <div className="flex gap-4 justify-start items-center p-6 shadow-md rounded-md bg-white">
            <BsLinkedin size={40} className="text-green-500" />
            <div>
              <h2>Linkedin</h2>
              <p>saif-ullah-saifi</p>
            </div>
          </div>
          <div className="flex gap-4 justify-start items-center p-6 shadow-md rounded-md bg-white">
            <HiMail size={40} className="text-green-500" />
            <div>
              <h2>Email</h2>
              <p>test123@example.com</p>
            </div>
          </div>
          <div className="flex gap-4 justify-start items-center p-6 shadow-md rounded-md bg-white">
            <FaLocationDot size={40} className="text-green-500" />
            <div>
              <h2>Location</h2>
              <p>Hello World Technologies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
