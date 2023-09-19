import React from 'react';
import { useNavigate } from "react-router-dom";

const Dashboard: React.FC = () => {
  const user = localStorage.getItem('userData');
  const navigate = useNavigate();

  let userData = null;

  if (user) {
    try {
      userData = JSON.parse(user);
    } catch (error) {
      console.error("Error parsing userData:", error);
      localStorage.removeItem('userData');
      navigate("/signin");
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('userData');
    navigate("/signin");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">Dashboard</h1>
      <div className="p-4 rounded-lg text-black mb-4">
        {userData ? (
          <>
            <p>Name: {userData.name}</p>
            <p>Email: {userData.email}</p>
          </>
        ) : (
          <p>User already exists!</p>
        )}
      </div>
      <button
        id="logout-link"
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-2 rounded-lg"
      >
        Logout
      </button>
    </div>
  );
}

export default Dashboard;
