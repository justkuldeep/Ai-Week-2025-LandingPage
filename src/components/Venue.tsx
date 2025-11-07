import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Calendar, Clock, Navigation } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Venue = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const venueDetails = [
    {
      icon: MapPin,
      label: 'Location',
      value: 'Indore Institute of Science and Technology',
      subvalue: 'Indore, Madhya Pradesh, India',
    },
    {
      icon: Calendar,
      label: 'Dates',
      value: 'November 17-22, 2025',
      subvalue: '6 Days of Intensive Learning',
    },
    {
      icon: Clock,
      label: 'Timing',
      value: 'To Be Announced',
      subvalue: 'Daily Sessions (Last day till 4:40 PM)',
    },
  ];

  return (
    <section id="venue" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Event <span className="bg-gradient-primary bg-clip-text text-transparent">Venue</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Join us at IIST Indore for an unforgettable learning experience
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Venue Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-6"
          >
            {venueDetails.map((detail, index) => (
              <div
                key={detail.label}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all hover:shadow-glow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                    <detail.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-muted-foreground mb-1">{detail.label}</div>
                    <div className="text-lg font-semibold mb-1">{detail.value}</div>
                    <div className="text-sm text-muted-foreground">{detail.subvalue}</div>
                  </div>
                </div>
              </div>
            ))}

            <Button
              size="lg"
              className="w-full bg-gradient-primary hover:shadow-glow transition-all"
              onClick={() =>
                window.open(
                  'https://www.google.com/maps/search/Indore+Institute+of+Science+and+Technology',
                  '_blank'
                )
              }
            >
              <Navigation className="w-4 h-4 mr-2" />
              Get Directions
            </Button>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="rounded-xl overflow-hidden border border-border shadow-glow h-full min-h-[400px] relative"
          >
            {/*
              Embedded Google Map centered on Indore Institute of Science and Technology.
              We add an invisible overlay link so clicks on the map open Google Maps directions in a new tab.
            */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.998834789869!2d75.87359931495674!3d22.72480938511907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd456d7e5b17%3A0x3e3b3c0c0c0c0c0c!2sIndore%20Institute%20of%20Science%20and%20Technology!5e0!3m2!1sen!2sin!4v1634567890123!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />

            {/* Transparent overlay to make the whole map clickable and open directions */}
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=22.72480938511907,75.87359931495674&travelmode=driving"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open directions to Indore Institute of Science and Technology in Google Maps"
              className="absolute inset-0"
              style={{
                // Ensure overlay is on top and receives pointer events
                display: 'block',
                background: 'transparent',
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Venue;
