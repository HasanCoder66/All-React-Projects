import React, { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button, RTE, Input, Select } from "../index";
import appwriteService from "../../appwrite/mainConfig";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function PostForm({ post }) {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    control,
    getValues,
  } = useForm({
    defaultValues: {
      Title: post?.Title || "",
      Slug: post?.Slug || "",
      Content: post?.Content || "",
      Status: post?.Status || "active",
    },
  });
  const navigate = useNavigate();
  const userData = useSelector((state) => state?.auth?.userData);

  console.log(userData)

  const submit = async (data) => {
    if (post) {
      const file = data.Image[0]
        ? appwriteService.uploadFile(data.Image[0])
        : null;

      if (file) {
        appwriteService.deleteFile(post.FeaturedImage);
      }

      const dbPost = await appwriteService.updatePost(post.$id, {
        ...data,
        FeaturedImage: file ? file.$id : undefined,
      });

      if (dbPost) {
        navigate(`/post${dbPost.$id}`);
      }
    } else {
      const file = await appwriteService.uploadFile(data.Image[0]);

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
    }
  };



  const slugTransform = useCallback((value) => {
    // console.log(value)
    if (value && typeof value === "String")
      return value
        .trim()
        .toLowerCase()
        .replace(/[^a-zA-Z\d\s]+/g, "-")
        .replace(/\s/g, "-");

    return "";
  }, []);

  useEffect(() => {
    const subscription = watch ((value, { name }) => {
      if (name === "Title") {
        setValue("slug", slugTransform(value.Title, { shouldValidate: true }));
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [watch, slugTransform, setValue]);

  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
      <div className="w-2/3 px-2">
        <Input
          label="Title :"
          placeholder="Title"
          className="mb-4"
          {...register("Title", { required: true })}
        />
        <Input
          label="Slug :"
          placeholder="Slug"
          className="mb-4"
          {...register("Slug", { required: true })}
          onInput={(e) => {
            setValue("Slug", slugTransform(e.currentTarget.value), {
              shouldValidate: true,
            });
          }}
        />
        <RTE
          label="Content :"
          name="content"
          control={control}
          defaultValue={getValues("Content")}
        />
      </div>
      <div className="w-1/3 px-2">
        <Input
          label="Featured Image :"
          type="file"
          className="mb-4"
          accept="image/png, image/jpg, image/jpeg, image/gif"
          {...register("Image", { required: !post })}
        />
        {post && (
          <div className="w-full mb-4">
            <img
              src={appwriteService.getFilePreview(post.FeaturedImage)}
              alt={post.Title}
              className="rounded-lg"
            />
          </div>
        )}
        <Select
          options={["active", "inactive"]}
          label="Status"
          className="mb-4"
          {...register("Status", { required: true })}
        />
        <Button
          type="submit"
          bgColor={post ? "bg-green-500" : undefined}
          className="w-full"
        >
          {post ? "Update" : "Submit"}
        </Button>
      </div>
    </form>
  );
}

export default PostForm;
