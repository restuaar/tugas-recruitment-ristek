import React from "react";
import styles from "./Navbar.module.css"

function Navbar() {
    return (
        <>
        <nav className={styles.wrapper}>
            <div className={styles.logoContainer}>
                <img href="index.html" alt="logo" src="./assets/img/ristek-white.png" className={styles.logoImage}></img>
                <a href="/" className={styles.logoText}>RISTEK MedSOS</a>
            </div>
            <div className={styles.profileContainer}>
                <img href="index.html" alt="profile" src="./assets/img/profile.png" className={styles.profileImage}></img>
                <a href="/profile" className={styles.profileText}>Anonymous</a>
            </div>
        </nav>
        </>
    )
}

export default Navbar;