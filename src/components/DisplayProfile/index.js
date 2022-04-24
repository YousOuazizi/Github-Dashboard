import React from 'react'
import Avatar from '@mui/material/Avatar';
import { Typography, Box} from '@mui/material';


function DisplayProfile({ data }) {
    console.log(data)

    return (
        <Box>
        <Box sx={{
            display:"flex",
            justifyContent:"center",
            m:3}}>
            <Avatar src={data.avatar_url} />
             <Typography sx={{
                 background:"grey",
                 borderTopRightRadius:"50px",
                 borderBottomRightRadius:"50px",
                 p:1,
                 
             }}>{data.login}</Typography>
        </Box>    
        </Box>        
    )
}

export default DisplayProfile