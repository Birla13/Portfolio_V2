import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import {
  collaborationServices,
  contactInfo,
  emailId,
  socialLinks,
} from "../data.js";

const Contact = () => {
  return (
    <section
      id="contact"
      className="section-padding bg-gradient-to-br from-gray-900 to-blue-900 text-white"
    >
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Let's Connect</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Got a project, opportunity, or idea in mind? I'd love to chat about
            how we can build something impactful—together.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-8">Get in Touch</h3>

              <div className="space-y-6 mb-8">
                {contactInfo.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    className="flex items-center gap-4 p-4 bg-white/10 rounded-2xl hover:bg-white/20 transition-all duration-200 backdrop-blur-sm"
                  >
                    <div className="text-blue-300">{contact.icon}</div>
                    <div>
                      <p className="text-gray-300 text-sm">{contact.label}</p>
                      <p className="text-white font-medium">{contact.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Find me on</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-200 backdrop-blur-sm ${social.color} hover:scale-110`}
                      title={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white/10 rounded-3xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6">Ready to collaborate?</h3>

              <div className="space-y-4 mb-8">
                {collaborationServices.map((service, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                    <p className="text-gray-300">{service}</p>
                  </div>
                ))}
              </div>

              <a
                href={`mailto:${emailId}`}
                className="w-full bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <MdOutlineEmail size={20} />
                Start a Conversation
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-16 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Deepanshi
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
