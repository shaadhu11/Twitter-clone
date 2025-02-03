import React, { useEffect, useState } from "react";
import { Avatar, Button } from "@mui/material";
import * as Yup from "yup";
import { useFormik } from "formik";
import ImageIcon from "@mui/icons-material/Image";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import TweetCard from "./TweetCard";

const validationSchema = Yup.object().shape({
  content: Yup.string().required("Tweet text is required"),
});



const HomeSection = () => {
  const [uploadingImage, setUploadImage] = useState(false);
  const [selectImage, setSelectedImage] = useState("");

  const handleSubmit = (values,actions) => {
    console.log("values ", values);
    
  };

  const formik = useFormik({
    initialValues: {
      content: "",
      image: "",
    },
    onSubmit: handleSubmit,
    validationSchema,
  });

  const handleSelectImage =  (event) => {
    setUploadImage(true);
    const imageUrl = event.target.files[0]
    formik.setFieldValue("image", imageUrl);
    setSelectedImage(imageUrl);
    setUploadImage(false);
  };
  


  return (
    <div className="space-y-5">
      <section>
        <h1 className="font-bold text-x1 py-5 opacity-90 ">HOME</h1>
      </section>
      <section className={`pb-10`}>
        <div className='flex space-x-5'>
        <Avatar
            alt="username"
            src="https://yt3.ggpht.com/WBgH6_TagdReYRffPH4x3t_mUJcXB_u6x2lkofyq-aWlvajiZ6Ib7VYoY4Pr8hX0r9YdZR-F4A=s88-c-k-c0x00ffffff-no-rj"
          />
          <div className="w-full">
            <form onSubmit={formik.handleSubmit}>
              <div>
                <input
                  type="text"
                  name="content"
                  placeholder="What is happening"
                  className={`border-none outline-none text-x1 bg-transparent`}
                  {...formik.getFieldProps("content")}
                  {...formik.errors.content && formik.touched.content && (
                    <span className="text-red-500">{formik.errors.content}</span>
                  )}
                />
              </div>
              <div></div>
              <div className="flex justify-between items-center mt-5">
                <div className="flex space-x-5 items-center">
                  <label className="flex space-x-2 rounded-md cursor-pointer">
                    <ImageIcon className="text-[#1d9bf0]" />
                    <input
                      type="file"
                      name="ImageFile"
                      className="hidden"
                      onChange={handleSelectImage}
                    />
                  </label>
                  <FmdGoodIcon className="text-[#1d9bf0]" />
                  <TagFacesIcon className="text-[#1d9bf0]" />
                </div>
                <Button
                  sx={{
                    width: "20%",
                    borderRadius: "29px",
                    paddingY: "8px",
                    paddingX: "20px",
                    bgcolor: "#1e88e5",
                  }}
                  variant="contained"
                  type="submit"
                >
                  Tweet
                </Button>
              </div>  
            </form>
          </div>
        </div>
      </section>
      <section>
      {[1,1,1,1].map((item)=><TweetCard/>)} 
      </section>

    </div>
  )
}

export default HomeSection