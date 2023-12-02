import React from "react";
import PostForm  from "../../components/postForm/PostForm.jsx";
import Container from '../Container/Container.jsx'
import PostCard from "../postCard/PostCard.jsx";
function AddPost() {
  return (
    <div className="py-8">
      <Container>
        {/* <PostCard /> */}
        <PostForm />
        {/* <Login /> */}
      </Container>
    </div>
  );
}

export default AddPost;
