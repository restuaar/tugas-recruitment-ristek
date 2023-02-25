import React, { useState, useEffect} from "react";
import styles from "./Main.module.css";
import ListPost from "../listpost/ListPost";
import { v4 as uuidv4 } from 'uuid';


function Main() {
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
    
    const handleAddPost = () => {
        const date = new Date();
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        let data = [...allPost]


        if(postData.content===""){
            return
        }
        
        if(isUpdate.status){
            data.forEach((post) => {
                if(post.id === isUpdate.id) {
                    post.content = postData.content
                }
            })
        } else {
            const newPost = { id: uuidv4(), user: "Anonymous", content: postData.content, 
            date: `${day}/${month}/${year}`, isUpdate: false};
            setAllPost([newPost, ...allPost]);
            // setAllPost([newPost, ...allPost]);
        }
        
        // INI BUAT NGILANGIN NANTI
        setIsUpdate({id: null, status: false})
        setPostData({
            user:"Anonimous",
            content:"",
        });
    }
    
    const handleTextAreaChange = (e) => {
        let data = [...allPost]
        data.content = e.target.value
        setPostData(data)
    }
    
    const handleEdit = (id) => {
        let data = [...allPost]
        let foundData = data.find((contact) => contact.id === id);
        setPostData({ user:"Anonimous", content:foundData.content })
        setIsUpdate({ id: id, status:true })
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
                <textarea name="textarea" onChange={handleTextAreaChange} value={postData.content}
                id="message" cols="30" rows="10" placeholder="What's Happening" maxLength={200}></textarea>
                <div className={styles.allButton}>
                    <button type="button" onClick={handleAddPost}
                    className={styles.buttonSubmit}><span>Post</span><img src="./assets/img/send.png"/></button>
                    <button type="button" 
                    className={styles.buttonCloseFriend}><span>Edit Close Friends</span><img src="./assets/img/group.png"/></button>
                </div>
            </form>
            <div className={styles.wrapperBoxPost}>
                <ListPost handleEdit={handleEdit} data={allPost}/>
            </div>
        </div>
        </>
    )
}


export default Main;