import TypewriterEffect from "./TypewriterEffect";
import { FaFacebook, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
const Home = () => {
  return (
    <div
      id="home"
      className="md:flex justify-between md:py-[10rem] md:px-[20rem] pt-5 mb-10 md:mb-40 bg-gray-100"
    >
      <div className="text-center md:w-60 md:text-left">
        <h1 className="md:text-2xl md:font-normal font-bold md:mt-[3.5rem]">
          Hello, I'm Erds Lorido
        </h1>
        <span className="md:text-7xl font-extrabold text-3xl">
          <TypewriterEffect />
        </span>
      </div>

      <div className="md:mt-0 mt-10 flex flex-col items-center">
        <img
          src="images/qweqwe.jpg"
          alt="logo"
          className="rounded-full w-89 h-89 object-cover"
        />

        <div className="flex space-x-4 mt-10">
          <a
            href="https://www.facebook.com/erdsulorido/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="text-2xl text-blue-600 hover:text-blue-800 transition" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-2xl text-blue-400 hover:text-blue-600 transition" />
          </a>
          <a
            href="https://github.com/Lorido-E"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-2xl text-gray-800 hover:text-black transition" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl text-blue-700 hover:text-blue-900 transition" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
