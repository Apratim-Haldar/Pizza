import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const [userDetails, setUserDetails] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserDetails = async () => {
      const token = localStorage.getItem("authToken");
      if (!token) {
        console.error("No auth token found. Redirecting to login.");
        navigate("/login");
        return;
      }

      try {
        const response = await axios.get("http://localhost:8000/api/users/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserDetails(response.data);
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    fetchUserDetails();
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center">Profile</h1>
      <div className="card mt-3">
        <div className="card-body">
          <h5 className="card-title">Username: {userDetails.username}</h5>
          <p className="card-text">Email: {userDetails.email}</p>
          {/* Add more user details as needed */}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;