import { useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function Contact() {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send email using EmailJS
      await emailjs.send(
        "service_r2w7o4a", // Replace with your EmailJS Service ID
        "template_cuoo435", // Replace with your EmailJS Template ID
        {
          from_name: formData.Name,
          from_email: formData.Email,
          message: formData.Message,
          to_email: "ainedushimire@gmail.com",
        },
        "kT9n9xH7-h0GRDad7" // Replace with your EmailJS Public Key
      );

      setFormData({ Name: "", Email: "", Message: "" });
    } catch (error) {
      console.error("Error sending email: ", error);
    } finally {
      setIsSubmitting(false);
    }
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
                  className="w-full px Grown px-4 py-3 text-gray-900 placeholder:text-gray-500 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-100 transition-all duration-200"
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
                disabled={isSubmitting}
                className="w-full py-3 px-8 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-lg transition-all duration-200 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed hover-scale"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

     
    </section>
  );
}