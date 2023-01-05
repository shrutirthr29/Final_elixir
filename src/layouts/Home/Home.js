import gfgImage from 'assets/gfg.png';
import GDSCImage from 'assets/gdsc.png';
import codechefImage from 'assets/codechef.png';
import { Footer } from 'components/Footer';
import { Meta } from 'components/Meta';
import { Intro } from 'layouts/Home/Intro';
import { Profile } from 'layouts/Home/Profile';
import { ProjectSummary } from 'layouts/Home/ProjectSummary';
import { useEffect, useRef, useState } from 'react';
import styles from './Home.module.css';

const disciplines = ['Explore', 'Learn', 'Conquer', 'Inspire', 'Achieve'];

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Meta
        title="The Tech Community"
        description="Elixir aces as an unparalleled community consisting of the greatest minds of our college."
      />
      <Intro
        id="intro"
        sectionRef={intro}
        disciplines={disciplines}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="GeeksForGeeks"
        description="You say Savior; we hear GFG. Whether you're exploring domains, building communities, or solving challenges, GFG ABESEC is your one-stop solution. Here we learn,  collaborate, and explore, but more importantly, we grow."
        buttonText="Follow Us"
        buttonLink="https://www.instagram.com/geeksforgeeks_abesec/?igshid=MDM4ZDc5MmU%3D"
        model={{
          type: 'laptop',
          alt: 'GFG ABESEC',
          textures: [
            {
              srcSet: [gfgImage, gfgImage],
              placeholder: gfgImage,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="CodeChef"
        description="Building a coterie of enthusiastic peeps to code,  practice, compete and enhance fun velocity."
        buttonText="Follow Us"
        buttonLink="https://instagram.com/abesec.codechef?igshid=MDM4ZDc5MmU="
        model={{
          type: 'laptop',
          alt: 'CodeChef ABESEC',
          textures: [
            {
              srcSet: [codechefImage, codechefImage],
              placeholder: codechefImage,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="Google Developer Student Club"
        description="Exploring crux of latest developer products and platforms through hands-on workshops and events, we are a community continuing the bequest of soaring high in the sky of technology as we learn, connect, and grow together."
        buttonText="Follow Us"
        buttonLink="https://www.instagram.com/gdsc_abesec/"
        model={{
          type: 'laptop',
          alt: 'GDSC ABESEC',
          textures: [
            {
              srcSet: [GDSCImage, GDSCImage],
              placeholder: GDSCImage,
            },
          ],
        }}
      />
      <Footer />
    </div>
  );
};
