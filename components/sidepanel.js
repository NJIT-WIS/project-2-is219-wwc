// components/sidepanel.js
import React from 'react';
import styles from './sidepanel.module.css';

const TableOfContents = ({ items }) => {
  const renderItem = (item, index, sectionNumber) => {
    const currentNumber = sectionNumber ? `${sectionNumber}.${index + 1}` : index + 1;

    return (
      <li key={index} className={styles.tocItem}>
        <a href={`#${item.id}`} className={styles.tocLink}>
          {currentNumber}. {item.title}
        </a>
        {item.subitems && item.subitems.length > 0 && (
          <ul className={styles.tocSublist}>
            {item.subitems.map((subitem, subIndex) =>
              renderItem(subitem, subIndex, currentNumber)
            )}
          </ul>
        )}
      </li>
    );
  };

  return (
    <nav className={styles.toc}>
      <ul className={styles.tocList}>{items.map((item, index) => renderItem(item, index))}</ul>
    </nav>
  );
};

export default TableOfContents;
