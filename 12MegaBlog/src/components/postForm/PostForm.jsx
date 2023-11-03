import React from "react";
import { Button, RTE, Input, Select } from "../index";
import { useForm } from "react-hook-form";
import appwriteService from "../../appwrite/mainConfig";
import { useNavigate } from "react-router-dom";
import { UseSelector, useSelector } from "react-redux";

function PostForm({ post }) {
  const {
    register,
    handleSubmit,
    watch,
    control,
    getValues,
    setValue,
  } = useForm({
    defaultValues: {
      Title: post?.Title || "",
      Slug: post?.Slug || "",
      Content: post?.Content || "",
      Status: post?.Status || "active",
    },
  });
  const navigate = useNavigate();
  const userData = useSelector((state) => state.user.userData);

  const submit = async (data) => {
    if (post) {
      const file = data.Image[0]
        ? appwriteService.uploadFile(data.Image[0])
        : null;
    }
    if (file) {
      appwriteService.deleteFile(post.FeaturedImage);
    }
    const dbPost = await appwriteService.updatePost(post.$id, {
      ...data,
      FeaturedImage: file ? file.$id : undefined,
    });

    if (dbPost) {
      navigate(`/post${dbPost.$id}`);
    } else {
      const file = await appwriteService.uploadFile(data.Image[0]);
    }
    if (file) {
      const fileId = file.$id;
      data.FeaturedImage = fileId;
      const dbPost = await appwriteService.createPost({
        ...data,
        UserId: userData.$id,
      });
      if (dbPost) {
        navigate(`/post${dbPost.$id}`);
      }
    }
  };

  return <div>PostForm</div>;
}

export default PostForm;
