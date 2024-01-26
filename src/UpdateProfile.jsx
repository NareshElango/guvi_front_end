import React, { useState } from "react";
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";

function UpdateProfile() {
    // const[email,setEmail]=useState('');
    const [dob, setDob] = useState('');
    const [bloodGroup, setBloodGroup] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');

    const {id} = useParams();
    console.log(`id${id}`);
    
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await axios.post(`http://localhost:3000/${id}/updateprofile`, {
                dob,
                bloodGroup,
                address,
                phoneNumber,
                age,
                gender
            });
            console.log(result.data);
            console.log(result.data.id); 
            navigate(`/${result.data._id}/home`); 
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2>Update Profile</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="dob">
                            <strong>Date of Birth</strong>
                        </label>
                        <input
                            type="date"
                            placeholder="Enter Date of Birth"
                            name="dob"
                            className="form-control rounded-0"
                            value={dob}
                            onChange={(e) => setDob(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="bloodGroup">
                            <strong>Blood Group</strong>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Blood Group"
                            name="bloodGroup"
                            className="form-control rounded-0"
                            value={bloodGroup}
                            onChange={(e) => setBloodGroup(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="address">
                            <strong>Address</strong>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Address"
                            name="address"
                            className="form-control rounded-0"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phoneNumber">
                            <strong>Phone Number</strong>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Phone Number"
                            name="phoneNumber"
                            className="form-control rounded-0"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="age">
                            <strong>Age</strong>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Age"
                            name="age"
                            className="form-control rounded-0"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="gender">
                            <strong>Gender</strong>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Gender"
                            name="gender"
                            className="form-control rounded-0"
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-success w-100 rounded-0">
                        Update Profile
                    </button>
                </form>
            </div>
        </div>
    );
}

export default UpdateProfile;
