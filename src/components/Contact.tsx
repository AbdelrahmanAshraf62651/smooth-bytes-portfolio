import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Github, Linkedin, Twitter, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from '@/hooks/use-toast';

const socialLinks = [
  {
    name: 'AbdelrahmanAshraf62651',
    icon: Github,
    href: 'https://github.com/AbdelrahmanAshraf62651',
    color: 'hover:text-primary',
  },
  {
    name: 'abdelrahman-ashraf-fathey/',
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/abdelrahman-ashraf-fathey/',
    color: 'hover:text-secondary',
  },
  {
    name: 'abdelrahmanashraf6000@gmail.com',
    icon: Mail,
    href: 'mailto:abdelrahmanashraf6000@gmail.com',
    color: 'hover:text-primary',
  },
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      toast({
        title: 'Message sent!',
        description: "Thanks for reaching out. I'll get back to you soon!",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" ref={ref} className="pt-20 md:pt-32 relative">
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
              Get In <span className="gradient-text">Touch</span>
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="w-24 h-1 bg-primary mx-auto rounded-full"
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
              className="mt-4 text-muted-foreground text-lg"
            >
              Let's connect! I'm always open to discussing new projects and
              opportunities.
            </motion.p>
          </div>

          {/* Social Links & Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.7 }}
            className="flex flex-col justify-center"
          >
            <div className="glass-effect p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6">Connect with me</h3>
              <p className="text-muted-foreground mb-8">
                Feel free to reach out through any of these platforms. I
                typically respond within 24 hours.
              </p>

              <div className="space-y-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className={`flex overflow-hidden items-center py-4 rounded-lg bg-card hover:bg-card/80 transition-smooth group ${link.color}`}
                  >
                    <div className="p-2 rounded-lg gradient-primary group-hover:shadow-glow transition-smooth">
                      <link.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <span className="ml-4 font-medium ">{link.name}</span>
                  </motion.a>
                ))}
              </div>

              <div className="mt-8 p-6 rounded-lg gradient-primary">
                <p className="text-primary-foreground font-medium mb-2">
                  Location
                </p>
                <p className="text-primary-foreground/90">Cairo, Egypt</p>
                <p className="text-primary-foreground/90 text-sm mt-2">
                  Available for remote opportunities
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 1 }}
        className="text-center mt-16 md:mt-20 text-muted-foreground"
      >
        <footer className="pb-6">
          <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
        </footer>
      </motion.div>
    </section>
  );
};

export default Contact;
