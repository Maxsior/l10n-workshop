import React from 'react';
import styles from './Menu.module.css';

function Menu({changeLanguage, closeMenu}) {
  const languages = ['ru', 'ar', 'en']

  const handleClick = (evt) => {
    changeLanguage(evt.target.textContent);
    closeMenu();
  }

  return (
    <ul className={styles.ul}>
      {languages.sort().map((language, index) =>
        <li
          key={index}
          onClick={handleClick}
          className={styles.li}
        >
          {language}
        </li>
      )}
    </ul>
  )
}

export default Menu;
