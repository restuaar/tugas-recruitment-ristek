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
    const [modal,setModal] = useState(false)
    const [editData,setEditData] = useState({
        user:"Anonimous",
        content:"",
    })

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
    
        const newPost = { id: uuidv4(), user: "Anonymous", content: postData.content, 
        date: `${day}/${month}/${year}`, isUpdate: false};
        setAllPost([newPost, ...allPost]);
        
        // INI BUAT NGILANGIN NANTI
        setIsUpdate({id: null, status: false})
        setPostData({
            user:"Anonimous",
            content:"",
        });
    }

    const handleEditPost = () => {
        const date = new Date();
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        let data = [...allPost]

        const newDate = `${day}/${month}/${year}`

        if(editData.content===""){
            return
        }

        data.forEach((post) => {
            if(post.id === isUpdate.id) {
                post.content = editData.content
                post.date = newDate
            }
        })
        
        setEditData({
            user:"Anonimous",
            content:"",
        })
        setModal(false)
    }
    
    const handleTextAreaChange = (e) => {
        let data = [...allPost]
        data.content = e.target.value
        setPostData(data)
    }

    const handleModalChange = (e) => {
        let data = [...allPost]
        data.content = e.target.value
        setEditData(data)
    }
    
    const handleEdit = (id) => {
        let data = [...allPost]
        let foundData = data.find((post) => post.id === id);
        setEditData({ user:"Anonimous", content:foundData.content })
        setIsUpdate({ id: id, status:true })
        setModal(true)
    }

    const handleDelete = (id) => {
        let data = [...allPost]
        let filteredData = data.filter((post)=> post.id !== id)
        setAllPost(filteredData)
    }

    if(modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
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
                <ListPost handleEdit={handleEdit} handleDelete={handleDelete} data={allPost}/>
            </div>
        </div>

        {modal && (
        <div className={styles.modal}>
            <div className={styles.overlay}></div>
            <div className={styles.boxPost}>
                <div className={styles.boxPostHeader}>
                    <div className={styles.boxPostProfile}>
                        <img src="./assets/img/profile.png"></img>
                        <p className={styles.boxPostUser}>Anonymous</p>
                    </div>
                    <div className={styles.buttonPost}>
                        <button type="button" onClick={handleEditPost}><img src="./assets/img/edit.png" /></button>
                    </div>
                </div>
                <textarea name="" onChange={handleModalChange} id="message" cols="30" rows="10" value={editData.content}></textarea>
            </div>
        </div>
        )}
        </>
    )
}


export default Main;