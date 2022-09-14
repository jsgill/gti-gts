import React from 'react';
import styles from '../styles/Signup.module.css';
import Image from "next/image";
import Navbar from '../components/navbar';
import google_icon from '../public/images/google.jpg'
import Link from 'next/link';
import gumtree from "../public/images/gumtree_logo.svg";

function Login() {
    return (
        <div>
            <Navbar />
            <div className={styles.signup_container}>
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
                <div className={styles.main_div_container}>
                    <div className='container' id={styles.container11}>
                        <div className='text-center'>
                            <p className={styles.register_p}>Sign in</p>
                        </div>
                        <div className='row' id={styles.signup_main}>
                            <div className='col-lg-5' id={styles.main_inputs}>
                                <input type="text" placeholder='Email address' name="email" value='' className={styles.signup_input} />
                                <input type="password" placeholder='Password' name="password" value="" className={styles.signup_input} />
                                <input type="checkbox" /><span className={styles.remember_me}> Remember Me</span><Link href='/forgot'><span className={styles.forgot_link}>Forgot your password?</span></Link>
                                <div className={styles.button_main_div}>
                                    <button className={styles.register_button}>Sign in</button>
                                    <p className={styles.already_registered}>Don't have an account? <Link href='/signup' className={styles.link_signin}>Register now</Link></p>
                                </div>
                            </div>
                            <div className='col-lg-2' id={styles.signup_tag}>
                                <div className={styles.signup_border_line}>
                                </div>
                            </div>
                            <div className='col-lg-5' id={styles.main_icons}>
                                <div className='d-flex' id={styles.signup_icon}>
                                    <p className={styles.signup_icon_p}><i className="fa fa-facebook-f" id={styles.signup_facebook}></i></p>
                                    <div className={styles.signup_para10}><p className={styles.signup_para11}>Register with Facebook</p></div>
                                </div>
                                <div className='d-flex' id={styles.signup_icon11}>
                                    <p className={styles.signup_icon_p11}><Image src={google_icon} width={40} height={40} id={styles.signup_facebook} /></p>
                                    <div className={styles.signup_para12}><p className={styles.signup_para13}>Register with Google</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;