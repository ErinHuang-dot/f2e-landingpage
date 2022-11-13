import './App.scss';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Painpoint from './components/Painpoint/Painpoint';
import Target from './components/Target/Target';
import Challenge from './components/Challenge/Challenge';
import Detail from './components/Detail/Detail';
import Process from './components/Process/Process';
import Award from './components/Award/Award';
import Sponsors from './components/Sponsors/Sponsors';
import Speakers from './components/Speakers/Speakers';
import Cta from './components/Cta/Cta';
import Footer from './components/Footer/Footer';
import JsonData from './data/data.json';
import { useEffect, useState } from 'react';

function App() {
  const [landingPageData, setLandingPageData ] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div className="App">
      <Header />
      <Hero />
      <Painpoint />
      <Target />
      <Challenge data={landingPageData.Challenge}/>
      <Detail data={landingPageData.Detail}/>
      <Process data={landingPageData.Process}/>
      <Award data={landingPageData.Award}/>
      <Sponsors data={landingPageData.Sponsors}/>
      <Speakers data={landingPageData.Speakers}/>
      <Cta />
      <Footer />
    </div>
  );
}

export default App;
