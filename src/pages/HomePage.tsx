import React, { useRef, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, useScroll } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Briefcase, User, Wrench, Star, Phone, ChevronDown, ExternalLink, FolderGit, Github, Linkedin } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { ThemeToggle } from '../components/ThemeToggle';
import { TubelightNavbar } from '../components/ui/tubelight-navbar';
import { projects } from '../data/projects';
import profilePhoto from '../components/photu.jpeg';

const sections = [
  { id: 'home', title: 'TOP', icon: Star },
  { id: 'about', title: 'ABOUT ME', icon: User },
  { id: 'services', title: 'MY SERVICES', icon: Wrench },
  { id: 'skills', title: 'SKILLS', icon: Code },
  { id: 'projects', title: 'PROJECTS', icon: FolderGit },
  { id: 'experience', title: 'EXPERIENCES', icon: Briefcase },
  { id: 'contact', title: 'CONTACT', icon: Phone }
];

const services = [
  {
    id: 1,
    title: 'AI SaaS Engineering',
    description: 'Building full-stack products with auth, billing, credits, dashboards, reports, and production-ready AI workflows.'
  },
  {
    id: 2,
    title: 'Realtime Voice AI',
    description: 'Shipping low-latency interview and assistant experiences with Gemini Live, AWS Nova Sonic, WebSockets, and telephony bridges.'
  },
  {
    id: 3,
    title: 'Edge & Product Infrastructure',
    description: 'Designing tenant-aware data models, RBAC, audit logs, payments, analytics, and Cloudflare/AWS deployments.'
  }
];

const skills = [
  { name: 'React, Next.js, TypeScript', level: 92 },
  { name: 'Cloudflare Workers, Hono, Edge APIs', level: 88 },
  { name: 'Convex, D1, Postgres-style Data Models', level: 86 },
  { name: 'Gemini Live, Nova Sonic, AI Gateway', level: 88 },
  { name: 'WorkOS Auth, RBAC, Razorpay Billing', level: 84 },
  { name: 'WebSockets, Realtime Voice UX', level: 82 }
];

const experiences = [
  {
    period: 'Feb 2025 - Present',
    role: 'Hirecentive',
    title: 'Software Developer Intern',
    description: 'Building AI hiring and career products across placement management, resume SaaS, realtime voice interviews, coding assessments, RBAC, credits, billing, analytics, and edge infrastructure.'
  },
  {
    period: 'June 2024 - July 2024',
    role: 'Dept. of Digital Tech, Shimla',
    title: 'Machine Learning Intern',
    description: 'Developed NLP tools for document processing and created an AI-powered chatbot for information retrieval.'
  },
  {
    period: '2022 - 2026',
    role: 'Bennett University',
    title: 'BTECH CSE Student',
    description: 'Pursuing Computer Science Engineering with a focus on AI systems, full-stack product development, and cloud-native applications.'
  }
];

