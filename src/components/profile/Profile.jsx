import React from "react";
import styles from "./Profile.module.css";
import ListPost from "../listpost/ListPost";
import { useState, useEffect } from "react";

function Profile() {
    const [allPost,setAllPost] = useState([])
    const [postData,setPostData] = useState({
        user:"Anonimous",
        content:"",
    })
    const [isUpdate,setIsUpdate] = useState({id: null, status: false})
    
    useEffect(() => {
        fetch('/data/posts.json')
          .then(response => response.json())
          .then(data => setAllPost(data.posts))
          .catch(e => console.log(e));
      }, []);

    const handleEdit = (id) => {
        let data = [...allPost]
        let foundData = data.find((contact) => contact.id === id);
        setPostData({ user:"Anonimous", content:foundData.content })
        setIsUpdate({ id: id, status:true })
    }
    
  
    return(
        <>
        <div className={styles.wrapper}>
            <div className={styles.profileHeader}>
                <img src="./assets/img/profile.png" alt="" />
                <h2>@Anonymous</h2>
            </div>
            <div className={styles.profileBio}>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi eligendi suscipit deleniti rem sapiente libero explicabo pariatur quam quia? Assumenda cupiditate inventore adipisci necessitatibus consequatur iste culpa blanditiis nobis suscipit!</p>
            </div>
            <div className={styles.wrapperBoxPost}>
                <ListPost handleEdit={handleEdit} data={allPost}/>
            </div>
        </div>
        </>
    )
}

export default Profile;