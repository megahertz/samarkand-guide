import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import MDXContent from '@theme/MDXContent';
import React from 'react';
import Content from './components/content.md';
import styles from './styles.module.css';

export default function LinksPage() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Полезные ссылки | ${siteConfig.title}`}
      wrapperClassName={styles.container}
    >
      <article className="container container--fluid margin-vert--lg markdown">
        <MDXContent>
          <Content />
        </MDXContent>
      </article>
    </Layout>
  );
}
