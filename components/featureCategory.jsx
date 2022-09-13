import React from "react";
import styles from "../styles/FeatureCategory.module.css";
import Image from "next/image";
import feature_1 from "../public/images/feature_1.jpg";
import feature_2 from "../public/images/feature_2.jpg";
import feature_3 from "../public/images/feature_3.jpg";
import feature_4 from "../public/images/feature_4.jpg";

function FeatureCategory() {
  return (
    <div>
      <div className="container-fluid my-5 px-5">
        <div className={styles.container_features}>
          <h4 className={styles.container_features_h4}>Featured Categories</h4>
          <p className={styles.container_features_p}>
            Browse through some of our most popular categories
          </p>
        </div>
        <div className="row">
          <div className="col-md-3" id={styles.featured_categories__scroller}>
            <Image src={feature_1} alt="Avatar" className={styles.image} />
            <div className={styles.content_container}>
              <h4 className={styles.content_h1}>Cars</h4>
              <p className={styles.content_p}>116,700 ads</p>
            </div>
          </div>
          <div className="col-md-3" id={styles.featured_categories__scroller1}>
            <Image src={feature_2} alt="Avatar" className={styles.image} />
            <div className={styles.content_container}>
              <h4 className={styles.content_h1}>Home & Garden</h4>
              <p className={styles.content_p1}>581,900 ads</p>
            </div>
          </div>
          <div className="col-md-3" id={styles.featured_categories__scroller2}>
            <Image src={feature_3} alt="Avatar" className={styles.image} />
            <div className={styles.content_container}>
              <h4 className={styles.content_h1}>Jobs</h4>
              <p className={styles.content_p2}>22,100 ads</p>
            </div>
          </div>
          <div className="col-md-3" id={styles.featured_categories__scroller1}>
            <Image src={feature_4} alt="Avatar" className={styles.image} />
            <div className={styles.content_container}>
              <h4 className={styles.content_h1}>Freebies</h4>
              <p className={styles.content_p1}>16,100 ads</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureCategory;
