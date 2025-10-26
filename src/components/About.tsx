import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Database, Palette, Zap } from 'lucide-react';

const skills = [
  { name: 'Frontend Development', icon: Palette, items: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'] },
  { name: 'Backend Development', icon: Database, items: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB'] },
  { name: 'Tools & Technologies', icon: Code2, items: ['Git', 'Docker', 'AWS', 'CI/CD'] },
  { name: 'Core Skills', icon: Zap, items: ['Problem Solving', 'Algorithms', 'System Design', 'Testing'] },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-20 md:py-32 relative">
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
              About <span className="gradient-primary bg-clip-text text-transparent">Me</span>
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="w-24 h-1 bg-primary mx-auto rounded-full"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-16">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="order-2 md:order-1"
            >
              <div className="relative group">
                <div className="absolute inset-0 gradient-primary rounded-2xl blur-2xl opacity-30 group-hover:opacity-50 transition-smooth" />
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop"
                  alt="Profile"
                  className="relative rounded-2xl shadow-2xl w-full aspect-square object-cover transform group-hover:scale-[1.02] transition-smooth"
                />
              </div>
            </motion.div>

            {/* About Text */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="order-1 md:order-2 space-y-4"
            >
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                Crafting Digital Experiences
              </h3>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                I'm a passionate Software Engineering student with a keen interest in building
                innovative solutions that make a difference. My journey in tech started with a
                curiosity about how things work, and has evolved into a deep commitment to
                creating elegant, efficient software.
              </p>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                With experience in full-stack development, I thrive on turning complex problems
                into simple, beautiful, and intuitive designs. Whether it's building responsive
                web applications or architecting scalable backend systems, I bring creativity
                and technical expertise to every project.
              </p>
            </motion.div>
          </div>

          {/* Skills Grid */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass-effect p-6 rounded-xl hover:shadow-primary transition-smooth group"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg gradient-primary group-hover:shadow-glow transition-smooth">
                    <skill.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>
                <h4 className="font-semibold text-lg mb-3">{skill.name}</h4>
                <ul className="space-y-2">
                  {skill.items.map((item) => (
                    <li key={item} className="text-muted-foreground text-sm flex items-center">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
