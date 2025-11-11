import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from './ui/button';
import movieGoImg from '../../assets/projects/moviego.png';
import flavourFindsImg from '../../assets/projects/flavourfinds.png';
import spaceXImg from '../../assets/projects/spacex.png';
import smartCityImg from '../../assets/projects/smartcity.jpg';
import portfolioImg from '../../assets/projects/portfolio.png';
import weatherAppImg from '../../assets/projects/weather.png';

const projects = [
  {
    title: 'Movie Go',
    description:
      'MovieGo is a React-based web app that lets you discover, explore, and save your favorite movies. Powered by The Movie Database (TMDB) API.',
    image: movieGoImg,
    tech: ['React', 'Tailwind'],
    github: 'https://github.com/AbdelrahmanAshraf62651/movie-go',
    demo: 'https://abdelrahmanashraf62651.github.io/movie-go/',
  },
  {
    title: 'Flavor Finds',
    description:
      'A modern, responsive web application for discovering, organizing, and sharing delicious recipes.',
    image: flavourFindsImg,
    tech: ['HTML5', 'CSS3', 'Bootstrap'],
    github: 'https://github.com/AbdelrahmanAshraf62651/FlavorFinds',
    demo: 'https://abdelrahmanashraf62651.github.io/FlavorFinds/',
  },
  {
    title: 'SpaceX',
    description:
      'A web application designed to manage and enhance workspace experiences for both users and administrators.',
    image: spaceXImg,
    tech: ['TypeScript', 'React', 'Bootstrap', 'Node.js'],
    github: 'https://github.com/AbdelrahmanAshraf62651/Workspace',
    demo: 'https://abdelrahmanashraf62651.github.io/Workspace/index.html',
  },
  {
    title: 'Smart City Platform',
    description:
      'Smart City, a unified JavaFX desktop application that reimagines how urban residents interact with city services.',
    image: smartCityImg,
    tech: ['Java Spring', 'JavaFX', 'MongoDB'],
    demo: 'https://www.linkedin.com/posts/mohammademad2003_java-smartcity-javafx-activity-7331357990710575104-DSXK?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAElyBZkBqm8I8kG2VsySAlVAn0aNj6ex1yM',
  },
  {
    title: 'Portfolio',
    description:
      'A sleek, animated personal portfolio built with Next.js and Tailwind CSS to showcase my projects and skills.',
    image: portfolioImg,
    tech: ['Next.js', 'Tailwind', 'Framer motion', 'TypeScript'],
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
  {
    title: 'Weather App',
    description:
      'A weather application that provides real-time forecasts, featuring location detection and city search functionality.',
    image: weatherAppImg,
    tech: ['Bootstrap', 'JavaScript', 'Open Weather Map API'],
    github: 'https://github.com/AbdelrahmanAshraf62651/weatherApp',
    demo: 'https://abdelrahmanashraf62651.github.io/weatherApp/',
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="projects"
      ref={ref}
      className="py-20 md:py-32 relative bg-card/30"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            >
              Featured <span className="gradient-text">Projects</span>
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="w-24 h-1 bg-primary mx-auto rounded-full"
            />
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="group relative overflow-hidden rounded-xl glass-effect hover:shadow-primary transition-smooth"
              >
                {/* Project Image */}
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-smooth duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60 group-hover:opacity-80 transition-smooth" />

                  {/* Overlay buttons */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-smooth">
                    {project.github && (
                      <Button
                        size="sm"
                        asChild
                        className="bg-primary hover:bg-primary/90"
                      >
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    )}
                    {project.demo && (
                      <Button
                        size="sm"
                        variant="outline"
                        asChild
                        className="border-primary/50 hover:bg-primary/10"
                      >
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-primary transition-smooth">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full bg-card border border-border text-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
