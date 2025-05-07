// src/components/Projects.tsx
const Projects = () => {
  return (
    <section id="projects" className="bg-white py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-10 ">
          My Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {/* Project One */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 duration-500 ease-in-out">
            <img
              src="/images/bg.jpg"
              alt="Project 1"
              className="w-full h-56 object-cover rounded-t-lg"
            />
            <h3 className="text-2xl font-semibold mt-5 text-gray-900">
              Project One
            </h3>
            <p className="text-gray-600 mt-3">Proj 1</p>
            <a
              href="#"
              className="text-emerald-500 hover:underline mt-4 inline-block transition duration-300 ease-in-out"
            >
              View Project 1
            </a>
          </div>

          {/* Project Two */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 duration-500 ease-in-out">
            <img
              src="/images/Food2.png"
              alt="Project 2"
              className="w-full h-56 object-cover rounded-t-lg"
            />
            <h3 className="text-2xl font-semibold mt-5 text-gray-900">
              Project Two
            </h3>
            <p className="text-gray-600 mt-3">Proj 2</p>
            <a
              href="#"
              className="text-emerald-500 hover:underline mt-4 inline-block transition duration-300 ease-in-out"
            >
              View Project 2
            </a>
          </div>

          {/* Project Three */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 duration-500 ease-in-out">
            <img
              src="/images/heart.jpg"
              alt="Project 3"
              className="w-full h-56 object-cover rounded-t-lg"
            />
            <h3 className="text-2xl font-semibold mt-5 text-gray-900">
              Project Three
            </h3>
            <p className="text-gray-600 mt-3">Proj 3</p>
            <a
              href="#"
              className="text-emerald-500 hover:underline mt-4 inline-block transition duration-300 ease-in-out"
            >
              View Project 3
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
