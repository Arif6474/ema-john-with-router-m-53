import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'

const Login = () => {
    const [email, setEmail] =useState('');
    const [password, setPassword] =useState('');
    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error
      ] = useSignInWithEmailAndPassword(auth);

     
      const location = useLocation();
      const from = location.state?.from?.pathname || "/";

const handleEmailBlur = (event) => {
    setEmail(event.target.value);
}
const handlePasswordBlur = event => {
    setPassword(event.target.value);
}

if(user){
    navigate(from, {replace: true});
}

const handleUserSignIn = event => {
    event.preventDefault();
 signInWithEmailAndPassword(email, password);
}

    return (
        <div className="form-container">
            <div>
                <h2 className="form-title">Login</h2>
                <form onSubmit={handleUserSignIn} >
                    <div className="input-group">
                        <label className="label" htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} className="form-input" type="email" name="email"  required />
                    </div>
                    <div className="input-group">
                        <label className="label" htmlFor="password">Password</label>
                    <input onBlur={handlePasswordBlur} className="form-input" type="password" name="password"  required/>
                    </div>
                    <p style={{color: 'red'}}>{error?.message}</p>
                    {
                        loading && <p>Loading...</p>
                    }
                    <button type="submit" className="submit-btn">Login</button>

                </form>
                <p className="new-user">
                    New to ema-john? <Link className="link" to="/signup">Create an account</Link>
                </p>
                <div className="form-line">
                    <div className="form-or"></div>
                    <div className="or">or</div>
                    <div className="form-or"></div>
                </div>

                <button className="google-btn"> <img src="https://pbs.twimg.com/profile_images/1455185376876826625/s1AjSxph_400x400.jpg" alt="" /> Continue with Google</button>
            </div>
        </div>
    );
};

export default Login;