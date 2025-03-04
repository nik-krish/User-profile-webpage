import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "../styles.css";

const UserDetails = () => {
  const { id } = useParams();
  const users = useSelector((state) => state.users.users);
  const user = users.find((u) => u.id === id);

  return (
    <div className="main-content">
      <h3>User Details</h3>
      {user ? (
        <div className="user-main">
          <img className="user-avatar" src="/avatar.png" alt="User Avatar" />
          <div className="user-details">
            <p>
              <strong>Name:</strong> {user.firstName} {user.lastName}
            </p>
            <p>
              <strong>City:</strong> {user.city}
            </p>
            <p>
              <strong>Country:</strong> {user.country}
            </p>
          </div>
        </div>
      ) : (
        <p>User not found</p>
      )}
    </div>
  );
};

export default UserDetails;
