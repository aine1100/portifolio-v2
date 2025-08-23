import { useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function Contact() {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Message: "",
  });

  const sectionRef = useScrollAnimation();

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/aine1100", label: "GitHub" },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/aine-dushiimire-700a372a6/",
      label: "LinkedIn",
    },
    { icon: FaTwitter, href: "https://twitter.com/aine_250", label: "Twitter" },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const subject = `Portfolio Contact from ${formData.Name}`;
    const body = `Name: ${formData.Name}%0D%0AEmail: ${formData.Email}%0D%0A%0D%0AMessage:%0D%0A${formData.Message}`;
    const mailtoLink = `mailto:ainedushimire@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    
    window.open(mailtoLink, '_blank');
    setFormData({ Name: "", Email: "", Message: "" });
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <div ref={sectionRef} className="fade-in-on-scroll text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Let&apos;s Work Together
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I&apos;m always interested in new opportunities and interesting
            projects. Let&apos;s discuss how we can work together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="fade-in-on-scroll space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Get in touch
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Feel free to reach out if you&apos;re looking for a developer,
                have a question, or just want to connect.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-gray-500" size={20} />
                <a
                  href="mailto:ainedushimire@gmail.com"
                  className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
                >
                  ainedushimire@gmail.com
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-medium text-gray-900 mb-4">
                Follow me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-gray-700 transition-all duration-200 hover-scale"
                    aria-label={social.label}
                  >
                    <social.icon size={24} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="fade-in-on-scroll">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="Name"
                  value={formData.Name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full px-4 py-3 text-gray-900 placeholder:text-gray-500 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-100 transition-all duration-200"
                  required
                />
              </div>

              <div>
                <input
                  type="email"
                  name="Email"
                  value={formData.Email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full px-4 py-3 text-gray-900 placeholder:text-gray-500 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-100 transition-all duration-200"
                  required
                />
              </div>

              <div>
                <textarea
                  name="Message"
                  value={formData.Message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows="6"
                  className="w-full px-4 py-3 text-gray-900 placeholder:text-gray-500 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-100 transition-all duration-200 resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-8 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-lg transition-all duration-200 flex items-center justify-center gap-3 hover-scale"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

     
    </section>
  );
}