import React, { useEffect, useState } from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Avatar, Box, Button, Tab, Tabs } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import TweetCard from "../HomeSection/TweetCard";


const Profile = () => {
  const [tabValue,setTabValue]=useState("1");
  const navigate = useNavigate();
  const handleBack = () => navigate(-1);
  const handleOpenProfileModel = () => {
    
    console.log("open Profile model");
  };
  const handleFollowUser = () => {  
    console.log("follow");
  };
  const handleTabChange=(event,newValue)=>{
    setTabValue(newValue)
    if(newValue===4)
    {
      console.log("Likes twit")
    }
    else if(newValue==="1")
    {
      console.log("users twits")
    }
  };
  return (
    <div>
      <section className={`bg-white z-50 flex items-center sticky top-0 bg-opacity-95`}>
        <KeyboardBackspaceIcon
          className="cursor:pointer"
          onClick={handleBack}
          
        />

        <h1 className="py-5 text-xl font-bold opacity-90 ml-5">
          Mhd here
        </h1>
      </section>
      <section>
        <img
          className="w-[100%] h-[15rem] object-cover"
          src="https://cdn.pixabay.com/photo/2016/11/08/05/26/woman-1807533_1280.jpg"
          alt=""
        />
      </section>
      <section className="pl-6">
        <div className="flex justify-between items-start mt-5 h-[5rem]">
          <Avatar
            className="transform -translate-y-24"
            alt="cade with lint" 
            src="https://yt3.ggpht.com/WBgH6_TagdReYRffPH4x3t_mUJcXB_u6x2lkofyq-aWlvajiZ6Ib7VYoY4Pr8hX0r9YdZR-F4A=s88-c-k-c0x00ffffff-no-rj"

            sx={{ width: "10rem", height: "10rem", border: "4px solid white" }}
          />
          {true? (
            <Button
              onClick={handleOpenProfileModel}
              variant="contained"
              sx={{ borderRadius: "20px" }}
            >
              Edit Profile
            </Button>
          ) : (
            <Button
              onClick={handleFollowUser}
              variant="contained"
              sx={{ borderRadius: "20px" }}
            >
              {true? "unfollow" : "follow"}
            </Button>
          )}
        </div>
        <div>
          <div className="flex items-center">
            <h1 className="font-bold text-lg">Mhd</h1>
            {true && (
              <img
                className="ml-2 w-7 h-7"
                src="https://static.vecteezy.com/system/resources/previews/015/304/837/original/blue-verified-tick-valid-seal-icon-in-flat-style-design-isolated-on-white-background-validation-concept-vector.jpg"
              />
            )}
          </div>
          <h1 className="text-gray-500">@mhd</h1>
        </div>
        <div className="mt-2 space-y-3">
          <p>
            Hello I,m your mhd
          </p>
          <div className="py-1 flex space-x-5">
            <div className="flex items-center text-gray-500">
              <BusinessCenterIcon />
              <p className="ml-2">Education</p>
            </div>
            <div className="flex items-center text-gray-500">
              <LocationOnIcon />
              <p className="ml-2">Indian</p>
            </div>
            <div className="flex items-center text-gray-500">
              <CalendarMonthIcon />
              <p className="ml-2">Joined Jun 2022</p>
            </div>
          </div>
          <div className="flex items-center space-x-5">
          <div className="flex items-center space-x-1 font-semibold">
              <span>111</span>
              <span className="text-gray-500">Following</span>

            </div>
            <div className="flex items-center space-x-1 font-semibold">
              <span>399</span>
              <span className="text-gray-500">Followers</span>

            </div>

          </div>
        </div>
      </section> 
      <section className="py-5">
      <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={tabValue}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleTabChange} aria-label="lab API tabs example">
            <Tab label="Tweets" value="1" />
            <Tab label="Replies" value="2" />
            <Tab label="Media" value="3" />
            <Tab label="Likes" value="4" />
          </TabList>
        </Box>
        <TabPanel value="1">{[1,1,1,1].map((item)=>
        <TweetCard item={item} />
        )}</TabPanel>
        <TabPanel value="2">Users replies</TabPanel>
        <TabPanel value="3">Media</TabPanel>
        <TabPanel value="4">Likes</TabPanel>
      </TabContext>
    </Box>

      </section>   
    </div>  
  )
}

export default Profile