import React from "react";
import Image from "next/image";
import styles from "../styles/Footer.module.css";
import gumtree from "../public/images/gumtree_logo.svg";
import footer_logo_1 from "../public/images/footer_logo_1.svg";
import footer_logo_2 from "../public/images/footer_logo_2.svg";
import footer_planet from "../public/images/footer_planet.svg";

function Footer() {
  return (
    <div>
      <div id={styles.footer_download_container}>
        <div>
          <div className="d-flex">
            <div id={styles.footer_logo}>
              <Image src={gumtree} alt="gum-tree" />
            </div>
            <div>
              <h6 className={styles.footer_h6}>
                Download the HisarBiz app
                <span className={styles.footer_h6_span}>
                  for iOS or Android
                </span>
              </h6>
              <p className={styles.footer_p}>Buy and sell faster on the go</p>
              <p className={styles.footer_para_star}>
                <i className="fa fa-star" id={styles.footer_star}></i>
                <i className="fa fa-star" id={styles.footer_star}></i>
                <i className="fa fa-star" id={styles.footer_star}></i>
                <i className="fa fa-star" id={styles.footer_star}></i>
                <i className="fa fa-star" id={styles.footer_star1}></i>
                671k
              </p>
            </div>
          </div>
        </div>

        <div className={styles.footer_logos_container}>
          <div className={styles.footer_image_container}>
            <Image
              src={footer_logo_1}
              alt="gum-tree"
              className={styles.footer_images}
            />
          </div>
          <div className={styles.footer_image_container}>
            <Image
              src={footer_logo_2}
              alt="gum-tree"
              className={styles.footer_images}
            />
          </div>
        </div>
      </div>
      <div className="container-fluid" id={styles.footer_container}>
        <div className="row">
          <div className="col-md-4">
            <div className="row" id={styles.footer_container_row}>
              <div className="col-md-6">
                <h6 className={styles.footer_container_div_h6}>Tips & help</h6>
                <p className={styles.footer_container_div_para}>
                  About HisarBiz
                </p>
                <p className={styles.footer_container_div_para}>Help</p>
                <p className={styles.footer_container_div_para}>Contact Us</p>
                <p className={styles.footer_container_div_para}>
                  Adevinta Brands
                </p>
                <p className={styles.footer_container_div_para}>Register</p>
              </div>
              <div className="col-md-6">
                <h6 className={styles.footer_container_div_h6}>Legal</h6>
                <p className={styles.footer_container_div_para}>Terms of Use</p>
                <p className={styles.footer_container_div_para}>
                  Privacy Policy
                </p>
                <p className={styles.footer_container_div_para}>
                  Posting Policy
                </p>
                <p className={styles.footer_container_div_para}>
                  Cookie Policy
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="row">
              <div className="col-md-6">
                <h6 className={styles.footer_container_div_h6}>For Business</h6>
                <p className={styles.footer_container_div_para}>
                  Recruiters & Employers
                </p>
                <p className={styles.footer_container_div_para}>Display Ads</p>
                <p className={styles.footer_container_div_para}>
                  Car Dealer Packages
                </p>
                <p className={styles.footer_container_div_para}>
                  Press Contact
                </p>
              </div>
              <div className="col-md-6">
                <h6 className={styles.footer_container_div_h6}>Explore</h6>
                <p className={styles.footer_container_div_para}>Top Searches</p>
                <p className={styles.footer_container_div_para}>Blog</p>
                <p className={styles.footer_container_div_para}>
                  All Locations
                </p>
                <p className={styles.footer_container_div_para}>Free Stuff</p>
                <p className={styles.footer_container_div_para}>
                  Circular Economy
                </p>
                <p className={styles.footer_container_div_para}>Autotrader</p>
                <p className={styles.footer_container_div_para}>CarsGuide</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="row">
              <div className="col-md-6">
                <h6 className={styles.footer_container_div_h6}>
                  HisarBiz Cars
                </h6>
                <p className={styles.footer_container_div_para}>
                  Cars for Sale
                </p>
                <p className={styles.footer_container_div_para}>
                  Used Cars for Sale
                </p>
                <p className={styles.footer_container_div_para}>
                  New Cars for Sale
                </p>
                <p className={styles.footer_container_div_para}>
                  Demo Cars for Sale
                </p>
                <p className={styles.footer_container_div_para}>
                  Research Cars
                </p>
                <p className={styles.footer_container_div_para}>Car Sitemap</p>
              </div>
              <div className="col-md-6">
                <h6 className={styles.footer_container_div_h6}>
                  Top Categories
                </h6>
                <p className={styles.footer_container_div_para}>
                  Boats & Jet Skis
                </p>
                <p className={styles.footer_container_div_para}>Pets</p>
                <p className={styles.footer_container_div_para}>Jobs</p>
                <p className={styles.footer_container_div_para}>Real Estate</p>
                <p className={styles.footer_container_div_para}>
                  Home & Garden
                </p>
                <p className={styles.footer_container_div_para}>
                  All Categories
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer_bottom}>
        <div className={styles.footer_bottom_container}>
          <p className={styles.footer_bottom_para}>
            <i className="fa fa-facebook-f" id={styles.footer_icon}></i>
            <i className="fa fa-twitter" id={styles.footer_icon}></i>
            <i className="fa fa-youtube" id={styles.footer_icon}></i>
            <i className="fa fa-instagram" id={styles.footer_icon}></i>
          </p>
          <p className={styles.footer_bottom_para1}>
            Copyright © 2007-2022 Marktplaats B.V. All Rights Reserved.
          </p>
        </div>
        <div className={styles.footer_bottom_container}>
          <p className={styles.footer_bottom_para2}>Proud Partner of</p>
          <Image
            src={footer_planet}
            alt="footer_planet"
            height={38}
            width={200}
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
