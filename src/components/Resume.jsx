import { BiDownload } from "react-icons/bi";
import { resumeData } from "../data";

const Resume = () => {
  const handleResumeDownload = () => {
    window.open(resumeData.downloadUrl, "_blank");
  };

  return (
    <section className="section-padding bg-white" id="resume">
      <div className="container-custom">
        <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 mb-12 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Want to dig deeper?</h3>
          <p className="text-blue-100 mb-6">
            Download my complete resume to explore my background, skills, and
            detailed work history.
          </p>
          <button
            className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center gap-2 mx-auto"
            onClick={handleResumeDownload}
          >
            <BiDownload size={24} />
            Download Resume
          </button>
        </div>
      </div>
    </section>
  );
};

export default Resume;
