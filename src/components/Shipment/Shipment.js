import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const Shipment = () => {
    const [user] = useAuthState(auth)
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
    

 const handleNameBlur = (event) => {
     setName(event.target.value);
 }


const handleAddressBlur = (event) => {
    setAddress(event.target.value);
}
const handlePhoneBlur = (event) => {
    setPhone(event.target.value);
}

const handleCreateUser = (event) => {
    event.preventDefault();
    setError('please enter valid information');
   
}


    return (
        <div className="form-container">
            <div>
                <h2 className="form-title">Your Shipping Information</h2>
                <form onSubmit= {handleCreateUser} >
                    <div className="input-group">
                        <label className="label" htmlFor="name">Your name</label>
                        <input onBlur={handleNameBlur} className="form-input" type="text" name="name" id="" required/>
                    </div>
                    <div className="input-group">
                        <label className="label" htmlFor="email">Email</label>
                        <input value={user?.email } readOnly className="form-input" type="email" name="email" id="" required/>
                    </div>
                    <div className="input-group">
                        <label className="label" htmlFor="Address">Address</label>
                        <input onBlur= {handleAddressBlur } className="form-input" type="text" name="address" id="" required/>
                    </div>
                    <div className="input-group">
                        <label className="label" htmlFor="phone">Phone</label>
                        <input onBlur={handlePhoneBlur} className="form-input" type="text" name="phone" id="" required/>
                    </div>
                    <p style={{color: 'red'}}>{error}</p>
                    <button type="submit" className="submit-btn">Add Shipping</button>

                </form>
               
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

export default Shipment;