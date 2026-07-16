import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HeroWaveSvg({className}) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 200"
      preserveAspectRatio="none"
    >
      <path
        fill="rgba(255,255,255,0.06)"
        d="M0,160 C360,80 720,200 1440,100 L1440,200 L0,200 Z"
      />
      <path
        fill="rgba(255,255,255,0.1)"
        d="M0,170 C480,100 960,190 1440,120 L1440,200 L0,200 Z"
      />
      <path
        fill="var(--ifm-background-color, #ffffff)"
        d="M0,185 C320,140 640,200 1440,150 L1440,200 L0,200 Z"
      />
    </svg>
  );
}

function CtaWaveSvg({className, position}) {
  if (position === 'top') {
    return (
      <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
      >
        <path
          fill="rgba(255,255,255,0.04)"
          d="M0,0 L1440,0 L1440,40 C1080,100 720,20 0,80 Z"
        />
        <path
          fill="rgba(255,255,255,0.08)"
          d="M0,0 L1440,0 L1440,30 C960,90 480,10 0,60 Z"
        />
        <path
          fill="var(--ifm-background-color, #ffffff)"
          d="M0,0 L1440,0 L1440,15 C1200,70 600,0 0,50 Z"
        />
      </svg>
    );
  }
  return null;
}

function HomepageHeader() {
  return (
    <header className={styles.heroBanner}>
      <div className={styles.heroContent}>
        <Heading as="h1" className={styles.heroTitle}>
          4WS.Platform Documentation
        </Heading>
        <p className={styles.heroSubtitle}>
          Guides, API references, and resources to build with 4WS.Platform
        </p>
      </div>
      <HeroWaveSvg className={styles.heroWave} />
    </header>
  );
}

function CtaSection() {
  return (
    <section className={styles.ctaSection}>
      <CtaWaveSvg className={styles.ctaWaveTop} position="top" />
      <div className={styles.ctaContent}>
        <Heading as="h2" className={styles.ctaTitle}>
          Do you want to try 4WS.Platform?
        </Heading>
        <Link
          className={styles.ctaButton}
          href="https://4wsplatform.org/try-4wsplatform/"
        >
          TRY IT
        </Link>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Documentation"
      description="4WS.Platform Documentation - User Guide, API, Knowledge Base">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        {/* <CtaSection /> */}
      </main>
    </Layout>
  );
}
