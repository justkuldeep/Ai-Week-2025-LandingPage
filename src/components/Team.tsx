import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Users } from 'lucide-react';

const Team = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });


  const coordinator = {
    name: 'Mrs. Sukrati Agrawal',
    role: 'Faculty Coordinator',
    image: '/mrs-sukrati-agarwal.png',
  };

 
  const organizers = [
    { name: 'Bhavesh Prajapat', role: 'Event Coordinator', image: '/bhavesh-prajapat.png' },
    { name: 'Aaradhya Rassay', role: 'Logistics Head', image: '/aaradhya-rassay2.png' },
    { name: 'Nishita Kanojiya', role: 'Marketing Head', image: '/nishita-kanojiya.png' },
    { name: 'Anshika Punase', role: 'Content Head', image: '/anshika-punase.png' },
    { name: 'Madhav Ratnawat', role: 'Media Head', image: '/madhav-ratnawat.png' },
    { name: 'Vasu Garg', role: 'Volunteer Coordinator', image: '/vasu-garg.png' },
  ];

  return (
    <section id="team" className="py-20 md:py-32 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4" ref={ref}>
        {/* Heading Section */}
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

        {/* Event Coordinator Section */}
        <div className="max-w-sm mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="group"
          >
            <div className="p-6 rounded-2xl bg-card border-2 border-amber-400 hover:shadow-[0_0_20px_rgba(251,191,36,0.6)] transition-all text-center">
              <div className="w-36 h-36 mx-auto mb-4 rounded-full bg-gradient-to-br from-amber-200 to-yellow-300 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform">
                <img
                  src={coordinator.image}
                  alt={coordinator.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">{coordinator.name}</h3>
              <p className="text-base text-amber-600 font-medium">{coordinator.role}</p>
            </div>
          </motion.div>
        </div>

        {/* Organizers Grid Section */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {organizers.map((member, index) => (
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
