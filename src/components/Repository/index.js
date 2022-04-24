import { Box } from "@mui/system";
import { useEffect, useState } from "react"
import {useParams,useNavigate} from "react-router-dom";
import { getReposByUserName, getUserByName } from "../../services/user.service";
import DisplayProfile from "../DisplayProfile";
import InboxIcon from '@mui/icons-material/Inbox';
import { Typography } from "@mui/material";
  

const Repository = ()=>{
    const {userName} = useParams();
    const [user,setUser]= useState();
    const [repos,setRepos]= useState([]);
    const navigate = useNavigate();

    useEffect (()=>{
       
        Promise.all([
            getUserByName(userName),
            getReposByUserName(userName)
        ]).then(data=>{
            console.log(data);
            setUser(data[0]);
            setRepos(data[1]);
        })
     
    },[]);


    return(
    <Box sx={{
        display:"grid", justifyContent:"center",
    }}>
       {user &&  <DisplayProfile data={user}/>}
       {repos.map(repo=>{
           return <Typography sx={{display:"flex",justifyContent:"center",p:1,m:1,cursor:"pointer"}} key={repo.id} onClick={()=>{navigate('./'+repo.name)}}> 
           <InboxIcon sx={{mr:2}}/> 
            {repo.name}
           </Typography>
       })
    }
    </Box>
)}
export default Repository