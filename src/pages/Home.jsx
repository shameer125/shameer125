import Projects from '../components/Projects';
import MernTech from '../components/MernTech';
import Hero from '../components/Hero';
import About from '../components/About';
import Service from '../components/Service';
import homeData from '../data/homeData.json';
import Experience from '../components/Experience';
import Contact from '../components/Contact';

export default function Home() {
  const {
    hero,
    socialBtns,
    about,
    projects,
    service,
    experience,
    mernTech,
    contact,
  } = homeData;
  return (
    <>
      <Hero data={hero} socialData={socialBtns} />
      <About data={about} />
      <Projects data={projects} />
      <Service data={service} />
      <Experience data={experience} />
      <MernTech data={mernTech} />
      <Contact data={contact} />
    </>
  );
}
