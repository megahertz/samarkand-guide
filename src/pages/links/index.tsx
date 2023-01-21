import Layout from '@theme/Layout';
import MDXContent from '@theme/MDXContent';
import React from 'react';
import Content from './components/content.md';
import styles from './styles.module.css';

export default function LinksPage() {
  return (
    <Layout title="Полезные ссылки" wrapperClassName={styles.container}>
      <article className="container container--fluid margin-vert--lg markdown">
        <MDXContent>
          <Content />
        </MDXContent>
      </article>
    </Layout>
  );
}
