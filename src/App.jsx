import Header from './components/Header';
import StickyCallBar from './components/StickyCallBar';
import Hero from './components/Hero';
import Brands from './components/Brands';
import Services from './components/Services';
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
        <Brands />
        <Services />
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
