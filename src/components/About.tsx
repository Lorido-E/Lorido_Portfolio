import { useEffect, useState } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Detect when the section comes into view to trigger fade-in animation
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("aboutSection");
      const position = section?.getBoundingClientRect();
      if (
        position &&
        position.top <= window.innerHeight &&
        position.bottom >= 0
      ) {
        setIsVisible(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Handle scroll behavior with an offset
  const scrollToSection = () => {
    const section = document.getElementById("aboutSection");
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 100, // Adjust this offset as needed
        behavior: "smooth", // Smooth scroll
      });
    }
  };

  return (
    <div
      id="aboutSection"
      className="min-h-screen bg-white flex items-center justify-center px-4 py-16 font-poppins scroll-smooth"
    >
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl">
        <div
          className={`md:w-1/2 text-center md:text-left ${
            isVisible
              ? "opacity-100 transform translate-y-0"
              : "opacity-0 transform translate-y-8"
          } transition-all duration-1000 ease-in-out`}
        >
          <h1 className="text-4xl font-bold mb-4 text-gray-800">
            Personal Details.
          </h1>
          <p className="text-xl text-gray-700 mb-4">
            A passionate and driven Frontend Developer with expertise in
            building responsive, user-friendly websites. I specialize in modern
            technologies like React, TypeScript, and Tailwind CSS.
          </p>
          <p className="text-lg text-gray-600 mb-4">
            Currently pursuing my BSIT degree at Wesleyan University, I’m always
            looking for opportunities to learn and grow as a developer, creating
            innovative and efficient solutions.
          </p>
          <a
            href="/Lorido.pdf"
            className="bg-gray-600 text-white font-bold py-2 px-6 rounded hover:bg-gray-700 transition-colors duration-300"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection();

              // Trigger download manually
              const link = document.createElement("a");
              link.href = "/LoridoE.pdf";
              link.download = "E-Lorido.pdf";
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
          >
            View My Resume
          </a>
        </div>

        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <img
            src="images/erdsu.jpg"
            alt="Profile Picture"
            className="w-72 h-72 md:w-96 md:h-96 object-cover shadow-lg transition-transform duration-500 hover:scale-110 rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
