import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Head>
        <title>PDFBob</title>
        <meta name="description" content="All-in-One PDF Tools" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <Hero />
        <Features />
        <Testimonials />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
