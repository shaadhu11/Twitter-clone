import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import { FormikConsumer, useFormik } from "formik";
import { Avatar, IconButton, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "background.paper",
    border: "none",
    boxShadow: 24,
    p: 4,
    outline: "none",
    borderRadius: 4,
  };

export default function ProfileModal({open,handleClose}) {
    // const [open, setOpen] = useState(false);
    const [uploading, setUploading] = useState(false);

    const handleSubmit = (values) => {
    console.log("handle submit",values)
    }
    

        const handleImageChange = (event) => {
            setUploading(true);
            const { name } = event.target;
            const file = event.target.files[0]
            formik.setFieldValue(name, file);
            setUploading(false);
        }
              

    const formik = useFormik({
        initialValues: {
            fullName: "",
            website: "",
            location: "",
            bio: "",
            backgroundImage: "",
            image: "",
        },
        onSubmit: handleSubmit,
        }); 
  

  return (
    <>
      
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
        <form onSubmit={formik.handleSubmit}>
        <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <IconButton onClick={handleClose} area-label="delete">
                  <CloseIcon />
                </IconButton>
                <p className="">Edit Profile</p>
              </div>
              <Button type="submit">Save</Button>
            </div>
            <div className=" hideScrollBar overflow-y-scroll overflow-x-hidden h-[80vh]">
              <React.Fragment>
                <div className="w-full">
                  <div className="relative">
                    <img
                      className="w-full h-[12rem] object-cover object-center"
                      src="https://cdn.pixabay.com/photo/2023/09/05/18/18/eurasian-pygmy-owl-8235621_1280.jpg"
                      alt=""
                    />

                    <input
                      type="file"
                      className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                      onChange={handleImageChange}
                      name="backgroundImage"
                    />
                  </div>

                  <div className="w-full transform -translate-y-20 ml-4 h-[6rem]">
                    <div className="relative">
                        <Avatar
                        sx={{
                            width: "10rem",
                            height: "10rem",
                            border: "4px solid white",
                        }}
                        src="https://cdn.pixabay.com/photo/2023/09/05/18/18/eurasian-pygmy-owl-8235621_1280.jpg"
                        />

                        <input
                        className="absolute top-0 left-0 w-[10rem] h-full opacity-0 cursor-pointer"
                        onChange={handleImageChange}
                        name="image"
                        type="file"
                        />
                    </div>
                  </div>  
                </div>
               </React.Fragment>
               <div className="space-y-3">

                <TextField
                  fullWidth
                  id="fullName"
                  name="fullName"
                  label="full Name"
                   value={ formik.values.fullName}
                 // value={auth.findUser?.fullName || formik.values.fullName}

                  onChange={formik.handleChange}
                  error={
                    formik.touched.fullName && Boolean(formik.errors.fullName)
                  }
                  helperText={formik.touched.fullName && formik.errors.fullName}
                />

<TextField
                  fullWidth
                  multiline
                  rows={4}
                  id="bio"
                  name="bio"
                  label="Bio"
                  value={formik.values.bio}
                  onChange={formik.handleChange}
                  error={formik.touched.bio && Boolean(formik.errors.bio)}
                  helperText={formik.touched.bio && formik.errors.bio}
                />

                <TextField
                  fullWidth
                  id="website"
                  name="website"
                  label="Website"
                  value={formik.values.website}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.website && Boolean(formik.errors.website)
                  }
                  helperText={formik.touched.website && formik.errors.website}
                />

                <TextField
                  fullWidth
                  id="location"
                  name="location"
                  label="Location"
                  value={formik.values.location}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.location && Boolean(formik.errors.location)
                  }
                  helperText={formik.touched.location && formik.errors.location}
                />
                <div className="my-3">
                  <p className="text-lg">Birth data . Edit</p>
                  <p className="text-2xl">August 10, 2001</p>
                </div>
                <p className="py-3 text-lg">Edit Professional Profile</p>

              </div>  
 
            </div> 
        </form>
        </Box>
      </Modal>
    </>
  );

};
    
