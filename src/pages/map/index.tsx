import { useLocation } from '@docusaurus/router';
import SidebarStyles from '@docusaurus/theme-classic/lib/theme/DocPage/Layout/Sidebar/styles.module.css';
import { ThemeClassNames } from '@docusaurus/theme-common';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { getPlacemarkItems, getSidebarItems } from '@site/map';
import { placemarkMatchesUrl } from '@site/src/pages/map/lib/helpers';
import DocSidebar from '@theme/DocSidebar';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import React from 'react';
import FullMap from './components/FullMap';
import styles from './styles.module.css';

const placemarks = getPlacemarkItems();

export default function Map() {
  const { siteConfig } = useDocusaurusContext();
  const location = useLocation();

  const sidebarItems = getSidebarItems(location.hash);

  const routePath = location.hash.slice(2);
  const selectedPlacemarks = placemarks.filter((placemark) => {
    return placemarkMatchesUrl(placemark, routePath);
  });

  console.log(selectedPlacemarks);

  return (
    <Layout
      noFooter
      title={`Карта Самарканда | ${siteConfig.title}`}
      wrapperClassName={styles.container}
    >
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
        <FullMap placemarks={selectedPlacemarks} />
      </main>
    </Layout>
  );
}
