import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from "@mui/material";
import React, { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

interface PasswordTextFieldProps {
    password: string;
    passwordOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const PasswordTextField: React.FC<PasswordTextFieldProps> = ({password, passwordOnChange}) => {

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    return (
        <FormControl sx={{ width: '25ch', mt: 5 }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    endAdornment={
                        <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                        >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                        </InputAdornment>
                    }
                    label="Password"
                    value={password}
                    onChange={passwordOnChange}
                    sx={{"width": "150%"}}
                    />
                </FormControl>
    )
}

export default PasswordTextField
