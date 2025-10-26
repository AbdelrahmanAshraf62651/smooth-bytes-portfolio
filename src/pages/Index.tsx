import SmoothScroll from '@/components/SmoothScroll';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import ScrollToTop from '@/components/ScrollToTop';

const Index = () => {
  return (
    <SmoothScroll>
      <div className="relative">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Education />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <ScrollToTop />
      </div>
    </SmoothScroll>
  );
};

export default Index;
