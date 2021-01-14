import * as React from 'react';
import { login, signUp } from '../../stores/actions/auth';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './Auth.scss';
import {
    Grid,
    CardHeader,
    Card,
    CardContent,
    CardActions,
    TextField,
    Button,
    Typography
} from '@material-ui/core';

const Auth = () => {
    const dispatch = useDispatch();
    const { isLoading, errors, isAuthenticated } = useSelector(state => state.auth);
    const [username, setUsername] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [isSignin, setIsSignin] = React.useState(true);

    const toogleSign = () => {
        setIsSignin(!isSignin);
    }

    const signUpUser = () => {
        const signUpUser = {
            name: username,
            email: email,
            password: password
        }
        dispatch(signUp(signUpUser))
    }

    const signIn = () => {
        const loginUser = {
            email: email,
            password: password
        }
        dispatch(login(loginUser));
    }

    if (isAuthenticated) return <Redirect to="/todo"></Redirect>

    return (
        <div className="box">
            <Grid container spacing={3} justify="center">
                <Grid item md={6} >
                    <Card raised>
                        <CardHeader title={isSignin ? 'Please login' : 'Register'} />
                        <form>
                            <CardContent>
                                {!isSignin && (
                                    <TextField onChange={(e) => { setUsername(e.target.value) }} style={inputStyle} required type="text" label="Name" id="outlined-basic" variant="outlined" />
                                )}
                                <TextField onChange={(e) => { setEmail(e.target.value) }} style={inputStyle} required type="email" label="Email" id="outlined-basic" variant="outlined" />
                                <TextField onChange={(e) => { setPassword(e.target.value) }} style={inputStyle} required type="password" label="Password" id="outlined-basic" variant="outlined" />
                            </CardContent>
                            <CardContent>
                                {
                                    errors &&
                                    errors.map((err, idx) =>
                                        <Typography color="secondary" key={idx} align="center">{err.msg}</Typography>
                                    )
                                }
                            </CardContent>
                            <CardActions style={{ justifyContent: "center" }}>
                                <Button disabled={isLoading ? true : false} onClick={isSignin ? signIn : signUpUser} size="large" color="primary" variant="contained">{isSignin ? 'Login' : 'Register'}</Button>
                            </CardActions>
                            <CardActions style={{ marginBottom: '20px', justifyContent: "center" }}>
                                <Typography align="center">{isSignin ? "if you don't have an account" : "Already registered ?"} </Typography>
                                <Typography style={{ cursor: "pointer" }} color="primary"><span onClick={toogleSign}>{isSignin ? 'Signup Here' : 'Login Here'}</span></Typography>
                            </CardActions>
                        </form>
                    </Card>
                </Grid>

            </Grid>

        </div>
    );
}

const inputStyle = {
    width: "100%",
    margin: "0.5rem 0"
}

export default Auth;