import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Linkedin, Mail } from 'lucide-react';

interface Speaker {
  name: string;
  role: string;
  organization: string;
  expertise: string;
  image: string;
  links: {
    linkedin: string;
    email: string;
  };
}

const Speakers = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const speakers: Speaker[] = [
    {
      name: 'Dr. Shweta Agrawal',
      role: 'Professor',
      organization: 'IIST Indore',
      expertise: 'Nvidia DLI  University ambassador and certified Instructor',
      image: '/dr-shweta-agrawal.png',
      links: {
        linkedin: 'https://www.linkedin.com/in/dr-shweta-agrawal/',
        email: ''
      }
    },
    {
      name: 'Mr. Piyush Parmar',
      role: 'Professor',
      organization: 'IIST Indore',
      expertise: 'Microsoft Certified Data-Scientist',
      image: '/mr-piyush-parmar.png',
      links: {
        linkedin: 'https://www.linkedin.com/in/piyush-parmar-949ba4206/',
        email: ''
      }
    },
    {
      name: 'Dr. Ratnesh Chaturvedi',
      role: 'HOD of AIML Department',
      organization: 'IIST Indore',
      expertise: 'Computer Vision Expert',
      image: '/IMG-20251111-WA0000.jpg',
      links: {
        linkedin: 'https://www.linkedin.com/in/dr-ratnesh-chaturvedi-3b108a43/',
        email: ''
      }
    },
    {
      name: 'Mr. Bharat Udawat',
      role: 'Senior Consultant',
      organization: 'Deloitte',
      expertise: 'AI in Pharmacy and Management',
      image: '/mr-bharat-udawat.png',
      links: {
        linkedin: 'https://www.linkedin.com/in/bharatudawat/',
        email: ''
      }
    },
  {
      name: 'Mr. Amanullah Khan',
      role: 'Software Development Enginner',
      organization: 'Neurix Technologies',
      expertise: 'Gen AI Expert',
      image: '/IMG-20251109-WA0006.jpg',
      links: {
        linkedin: 'https://www.linkedin.com/in/amanullah-khan-4977bb1ab',
        email: 'amanullah10786@gmail.com'
      }
  },
    {
      name: 'Mr. Vaibhav Jain',
      role: 'Chief Executive Officer',
      organization: 'Neuratantra AI',
      expertise: 'Agentic AI Systems and Automation Workflows Expert',
      image: '/IMG-20251111-WA0001.jpg',
      links: {
        linkedin: 'https://www.linkedin.com/in/vaibhavjaindatascientist',
        email: 'vaibhav.jain06@nagarro.com'
      }
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
                    <a
                      href={speaker.links.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors group/btn"
                      title={`Connect with ${speaker.name} on LinkedIn`}
                    >
                      <Linkedin className="w-4 h-4 text-primary group-hover/btn:scale-110 transition-transform" />
                    </a>
                    <a
                      href={`mailto:${speaker.links.email}`}
                      className="w-9 h-9 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors group/btn"
                      title={`Email ${speaker.name}`}
                    >
                      <Mail className="w-4 h-4 text-primary group-hover/btn:scale-110 transition-transform" />
                    </a>
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
