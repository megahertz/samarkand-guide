import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import type { PropSidebarItem } from '@docusaurus/plugin-content-docs';
import { useLocation } from '@docusaurus/router';
import SidebarStyles from '@docusaurus/theme-classic/lib/theme/DocRoot/Layout/Sidebar/styles.module.css';
import { ThemeClassNames } from '@docusaurus/theme-common';
import map from '@site/map';
import { placemarkMatchesUrl } from '@site/map/lib/helpers';
import DocSidebar from '@theme/DocSidebar';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import React, { useEffect } from 'react';
import { Map } from '../../components/map';
import styles from './styles.module.css';

const placemarks = map.getPlacemarkItems();

export default function MapPage() {
  const location = useLocation();
  useMenuHighlighting();

  const sidebarItems: PropSidebarItem[] = [
    {
      type: 'link',
      label: '← Назад в Справочник',
      href: '/',
      className: 'navbar-sidebar__back navbar-sidebar__to-guide',
    },
    ...map.getSidebarItems(location.hash),
  ];

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
          <FakeAnchors sidebarItems={sidebarItems} />
        </aside>
        <Map placemarks={selectedPlacemarks} />
      </main>
    </Layout>
  );
}

/**
 * Actually, the only purpose of this component is to generate fake anchors
 * to prevent broken link warnings on building. There's no other way to
 * disable this warning for map links but keep it for real broken anchor errors
 */
function FakeAnchors({ sidebarItems }: { sidebarItems: PropSidebarItem[] }) {
  const topLevelLinks = sidebarItems
    .filter((item) => item.type === 'category')
    .map((item) => item.href);

  return (
    <template>
      {topLevelLinks.map((href) => (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <Link key={href} id={href} />
      ))}
    </template>
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

    function onMenuClick(e: Event) {
      if (!(e.target as HTMLElement)?.classList?.contains('menu__link')) {
        return;
      }

      resetActiveClass();
      (e.target as HTMLElement)?.classList?.add(ACTIVE_CLASS);
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
