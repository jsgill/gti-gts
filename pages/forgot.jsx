import React from 'react';
import styles from '../styles/Signup.module.css';
import Image from "next/image";
import gumtree from "../public/images/gumtree_logo.svg";

function Forgot() {
    return (
        <div className={styles.forgot_container}>
            <div className='container-fluid' id={styles.signup_logo}>
                <div className='row'>
                    <div className='col-md-6 d-flex' id={styles.signup_image}>
                        <div>
                            <Image src={gumtree} alt="gum-tree" width={60} height={40} />
                        </div>
                        <div>
                            <h3 className={styles.signup_h3}>Hisar Biz</h3>
                        </div>
                    </div>
                    <div className='col-md-6' id={styles.signup_btn11}>
                        <button className={styles.signup_btn}>Post an ad</button>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='row text-center'>
                    <p className={styles.my_password}>Change My Password</p>
                </div>
                <p className={styles.forgot_para}>Please enter your email address below. You will receive an email with a link to create a new password.</p>
                <label className={styles.forget_label}>Email address</label><br />
                <input type="text" placeholder='Email address' name="email" className={styles.forget_input} />
                <div className={styles.forget_button}>
                    <button className={styles.forget_submit}>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Forgot;