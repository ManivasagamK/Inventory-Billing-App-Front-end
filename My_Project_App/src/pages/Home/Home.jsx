import React from "react";
import styles from "./Home.module.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <section className={styles.hero}>
        {/* <h1>Better way to manage your Business</h1> */}
        <h1>
          <i>Simplify, Organize, Thrive: Your Inventory, Your Success</i>
        </h1>
        <div className={styles.paragraph}>
          <h4>
            Build Your Invoice with this invoicing app for <b>Free</b>
          </h4>
          <p>
            Invoicing application made with MongoDB, Express, React & Nodejs
          </p>
        </div>
        <div className={styles.imgContainer}>
          <img
            // src='https://i.postimg.cc/Y0yT3XXw/4023504.jpg'
            src="https://i.postimg.cc/CL0WGQwk/9413885.jpg"
            alt="invoicing-app"
          />
        </div>
        <button onClick={() => navigate("/login")} className={styles.button}>
          Click To Proceed
        </button>
      </section>
    </div>
  );
};

export default Home;