function AnimatedSection({ children, className }: { children: React.ReactNode; className?: string }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function HomePage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { theme } = useTheme();
  const [activeSection, setActiveSection] = useState('home');
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = sectionRefs.current[section.id];
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle scrolling to section based on navigation state
  useEffect(() => {
    if (location.state && location.state.scrollToSection) {
      const sectionId = location.state.scrollToSection;
      const sectionElement = sectionRefs.current[sectionId];
      
      if (sectionElement) {
        // Use a small timeout to ensure the scroll happens after render
        setTimeout(() => {
          // Calculate position with offset to scroll a bit higher than the exact section start
          const yOffset = -5; // Positive value scrolls higher (adjust as needed)
          const y = sectionElement.getBoundingClientRect().top + window.pageYOffset - yOffset;
          
          window.scrollTo({ top: y, behavior: 'smooth' });
        }, 100);
      }
      
      // Clear the state to avoid scrolling again on future navigation
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  const scrollToNextSection = () => {
    const aboutSection = sectionRefs.current['about'];
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === 'dark' 
        ? 'bg-black text-white' 
        : 'bg-[#ffdb67] text-black'
    }`}>
      <ThemeToggle />
      
      {/* Progress Bar */}
      <motion.div
        className={`fixed top-0 left-0 right-0 h-1 z-50 hidden sm:block ${
          theme === 'dark' ? 'bg-white' : 'bg-black'
        }`}
        style={{ scaleX: scrollYProgress }}
        initial={{ scaleX: 0 }}
      />

      {/* Right Navigation */}
      <motion.nav 
        className="fixed right-4 sm:right-8 lg:right-12 top-1/3 -translate-y-1/2 z-50 hidden sm:block"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <ul className="space-y-4 sm:space-y-8">
          {sections.map((section) => (
            <motion.li 
              key={section.id}
              whileHover={{ x: -5 }}
              transition={{ duration: 0.2 }}
            >
              <a
                href={`#${section.id}`}
                className={`flex items-center gap-2 sm:gap-3 group ${
                  activeSection === section.id 
                    ? (theme === 'dark' ? 'text-white' : 'text-black')
                    : (theme === 'dark' ? 'text-white/40' : 'text-black/40')
                }`}
              >
                <span className={`text-base sm:text-lg font-bold transition-all duration-300 group-hover:${
                  theme === 'dark' ? 'text-white' : 'text-black'
                }`}>
                  {section.title}
                </span>
              </a>
            </motion.li>
          ))}
        </ul>
      </motion.nav>
      
      {/* Mobile Navigation with TubelightNavbar */}
      <TubelightNavbar 
        items={sections.map(section => ({
          name: section.title,
          url: `#${section.id}`,
          icon: section.icon,
          id: section.id
        }))}
        activeSection={activeSection}
        setActiveSection={(sectionId: string) => {
          const sectionElement = sectionRefs.current[sectionId];
          if (sectionElement) {
            sectionElement.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      />

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-8 md:px-16 lg:px-32">
        <section 
          id="home" 
          ref={el => sectionRefs.current['home'] = el}
          className="min-h-screen flex flex-col justify-center"
        >
          <motion.img
            src={profilePhoto}
            alt="Profile"
            className="w-52 h-52 rounded-full mb-12 object-cover scale-125"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.1 }}
          />
          <motion.h1 
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-4 sm:mb-8 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Mritunjai Chauhan
          </motion.h1>
          <motion.p 
            className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            FULL STACK AI ENGINEER FOR HIRING, VOICE AI, AND SAAS
          </motion.p>
          <motion.p
            className={`max-w-3xl text-base sm:text-xl md:text-2xl leading-relaxed mb-8 sm:mb-12 ${
              theme === 'dark' ? 'text-white/70' : 'text-black/70'
            }`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            I build production-oriented AI products across realtime interviews, resume intelligence, multi-tenant placement workflows, auth, payments, analytics, and edge infrastructure.
          </motion.p>
          <motion.div
            className="flex gap-6 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <a
              href="https://github.com/mritunjaichauhan"
              target="_blank"
              rel="noopener noreferrer"
              className={`hover:opacity-60 transition-opacity`}
            >
              <Github size={32} />
            </a>
            <a
              href="https://linkedin.com/in/mritunjai-chauhan-903607251"
              target="_blank"
              rel="noopener noreferrer"
              className={`hover:opacity-60 transition-opacity`}
            >
              <Linkedin size={32} />
            </a>
          </motion.div>
          <motion.button
            onClick={scrollToNextSection}
            className={`group flex items-center gap-3 text-2xl font-bold hover:opacity-60 transition-opacity`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            whileHover={{ x: 10 }}
          >
            <ChevronDown size={32} className="animate-bounce" />
            <span className="group-hover:translate-x-2 transition-transform duration-300">
              Scroll to learn more
            </span>
          </motion.button>
        </section>

        <section 
          id="about" 
          ref={el => sectionRefs.current['about'] = el}
          className="min-h-screen flex items-center"
        >
          <AnimatedSection>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black mb-6 sm:mb-12">ABOUT ME</h2>
            <div className="space-y-6 sm:space-y-8 text-lg sm:text-xl md:text-2xl leading-relaxed">
              <motion.p
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                I am pursuing BTECH CSE at Bennett University while building production-grade AI and SaaS systems at Hirecentive.
                My strongest work sits at the intersection of full-stack product engineering, realtime AI, and business-critical infrastructure.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                I have worked on multi-tenant university placement software, AI resume products, realtime voice interview simulators,
                coding-assessment flows, credit ledgers, billing integrations, RBAC, analytics, and Cloudflare/AWS deployments.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                I care about systems that ship: clean data models, secure auth boundaries, fast interfaces, measurable funnels,
                and AI experiences that feel useful instead of decorative.
              </motion.p>
            </div>
          </AnimatedSection>
        </section>

        <section 
          id="services" 
          ref={el => sectionRefs.current['services'] = el}
          className="min-h-screen flex items-center"
        >
          <AnimatedSection>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black mb-8 sm:mb-16">MY SERVICES</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-12">
              {services.map((service, index) => (
                <motion.div 
                  key={service.id}
                  className={`${
                    theme === 'dark' 
                      ? 'bg-white/5 hover:bg-white/10' 
                      : 'bg-black/5 hover:bg-black/10'
                  } backdrop-blur-sm p-6 sm:p-12 rounded-2xl transition-all duration-300`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  <h3 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-6">#{service.id}</h3>
                  <h4 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">{service.title}</h4>
                  <p className={`text-base sm:text-xl ${
                    theme === 'dark' ? 'text-white/80' : 'text-black/80'
                  }`}>{service.description}</p>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </section>

        <section 
          id="skills" 
          ref={el => sectionRefs.current['skills'] = el}
          className="min-h-screen flex items-center"
        >
          <AnimatedSection>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black mb-8 sm:mb-16">SKILLS</h2>
            <div className="space-y-8 sm:space-y-12">
              {skills.map((skill, index) => (
                <motion.div 
                  key={skill.name}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-between mb-2 sm:mb-4 text-lg sm:text-xl md:text-2xl font-bold">
                    <span>{skill.name}</span>
                    <span className="ml-4">{skill.level}%</span>
                  </div>
                  <div className={`h-2 sm:h-3 w-full ${
                    theme === 'dark' ? 'bg-white/10' : 'bg-black/10'
                  } rounded-full overflow-hidden`}>
                    <motion.div
                      className={`h-full ${
                        theme === 'dark' ? 'bg-white' : 'bg-black'
                      } rounded-full`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </section>

        <section 
          id="projects" 
          ref={el => sectionRefs.current['projects'] = el}
          className="min-h-screen flex items-center"
        >
          <AnimatedSection>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black mb-8 sm:mb-16">PROJECTS</h2>
            <p className={`max-w-3xl text-lg sm:text-2xl leading-relaxed mb-8 sm:mb-12 ${
              theme === 'dark' ? 'text-white/70' : 'text-black/70'
            }`}>
              Selected work from AI hiring, resume intelligence, realtime voice systems, payments, RBAC, and edge infrastructure.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12">
              {projects.map((project, index) => (
                <motion.div 
                  key={project.id}
                  className="group relative overflow-hidden rounded-2xl cursor-pointer aspect-video"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => navigate(`/project/${project.id}`)}
                >
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <motion.div 
                    className={`absolute inset-0 ${
                      theme === 'dark' ? 'bg-black/80' : 'bg-black/60'
                    } p-4 sm:p-8 flex flex-col justify-end opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300`}
                  >
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 sm:mb-2">{project.title}</h3>
                    <p className="text-base sm:text-lg md:text-xl text-white/80 mb-2 sm:mb-4">{project.description}</p>
                    <p className="text-xs sm:text-sm font-bold text-white/60">{project.type}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </section>

        <section 
          id="experience" 
          ref={el => sectionRefs.current['experience'] = el}
          className="min-h-screen flex items-center"
        >
          <AnimatedSection>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black mb-8 sm:mb-16">EXPERIENCES</h2>
            <div className="space-y-8 sm:space-y-16">
              {experiences.map((exp, index) => (
                <motion.div 
                  key={exp.period} 
                  className={`border-l-4 ${
                    theme === 'dark' ? 'border-white' : 'border-black'
                  } pl-6 sm:pl-12 relative`}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className={`absolute w-4 sm:w-6 h-4 sm:h-6 ${
                    theme === 'dark' ? 'bg-white' : 'bg-black'
                  } rounded-full -left-[10px] sm:-left-[14px] top-2`} />
                  <p className="text-base sm:text-xl mb-2 sm:mb-4">{exp.period}</p>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">{exp.role}</h3>
                  <p className="text-lg sm:text-xl md:text-2xl mb-2 sm:mb-4">{exp.title}</p>
                  <p className={`text-base sm:text-lg md:text-xl ${
                    theme === 'dark' ? 'text-white/80' : 'text-black/80'
                  }`}>{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </section>

        <section 
          id="contact" 
          ref={el => sectionRefs.current['contact'] = el}
          className="min-h-screen flex items-center"
        >
          <AnimatedSection>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black mb-8 sm:mb-16">CONTACT</h2>
            <div className="space-y-6 sm:space-y-8">
              <motion.p 
                className="text-xl sm:text-2xl md:text-3xl"
                whileHover={{ x: 10 }}
              >
                <a 
                  href="mailto:chauhanmritunjai@gmail.com" 
                  className={`flex items-center gap-2 sm:gap-4 hover:opacity-60 transition-opacity group`}
                >
                  chauhanmritunjai@gmail.com
                  <ExternalLink size={20} className="sm:w-8 sm:h-8 group-hover:rotate-45 transition-transform duration-300" />
                </a>
              </motion.p>
              <motion.p 
                className="text-xl sm:text-2xl md:text-3xl"
                whileHover={{ x: 10 }}
              >
                <a 
                  href="tel:+919816384043" 
                  className={`flex items-center gap-2 sm:gap-4 hover:opacity-60 transition-opacity group`}
                >
                  +91 9816384043
                  <Phone size={20} className="sm:w-8 sm:h-8 group-hover:rotate-45 transition-transform duration-300" />
                </a>
              </motion.p>
              <div className="flex gap-6 mt-8">
                <a
                  href="https://github.com/mritunjaichauhan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`hover:opacity-60 transition-opacity`}
                >
                  <Github size={32} />
                </a>
                <a
                  href="https://linkedin.com/in/mritunjai-chauhan-903607251"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`hover:opacity-60 transition-opacity`}
                >
                  <Linkedin size={32} />
                </a>
              </div>
            </div>
          </AnimatedSection>
        </section>
      </div>
    </div>
  );
}

export default HomePage;
