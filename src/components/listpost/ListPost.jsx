import React, { useEffect, useState } from "react";
import styles from "./ListPost.module.css";
import axios from "axios";

export default function List({ data, handleEdit, handleDelete}) {
    
    const [post,setPost] = useState([])
    
    const getPost = async() => {
        const response = await axios.get('http://localhost:5000/users')
        setPost(response.data)
    }
    
    useEffect(()=>{
        getPost();
    },[post])

    return (
        post.map((props) => {
            return (
                <>
                <div className={styles.boxPost}>
                    <div className={styles.boxPostHeader}>
                        <div className={styles.boxPostProfile}>
                            <img src="./assets/img/profile.png"></img>
                            <p className={styles.boxPostUser}>{props.user}</p>
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