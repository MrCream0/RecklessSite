import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AdminWindow = () => {
  const [applications, setApplications] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {

    const checkAuth = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        await navigate('/login', { replace: true });
      }
    };



    const fetchApplications = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('https://zurgngz.xyz/application', {
          headers: {
            Authorization: `${token}`,
          },
        });
        setApplications(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    checkAuth();
    fetchApplications();
  }, [navigate]);

  const handleDeny = async (Id) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`https://zurgngz.xyz/application/${Id}`, {
        headers: {
          Authorization: `${token}`,
        },
      });
      setApplications((prevApplications) =>
        prevApplications.filter((app) => app._id !== Id)
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="fixed inset-0 w-full h-full bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md">
        <h1 className="text-2xl mb-4">Admin Window</h1>
        {applications.map((application) => (
          <ApplicationCard
            key={application._id}
            application={application}
            onDeny={handleDeny}
          />
        ))}
      </div>
    </div>
  );
};

const ApplicationCard = ({ application, onDeny }) => {
  const handleDenyClick = () => {
    onDeny(application._id);
  };

  return (
    <div className=" flex flex-col items-center justify-center mb-4">
      <h3 className="text-2xl text-red-500">{application.name}</h3>
      <p className="text-gray-300">Discovery: {application.discovery}</p>
      <p className="text-gray-300">Reason: {application.reason}</p>
      <p className="text-gray-300">Date of Birth: {application.dob}</p>
      <p className="text-gray-300">Additional Information: {application.information}</p>
      <p className="text-gray-300">Referral: {application.referral.join(', ')}</p>
      <p className="text-gray-300">Contact: {application.contact}</p>
      <div className="flex mt-2">
        <button
          className="px-4 py-2 mr-2 bg-green-500 text-white rounded hover:bg-green-600"
          onClick={() => console.log('Approve')}
        >
          Approve
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          onClick={handleDenyClick}
        >
          Deny
        </button>
      </div>
    </div>
  );
};

export default AdminWindow;
