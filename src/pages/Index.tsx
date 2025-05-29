
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import WhyChoose from '@/components/WhyChoose';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingCallButton from '@/components/FloatingCallButton';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <WhyChoose />
      <Contact />
      <Footer />
      <FloatingCallButton />
    </div>
  );
};

export default Index;
