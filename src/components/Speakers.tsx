import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Linkedin, Mail } from 'lucide-react';

const Speakers = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const speakers = [
    {
      name: 'Dr. Shweta Agrawal',
      role: 'Professor',
      organization: 'IIST Indore',
      expertise: 'Deep Learning',
      image: '',
    },
    {
      name: 'Mr. Piyush Parmar',
      role: 'Senior NLP Engineer',
      organization: 'AI Solutions Inc',
      expertise: 'NLP and LLM\'s',
      image: '',
    },
    {
      name: 'Dr. Ratnesh Chaturvedi',
      role: 'HOD of AI Department',
      organization: 'Gen AI Expert',
      expertise: 'AI agents and Automation',
      image: '',
    },
    {
      name: 'Mr. Bhavesh Prajapat',
      role: 'Student',
      organization: 'IIST',
      expertise: 'ML Expertise',
      image: '../public/bhavesh-prajapat.png',
    },
    {
      name: 'Ms. Anshika Punase',
      role: 'Student',
      organization: 'IIST',
      expertise: 'ML Expertise',
      image: '../public/anshika-punase.png',
    },
  ];

  return (
    <section id="speakers" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Expert <span className="bg-gradient-primary bg-clip-text text-transparent">Speakers</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Learn from industry leaders and academic experts in AI and Machine Learning
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {speakers.map((speaker, index) => (
            <motion.div
              key={speaker.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-xl bg-card border border-border hover:border-primary/50 transition-all hover:shadow-glow">
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{speaker.name}</h3>
                  <p className="text-sm text-primary mb-1">{speaker.role}</p>
                  <p className="text-sm text-muted-foreground mb-3">{speaker.organization}</p>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <div className="h-px flex-1 bg-border" />
                  </div>

                  <p className="text-sm text-muted-foreground mb-4">{speaker.expertise}</p>

                  <div className="flex gap-3">
                    <button className="w-9 h-9 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors group/btn">
                      <Linkedin className="w-4 h-4 text-primary group-hover/btn:scale-110 transition-transform" />
                    </button>
                    <button className="w-9 h-9 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors group/btn">
                      <Mail className="w-4 h-4 text-primary group-hover/btn:scale-110 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;
