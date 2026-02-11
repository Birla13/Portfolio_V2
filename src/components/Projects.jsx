import { projects } from "../data.js";
import SingleProject from "./SingleProject.jsx";

const Projects = () => {
  const featuredProjects = projects.filter((project) => project.isFeatured);

  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Projects
          </h2>
        </div>

        {/* Responsive Grid Layout - Only Featured Projects */}
        <div className="grid md:grid-cols-2 gap-8">
          {featuredProjects.map((project) => (
            <SingleProject project={project} key={project.id} />
          ))}
        </div>

        {/* Centered See All Projects Button - Better Styled */}
        {/* <div className="text-center mt-16">
          <div className="inline-block">
            <p className="text-gray-600 mb-6">
              Showing {featuredProjects.length} featured projects out of{" "}
              {projects.length} total projects
            </p>
            <Link
              to="/projects"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <span>See All Projects</span>
              <BiRightArrowAlt size={24} />
            </Link>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Projects;
