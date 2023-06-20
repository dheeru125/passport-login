import React, { useState } from "react";
import { 
  Box,
  Button,
  Grid, 
  TextField,
} from "@mui/material";
import PasswordTextField from "../../components/PasswordTextField";
import { Link } from "react-router-dom";
import axios from 'axios';

const UserRegistration: React.FC = () => {

  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [name, setName] = useState("");

  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
    console.log("user name in password", userName);
};
const handleNameChange = (event) => {
  setName(event.target.value);
  console.log("name in password", name);
};

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  console.log("password", password);

  const handleOnRegister = () => {
    let data = JSON.stringify({
      "userName": userName,
      "name": name,
      "password": password
    });

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://localhost:43452/auth/register',
      headers: { 
          'Content-Type': 'application/json'
      },
      data : data
    };

    axios.request(config)
    .then((response) => {
      console.log("response in register",response)
      console.log(JSON.stringify(response.data));
      const res = response.data;
      if(res.success === true) {
        <Link to="/login"></Link>
        alert("Registered successfully, please login");
      }
    })
    .catch((error) => {
      console.log(error);
});

  }
  return (
    <>
    <Box sx={{mt: 10, ml: 60}}>

      <Grid sx={{display: "flex", flexDirection: "column"}}>

            <TextField  
            label="Name" 
            value={name}
            onChange={handleNameChange}
            sx={{width: "34%"}}
            />

            <TextField  
            label="User Name" 
            sx={{width: "34%", mt: 5}}
            value={userName}
            onChange={handleUserNameChange}
            />

            <PasswordTextField
            password={password}
            passwordOnChange={handlePasswordChange}
            />
      </Grid>

      <Grid sx={{mt: 5}}> 
        <Button
        onClick={handleOnRegister}
        >
          Register
        </Button>
        <Link to="/login">Already have an account Login</Link>
      </Grid>
    </Box>
  </>
  )
}

export default UserRegistration
