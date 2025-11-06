import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Brain, Cpu, Network, Sparkles } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Brain,
      title: 'AI Fundamentals',
      description: 'Master the core concepts of Artificial Intelligence and Machine Learning',
    },
    {
      icon: Cpu,
      title: 'Deep Learning',
      description: 'Dive into neural networks and build your first AI models',
    },
    {
      icon: Network,
      title: 'NLP Essentials',
      description: 'Explore Natural Language Processing and text analysis',
    },
    {
      icon: Sparkles,
      title: 'Generative AI',
      description: 'Discover the future with GenAI and Large Language Models',
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">AI Essentials Week</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join us for an immersive 6-day journey into the world of Artificial Intelligence. 
            Whether you're a beginner or an enthusiast, this event is designed to give you 
            hands-on experience with cutting-edge AI technologies and real-world applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group"
            >
              <div className="h-full p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all hover:shadow-glow">
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 group-hover:animate-float">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 md:p-12 border border-primary/20"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">6</div>
              <div className="text-muted-foreground">Days of Learning</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">6</div>
              <div className="text-muted-foreground">Expert Sessions</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Hands-on Practice</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
