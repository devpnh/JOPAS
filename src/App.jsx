import Header from './components/Header';
import StickyCallBar from './components/StickyCallBar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Emergency from './components/Emergency';
import Services from './components/Services';
import Process from './components/Process';
import Realizacie from './components/Realizacie';
import Reviews from './components/Reviews';
import Oblasti from './components/Oblasti';
import Why from './components/Why';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Emergency />
        <Services />
        <Process />
        <Realizacie />
        <Reviews />
        <Oblasti />
        <Why />
        <Contact />
      </main>
      <Footer />
      <StickyCallBar />
    </>
  );
}
