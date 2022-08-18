// import LogoComp from "./logComp";
// import NavComp from "./nav";

// function HeaderComp (){
//     return( 
//         <div>
//         <LogoComp/>
//         <NavComp/>
//         </div>
//     )
// }re
// export default HeaderComp

import React, { useState } from "react";
import Link from "next/link";

function NavBar() {
    const [toogle, setToogle] = useState(false)
    function toggleMenu() {
        // console.log("clicked")
        setToogle(!toogle)
    }
    // state={
    //     NavBars:[
    // 'Home','Services','Products','Contacts'
    //     ]
    // }
    return (
        <>
        <div className="nav">
        <div className="NavBar">

            <span>
                Ralonick <strong>LTD</strong>
            </span>
            <div className="hamburger" onClick={toggleMenu}>
                <svg viewBox="0 0 100 80" width="40" height="40">
                    <rect width="100" height="20"></rect>
                    <rect y="30" width="100" height="20"></rect>
                    <rect y="60" width="100" height="20"></rect>
                </svg>
            </div>
            <nav className="nav-display">
                <ul className={toogle ? 'nav-display' : "null"}>
                    {/* {this.state.NavBars.map(NavBar=>*/}
                    <li>
                        <Link href="/" className={({ isActive }) => (isActive ? 'link active' : 'link')}>
                            <button>Home</button>
                            </Link>
                    </li>
                    <li>
                        <Link href="/" className={({ isActive }) => (isActive ? 'link active' : 'link')}>
                            <button>About</button>
                            </Link>
                    </li>
                    <li>
                        <Link href="/" className={({ isActive }) => (isActive ? 'link active' : 'link')}>
                            <button>Services</button>
                            </Link>
                    </li>
                    <li>
                        <Link href="/" className={({ isActive }) => (isActive ? 'link active' : 'link')}>
                            <button>Projects</button>
                            </Link>
                    </li>
                    <li>
                        <Link href="/" className={({ isActive }) => (isActive ? 'link active' : 'link')}>
                            <button>Contact us</button>
                            </Link>
                    </li>
                    {/* <NavLink to="/login" className={({ isActive }) => (isActive ? 'link active' : 'link')}><li> <button>{props.text}</button></li></NavLink>
                        <NavLink to="/signup" className={({ isActive }) => (isActive ? 'link active' : 'link')}><li> <button>SignUp</button></li></NavLink> */}


                </ul>
            </nav>
        </div>
        </div>
</>
    )
}
export default NavBar