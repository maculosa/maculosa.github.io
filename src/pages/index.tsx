import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import "tailwindcss/tailwind.css"
import styles from './index.module.css';
import NoxNavigation from './NoxNavigation';
import classnames from 'classnames';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={''}
      description="Description will go into a meta tag in <head />"
    >
      <div className="container-full flex pr-[12px]">
        <NoxNavigation className="w-[100%]" />

        <div className="w-[100%] md:w-1/3">
          <div className={classnames(styles['tool-card'], 'hidden', 'md:block')}>
            <p className={styles['tool-name']}>Banmao Studio</p>
            <div className={styles.gradient1}></div>
          </div>
          {/* <div className="bg-white opacity-70 min-h-[600px] shadow-md rounded-md blur-[2px]"></div> */}
        </div>
      </div>

    </Layout>
  );
}
