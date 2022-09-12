import React from "react";
import Image from "next/image";
import styles from "../styles/Footer.module.css";
import gum_tree_logo from "../public/images/gum_tree_logo.png";
import footer_logo_1 from "../public/images/footer_logo_1.svg";
import footer_logo_2 from "../public/images/footer_logo_2.svg";

function Footer() {
  return (
    <div>
      <div id={styles.footer_download_container}>
        <div>
          <div className="d-flex">
            <div id={styles.footer_logo}>
              <Image src={gum_tree_logo} alt="gum-tree" height={400} />
            </div>
            <div>
              <h6 className={styles.footer_h6}>
                Download the Gumtree app{" "}
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
    </div>
  );
}

export default Footer;
