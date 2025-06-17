import { CgExternal } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";
import { FaSquareBehance } from "react-icons/fa6";

export default function SingleProject({ project }) {
  return (
    <div
      key={project.id}
      className="bg-white rounded-3xl p-6 card-hover h-full flex flex-col relative"
    >
      {/* Project Image/Icon */}
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl h-[25%] md:h-48 flex items-center justify-center mb-6 overflow-hidden">
        <img
          src={project.image}
          alt="Project Thumbnail"
          className="object-center h-full w-full rounded-2xl"
        />
      </div>

      <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>

      <p className="text-gray-600 mb-4 leading-relaxed text-sm">
        {project.description}
      </p>

      {/* Key Highlights - Full list for all projects page */}
      <div className="mb-4">
        <h4 className="font-semibold text-gray-900 mb-2 text-sm">
          Key Highlights:
        </h4>
        <ul className="space-y-1">
          {project.highlights.map((highlight, idx) => (
            <li
              key={idx}
              className="flex items-start gap-2 text-gray-600 text-sm"
            >
              <span className="text-blue-500 mt-1 text-xs">•</span>
              {highlight}
            </li>
          ))}
        </ul>
      </div>

      {/* Tools - Full list */}
      <div className="mb-6">
        <div className="flex flex-wrap gap-2">
          {project.tools.map((tool, idx) => (
            <span
              key={idx}
              className="bg-blue-100 text-blue-700 px-3 py-1 mx-1 rounded-full text-sm font-medium"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>

      {/* Links */}
      <div className="flex gap-2 mt-auto">
        {project.links.github && (
          <a
            href={project.links.github}
            target="_blank"
            className="flex items-center gap-1 bg-gray-900 text-white px-3 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200 text-sm"
            rel="noreferrer"
          >
            <FaGithub size={20} />
            Code
          </a>
        )}
        {project.links.behance && (
          <a
            href={project.links.behance}
            target="_blank"
            className="flex items-center gap-1 bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm"
            rel="noreferrer"
          >
            <FaSquareBehance size={20} />
            Demo
          </a>
        )}
        {project.links.live && (
          <a
            href={project.links.live}
            target="_blank"
            className="flex items-center gap-1 bg-purple-600 text-white px-3 py-2 rounded-lg hover:bg-purple-700 transition-colors duration-200 text-sm"
            rel="noreferrer"
          >
            <CgExternal size={20} />
            Live
          </a>
        )}
      </div>
    </div>
  );
}
