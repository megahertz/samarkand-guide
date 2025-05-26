import Head from '@docusaurus/Head';
import Layout from '@theme/Layout';
import React, { type ReactNode } from 'react';
import { CartProvider } from '@site/src/pages/sale/components/other/CartContext';
import styles from '../../map/styles.module.css';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const ogImage = require('../../../../docs/purchases/img/bazar.jpg');

export default function SalePage({ children }: { children: ReactNode }) {
  return (
    <Layout noFooter title="Распродажа" wrapperClassName={styles.container}>
      <Head>
        <title>Распродажа</title>
        <meta property="og:title" content="Распродажа" />
        <meta name="og:image" content={ogImage} data-rh="true" />
      </Head>

      <main className="sale">
        <div className="container padding-top--md padding-bottom--lg">
          <article>
            <nav className="theme-doc-breadcrumbs breadcrumbsContainer_node_modules-@docusaurus-theme-classic-lib-theme-DocBreadcrumbs-styles-module">
              <ul className="breadcrumbs">
                <li className="breadcrumbs__item">
                  <a
                    aria-label="Главная страница"
                    className="breadcrumbs__link"
                    href="/"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="breadcrumbHomeIcon_node_modules-@docusaurus-theme-classic-lib-theme-DocBreadcrumbs-Items-Home-styles-module"
                    >
                      <path
                        d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </li>
                <li className="breadcrumbs__item breadcrumbs__item--active">
                  <span className="breadcrumbs__link">Распродажа</span>
                </li>
              </ul>
            </nav>
            <CartProvider>{children}</CartProvider>
          </article>
        </div>
      </main>
    </Layout>
  );
}
