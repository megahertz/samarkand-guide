import Head from '@docusaurus/Head';
import { useLocation } from '@docusaurus/router';
import SidebarStyles from '@docusaurus/theme-classic/lib/theme/DocPage/Layout/Sidebar/styles.module.css';
import { ThemeClassNames } from '@docusaurus/theme-common';
import { getPlacemarkItems, getSidebarItems } from '@site/map';
import { placemarkMatchesUrl } from '@site/map/lib/helpers';
import DocSidebar from '@theme/DocSidebar';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import React, { useEffect } from 'react';
import { Map } from '../../components/map';
import styles from './styles.module.css';

const placemarks = getPlacemarkItems();

export default function MapPage() {
  const location = useLocation();
  useMenuHighlighting();

  const sidebarItems = getSidebarItems(location.hash);

  const routePath = location.hash.slice(2);
  const selectedPlacemarks = placemarks.filter((placemark) => {
    return placemarkMatchesUrl(placemark, routePath);
  });

  return (
    <Layout
      noFooter
      title="Карта Самарканда"
      description="Карта районов, ресторанов, магазинов и других мест Самарканда"
      wrapperClassName={styles.container}
    >
      <Head>
        <title>Карта Самарканда</title>
        <meta property="og:title" content="Карта Самарканда" />
      </Head>

      <main className={styles.main}>
        <aside
          className={clsx(
            ThemeClassNames.docs.docSidebarContainer,
            SidebarStyles.docSidebarContainer,
          )}
        >
          <DocSidebar
            sidebar={sidebarItems}
            isHidden={false}
            onCollapse={() => {}}
            path="/map"
          />
        </aside>
        <Map placemarks={selectedPlacemarks} />
      </main>
    </Layout>
  );
}

function useMenuHighlighting() {
  const ACTIVE_CLASS = 'menu__link--active';
  const location = useLocation();

  useEffect(() => {
    const $menu = document.querySelector('.menu');

    $menu?.addEventListener('click', onMenuClick);

    resetActiveClass();
    document.querySelectorAll('.menu__link').forEach(($link) => {
      if ($link.getAttribute('href') === location.hash) {
        $link.classList.add(ACTIVE_CLASS);
      }
    });

    function onMenuClick(e) {
      if (!e.target.classList?.contains('menu__link')) {
        return;
      }

      resetActiveClass();
      e.target.classList?.add(ACTIVE_CLASS);
    }

    function resetActiveClass() {
      document
        .querySelectorAll('.menu__link')
        .forEach((l) => l.classList.remove(ACTIVE_CLASS));
    }

    return () => {
      $menu?.removeEventListener('click', onMenuClick);
    };
  });
}
