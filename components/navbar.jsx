import Link from 'next/link'
import Document from 'next/document';
import Image from 'next/image'

import React from 'react'
import gumtree from "../public/images/gumtree_logo.svg";
function navbar() {
    function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
    }
    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    }
    return (
        <div>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark" >
                <div className="container-fluid">
                    <Link href="/">
                        <a className="navbar-brand">
                            <Image src={gumtree} className="img-fluid"/>
                            <span className='hisar-biz'>Hisar.biz</span>
                        </a>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar" >
                        <span className="navbar-toggler-icon" onClick={openNav}></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav sidenav" id="mySidenav">
                            <span className="closebtn" onClick={closeNav}>&times;</span>
                            <li className="nav-item">                              
                                <Link href="/"><a className="nav-link">Home</a></Link>
                            </li>
                            <li className="nav-item">
                            <Link href="/"><a className="nav-link">Post on Ad</a></Link>
                            </li>
                            <li className="nav-item">
                            <Link href="/"><a className="nav-link">Manage my Ads</a></Link>
                            </li>
                            <li className="nav-item">
                            <Link href="/"><a className="nav-link">Messages</a></Link>
                            </li>
                            <li className="nav-item">
                            <Link href="/"><a className="nav-link">Favourites</a></Link>
                            </li>
                            <li className="nav-item">
                            <Link href="/"><a className="nav-link">My Alerts</a></Link>
                            </li>
                            <li className="nav-item">
                            <Link href="/"><a className="nav-link">Favourites</a></Link>
                            </li>
                            <li className="nav-item">
                            <Link href="/"><a className="nav-link">My Transaction</a></Link>
                            </li>
                            <li className="nav-item">
                            <Link href="/"><a className="nav-link">My Details</a></Link>
                            </li>
                            <li className="nav-item">
                            <Link href="/"><a className="nav-link">Manage my Job Ads</a></Link>
                            </li>
                            <li className="nav-item">
                            <Link href="/"><a className="nav-link">Help & Contact</a></Link>
                            </li>
                            <li className="nav-item">
                            <Link href="/"><a className="nav-link">Login / Register</a></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default navbar