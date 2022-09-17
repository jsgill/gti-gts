import React, { useState } from "react";
import Image from "next/image";
import gumtree from "../public/images/gumtree_logo.svg";
import down_arrow from "../public/images/down_arrow.png";
import styles from "../styles/GumTree.module.css";

function GumTree() {
  const [showMe, setShowMe] = useState(false);
  const [list1, setList1] = useState("All Categories");

  function toggle() {
    setShowMe(!showMe);
  }

  function handleChange(e) {
    setList1(e.target.value);
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
                <div className="col-md-3 p-0" onClick={toggle}>
                  <div className={styles.hero}>
                    <div className={styles.selector}>
                      <div id={styles.selectField}>
                        <p id={styles.selectText1}>
                          <i
                            className="fa fa-align-left"
                            id={styles.search_icon}
                          ></i>
                          {list1}
                        </p>
                        <Image
                          src={down_arrow}
                          alt="hisar-bizz"
                          height={13}
                          width={20}
                        />
                      </div>
                      <div
                        style={{
                          display: showMe ? "block" : "none",
                        }}
                      >
                        <ul id={styles.list}>
                          <li className={styles.options}>
                            <i
                              className="fa fa-align-left"
                              id={styles.select_ul_icon}
                            ></i>
                            <input
                              id={styles.selectText}
                              onClick={handleChange}
                              defaultValue="All Categories"
                            />
                          </li>
                          <li className={styles.options}>
                            <i
                              className="fa fa-image"
                              id={styles.select_ul_icon}
                            ></i>
                            <input
                              id={styles.selectText}
                              onClick={handleChange}
                              defaultValue="Antiques, Art & Collectables"
                            />
                            <Image
                              src={down_arrow}
                              alt="hisar-bizz"
                              height={13}
                              width={20}
                            />
                          </li>
                          <li className={styles.options}>
                            <i
                              className="fa fa-image"
                              id={styles.select_ul_icon}
                            ></i>
                            <input
                              id={styles.selectText}
                              defaultValue="Baby & Children"
                              onClick={handleChange}
                            />
                          </li>
                          <li className={styles.options}>
                            <i
                              className="fa fa-ship"
                              id={styles.select_ul_icon}
                            ></i>
                            <input
                              id={styles.selectText}
                              defaultValue="Boats & Jet Skis"
                              onClick={handleChange}
                            />
                          </li>
                          <li className={styles.options}>
                            <i
                              className="fa fa-book"
                              id={styles.select_ul_icon}
                            ></i>
                            <input
                              id={styles.selectText}
                              defaultValue="Books, Music & Games"
                              onClick={handleChange}
                            />
                          </li>
                          <li className={styles.options}>
                            <i
                              className="fa fa-car"
                              id={styles.select_ul_icon}
                            ></i>
                            <input
                              id={styles.selectText}
                              defaultValue="Cars & Vechicles"
                              onClick={handleChange}
                            />
                          </li>
                          <li className={styles.options}>
                            <i
                              className="fa fa-clothes-hanger"
                              id={styles.select_ul_icon}
                            ></i>
                            <input
                              id={styles.selectText}
                              defaultValue="Clothing & Jewellery"
                              onClick={handleChange}
                            />
                          </li>
                          <li className={styles.options}>
                            <i
                              className="fa fa-users"
                              id={styles.select_ul_icon}
                            ></i>
                            <input
                              id={styles.selectText}
                              defaultValue="Community"
                              onClick={handleChange}
                            />
                          </li>
                          <li className={styles.options}>
                            <i
                              className="fa fa-mobile"
                              id={styles.select_ul_icon1}
                            ></i>
                            <input
                              id={styles.selectText}
                              defaultValue="Electronics & Computer"
                              onClick={handleChange}
                            />
                          </li>
                          <li className={styles.options}>
                            <i
                              className="fa-solid fa-cauldron"
                              id={styles.select_ul_icon1}
                            ></i>
                            <input
                              id={styles.selectText}
                              defaultValue="Home & Garden"
                              onClick={handleChange}
                            />
                          </li>
                          <li className={styles.options}>
                            <i
                              className="fa-solid fa-bag-shopping"
                              id={styles.select_ul_icon1}
                            ></i>
                            <input
                              id={styles.selectText}
                              defaultValue="Jobs"
                              onClick={handleChange}
                            />
                          </li>
                          <li className={styles.options}>
                            <i
                              className="fa-solid fa-cart-shopping"
                              id={styles.select_ul_icon1}
                            ></i>
                            <input
                              id={styles.selectText}
                              defaultValue="Miscellaneous Goods"
                              onClick={handleChange}
                            />
                          </li>
                          <li className={styles.options}>
                            <i
                              className="fa-solid fa-bone"
                              id={styles.select_ul_icon1}
                            ></i>
                            <input
                              id={styles.selectText}
                              defaultValue="Pets"
                              onClick={handleChange}
                            />
                          </li>
                          <li className={styles.options}>
                            <i
                              className="fa fa-building"
                              id={styles.select_ul_icon1}
                            ></i>
                            <input
                              id={styles.selectText}
                              defaultValue="Real Estate"
                              onClick={handleChange}
                            />
                          </li>
                          <li className={styles.options}>
                            <i
                              className="fa-solid fa-brush"
                              id={styles.select_ul_icon1}
                            ></i>
                            <input
                              id={styles.selectText}
                              defaultValue="Services For Hire"
                              onClick={handleChange}
                            />
                          </li>
                          <li className={styles.options}>
                            <i
                              className="fa fa-bicycle"
                              id={styles.select_ul_icon1}
                            ></i>
                            <input
                              id={styles.selectText}
                              defaultValue="Sport & Fitness"
                              onClick={handleChange}
                            />
                          </li>
                          <li className={styles.options}>
                            <i
                              className="fa fa-ticket"
                              id={styles.select_ul_icon1}
                            ></i>
                            <input
                              id={styles.selectText}
                              defaultValue="Tickets"
                              onClick={handleChange}
                            />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 p-0">
                  <input
                    className={styles.container_select2}
                    placeholder="I'm looking for..."
                  />
                </div>
                <div className="col-md-3 p-0">
                  <p className={styles.container_select}>
                    <i class="fa-sharp fa-solid fa-location-dot"></i>Australia
                  </p>
                </div>
                <div className="col-md-1 p-0">
                  <select className={styles.container_select3}>
                    <option value="">+10km</option>
                    <option>0km</option>
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
