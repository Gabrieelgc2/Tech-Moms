import React from 'react';
import HomeContent from '../components/Home/HomeContent';
import '../styles/Home/Home.css';
import CommunitySection from '../components/Home/CommunitySection';
import Carousel from '../components/Home/Carousel';
import Footer from '../components/Home/Footer';
import Beneficios from '../components/Home/Beneficios';
import ApproachSection from '../components/Home/ApproachSection';
import About from '../components/Home/About';

const Home = () => {
  return (
    <div className="home-page">
      <HomeContent/>
      <section id="sobre">
        <About />
      </section>
      <section id="servicos">
        <Carousel />
      </section>
      <section id="beneficios">
        <Beneficios />
      </section>
      <section id="comunidade">
        <CommunitySection />
      </section>
      <section id="abordagem">
        <ApproachSection />
      </section>
      <Footer />
    </div>
  );
}

export default Home;
