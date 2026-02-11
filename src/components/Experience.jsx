import { FaCalendar } from "react-icons/fa";
import { achievements, experienceData } from "../data.js";

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Work Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My professional journey and the impact I've made in improving
            digital experiences.
          </p>
        </div>

        <div className="w-full mx-auto">
          <div className="bg-white rounded-3xl p-8 mb-8 card-hover">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {experienceData.role}
                </h3>
                <p className="text-lg text-blue-600 font-medium mb-2">
                  {experienceData.company}
                </p>
                <div className="flex items-center gap-2 text-gray-600">
                  <FaCalendar size={16} />
                  <span>{experienceData.period}</span>
                </div>
              </div>
              <div className="mt-4 md:mt-0">
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                  Current Role
                </span>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              {experienceData.responsibilities.map((responsibility, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <p className="text-gray-700">{responsibility}</p>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="text-center p-4 bg-gray-50 rounded-2xl"
                >
                  <div className="flex justify-center mb-3">
                    {achievement.icon}
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-2">
                    {achievement.metric}
                  </div>
                  <p className="text-sm text-gray-600">
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
