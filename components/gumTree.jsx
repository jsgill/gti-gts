import React from "react";
import Image from "next/image";
import gumtree from "../public/images/gumtree_logo.svg";
import styles from "../styles/GumTree.module.css";

function GumTree() {
  return (
    <div>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "300px",
          paddingLeft: "47px",
          backgroundColor: "#162432",
        }}
      >
        <Image
          src="/../public/images/gumtree_home.webp"
          height={300}
          width={1250}
          className={styles.background_image}
          // layout="fill"
          // objectFit="cover"
        />
        <div className="container-fluid" id={styles.up_container}>
          <div className="row">
            <div className="col-md-6" id={styles.gumtree_container}>
              <div>
                <Image src={gumtree} alt="gumtree_img" />
              </div>
              <div>
                <h4 className={styles.gumtree_container_h4}>HisarBiz</h4>
                <h4 className={styles.gumtree_container_h4_two}>
                  Trade Together, Save Together
                </h4>
              </div>
            </div>
            <div className="col-md-6" id={styles.gumtree_btn_cont}>
              <button className={styles.gumtree_btn}>Post an ad</button>
            </div>
            <div className="col-md-11 m-auto" id={styles.container_main_select}>
              <div className="row">
                <div className="col-md-3 p-0">
                  <select className={styles.container_select}>
                    <option>All Categories</option>
                    <option>Antiques, Art & Collectables</option>
                    <option>Baby & Children</option>
                    <option>Boats & Jet Skis</option>
                    <option>Books, Music & Games</option>
                    <option>Cars & Vechiles</option>
                    <option>Clothing & Jewelery</option>
                    <option>Community</option>
                    <option>Electronics & Computer</option>
                    <option>Home & Garden</option>
                    <option>Jobs</option>
                    <option>Miscellaneous Goods</option>
                    <option>Pets</option>
                    <option>Real Estate</option>
                    <option>Services For Hire</option>
                    <option>Sport & Fitness</option>
                    <option>Tickets</option>
                  </select>
                </div>
                <div className="col-md-4 p-0">
                  <input
                    className={styles.container_select2}
                    placeholder="I'm looking for..."
                  />
                </div>
                <div className="col-md-3 p-0">
                  <select className={styles.container_select}>
                    <option value="">Australia</option>
                    <option value="">Asia</option>
                  </select>
                </div>
                <div className="col-md-1 p-0">
                  <select className={styles.container_select3}>
                    <option value="">+10km</option>
                    <option className={styles.container_option}>0km</option>
                    <option>2km</option>
                    <option>5km</option>
                    <option>10km</option>
                    <option>20km</option>
                    <option>50km</option>
                    <option>100km</option>
                    <option>250km</option>
                    <option>500km</option>
                  </select>
                </div>
                <div className="col-md-1">
                  <button className={styles.select_section_btn}>
                    <i class="fa fa-align-left"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GumTree;
