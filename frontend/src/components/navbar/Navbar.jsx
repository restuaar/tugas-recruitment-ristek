import React from "react";
import styles from "./Navbar.module.css"

function Navbar() {
    return (
        <>
        <nav className={styles.wrapper}>
            <div className={styles.logoContainer}>
                <a href="/"><img href="index.html" alt="logo" src="./assets/img/ristek-white.png" className={styles.logoImage}></img></a>
                <a href="/" className={styles.logoText}>RISTEK MedSOS</a>
            </div>
            <div className={styles.profileContainer}>
                <a href="/profile"><img href="index.html" alt="profile" src="./assets/img/profile.png" className={styles.profileImage}></img></a>
                <a href="/profile" className={styles.profileText}>Anonymous</a>
            </div>
        </nav>
        </>
    )
}

export default Navbar;