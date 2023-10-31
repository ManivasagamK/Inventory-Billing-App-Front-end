import React from 'react';
import styles from './Home.module.css';
import { useNavigate } from 'react-router-dom';


const Home = () => {
  const navigate = useNavigate()
  return (
    <div>
      <section className={styles.hero}>
        {/* <h1>Better way to manage your Business</h1> */}
        <h1><i>Simplify, Organize, Thrive: Your Inventory, Your Success</i></h1>
        <div className={styles.paragraph}>
          <p>
            Invoicing application made with MongoDB, Express, React & Nodejs
          </p>
        </div>
        <div className={styles.imgContainer}>
          <img
            src='https://res.cloudinary.com/almpo/image/upload/v1637241441/special/banner_izy4xm.png'
            alt='invoicing-app'
          />
        </div>
        <button onClick={() => navigate('/login')} className={styles.button}>
          Click To Proceed
        </button>
      </section>
      
    </div>
  );
};

export default Home;
