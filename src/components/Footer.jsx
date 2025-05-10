import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-12 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-accent mb-2">John Doe</h2>
            <p className="text-gray-500">Front End Web Developer</p>
          </div>

          <div className="flex space-x-6 mb-6 md:mb-0">
            <a
              href="https://github.com/saad-mamun"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-800 transition text-xl"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-800 transition text-xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://x.com/MdLiton65961236"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-800 transition text-xl"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com/litonalmamun9118/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-800 transition text-xl"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Liton Ali. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
