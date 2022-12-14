import React from 'react';
import loginStyle from '../../styles/login.module.css'
import CheckCircleTwoToneIcon from '@mui/icons-material/CheckCircleTwoTone';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
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
            <Link color="inherit" href="/">
                Your Website
            </Link>
            {new Date().getFullYear()}
        </Typography>
    );
}

const theme = createTheme();

const index = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };
    return (
        <div className={loginStyle.main}>
            <div className={loginStyle.sectionOne} >
                <ul>
                    <li>
                        <CheckCircleTwoToneIcon sx={{ fontSize: 40, marginLeft: -.5 }} /><br />
                        <span className={loginStyle.title}>Quick and Free Sign Up</span><br />
                        <span>Enter you email Address to create your account</span>
                    </li>
                    <li>
                        <CheckCircleTwoToneIcon sx={{ fontSize: 40, marginLeft: -.5 }} /><br />
                        <span className={loginStyle.title}>Quick and Free Sign Up</span><br />
                        <span>Enter you email Address to create your account</span>
                    </li>
                    <li>
                        <CheckCircleTwoToneIcon sx={{ fontSize: 40, marginLeft: -.5 }} /><br />
                        <span className={loginStyle.title}>Quick and Free Sign Up</span><br />
                        <span>Enter you email Address to create your account</span>
                    </li>
                </ul>
            </div>
            <div className={loginStyle.sectionTwo} >
                <ThemeProvider theme={theme}>
                    <Container component="main" maxWidth="xs">
                        <CssBaseline />
                        <Box
                            sx={{
                                marginTop: 8,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <Avatar sx={{ m: 1 }} style={{ backgroundColor: "#9e4ed1" }}>
                                <LockOutlinedIcon />
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Sign in
                            </Typography>
                            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                />
                                <FormControlLabel
                                    control={<Checkbox value="remember" color="primary" />}
                                    label="Remember me"
                                />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                    style={{ backgroundColor: "#9e4ed1"}}
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
                                        <Link href="/signup" variant="body2">
                                            {"Don't have an account? Sign Up"}
                                        </Link>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                        <Copyright sx={{ mt: 8, mb: 4 }} />
                    </Container>
                </ThemeProvider>
            </div>
        </div>
    );
};

export default index;