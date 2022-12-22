import About from 'components/About';
import Header from 'components/Header';
import Skills from 'components/Skills/Skills';
import Projects from 'components/Projects/Projects';
import Career from 'components/Career';
import Contact from 'components/Contact';
import type { NextPage } from 'next';
import Main from 'components/Main';

const Home: NextPage = () => {
  const setData = (data: string) => {
    document.getElementById(data)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="max-w-[1920px] font-main">
      <Header setData={setData} />
      <Main />
      <div id="ABOUT">
        <About />
      </div>
      <div id="SKILLS">
        <Skills />
      </div>
      <div id="PROJECTS">
        <Projects />
      </div>
      <div id="CAREER">
        <Career />
      </div>
      <div id="CONTACT">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
