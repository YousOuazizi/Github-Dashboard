import React,{useState} from 'react'
import { TextField ,Button} from '@mui/material';
import Box from '@mui/material/Box';
import { useNavigate } from "react-router-dom";


function Dashboard(){
    const [userName,setUserName] = useState("");
    const history = useNavigate();

    const onChangeHandler =(e)=>{
        setUserName(e.target.value)
    }

    const onSubmitHandler =(e)=>{
      e.preventDefault();
      history("/repos/"+userName)
    }
    return(
      <>
    <Box sx={{display:"flex",justifyContent:"center",marginTop:"400px"}}>
    <form id="myform" autoComplete='off' onSubmit={onSubmitHandler}>
        <TextField
        sx={{
          boxShadow: 3,
          pr: 0.3,
          width: "35vw",
          "input": {
              p: 0.75,
              pl: 2,
          }
      }}
            onChange={onChangeHandler}
            placeholder={"Username"}
            id="outlined-adornment-weight"
            variant="standard"
                
            aria-describedby="outlined-weight-helper-text"
        />
        <Button type="submit" variant="contained" sx={{background:"#e584cb",color:"#fff"}} >
                    Search
                </Button>
                </form>
        </Box>
       
        </>
        )
    }
    export default Dashboard