import React from "react";
import { experiences } from "../../constants";

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">CERTIFICATIONS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my certifications and verified achievements
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-white h-full"></div>

        {/* Experience Entries */}
        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className={`flex flex-col sm:flex-row items-center mb-16 ${
              index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
            }`}
          >
            {/* Timeline Circle */}
            <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10">
              <img
                src={experience.img}
                alt={experience.title}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Content Section */}
            <div
              className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] ${
                index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"
              } sm:ml-44 sm:mr-44 ml-8 transform transition-transform duration-300 hover:scale-105`}
            >
              {/* Flex container for image + details */}
              <div className="flex items-center space-x-6">
                {/* Logo */}
                <div className="w-16 h-16 bg-white rounded-md overflow-hidden">
                  <img
                    src={experience.img}
                    alt={experience.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Title, Company, Date */}
                <div className="flex flex-col">
                  <h3 className="text-xl sm:text-2xl font-semibold text-white">
                    {experience.title}
                  </h3>
                  <h4 className="text-md sm:text-sm text-gray-300">
                    {experience.company_name}
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">
                    {experience.date}
                  </p>
                </div>
              </div>

              {/* Points */}
              <ul className="mt-4 text-gray-400 space-y-2">
                {experience.points.map((point, i) => (
                  <li key={i} className="text-sm leading-relaxed">
                    • {point}
                  </li>
                ))}
              </ul>

              {/* Certificate Link */}
              <div className="mt-4">
                <a
                  href={experience.certificate_link}
                  target="_blank"
                  className="text-purple-400 hover:text-purple-300 underline text-sm"
                >
                  View Certificate →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
