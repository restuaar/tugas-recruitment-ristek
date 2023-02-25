import React from "react";
import styles from "./Postbox.module.css";

function Postbox(props) {
    return (
        <>
        <div className={styles.boxPost}>
            <div className={styles.boxPostHeader}>
                <div className={styles.boxPostProfile}>
                    <img src="./assets/img/profile.png"></img>
                    <p className={styles.boxPostUser}>Anonymous</p>
                    <p className={styles.boxPostDate}>{props.date}</p>
                </div>
                <div className={styles.buttonPost}>
                    <button type="button"><img src="./assets/img/edit.png" /></button>
                    <button type="button" onClick=""><img src="./assets/img/delete.png" /></button>
                </div>
            </div>
            <div className={styles.Post}><p>{props.valueString}</p></div>
        </div>
        </>
    )
}

export default Postbox;