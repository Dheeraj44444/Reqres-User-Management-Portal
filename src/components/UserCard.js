import React from 'react';
import { Link } from 'react-router-dom';

const UserCard = ({ user, onDelete }) => {
  const confirmDelete = () => {
    if (window.confirm(`Are you sure you want to delete ${user.first_name} ${user.last_name}?`)) {
      onDelete();
    }
  };

  return (
    <div className="user-card">
      <div className="user-avatar">
        <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
      </div>
      <div className="user-info">
        <h3>{user.first_name} {user.last_name}</h3>
        <p>{user.email}</p>
      </div>
      <div className="user-actions">
        <Link to={`/edit/${user.id}`} className="edit-button">Edit</Link>
        <button onClick={confirmDelete} className="delete-button">Delete</button>
      </div>
    </div>
  );
};

export default UserCard;