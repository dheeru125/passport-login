import { Box, Button, Grid, TextField } from "@mui/material";
import React, { useState } from"react";
import AppBar from "../../components/AppBar/index";
import PasswordTextField from "../../components/PasswordTextField";
import { Link } from "react-router-dom";
import axios from "axios";

const UserLogin: React.FC = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const handleUserNameChange = (event) => {
        setUserName(event.target.value);
    };
    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };
    console.log("password", password);
    console.log("user name", userName);
    
    const handleOnLogin = () => {
        let data = JSON.stringify({
            "userName": userName,
            "password": password
        });
          
        let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://localhost:43452/auth/login',
        headers: { 
            'Content-Type': 'application/json'
        },
        data : data
        };
          
          axios.request(config)
          .then((response) => {
            console.log(JSON.stringify(response.data));
            const res = response.data;
            if(res.success === true) {
                alert("User logged in successfully");
            }
          })
          .catch((error) => {
            console.log(error);
          });
    }
  return (
     <Box sx={{mt: 10, ml: 60}}>
        <Grid sx={{display: "flex", flexDirection: "column"}}>
            <TextField
            label="User Name" 
            value={userName}
            onChange={handleUserNameChange}
            sx={{width: "34%", mt: 5}}
            />
            <PasswordTextField 
            password={password}
            passwordOnChange={handlePasswordChange}
            />
        </Grid>

        <Grid sx={{mt: 5}}> 
            <Button
            onClick={handleOnLogin}
            >
                Login
            </Button>

            <Link to="/register">Don't have account Register</Link>
        </Grid>
    </Box>  
  )
};

export default UserLogin
