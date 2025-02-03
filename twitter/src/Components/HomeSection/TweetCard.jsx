import React from 'react'
import { Avatar, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import BarChartIcon from "@mui/icons-material/BarChart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RepeatIcon from "@mui/icons-material/Repeat";

const TweetCard = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl); // this code is copied from mui-menu for creating an logout menu
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const handleDeleteTweet = () => {
      console.log("delete-tweet");
      handleClose();
    };
    const handleOpenReplyModel  = () => {
  
      console.log("xxxxx");
      };
    const handleCreateRetweet = () => {
  
    console.log("ReTweet");
    };
    const handleLiketweet = () => {
      
      console.log("Handle like tweet");
    };

  return (
    <div>
      {/* <div className='flex text-center font-semibold text-gray-700 py-2'>
        <RepeatIcon/>
        <p>You Retweet</p>

      </div> */}

<div className="flex space-x-5">
        <Avatar
            onClick={() => navigate(`/profile/${6}`)}
            className="cursor-pointer"
            alt="username"
            src="https://yt3.ggpht.com/WBgH6_TagdReYRffPH4x3t_mUJcXB_u6x2lkofyq-aWlvajiZ6Ib7VYoY4Pr8hX0r9YdZR-F4A=s88-c-k-c0x00ffffff-no-rj"
        />
        <div className="w-full">
          <div className="flex cursor-pointer items-center space-x-2">
            <span className="font-semibold">Mhd</span> 
             <span className="text-gray-600">@mhd.2m</span>
             <img
              className="ml-2 w-7 h-7"
              src="https://static.vecteezy.com/system/resources/previews/015/304/837/original/blue-verified-tick-valid-seal-icon-in-flat-style-design-isolated-on-white-background-validation-concept-vector.jpg"
            ></img>
                        <div>
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined} //copied from mui menu
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                {/* //copied from mui icon */}
                <MoreHorizIcon />
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleDeleteTweet}>Delete</MenuItem>
                <MenuItem onClick={handleDeleteTweet}>Edit</MenuItem>
              </Menu>
            </div>
          </div>
          <div className="mt-2">
            <div className="cursor-pointer">
              <p className="mb-2 p-0">
                hello am good
                </p>
              <img
                className="w-[28rem] border border-gray-400 p-5 rounded-md"
                src="https://media.istockphoto.com/id/1443305526/photo/young-smiling-man-in-headphones-typing-on-laptop-keyboard.webp?b=1&s=612x612&w=0&k=20&c=qoJEy5gsJUj3gpst3iDO5iavYOAZS8_KxDRUAjYlnBM="
               
                alt=""
              />
            </div>
            <div className="py-5 flex flex-wrap justify-between items-center">
              <div className="space-x-3 flex items-center text-gray-600">
                <ChatBubbleOutlineIcon
                  className="cursor-pointer"
                  onClick={handleOpenReplyModel}
                />
                <p>10</p>
              </div>
              <div
                className={`${
                  true ? "text-pink-600" : "rext-gray-600"
                } space-x-3 flex items-center`}
              >
                <RepeatIcon
                  onClick={handleCreateRetweet}
                  className="cursor-pointer"
                />
                <p>58</p>
              </div>
              <div
                className={`${true? "text-pink-600" : "text-gray-600"
                } space-x-3 flex items-center`}
              >
                {true ? (
                  <FavoriteIcon
                    onClick={handleLiketweet}
                    className="cursor-pointer"
                  />
                ) : (
                  <FavoriteBorderIcon
                    onClick={handleLiketweet}
                    className="cursor-pointer"
                  />
                )}
                <p>89</p>
              </div>
              <div className="space-x-3 flex items-center text-gray-600">
                <BarChartIcon
                  className="cursor-pointer"
                  onClick={handleOpenReplyModel}
                />
                <p>430</p>
              </div>

              <div className="space-x-3 flex items-center text-gray-600">
                <FileUploadIcon
                  className="cursor-pointer"
                  onClick={handleOpenReplyModel}
                />
              </div> 
          </div>
        </div>
      </div>  
    
  </div>

    </div>
      
  )
}

export default TweetCard