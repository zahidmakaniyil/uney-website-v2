import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Solutions from '@/components/Solutions';
import CorePromise from '@/components/CorePromise';
import About from '@/components/About';
import Team from '@/components/Team';
import Resources from '@/components/Resources';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Solutions />
        <CorePromise />
        <About />
        <Team />
        <Resources />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
