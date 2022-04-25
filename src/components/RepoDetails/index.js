import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import Moment from 'react-moment';
import { Box } from '@mui/system';
import {useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import {getUserByName, getRepoInfo } from "../../services/user.service";
import DisplayProfile from "../DisplayProfile";

const  RepoDetails = ()=>{
    const {userName,repoName} = useParams();
    const [repo,setRepo] = useState();
    const [user,setUser]= useState();

    useEffect(()=>{
        getRepoInfo(userName,repoName).then(res=>{
            setRepo(res);
        })
    });
    useEffect (()=>{
       
        Promise.all([
            getUserByName(userName),
        ]).then(data=>{
            setUser(data[0]);
        })
     
    });
    
    return (
        <Card variant="outlined" sx={{m:"10px"}}>
        <Box sx={{display:"flex",flexDirection:"column",alignItems:"center"}}>
            <Box>
            {user && <DisplayProfile data={user}/>}
            </Box>
            {repo && <Box sx={{textAlign:"center"}}>
            <Typography sx={{fontWeight:"bold"}}>{repo.name}</Typography>
            <Typography sx={{fontSize:"12px",color:"#616161"}}>{repo.language} </Typography> 
            <Typography sx={{mt:"50px",fontSize:"15px"}}>{repo.description}</Typography> 
            <Typography>Dates de création :<Moment>{repo.created_at}</Moment></Typography> 
            <Typography>Dates de mise à jour :<Moment>{repo.updated_at}</Moment></Typography>
            </Box>
        }</Box>
        </Card>
        )
}

export default RepoDetails;