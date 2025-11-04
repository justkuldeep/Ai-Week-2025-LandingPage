import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Timeline from '@/components/Timeline';
import Speakers from '@/components/Speakers';
import Team from '@/components/Team';
import Venue from '@/components/Venue';
import Registration from '@/components/Registration';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Timeline />
        <Speakers />
        <Team />
        <Venue />
        <Registration />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
