import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (
        <div className="form-container">
            <div>
                <h2 className="form-title">Login</h2>
                <form >
                    <div className="input-group">
                        <label className="label" htmlFor="email">Email</label>
                        <input className="form-input" type="email" name="email" id="" />
                    </div>
                    <div className="input-group">
                        <label className="label" htmlFor="password">Password</label>
                        <input className="form-input" type="password" name="password" id=""/>
                    </div>
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