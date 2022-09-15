import React, { useState } from 'react';
import styles from '../styles/Signup.module.css';
import Image from "next/image";
import Navbar from '../components/navbar';
import google_icon from '../public/images/google.jpg'
import Link from 'next/link';
import gumtree from "../public/images/gumtree_logo.svg";
import axios from 'axios';

function Signup() {
    const [form, setForm] = useState({
        email: "",
        username: "",
        password: "",
        confirm_password: ""
    });
    const { email, username, password, confirm_password } = form
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const handleSubmit = async () => {
        console.log("form =====>", form)
        await fetch('http://localhost:3000/api/user/signup', {
            method: "POST",
            body: JSON.stringify(form),
            headers:
            {
                "Content-Type":
                    "application/json",
            },
        }).then((res) => {
            console.log(" res data =======>", res)

        })
        //const data = response.json()
        // const res = await axios.post('http://localhost:3000/api/user/signup', form)
        // console.log("response ---->", res)
    }
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
                            <p className={styles.register_p}>Register</p>
                        </div>
                        <div className='row' id={styles.signup_main}>
                            <p className={styles.register_paragraph}>By registering, I agree to HisarBiz's Terms of Use and Privacy Policy and
                                I consent to receiving marketing communications from Gumtree.</p>
                            <div className='col-lg-5' id={styles.main_inputs}>
                                <div className={styles.main_inputs11}>
                                    <input type="text" placeholder='Email address' name="email" className={styles.signup_input} value={email} onChange={(e) => handleChange(e)} />
                                    <input type="text" placeholder='Your name' name="username" className={styles.signup_input} value={username} onChange={(e) => handleChange(e)} />
                                    <div>
                                        <label className={styles.signup_label}>Password creation tips</label><br />
                                        <input type="password" placeholder='Password' name="password" className={styles.signup_input} value={password} onChange={(e) => handleChange(e)} />
                                    </div>
                                    <input type="password" placeholder='Confirm password' name="confirm_password" className={styles.signup_input} value={confirm_password} onChange={(e) => handleChange(e)} />
                                    <div className={styles.button_main_div}>
                                        <button className={styles.register_button} onClick={handleSubmit}>Register</button>
                                        <p className={styles.already_registered}>Already registered with HisarBiz? <Link href='/login' className={styles.link_signin}>Sign in</Link></p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-2' id={styles.signup_tag}>
                                <div className={styles.signup_border_line}>
                                </div>
                            </div>
                            <div className='col-lg-5' id={styles.main_icons}>
                                <div className='container'>
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
        </div>
    )
}

export default Signup;