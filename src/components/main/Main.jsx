import React, { useState, useEffect} from "react";
import styles from "./Main.module.css";
import ListPost from "../listpost/ListPost";
import { v4 as uuidv4 } from 'uuid';
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function Main() {
    const { id } = useParams()
    const [allPost,setAllPost] = useState([])
    const [postData,setPostData] = useState({
        user:"Anonimous",
        content:"",
    })
    const [editData,setEditData] = useState("")

    const [modal,setModal] = useState(false)
    const [modalDel,setModalDel] = useState(false)
   
    const [userId,setUserId] = useState("")
    const [user,setUser] = useState("")
    const [content,setContent] = useState("")
    const [date,setDate] = useState("")
    
    const navigate = useNavigate();
    

    const getPost = async() => {
        const response = await axios.get('http://localhost:5000/users')
        setAllPost(response.data)
    }

    useEffect(()=>{
        getPost();
    },[])

    useEffect(()=>{
        if (id === undefined) {
            return
        }
        getPostById();
    })

    const getPostById = async () => {

        const response = await axios.get(`http://localhost:5000/users/${id}`);
        setUserId(response.data.id);
        setUser(response.data.user);
        setContent(response.data.content);
        setDate(response.data.date);
      };

    const savePost = async() => {
        try {
            const date = new Date();
            const day = date.getDate();
            const month = date.getMonth() + 1;
            const year = date.getFullYear();
    
            if(postData.content===""){
                return
            }
        
            const newPost = { id: uuidv4(), user: "Anonymous", content: postData.content, 
            date: `${day}/${month}/${year}`, isUpdate: false};
            await axios.post('http://localhost:5000/users',newPost)
            navigate("/")

            getPost()
            setPostData({
                user:"Anonimous",
                content:"",
            });
        } catch (e) {
            console.log(e)
        }
    }

    const updatePost = async() => {
        try {
            const date = new Date();
            const day = date.getDate();
            const month = date.getMonth() + 1;
            const year = date.getFullYear();
            const newDate = `${day}/${month}/${year}`

            await axios.patch(`http://localhost:5000/users/${id}`,{
                "id": userId,
                "user": user,
                "content": editData,
                "date": newDate,
            })
            navigate('/')
            setModal(false)
        } catch (e) {
            console.log(e)
        }
    }
    
    const handleTextAreaChange = (e) => {
        let data = [...allPost]
        data.content = e.target.value
        setPostData(data)
    }

    const handleModalChange = (e) => {
        let data = [...allPost]
        data.content = e.target.value
        setEditData(data.content)
    }
    
    const handleEdit = (id) => {
        let data = [...allPost]
        let foundData = data.find((post) => post.id === id);
        navigate(`/${foundData._id}`)
        setEditData(foundData.content)
        setModal(true)
    }

    const handleDelete = (id) => {
        let data = [...allPost]
        let foundData = data.find((post) => post.id === id);
        navigate(`/${foundData._id}`)
        setEditData(foundData.content)
        setModalDel(true)
    }

    const handleCancelDelete = () => {
        setModalDel(false)
        navigate('/')
    }

    const deletePost = async() => {
        try {
            await axios.delete(`http://localhost:5000/users/${id}`)
            getPost()
            navigate('/')
            setModalDel(false)
        } catch (e){
            console.log(e)
        }
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
                    <button type="button" onClick={savePost}
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
                        <button type="button" onClick={updatePost}><img src="./assets/img/edit.png" /></button>
                    </div>
                </div>
                <textarea name="" onChange={handleModalChange} id="message" cols="30" rows="10" value={editData}></textarea>
            </div>
        </div>
        )}

        {modalDel && (
        <div className={styles.modal}>
            <div className={styles.overlay}></div>
            <div className={styles.boxDelete}>
                <div className={styles.deleteHeader}>
                    <p>Apakah anda yakin untuk menghapusnya?</p>
                    <div className={styles.deleteButton}>
                        <button type="button" onClick={deletePost}>Iya</button>
                        <button type="button" onClick={handleCancelDelete}>Tidak</button>
                    </div>
                </div>
            </div>
        </div>
        )}
        </>
    )
}

export default Main;