import React from 'react'
import { navigationMenu } from "./NavigationMenu";
import { useNavigate } from "react-router-dom";
import {Avatar,Button } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";



const Navigations = () => {
    const navigate = useNavigate();
    

    const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl); // this code is copied from mui-menu for creating an logout menu
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    //function for log out
    console.log("logout");
    handleClose()
    
  };
  return (
    <div className="h-screen sticky top-0">
      <div>
        <div className="py-5">
        <svg
            height="30"
            width="30"
            viewBox="0 0 24 24"
            aria-hidden="true"
            class="r-1nao33i r-4qtqp9 r-yyyyoo r-16y2uox r-8kz0gk r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-lrsllp item-center"
          >
            <g>
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
            </g>
          </svg>
        </div>


        <div className="space-y-6">
          {navigationMenu.map((item) => (
            <div
              className="cursor-pointer flex space-x-3 item-center "
              onClick={() =>
                item.title === "Account"
                  ? navigate(`/account/${5}`)
                  : navigate(item.path)
              }
            >
              {item.icon}
              <p className="text-x1">{item.title}</p>
            </div>
            ))}
        </div>
        <div className="py-5">
            <Button
              sx={{
                width: "80%",
                borderRadius: "29px",
                py: "15px",
                bgcolor: "#1e88e5",
              }}
              variant="contained"
            >
              Tweet
            </Button>
        </div>
      </div>
    

      <div className="flex item-center justify-between py-5">
        <div className="flex item-center space-x-2">
          <Avatar
            alt="username"
            src="https://yt3.ggpht.com/WBgH6_TagdReYRffPH4x3t_mUJcXB_u6x2lkofyq-aWlvajiZ6Ib7VYoY4Pr8hX0r9YdZR-F4A=s88-c-k-c0x00ffffff-no-rj"
          />
          <div>
            <span>mhd</span>
            <span className='opacity-70 !important'>@mhd</span>
          </div>
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
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </div>
      </div>
    </div>      
  )
}

export default Navigations