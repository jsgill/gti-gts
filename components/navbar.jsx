import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import gumtree from "../public/images/gumtree_logo.svg";

function navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark" >
                <div className="container-fluid">
                    <Link href="/">
                        <a className="navbar-brand">
                            <Image src={gumtree} className="img-fluid" />
                            <span className='hisar-biz'>Hisar.biz</span></a>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar" >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link href="/"><a className="nav-link">Cars & Vehicles</a></Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/"><a className="nav-link">Home & Garden</a></Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/"><a className="nav-link">Jobs</a></Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/"><a className="nav-link">Real Estate</a></Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/"><a className="nav-link">Services For Hire</a></Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/"><a className="nav-link">Value My Car</a></Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/"><a className="nav-link">More...</a></Link>
                            </li>
                        </ul>
                    </div>
                    <ul>
                        <li className="nav-item">
                            <Link href='/signup'><a className="nav-link">Login / Register</a></Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
export default navbar