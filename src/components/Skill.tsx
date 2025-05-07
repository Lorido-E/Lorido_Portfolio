const Skill = () => {
  return (
    <div id="skill" className="bg-gray-100 min-h-screen py-16 px-6">
      <div className="text-center mb-12">
        <h2 className="text-5xl md:text-6xl font-extrabold text-gray-800 mb-4">
          Skills
        </h2>
        <p className="text-gray-600 text-lg md:text-xl">
          Technologies I'm familiar with
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 md:gap-12 justify-items-center">
        {[
          "css.png",
          "html.webp",
          "javascript.webp",
          "postgre1.png",
          "react.png",
          "typescript.png",
          "tailwind1.png",
          "slacks.png",
          "github.png",
        ].map((img, index) => (
          <div
            key={index}
            className="bg-white shadow-xl rounded-lg p-6 w-28 h-28 flex items-center justify-center hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out transform"
          >
            <img
              src={`images/${img}`}
              alt={img}
              className="w-16 h-16 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
