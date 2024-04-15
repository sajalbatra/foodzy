import React, { useEffect, useState } from 'react';
import axios from 'axios';
const token = localStorage.getItem('token');

interface UserDetails {
  name: string;
  email: string;
  // Add other properties as needed
}

const UserDetails: React.FC = () => {
  const backendurl = "http://localhost:8000/api/v1/user";
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null);

  useEffect(() => {
    // Fetch user details if token is present
    axios.get(`${backendurl}/getuser`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(response => {
        setUserDetails(response.data);
      })
      .catch(error => {
        console.error('Error fetching user details:', error);
      });
  }, []);

  if (userDetails) {
    // User details available, display them
    return (
      <div>
        <h1>Welcome {userDetails.name}</h1>
        <p>Email: {userDetails.email}</p>
        {/* Render other user details as needed */}
      </div>
    );
  }
};

export default UserDetails;
