import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';
import type { Project } from '../types';
import { useEffect } from 'react';
import { ThemeToggle } from '../components/ThemeToggle';
import { useTheme } from '../context/theme';

function ProjectPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { theme } = useTheme();
  const project = projects.find((p: Project) => p.id === id);
  const isDark = theme === 'dark';

  const handleBackClick = () => {
    navigate('/', { state: { scrollToSection: 'projects' } });
  };

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className={`min-h-screen transition-colors duration-300 ${
        isDark ? 'bg-black text-white' : 'bg-[#ffdb67] text-black'
      }`}>
        <ThemeToggle />
        <div className="max-w-3xl mx-auto px-4 sm:px-8 py-16 sm:py-24">
          <button
            type="button"
            onClick={handleBackClick}
            className={`flex items-center gap-2 transition-colors mb-8 ${
              isDark ? 'text-white/60 hover:text-white' : 'text-black/60 hover:text-black'
            }`}
          >
            <ArrowLeft size={20} className="sm:w-6 sm:h-6" />
            <span>Back to Projects</span>
          </button>
          <h1 className="text-3xl sm:text-5xl font-black mb-4">Project not found</h1>
          <p className={isDark ? 'text-white/70' : 'text-black/70'}>
            This project link does not match a published case study.
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark ? 'bg-black text-white' : 'bg-[#ffdb67] text-black'
    }`}>
      <ThemeToggle />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto px-4 sm:px-8 md:px-16 py-8 sm:py-16"
      >
        <motion.button
          type="button"
          onClick={handleBackClick}
          className={`flex items-center gap-2 transition-colors mb-8 sm:mb-16 ${
            isDark ? 'text-white/60 hover:text-white' : 'text-black/60 hover:text-black'
          }`}
          whileHover={{ x: -10 }}
        >
          <ArrowLeft size={20} className="sm:w-6 sm:h-6" />
          <span>Back to Projects</span>
        </motion.button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-black mb-4 sm:mb-6">{project.title}</h1>
            <p className={`text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 ${
              isDark ? 'text-white/60' : 'text-black/60'
            }`}>{project.description}</p>
            <div className="flex flex-wrap gap-3 mb-6 sm:mb-8">
              <span className={`px-3 py-2 rounded-lg text-xs sm:text-sm font-black tracking-wide ${
                isDark ? 'bg-white text-black' : 'bg-black text-[#ffdb67]'
              }`}>
                {project.type}
              </span>
              {project.details.role && (
                <span className={`px-3 py-2 rounded-lg text-xs sm:text-sm ${
                  isDark ? 'bg-white/10 text-white/80' : 'bg-black/10 text-black/80'
                }`}>
                  {project.details.role}
                </span>
              )}
            </div>
            <div className="flex flex-wrap gap-3 mb-8 sm:mb-12">
              {project.details.github && (
                <a
                  href={project.details.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 transition-colors px-3 py-2 rounded-lg ${
                    isDark ? 'bg-white/10 hover:bg-white/20' : 'bg-black/10 hover:bg-black/20'
                  }`}
                >
                  <Github size={18} className="sm:w-5 sm:h-5" />
                  <span>View on GitHub</span>
                </a>
              )}
              {project.details.demo && (
                <a
                  href={project.details.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 transition-colors px-3 py-2 rounded-lg ${
                    isDark ? 'bg-white/10 hover:bg-white/20' : 'bg-black/10 hover:bg-black/20'
                  }`}
                >
                  <ExternalLink size={18} className="sm:w-5 sm:h-5" />
                  <span>Live Demo</span>
                </a>
              )}
              {project.details.caseStudy && (
                <a
                  href={project.details.caseStudy}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 transition-colors px-3 py-2 rounded-lg ${
                    isDark ? 'bg-white/10 hover:bg-white/20' : 'bg-black/10 hover:bg-black/20'
                  }`}
                >
                  <ExternalLink size={18} className="sm:w-5 sm:h-5" />
                  <span>Read Case Study</span>
                </a>
              )}
            </div>

            <div className="space-y-6 sm:space-y-8">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4">Overview</h2>
                <p className={`text-base sm:text-lg leading-relaxed ${
                  isDark ? 'text-white/80' : 'text-black/80'
                }`}>
                  {project.details.overview}
                </p>
              </div>

              {project.details.impact && (
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4">Impact</h2>
                  <ul className={`list-disc list-inside space-y-1 sm:space-y-2 ${
                    isDark ? 'text-white/80' : 'text-black/80'
                  }`}>
                    {project.details.impact.map((item: string) => (
                      <li key={item} className="text-base sm:text-lg">{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div>
                <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4">Key Features</h2>
                <ul className={`list-disc list-inside space-y-1 sm:space-y-2 ${
                  isDark ? 'text-white/80' : 'text-black/80'
                }`}>
                  {project.details.features.map((feature: string) => (
                    <li key={feature} className="text-base sm:text-lg">{feature}</li>
                  ))}
                </ul>
              </div>

              {project.details.architecture && (
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4">Architecture</h2>
                  <ul className={`list-disc list-inside space-y-1 sm:space-y-2 ${
                    isDark ? 'text-white/80' : 'text-black/80'
                  }`}>
                    {project.details.architecture.map((item: string) => (
                      <li key={item} className="text-base sm:text-lg">{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div>
                <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4">Technologies Used</h2>
                <div className="flex flex-wrap gap-2">
                  {project.details.technologies.map((tech: string) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 rounded-full text-xs sm:text-sm ${
                        isDark ? 'bg-white/10' : 'bg-black/10'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 md:mt-0"
          >
            <div className="sticky top-16 space-y-6">
              <img
                src={project.image}
                alt={project.title}
                className="w-full rounded-2xl shadow-2xl mb-4 sm:mb-8"
              />
              <div className={isDark ? 'aspect-video bg-white/5 rounded-2xl overflow-hidden' : 'aspect-video bg-black/5 rounded-2xl overflow-hidden'}>
                {/* Additional project visuals could go here */}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default ProjectPage;
