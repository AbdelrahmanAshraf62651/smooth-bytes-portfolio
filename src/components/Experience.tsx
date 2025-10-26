import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    title: 'Software Engineering Intern',
    company: 'Tech Startup Inc.',
    location: 'San Francisco, CA',
    period: 'Jun 2024 - Aug 2024',
    type: 'Internship',
    description: 'Developed and optimized React components for a SaaS platform serving 10k+ users.',
    achievements: [
      'Built reusable component library increasing development speed by 40%',
      'Implemented responsive designs with Tailwind CSS',
      'Collaborated with backend team to integrate RESTful APIs',
      'Participated in agile sprints and code reviews',
    ],
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
  },
  {
    title: 'Full-Stack Developer',
    company: 'University Innovation Lab',
    location: 'San Francisco, CA',
    period: 'Jan 2024 - May 2024',
    type: 'Part-time',
    description: 'Led development of web applications for academic research projects.',
    achievements: [
      'Architected and deployed full-stack application with React and Express',
      'Designed PostgreSQL database schema for research data management',
      'Implemented JWT authentication and role-based access control',
      'Mentored 3 junior developers on best practices',
    ],
    tech: ['React', 'Express', 'PostgreSQL', 'Docker'],
  },
  {
    title: 'Open Source Contributor',
    company: 'Various Projects',
    location: 'Remote',
    period: '2023 - Present',
    type: 'Open Source',
    description: 'Active contributor to open-source projects in the JavaScript ecosystem.',
    achievements: [
      'Contributed bug fixes and features to popular GitHub repositories',
      'Maintained documentation for developer tools with 5k+ stars',
      'Collaborated with global team of developers',
      'Reviewed and merged pull requests',
    ],
    tech: ['JavaScript', 'TypeScript', 'Git', 'GitHub Actions'],
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" ref={ref} className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            >
              Work <span className="gradient-text">Experience</span>
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="w-24 h-1 bg-primary mx-auto rounded-full"
            />
          </div>

          {/* Experience Cards */}
          <div className="space-y-6 md:space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title + exp.company}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass-effect p-6 md:p-8 rounded-xl hover:shadow-primary transition-smooth group"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex items-start mb-4 md:mb-0">
                    <div className="p-3 rounded-lg gradient-primary group-hover:shadow-glow transition-smooth flex-shrink-0">
                      <Briefcase className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl md:text-2xl font-bold">{exp.title}</h3>
                      <h4 className="text-lg text-primary">{exp.company}</h4>
                    </div>
                  </div>

                  <div className="flex flex-col text-sm text-muted-foreground space-y-1">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {exp.period}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      {exp.location}
                    </div>
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mt-2 w-fit">
                      {exp.type}
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4">{exp.description}</p>

                <div className="space-y-2 mb-4">
                  {exp.achievements.map((achievement) => (
                    <div key={achievement} className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-2 mt-2 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{achievement}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs rounded-full bg-card border border-border text-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
