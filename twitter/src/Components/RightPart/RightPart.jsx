import React,{useState} from 'react'
import SearchIcon from "@mui/icons-material/Search";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import { Button } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SubscriptionModel from '../SubscriptionModel/SubscriptionModel';
const RightPart = () => {
    const [openSubscriptionModel,setOpenSubscriptionModel]=useState(false);
    const handleOpenSubscriptionModel= ()=> setOpenSubscriptionModel(true);
    const handleClose =()=> setOpenSubscriptionModel(false);
  



  const handleChangeTheme = () => {
    // Toggle between light and dark themes
    
    console.log("changed theme")
  };
  return (
    <div className="py-5 sticky top">
      <div className="relative flex items-center">
        <input
          type="text"
          className="py-3 rounded-full text-gray-500 w-full pl-12"
        />
        <div className="absolute top-0 left-0 pl-3 pt-3">
          <SearchIcon className="text-gray-500" />
        </div>
        <Brightness4Icon
          className="ml-3 cursor-pointer"
          onClick={handleChangeTheme}
        />
      </div>
      <section className="my-5">
        <h1 className="text-xl font-bold">Get Verified</h1>
        <h1 className="font-bold my-2">Subscribe to unlock to new Features</h1>
        <Button
          variant="contained"
          sx={{ padding: "10px", paddingX: "20px", borderRadius: "25px" }}
          onClick={handleOpenSubscriptionModel}

          
        >
          Get Verified
        </Button>
      </section>
      <section className="mt-7 space-y-5">
        <h1 className="font-bold text-xl py-1">What's Happening</h1>
        <div>
          <p className="text-sm">FIFA Women's World cup .LIVE</p>

          <p className="font-bold"> Philippienes vs Switzerland</p>
        </div>
          {[1,1,1,1,1,1].map((items)=> <div className="flex justify-between w-full">
          <div>
            <p>Entertainment . Trending</p>
            <p className="font-bold">#TheMarvels</p>
            <p>34.3k Tweets</p>
          </div>

          <MoreHorizIcon />
        </div> ) }
      </section>
      <section>
        <SubscriptionModel handleClose={handleClose} open={openSubscriptionModel}/>
      </section>
    </div>  

  )
}

export default RightPart