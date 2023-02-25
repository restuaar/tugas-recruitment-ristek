import React from "react";
import styles from "./ListPost.module.css";

export default function List({ data, handleEdit, handleDelete }) {
    return (
        data.map((props) => {
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
                            <button type="button" onClick={() => handleEdit(props.id)}><img src="./assets/img/edit.png" /></button>
                            <button type="button" onClick={() => handleDelete(props.id)}><img src="./assets/img/delete.png" /></button>
                        </div>
                    </div>
                    <div className={styles.Post}><p>{props.content}</p></div>
                </div>
                </>
            )
        })
    )
}