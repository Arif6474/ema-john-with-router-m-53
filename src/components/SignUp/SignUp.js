import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user
       
      ] = useCreateUserWithEmailAndPassword(auth);

const handleEmailBlur = (event) => {
    setEmail(event.target.value);
}
const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
}
const handleConfirmPasswordBlur = (event) => {
    setConfirmPassword(event.target.value);
}
if (user) {
    navigate('/shop')
}

const handleCreateUser = (event) => {
    event.preventDefault();
    if(password !== confirmPassword){
        setError('Your password did not matched')
        return;
    }
   
    if(password.length <6 ){
        setError('Your password must be at least 6 characters')
        return;
    }
    createUserWithEmailAndPassword(email, password)
}






    return (
        <div className="form-container">
            <div>
                <h2 className="form-title">Sign Up</h2>
                <form onSubmit= {handleCreateUser} >
                    <div className="input-group">
                        <label className="label" htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} className="form-input" type="email" name="email" id="" required/>
                    </div>
                    <div className="input-group">
                        <label className="label" htmlFor="password">Password</label>
                        <input onBlur= {handlePasswordBlur } className="form-input" type="password" name="password" id="" required/>
                    </div>
                    <div className="input-group">
                        <label className="label" htmlFor="confirm-password">Confirm Password</label>
                        <input onBlur={handleConfirmPasswordBlur} className="form-input" type="password" name="confirm-password" id="" required/>
                    </div>
                    <p style={{color: 'red'}}>{error}</p>
                    <button type="submit" className="submit-btn">Sing Up</button>

                </form>
                <p className="new-user">
                    Already have an account? <Link className="link" to="/login">Login</Link>
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

export default SignUp;