import { Button } from 'components/Button';
import { DecoderText } from 'components/DecoderText';
import { Divider } from 'components/Divider';
import { Heading } from 'components/Heading';
import { Image } from 'components/Image';
import { Section } from 'components/Section';
import { Text } from 'components/Text';
import { Transition } from 'components/Transition';
import { Fragment, useState } from 'react';
import { media } from 'utils/style';
import styles from './Profile.module.css';
import ElixirLogo from 'assets/elixir.png';

const ProfileText = ({ visible, titleId }) => (
  <Fragment>
    <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
      <DecoderText text="About Elixir" start={visible} delay={500} />
    </Heading>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      Elixir aces as an unparalleled community consisting of the greatest minds of our
      college. It has people ranging from tech domains to non-tech sectors, all of whom
      are competent in their respective areas and strive together to make Elixir an
      astounding entity. With the perfect space to learn, collaborate, and explore, you
      are bound to experience many "Hello World" moments here. It is established in
      accordance with three clubs:
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      • GeeksforGeeks ABESEC CHAPTER <br /> • Google Developer Student Clubs ABESEC <br />
      • CodeChef ABESEC CHAPTER
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      With our aim to provide our students an environment that fosters self-growth, we are
      proud to call ourselves a community FOR THE STUDENTS, BY THE STUDENTS, AND OF THE
      STUDENTS.
    </Text>
  </Fragment>
);

export const Profile = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.profile}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {visible => (
          <div className={styles.content}>
            <div className={styles.column}>
              <ProfileText visible={visible} titleId={titleId} />
              <Button
                secondary
                className={styles.button}
                data-visible={visible}
                href="/contact"
                icon="send"
              >
                Send us a message
              </Button>
            </div>
            <div className={styles.column}>
              <div className={styles.tag} aria-hidden>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={!visible}
                  collapseDelay={1000}
                />
                <div className={styles.tagText} data-visible={visible}>
                  About Us
                </div>
              </div>
              <div className={styles.image}>
                <Image
                  reveal
                  delay={100}
                  placeholder={ElixirLogo}
                  srcSet={[ElixirLogo, ElixirLogo]}
                  sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                  alt="Elixir logo"
                />
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
