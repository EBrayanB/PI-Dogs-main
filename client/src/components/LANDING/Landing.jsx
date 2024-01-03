import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../LANDING/Landing.module.css';

const LandingPage = () => {
  const backgroundImage = 'https://besthqwallpapers.com/Uploads/31-5-2018/54540/boxer-dog-autumn-puppy-pets-cute-animals.jpg';

  return (
    <div className={styles.landingWrapper}>
      <div className={styles.background} style={{ backgroundImage: `url(${backgroundImage})` }}></div>
      <div className={styles.content}>
        <label className={styles.welcomeLabel}> Bienvenido </label>
        <Link className={styles.landingButton} to="/home">
          <button className={styles.text}>Ingresa</button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
