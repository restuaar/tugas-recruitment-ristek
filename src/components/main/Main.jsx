import React, { useState, useEffect} from "react";
import styles from "./Main.module.css";
import Postbox from "../postbox/Postbox";
import { v4 as uuidv4 } from 'uuid';

function Main() {
    const [allPost,setAllPost] = useState([])
    const [textValue,setTextValue] = useState("")

    useEffect(() => {
        fetch('/data/posts.json')
          .then(response => response.json())
          .then(data => setAllPost(data.posts))
          .catch(e => console.log(e));
      }, []);

    const handleAddPost = () => {
        const date = new Date();
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();

        if(textValue===""){
            return
        } else {
            const newPost = { id: uuidv4(), user: "Anonymous", content: textValue, date: `${day}/${month}/${year}` };
            setAllPost([newPost, ...allPost]);
            setTextValue("");

        }

    }

    const handleTextAreaChange = (e) => {
        setTextValue(e.target.value)
    }

    const handleDeletePost = (id) => {
        const newAllPost = allPost.filter((post) => post.id !== id);
        setAllPost(newAllPost);
    }

    const STORAGE_KEY = "POST";

    // Menyimpan data ke localStorage setiap kali nilai allPost berubah
    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(allPost));
    }, [allPost]);

    return (
        <>
        <div className={styles.wrapper}>
            <div className={styles.welcomeText}>
            <h1>Welcome Back,<br /><span>@Anonymous</span></h1>
            </div>
            <form>
                <textarea name="textarea" onChange={handleTextAreaChange} value={textValue}
                id="message" cols="30" rows="10" placeholder="What's Happening" maxLength={200}></textarea>
                <div className={styles.allButton}>
                    <button type="button" onClick={handleAddPost}
                    className={styles.buttonSubmit}><span>Post</span><img src="./assets/img/send.png"/></button>
                    <button type="button" 
                    className={styles.buttonCloseFriend}><span>Edit Close Friends</span><img src="./assets/img/group.png"/></button>
                </div>
            </form>
            <div className={styles.wrapperBoxPost}>
                {/* <Postbox valueString="Lorem ipsum dolor sit, amet consectetur adipisicing elit."/> */}
                {allPost.map((data,index)=>{
                    if (data){
                        return <Postbox key={index} date={data["date"]} valueString={data["content"]} handleDeletePost={handleDeletePost}/>
                    }
                })}
            </div>
        </div>
        </>
    )
}


export default Main;