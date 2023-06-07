import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminWindow = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');

    const fetchApplications = async () => {
      try {
        const response = await axios.get('http://localhost:3000/application', {
          headers: {
            Authorization: `${token}`,
          },
        });
        setApplications(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchApplications();
  }, []);

  return (
    <div>
      <h1>Admin Window</h1>
      {applications.map((application) => (
        <div key={application._id}>
          <h3>{application.name}</h3>
          <p>Discovery: {application.discovery}</p>
          <p>Reason: {application.reason}</p>
          <p>Date of Birth: {application.dob}</p>
          <p>Additional Information: {application.information}</p>
          <p>Referral: {application.referral.join(', ')}</p>
          <p>Contact: {application.contact}</p>
        </div>
      ))}
    </div>
  );
};

export default AdminWindow;
