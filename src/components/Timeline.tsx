import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { BookOpen, Code, Brain, MessageSquare, Sparkles, Trophy } from 'lucide-react';

const Timeline = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const schedule = [
    {
      day: 1,
      date: 'Nov 17',
      title: 'AI & its impact on everyday life ',
      description: 'Fundamentals of Artificial Intelligence, history, and real-world applications',
      topics: ['AI Basics', 'Machine Learning Overview', 'AI in Industry'],
      icon: BookOpen,
      time: 'TBD',
    },
    {
      day: 2,
      date: 'Nov 18',
      title: 'Machine Learning Fundamentals',
      description: 'Supervised & Unsupervised learning, algorithms, and model training',
      topics: ['ML Algorithms', 'Data Preprocessing', 'Model Evaluation'],
      icon: Code,
      time: 'TBD',
    },
    {
      day: 3,
      date: 'Nov 19',
      title: 'Deep Learning & Neural Networks',
      description: 'Understanding neural networks, building your first deep learning model',
      topics: ['Neural Networks', 'CNN & RNN', 'TensorFlow Basics'],
      icon: Brain,
      time: 'TBD',
    },
    {
      day: 4,
      date: 'Nov 20',
      title: 'Hands on with AI',
      description: 'Apply AI concepts to build and train your first working model.',
      topics: ['Data Collection', 'Model Building', 'Training & Testing', 'Prediction'],
      icon: MessageSquare,
      time: 'TBD',
    },
    {
      day: 5,
      date: 'Nov 21',
      title: 'NLP and LLM for everyone',
      description: 'Explore NLP and the power of large language models(LLM\'s).',
      topics: ['Text Processing', 'Sentiment Analysis', 'Word Embeddings'],
      icon: Sparkles,
      time: 'TBD',
    },
    {
      day: 6,
      date: 'Nov 23',
      title: 'Generative & Agentic AI in action',
      description: 'Explore intelligent agents and build projects using Generative AI.',
      topics: ['AI Agents', 'Auto Workflows', 'Generative Models', 'Chain of Thought', 'Showcase'],
      icon: Trophy,
      time: 'TBD',
    },
  ];

  return (
    <section id="schedule" className="py-20 md:py-32 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Event <span className="bg-gradient-primary bg-clip-text text-transparent">Schedule</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            6 days of comprehensive learning, from fundamentals to advanced AI concepts
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary-light to-primary" />

          <div className="space-y-12">
            {schedule.map((day, index) => (
              <motion.div
                key={day.day}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className={`relative flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content Card */}
                <div className="w-full md:w-[calc(50%-2rem)] group">
                  <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all hover:shadow-glow">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center group-hover:animate-float">
                        <day.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <div className="text-sm text-primary font-medium">{day.date}</div>
                        <div className="text-xs text-muted-foreground">{day.time}</div>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold mb-2">
                      Day {day.day}: {day.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">{day.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {day.topics.map((topic) => (
                        <span
                          key={topic}
                          className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary shadow-glow" />

                {/* Spacer */}
                <div className="hidden md:block w-[calc(50%-2rem)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
