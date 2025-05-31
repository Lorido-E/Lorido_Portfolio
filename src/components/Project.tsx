// src/components/Projects.tsx
const Projects = () => {
  return (
    <section id="projects" className="bg-white py-16 min-h-screen scroll-mt-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-5">
          My Project
        </h2>

        {/* Optional spacing adjustment */}
        <div className="flex justify-center">
          {/* Project One */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 duration-500 ease-in-out">
            <img
              src="/images/techstate.png"
              alt="Project 1"
              className="w-full h-56 object-cover rounded-t-lg"
            />
            <h3 className="text-2xl font-semibold mt-5 text-gray-900">
              Project One
            </h3>
            <p className="text-gray-600 mt-3">TechState</p>
            <a
              href="https://tech-state.vercel.app/"
              target="_blank"
              className="text-emerald-500 hover:underline mt-4 inline-block transition duration-300 ease-in-out"
            >
              View Techstate
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
