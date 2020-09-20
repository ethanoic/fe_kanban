import React from 'react'
import logo from '../../logo.svg';
import styles from './header.module.css';
import Control from '../Control';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="brand">
        <img className="brand__logo" src={logo} alt="Logo" />
      </div>
      <Control />
      <div className="user">
        <img className="user__image" src="/images/user_image.png" alt="User" />
        <span className="user__name flex-fill">Leonetta Llyod</span>
      </div>
    </header>
  )
}

export default Header;