import React, { useState, useEffect, useContext } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
import { UserContext } from '../Context/userContext';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link to="/">
                ChatterBox
            </Link>{' by '}
            <a href="https://www.linkedin.com/in/adithyasnair/">
                Adithya S Nair
            </a>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}


const defaultTheme = createTheme();

export default function SignIn() {
    const [loginData, setLoginData] = useState({ email: "", password: "" });
    const navigate = useNavigate();
    const { user, setUser } = useContext(UserContext)
    useEffect(() => {
        if (user) {
            navigate('/')
        }
    }, [user])

    const handleInputs = (e) => {
        let { name, value } = e.target;
        setLoginData({ ...loginData, [name]: value })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('/login', {
            email: loginData.email,
            password: loginData.password
        },
            {
                withCredentials: true
            })
            .then((response) => {
                if (response.status === 201) {
                    setUser({ userId: response.data.id, username: response.data.username })
                }
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        color: 'white'
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            value={loginData.email}
                            onChange={handleInputs}
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            sx={{
                                '& input': {
                                    color: 'white',
                                },
                                '& label': {
                                    color: 'white',
                                },
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: 'white',
                                    },
                                },
                            }}
                            inputProps={{
                                style: {
                                    '&:hover': {
                                        borderColor: 'initial',
                                    },
                                },
                            }}
                        />
                        <TextField
                            value={loginData.password}
                            onChange={handleInputs}
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            sx={{
                                '& input': {
                                    color: 'white',
                                },
                                '& label': {
                                    color: 'white',
                                },
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: 'white',
                                    },
                                },
                            }}
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" sx={{ color: 'white' }} />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link to="/register" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4, color: 'white' }} />
            </Container>
        </ThemeProvider>
    );
}