import React from 'react'
import Avatar from '@mui/material/Avatar';
import { Typography, Box} from '@mui/material';


function DisplayProfile({ data }) {
    
    return (
        <Box>
        <Box sx={{
            display:"flex",
            justifyContent:"center",
            m:3}}>
            <Avatar src={data.avatar_url} />
             <Typography sx={{
                 background:"#00000024",
                 borderRadius:"30px",
                 p:1,
                 
             }}>{data.login}</Typography>
        </Box>    
        </Box>        
    )
}

export default DisplayProfile