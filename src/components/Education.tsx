import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const education = [
  {
    degree: 'Bachelor of Computer Engineering',
    institution: 'Helwan University',
    location: 'Cairo',
    period: '2023 - Present',
    description:
      'Focused on software architecture, algorithms, and full-stack development. Grade: 89%',
  },
  {
    degree: 'MERN Stack Developer',
    institution: 'Digital Egypt Pioneers Initiative (DEPI)',
    location: 'Cairo',
    period: '2025 - Present',
    description:
      'Comprehensive training in modern web development technologies including React, Node.js, MongoDB, and cloud deployment practices.',
  },
];

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="education" ref={ref} className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            >
              My <span className="gradient-text">Education</span>
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="w-24 h-1 bg-primary mx-auto rounded-full"
            />
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <motion.div
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent origin-top"
            />

            {/* Education items */}
            <div className="space-y-12 md:space-y-16">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.2 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 -translate-x-1/2">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ delay: 0.7 + index * 0.2 }}
                      whileHover={{ scale: 1.2 }}
                      className="w-4 h-4 bg-primary rounded-full shadow-glow"
                    />
                  </div>

                  {/* Content Card */}
                  <div
                    className={`w-full md:w-5/12 ml-20 md:ml-0 ${
                      index % 2 === 0
                        ? 'md:mr-auto md:pr-12'
                        : 'md:ml-auto md:pl-12'
                    }`}
                  >
                    <motion.div className="glass-effect p-6 md:p-8 rounded-xl hover:shadow-primary transition-smooth group">
                      <div className="flex items-start mb-4">
                        <div className="p-3 rounded-lg gradient-primary group-hover:shadow-glow transition-smooth">
                          <GraduationCap className="w-6 h-6 text-primary-foreground" />
                        </div>
                      </div>

                      <h3 className="text-xl md:text-2xl font-bold mb-2">
                        {edu.degree}
                      </h3>
                      <h4 className="text-lg text-primary mb-3">
                        {edu.institution}
                      </h4>

                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          {edu.period}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2" />
                          {edu.location}
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-4">
                        {edu.description}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
