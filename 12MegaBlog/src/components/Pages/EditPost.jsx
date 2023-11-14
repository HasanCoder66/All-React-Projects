import React, { useEffect, useState } from "react";
import appwriteService from "../../appwrite/mainConfig";
import { Container,  PostForm } from "../../components";
import { useNavigate , useParams } from "react-router-dom";
function EditPost() {

    const [post , setPosts ] = useState(null)
    const {slug} = useParams()
    const navigate = useNavigate()


    useEffect(()=> {
        if(slug) {
            appwriteService.getPost(slug)
            .then((post)=> {
                if(post){
                    setPosts(post  )
                }else{
                    navigate('/')
                }
            })
        }
    }, [slug , navigate])
    return post ? (
        <div className="py-8">
            <Container>
                <PostForm {...post}/>
            </Container>
        </div>
    )  : null

  return (
    <div>EditPost</div>
  )
}

export default EditPost