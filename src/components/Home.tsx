import TypewriterEffect from "./TypewriterEffect";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
const Home = () => {
  return (
    <div
      id="home"
      className="md:flex h-screen justify-between md:py-[10rem] md:px-[20rem] pt-5 mb-10 md:mb-40 bg-gray-100"
    >
      <div className="text-center md:w-60 md:text-left">
        <h1 className="md:text-2xl md:font-normal font-bold md:mt-[3.5rem] mt-[2rem] text-[1.6rem]">
          Hello, I'm Erds Lorido
        </h1>
        <span className="md:text-7xl font-extrabold text-4xl">
          <TypewriterEffect />
        </span>
      </div>

      <div className="md:mt-0 mt-10 flex flex-col items-center ">
        <div className="shadow-lg rounded-full shadow-amber-600">
          <img
            src="images/qweqwe.jpg"
            alt="logo"
            className="rounded-full w-89 h-89 object-cover "
          />
        </div>
        <div className="flex space-x-4 mt-10">
          <a
            href="https://www.facebook.com/erdsulorido/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="text-2xl text-blue-600 hover:text-blue-800 transition" />
          </a>

          <a
            href="https://github.com/Lorido-E"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-2xl text-gray-800 hover:text-black transition" />
          </a>
          <a
            href="https://www.linkedin.com/in/lorido-era%C3%B1o-32613428b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-2xl text-blue-700 hover:text-blue-900 transition" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
