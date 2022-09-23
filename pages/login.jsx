import React from 'react';
import styles from '../styles/Signup.module.css';
import Image from "next/image";
import Navbar from '../components/navbar';
import google_icon from '../public/images/google.jpg'
import Link from 'next/link';
import gumtree from "../public/images/gumtree_logo.svg";
import { useForm } from "react-hook-form";
import swal from 'sweetalert';

function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm({ mode: "onTouched" });
    const onSubmit = async (data) => {
        const response = await fetch('http://localhost:3000/api/user/login', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        });
        const formInfo = await response.json()
        if (formInfo) {
            swal({
                title: formInfo.msg,
                text: "You clicked the button!",
                icon: "success",
                button: "OK",
            })
        }
        else {

        }
        console.log("response 222222---->", formInfo.data)
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
                            <p className={styles.register_p}>Sign in</p>
                        </div>
                        <div className='row' id={styles.signup_main11}>
                            <div className='col-lg-5' id={styles.main_inputs}>
                                <input type="text" placeholder='Email address' name="email" className={styles.signup_input} defaultValue=""
                                    {...register("email",
                                        {
                                            required: true,
                                            pattern: /^[a-zA-Z0-9.!#$%'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,

                                        })} />
                                {errors.email?.type === "required" && (<small className={styles.formError}>Enter your email</small>)}
                                {errors.email?.type === "pattern" && (<small className={styles.formError}>Please enter a valid email address</small>)}
                                <input type="password" placeholder='Password' name="password" className={styles.signup_input} defaultValue=""
                                    {...register("password", {
                                        required: true,
                                        pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[^a-zA-Z0-9])(?!.*\s).{7,15}$/

                                    })} />
                                {errors.password?.type === "required" && (<small className={styles.formError}>Please enter a password</small>)}
                                {errors.password?.type === "pattern" && (<small className={styles.formError}>Please enter a string character or number atleast 8</small>)}
                                <input type="checkbox" className={styles.checkbox_input} /><span className={styles.remember_me}> Remember Me</span><Link href='/forgot'><span className={styles.forgot_link}>Forgot your password?</span></Link>
                                <div className={styles.button_main_div}>
                                    <button className={styles.register_button} type="Submit" onClick={handleSubmit(onSubmit)}>Sign in</button>
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