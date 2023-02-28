import Head from '@docusaurus/Head';
import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">Самарканд</h1>
        <p className="hero__subtitle">Справочник релоканта</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/samarkand"
          >
            Читать️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout wrapperClassName={styles.container} description="">
      <Head>
        <title>
          Самарканд: справочник релоканта. О том подходит ли Самарканд для
          работы и жизни
        </title>
        <meta
          property="og:title"
          content="Самарканд: справочник релоканта. О том подходит ли Самарканд для работы и жизни"
        />
      </Head>
      <HomepageHeader />
    </Layout>
  );
}
