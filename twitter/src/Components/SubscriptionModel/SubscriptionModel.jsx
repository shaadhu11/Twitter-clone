import  React,{useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useNavigate } from 'react-router-dom';
import { useFormik } from "formik";
import { Avatar, IconButton, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

import ImageIcon from "@mui/icons-material/Image";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import TagFacesIcon from "@mui/icons-material/TagFaces";

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

export default function SubscriptionModel({open,handleClose}) {
    const navigate=useNavigate();

    const [plan, setPlan] = React.useState("Annually");

    const features=["Prioritized rankings in conversations and search","See approximately twice as many posts between ads in your For You and Following timelines.","Add bold and italic text in your posts","Post longer videos and 1080p video uploads","Post longer videos and 1080p video uploads","All the existing Premium features, including edit post, Bookmark Folders and early access to new features"];

  const handleSubmit=(values)=>{
    console.log("handle Submit,",values)
  }

  

  

  const formik=useFormik({
    initialValues:{
        content:"",
        image:"",
        twitId:8,
    },
    onSubmit:handleSubmit
  })
  

  return (
    <div>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <div className="flex items-center space-x-3">
            <IconButton onClick={handleClose} area-label="delete">
              <CloseIcon />
            </IconButton>
          </div>
          <div className="flex justify-center py-10">
            <div className="w-[80%] space-y-10">
              <div className="p-5 rounded-md flex items-center justify-between bg-slate-400 shadow-lg">
                <h1 className="text-xl pr-5">
                  Blue subscribers with a verified phone Number will get a blue
                  checkmark once approved
                </h1>
                <img
                  className="w-24 h-24"
                  src="https://abs.twimg.com/responsive-web/client-web/verification-card-v2@3x.8ebee01a.png"
                  alt=""
                />
              </div>

              <div className="flex justify-between border rounded-full px-5 py-3 border-gray-700">
                <div>
                  <span
                    onClick={() => setPlan("Annually")}
                    className={`${
                      plan === "Annually" ? "text-black" : "text-gray-400"
                    } cursor-pointer`}
                  >
                    Annually
                  </span>
                  <span className="text-green-500 text-sm ml-5">SAVE 12%</span>
                </div>
                <p
                  onClick={() => setPlan("monthly")}
                  className={`${
                    plan === "monthly" ? "text-black" : "text-gray-400"
                  } cursor-pointer`}
                >
                  Monthly
                </p>
              </div>
              <div className="space-y-3">
              {features.map((item)=> <div className="flex items-center space-x-5">
                  <FiberManualRecordIcon sx={{ width: "7px", height: "7px" }} />
                  <p className="text-xs">
                    {item}
                  </p>
                </div>)}
              </div>
              <div className="cursor-pointer flex justify-center bg-gray-900 text-white rounded-full px-5 px-3 ">
                <span className="line-through italic">
                ₹7,800.00
                </span>
                <span className="px-5">₹6,800/year</span>
              </div>
            </div>
          </div>
        
        </Box>
      </Modal>
    </div>
  );
}
