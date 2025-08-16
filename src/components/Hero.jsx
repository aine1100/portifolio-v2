import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Hero() {
  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/aine1100", label: "GitHub" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/aine-dushiimire-700a372a6/", label: "LinkedIn" },
    { icon: FaTwitter, href: "https://twitter.com/aine_250", label: "Twitter" },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center pt-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        {/* Profile Image */}
        <div className="mb-8 animate-scale-in animate-stagger-2">
          <img
            src="/aine.jpeg"
            alt="Dushimire Aine"
            className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-gray-100 shadow-lg hover-scale animate-float"
          />
        </div>

        {/* Main Content */}
        <div className="space-y-6 animate-fade-in-up animate-stagger-3">
          {/* Name and Title */}
          <div className="animate-fade-in-up animate-stagger-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
              Dushimire Aine
            </h1>
            <p className="text-xl text-gray-600 font-medium">
              Full Stack Developer
            </p>
          </div>

          {/* Description */}
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto animate-fade-in-up animate-stagger-5">
            I&apos;m a passionate full stack developer based in Kigali, Rwanda. 
            I love creating digital experiences that are both beautiful and functional, 
            with a focus on clean code and user-centered design.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <button
              onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors duration-200 hover-scale"
            >
              View My Work
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 border-2 border-gray-200 text-gray-700 font-medium rounded-lg hover:border-gray-300 hover:bg-gray-50 transition-all duration-200 hover-scale"
            >
              Get In Touch
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 pt-4 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-700 transition-all duration-200 hover-scale hover:-translate-y-1"
                aria-label={social.label}
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}