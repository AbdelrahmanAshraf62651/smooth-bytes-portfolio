import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';
import cv from '../../assets/cv.pdf';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 gradient-hero -z-10" />

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              x: [null, Math.random() * window.innerWidth],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 md:space-y-8"
        >
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg pt-10 md:text-xl font-medium"
          >
            Hi, I'm
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold"
          >
            Abdelrahman
          </motion.h1>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold"
          >
            Software Engineer
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto"
          >
            Passionate about building scalable applications and solving complex
            problems through clean, efficient code.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
          >
            <Button
              size="lg"
              onClick={scrollToProjects}
              className="gradient-primary text-primary-foreground shadow-primary hover:shadow-glow transform-gpu active:scale-95 transition duration-200 ease-in-out group"
              aria-label="View my work"
            >
              View My Work
              <ArrowDown className="ml-2 h-4 w-4 group-hover:animate-bounce" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={scrollToContact}
              className="border-white/20 bg-white/5 text-primary-foreground hover:bg-white/10 hover:text-primary transition-colors duration-200 shadow-sm flex items-center justify-center gap-2"
              aria-label="Get in touch"
            >
              <Mail className="h-4 w-4" />
              <span>Get In Touch</span>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-white/20 bg-white/5 text-primary-foreground hover:bg-white/10 hover:text-primary transition-colors duration-200 shadow-sm"
              aria-label="Download CV"
              asChild
            >
              <a
                href={cv}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <ArrowDown className="h-4 w-4" />
                <span>Download CV</span>
              </a>
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex gap-4 justify-center pt-8"
          >
            {[
              {
                Icon: Github,
                href: 'https://github.com/AbdelrahmanAshraf62651',
                label: 'GitHub',
                delay: '0s',
              },
              {
                Icon: Linkedin,
                href: 'https://www.linkedin.com/in/abdelrahman-ashraf-fathey/',
                label: 'LinkedIn',
                delay: '0.2s',
              },
              {
                Icon: Mail,
                href: 'mailto:abdelrahmanashraf6000@gmail.com',
                label: 'Email',
                delay: '0.4s',
              },
            ].map(({ Icon, href, label, delay }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full hover:shadow-glow animate-bounce transition-smooth"
                style={{ animationDelay: delay }}
                aria-label={label}
              >
                <Icon className="w-5 h-5 md:w-6 md:h-6" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
