import Icon, { IconName } from '@site/src/components/Icon';
import React from 'react';
import styles from './styles.module.css';

export default function IconLink({
  name,
  href,
}: {
  name: IconName;
  href: string;
}) {
  if (!href) {
    return null;
  }

  return (
    <a
      className={styles.link}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon name={name} size={20} />
    </a>
  );
}
