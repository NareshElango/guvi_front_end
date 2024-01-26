import { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";

function Home() {
    const [employee, setEmployee] = useState(null);
    const { id } = useParams();
    // const history = useHistory();

    useEffect(() => {
        // Fetch employees data from the backend when the component mounts
        axios.get(`http://localhost:3000/home/${id}`)
            .then(response => {
                setEmployee(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [id]);

    const handleLogout = () => {
        // Send a request to logout endpoint on the server
        axios.post('http://localhost:3000/logout')
            .then(response => {
                // Clear any client-side session data if needed
                // Redirect to the login page
                history.push('/login');
            })
            .catch(error => {
                console.error('Error logging out:', error);
                // Handle logout error if needed
            });
    };
    return (
        <div className="container mt-5">
            {employee && (
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Login Details</h5>
                        <p className="card-text"><strong>Name:</strong> {employee.name}</p>
                        <p className="card-text"><strong>Email:</strong> {employee.email}</p>
                        <p className="card-text"><strong>Date of Birth:</strong> {employee.dob}</p>
                        <p className="card-text"><strong>Blood Group:</strong> {employee.bloodGroup}</p>
                        <p className="card-text"><strong>Address:</strong> {employee.address}</p>
                        <p className="card-text"><strong>Phone Number:</strong> {employee.phoneNumber}</p>
                        <p className="card-text"><strong>Age:</strong> {employee.age}</p>
                        <p className="card-text"><strong>Gender:</strong> {employee.gender}</p>
                    </div>
                </div>
            )}
             <button className="btn btn-danger mt-3" onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default Home;
