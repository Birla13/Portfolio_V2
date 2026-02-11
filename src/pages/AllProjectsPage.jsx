import { BiLeftArrowAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import SingleProject from "../components/SingleProject.jsx";
import { projects } from "../data.js";

const AllProjectsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 pt-20">
      <div className="container-custom pb-16">
        {/* Header */}
        <div className="text-center mb-16">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6 transition-colors duration-200"
          >
            <BiLeftArrowAlt size={20} />
            Back to Portfolio
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            All Projects
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive showcase of my design work across various platforms,
            industries, and project types.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <SingleProject project={project} key={project.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProjectsPage;
