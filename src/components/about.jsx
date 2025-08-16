import { useScrollAnimation, useStaggeredScrollAnimation } from '../hooks/useScrollAnimation';

export default function AboutMe() {
  const skills = [
    "React", "Next.js", "TypeScript", "Node.js", 
    "Python", "PostgreSQL", "MongoDB", "Tailwind CSS",
    "Java", "Spring Boot", "C", "C++", "MySQL","Php",
    "Fast Api"
  ];

  const sectionRef = useScrollAnimation();
  const skillsRef = useStaggeredScrollAnimation(skills, 50);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <div
          ref={sectionRef}
          className="fade-in-on-scroll text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            About Me
          </h2>
          <div className="max-w-3xl mx-auto space-y-6 text-lg text-gray-600 leading-relaxed">
            <p>
              I&apos;m a passionate full stack developer with over 2 years of experience 
              building web applications. I love turning complex problems into simple, 
              beautiful, and intuitive solutions.
            </p>
            <p>
              When I&apos;m not coding, you&apos;ll find me exploring new technologies, 
              contributing to open source projects, or sharing knowledge with the 
              developer community. I believe in writing clean, maintainable code 
              and creating user experiences that make a difference.
            </p>
          </div>
        </div>

        {/* Skills */}
        <div className="fade-in-on-scroll text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-8">
            Technologies I work with
          </h3>
          <div ref={skillsRef} className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="fade-in-on-scroll px-4 py-2 bg-white text-gray-700 rounded-full border border-gray-200 font-medium hover:border-gray-300 hover:shadow-sm transition-all duration-200 hover-scale"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="fade-in-on-scroll text-center mt-12">
          <a
            href="https://drive.google.com/drive/folders/1K_01CNapPNNnbEGBgJ_D_nlnlrLbR1aE?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors duration-200 hover-scale"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}