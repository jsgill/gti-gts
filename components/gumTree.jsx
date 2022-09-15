import React, { useState } from "react";
import Image from "next/image";
import gumtree from "../public/images/gumtree_logo.svg";
import styles from "../styles/GumTree.module.css";

function GumTree() {
  const [showMe, setShowMe] = useState(false);
  const [showMeli, setShowMeli] = useState(false);
  function toggle() {
    setShowMe(!showMe);
  }
  function toggleli() {
    setShowMeli(!showMeli);
  }
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
                <div className="col-md-3 p-0" id={styles.container_sub_select}>
                  <button onClick={toggle} className={styles.container_select1}>
                    <i className="fa fa-align-left"></i>All Categories
                    <i className="fa fa-angle-down" id={styles.dropdown}></i>
                  </button>
                  <div
                    style={{
                      display: showMe ? "block" : "none",
                    }}
                  >
                    <ul className={styles.select_ul}>
                      <p>
                        <i
                          className="fa fa-align-left"
                          id={styles.select_ul_icon}
                        ></i>
                        All Categories
                      </p>
                      <p>
                        <i
                          className="fa fa-image"
                          id={styles.select_ul_icon}
                        ></i>
                        Antiques,Art & Collections
                      </p>
                      <p>
                        <i
                          className="fa-sharp fa-solid fa-bowl-hot"
                          id={styles.select_ul_icon}
                        ></i>
                        Baby & Children
                      </p>
                      <p>
                        <i
                          className="fa fa-ship"
                          id={styles.select_ul_icon}
                        ></i>
                        Boats & Jet Skis
                      </p>
                      <p>
                        <i
                          className="fa fa-book"
                          id={styles.select_ul_icon}
                        ></i>
                        Books, Music & Games
                      </p>
                      <p>
                        <i className="fa fa-car" id={styles.select_ul_icon}></i>
                        Cars & Vechiles
                      </p>
                      <p>
                        <i
                          className="fa fa-clothes-hanger"
                          id={styles.select_ul_icon}
                        ></i>
                        Clothing & Jewellery
                      </p>
                      <p>
                        <i
                          className="fa fa-users"
                          id={styles.select_ul_icon}
                        ></i>
                        Community
                      </p>
                      <p>
                        <i
                          className="fa fa-mobile"
                          id={styles.select_ul_icon1}
                        ></i>
                        Electronics & Computer
                      </p>
                      <p>
                        <i
                          className="fa-solid fa-cauldron"
                          id={styles.select_ul_icon1}
                        ></i>
                        Home & Garden
                      </p>
                      <p>
                        <i
                          className="fa-solid fa-bag-shopping"
                          id={styles.select_ul_icon1}
                        ></i>
                        Jobs
                      </p>
                      <p>
                        <i
                          className="fa-solid fa-cart-shopping"
                          id={styles.select_ul_icon1}
                        ></i>
                        Miscellaneous Goods
                      </p>
                      <p>
                        <i
                          className="fa-solid fa-bone"
                          id={styles.select_ul_icon1}
                        ></i>
                        Pets
                      </p>
                      <p>
                        <i
                          className="fa fa-building"
                          id={styles.select_ul_icon1}
                        ></i>
                        Real Estate
                      </p>
                      <p>
                        <i
                          className="fa-solid fa-brush"
                          id={styles.select_ul_icon1}
                        ></i>
                        Services For Hire
                      </p>
                      <p>
                        <i
                          className="fa fa-bicycle"
                          id={styles.select_ul_icon1}
                        ></i>
                        Sport & Fitness
                      </p>
                      <p>
                        <i
                          className="fa fa-ticket"
                          id={styles.select_ul_icon1}
                        ></i>
                        Tickets
                      </p>
                    </ul>
                  </div>
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
                    <i className="fa fa-align-left"></i>
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
