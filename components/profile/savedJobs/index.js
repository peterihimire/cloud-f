import React from "react";
import styles from "./styles.module.scss";
import { CloseOutlined } from "@ant-design/icons";
import ScrollAnimation from 'react-animate-on-scroll';

const SavedJobs = () => {
  return (
    <div className={styles.saved}>
      <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
      <div className={`${styles.wrapper} wrapper`}>
        <h1>SAVED JOBS</h1>
        <p className={styles.lead}>Jobs you saved are here</p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.location}>
                <i className="fal fa-map-marker-alt"></i>
                <span>Houston, U.S</span>
              </div>
              <div className={styles.removeBtn}>
                <button>
                  <CloseOutlined />
                </button>
              </div>
            </div>
            <div className={styles.cardBody}>
              <h3>Back End Developer</h3>
              <p>Lorem ipsum dolor sit amet, consecte adipiscing</p>
            </div>
            <div className={styles.cardFooter}>
              <span></span>
              <p>Posted a week ago</p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.location}>
                <i className="fal fa-map-marker-alt"></i>
                <span>Houston, U.S</span>
              </div>
              <div className={styles.removeBtn}>
                <button>
                  <CloseOutlined />
                </button>
              </div>
            </div>
            <div className={styles.cardBody}>
              <h3>Back End Developer</h3>
              <p>Lorem ipsum dolor sit amet, consecte adipiscing</p>
            </div>
            <div className={styles.cardFooter}>
              <span></span>
              <p>Posted a week ago</p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.location}>
                <i className="fal fa-map-marker-alt"></i>
                <span>Houston, U.S</span>
              </div>
              <div className={styles.removeBtn}>
                <button>
                  <CloseOutlined />
                </button>
              </div>
            </div>
            <div className={styles.cardBody}>
              <h3>Back End Developer</h3>
              <p>Lorem ipsum dolor sit amet, consecte adipiscing</p>
            </div>
            <div className={styles.cardFooter}>
              <span></span>
              <p>Posted a week ago</p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.location}>
                <i className="fal fa-map-marker-alt"></i>
                <span>Houston, U.S</span>
              </div>
              <div className={styles.removeBtn}>
                <button>
                  <CloseOutlined />
                </button>
              </div>
            </div>
            <div className={styles.cardBody}>
              <h3>Back End Developer</h3>
              <p>Lorem ipsum dolor sit amet, consecte adipiscing</p>
            </div>
            <div className={styles.cardFooter}>
              <span></span>
              <p>Posted a week ago</p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.location}>
                <i className="fal fa-map-marker-alt"></i>
                <span>Houston, U.S</span>
              </div>
              <div className={styles.removeBtn}>
                <button>
                  <CloseOutlined />
                </button>
              </div>
            </div>
            <div className={styles.cardBody}>
              <h3>Back End Developer</h3>
              <p>Lorem ipsum dolor sit amet, consecte adipiscing</p>
            </div>
            <div className={styles.cardFooter}>
              <span></span>
              <p>Posted a week ago</p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.location}>
                <i className="fal fa-map-marker-alt"></i>
                <span>Houston, U.S</span>
              </div>
              <div className={styles.removeBtn}>
                <button>
                  <CloseOutlined />
                </button>
              </div>
            </div>
            <div className={styles.cardBody}>
              <h3>Back End Developer</h3>
              <p>Lorem ipsum dolor sit amet, consecte adipiscing</p>
            </div>
            <div className={styles.cardFooter}>
              <span></span>
              <p>Posted a week ago</p>
            </div>
          </div>
        </div>
      </div>
      </ScrollAnimation>
    </div>
  );
};

export default SavedJobs;
