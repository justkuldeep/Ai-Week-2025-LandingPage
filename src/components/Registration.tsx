import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { UserPlus } from 'lucide-react';

const Registration = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Replace this with your Google Form URL when available
  const googleFormUrl = "https://forms.gle/X7UPoFWDGKxbzuG79" ; 

  const handleRegisterClick = () => {
    window.open(googleFormUrl, '_blank');
  };

  return (
    <section id="register" className="py-20 md:py-32 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <UserPlus className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Registration Opening Soon</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Register <span className="bg-gradient-primary bg-clip-text text-transparent">Now</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
            Secure your spot for AI Essentials Week 2025 - It's completely free!
          </p>
          <p className="text-md text-primary font-semibold mb-8">
            Registration window: November 9 - November 13, 2025
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-xl mx-auto text-center"
        >
          <Button
            onClick={handleRegisterClick}
            size="lg"
            className="bg-gradient-primary hover:shadow-glow-strong transition-all text-lg px-8"
          >
            Open Registration Form
          </Button>
          
          <p className="text-sm text-muted-foreground mt-4">
            Click the button above to access the registration form when it opens
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Registration;
