
import React from "react";
import "./Homepage.css";
import Navigations from "../Navigation/Navigations";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Grid from "@mui/material/Grid";


function HomePage() {
  return (
    <Grid container xs={12} className="px-5 lg:px-36 justify-between">
      <Grid item xs={0} lg={2.5} className="hidden lg:block w-full relative">
        <Navigations/>
      </Grid>

      <Grid
        item
        xs={12}
        lg={6}
        className=" px-5 lg:px-9 hidden lg:block w-full relative"
      >

         middle
        
      </Grid>

      <Grid item xs={0} lg={3} className="hidden lg:block w-full relative">
        right 
      </Grid>
    </Grid>
  )
}

export default HomePage;
