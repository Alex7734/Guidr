import React from 'react';
import style from './BurgerMenu.module.css';

const BurgerMenu: React.FC = () => {
  return (
    <div className={style.burgerMenu}>
      <ul>
        <li><a href="#">Menu item 1</a></li>
        <li><a href="#">Menu item 2</a></li>
        <li><a href="#">Menu item 3</a></li>
      </ul>
    </div>
  );
}

export default BurgerMenu;
