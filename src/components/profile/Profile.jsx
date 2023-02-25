import React from "react";
import styles from "./Profile.module.css";
import Postbox from "../postbox/Postbox";
import { useState, useEffect } from "react";

function Profile() {
    const [allPost,setAllPost] = useState([])
    
    useEffect(() => {
        fetch('/data/posts.json')
          .then(response => response.json())
          .then(data => setAllPost(data.posts))
          .catch(e => console.log(e));
      }, []);
  
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
                {allPost.map((data,index)=>{
                    if (data){
                        return <Postbox key={index} date={data["date"]} valueString={data["content"]}/>
                    }
                })}
            </div>
        </div>
        </>
    )
}

export default Profile;