import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Users } from 'lucide-react';

const Team = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const teamMembers = [
    {
      name: 'Mrs. Sukrati Agrawal',
      role: 'Event Coordinator',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun',
    },
    {
      name: 'Bhavesh Prajapat',
      role: 'Technical Lead',
      image: '../src/assets/bhavesh-prajapat.png',
    },
    {
      name: 'Aaradhya Rassay',
      role: 'Logistics Manager',
      image: '../src/assets/aaradhya-rassay2.png',
    },
    {
      name: 'Nishita Kanojiya',
      role: 'Marketing Head',
      image: '../src/assets/nishita-kanojiya.png',
    },
    {
      name: 'Anshika Punase',
      role: 'Content Manager',
      image: '../src/assets/anshika-punase.png',
    },
    {
      name: 'Vasu Garg',
      role: 'Volunteer Coordinator',
      image: '../src/assets/vasu-garg.png',
    },
  ];

  return (
    <section id="team" className="py-20 md:py-32 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Users className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Our Team</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Meet the <span className="bg-gradient-primary bg-clip-text text-transparent">Organizers</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Dedicated individuals working together to make AI Essentials Week a success
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group"
            >
              <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all hover:shadow-glow text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                <p className="text-sm text-primary">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
