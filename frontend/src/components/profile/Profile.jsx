import React from "react";
import styles from "./Profile.module.css";
import ListPost from "../listpost/ListPost";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import logoProfile from '../../img/profile.png'
import logoEdit from '../../img/edit.png'

function Profile() {
    const { id } = useParams()
    const [allPost,setAllPost] = useState([])
    const [editData,setEditData] = useState("")

    const [modal,setModal] = useState(false)
    const [modalDel,setModalDel] = useState(false)
   
    const [userId,setUserId] = useState("")
    const [user,setUser] = useState("")
    const [content,setContent] = useState("")
    const [date,setDate] = useState("")
    
    const navigate = useNavigate();
    

    const getPost = async() => {
        const response = await axios.get('http://localhost:5000/posts')
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

        const response = await axios.get(`http://localhost:5000/posts/${id}`);
        setUserId(response.data.id);
        setUser(response.data.user);
        setContent(response.data.content);
        setDate(response.data.date);
      };

    const updatePost = async() => {
        try {
            const date = new Date();
            const day = date.getDate();
            const month = date.getMonth() + 1;
            const year = date.getFullYear();
            const newDate = `${day}/${month}/${year}`

            await axios.patch(`http://localhost:5000/posts/${id}`,{
                "id": userId,
                "user": user,
                "content": editData,
                "date": newDate,
            })
            navigate('/profile')
            setModal(false)
        } catch (e) {
            console.log(e)
        }
    }

    const handleModalChange = (e) => {
        let data = [...allPost]
        data.content = e.target.value
        setEditData(data.content)
    }
    
    const handleEdit = (id) => {
        let data = [...allPost]
        let foundData = data.find((post) => post.id === id);
        navigate(`/profile/${foundData._id}`)
        setEditData(foundData.content)
        setModal(true)
    }

    const handleDelete = (id) => {
        let data = [...allPost]
        let foundData = data.find((post) => post.id === id);
        navigate(`/profile/${foundData._id}`)
        setEditData(foundData.content)
        setModalDel(true)
    }

    const handleCancelDelete = () => {
        setModalDel(false)
        navigate('/profile')
    }

    const deletePost = async() => {
        try {
            await axios.delete(`http://localhost:5000/posts/${id}`)
            getPost()
            navigate('/profile')
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

    return(
        <>
        <div className={styles.wrapper}>
            <div className={styles.profileHeader}>
                <img src="./assets/img/profile.png" alt="profile" />
                <h2>@Anonymous</h2>
            </div>
            <div className={styles.profileBio}>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi eligendi suscipit deleniti rem sapiente libero explicabo pariatur quam quia? Assumenda cupiditate inventore adipisci necessitatibus consequatur iste culpa blanditiis nobis suscipit!</p>
            </div>
            <div className={styles.wrapperBoxPost}>
                <ListPost handleEdit={handleEdit} data={allPost} handleDelete={handleDelete}/>
            </div>
        </div>

        {modal && (
        <div className={styles.modal}>
            <div className={styles.overlay}></div>
            <div className={styles.boxPost}>
                <div className={styles.boxPostHeader}>
                    <div className={styles.boxPostProfile}>
                        <img src={logoProfile} alt="profile"></img>
                        <p className={styles.boxPostUser}>Anonymous</p>
                    </div>
                    <div className={styles.buttonPost}>
                        <button type="button" onClick={updatePost}><img src={logoEdit} alt="edit button" /></button>
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
                        <button type="button" onClick={handleCancelDelete} className={styles.deleteButtonNo}>Tidak</button>
                        <button type="button" onClick={deletePost} className={styles.deleteButtonYes}>Iya</button>
                    </div>
                </div>
            </div>
        </div>
        )}

        </>
    )
}

export default Profile;