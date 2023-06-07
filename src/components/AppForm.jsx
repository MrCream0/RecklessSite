import React, { useState } from 'react';

const ApplicationForm = ({ onSubmit }) => {
    const [name, setName] = useState('');
    const [discovery, setDiscovery] = useState('');
    const [reason, setReason] = useState('');
    const [dob, setDob] = useState('');
    const [information, setInformation] = useState('');
    const [referral, setReferral] = useState('');
    const [contact, setContact] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = {
            name,
            discovery,
            reason,
            dob,
            information,
            referral,
            contact,
        };

        try {
            // For creating an application
            const response = await fetch('https://zurgngz.xyz/application', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            // For updating an application
            // const response = await fetch(`/application/${applicationId}`, {
            //   method: 'PUT',
            //   headers: {
            //     'Content-Type': 'application/json',
            //   },
            //   body: JSON.stringify(formData),
            // });

            if (response.ok) {
                console.log('Form submitted successfully');
                // Reset the form fields after submission
                setName('');
                setDiscovery('');
                setReason('');
                setDob('');
                setInformation('');
                setReferral('');
                setContact('');
            } else {
                console.error('Error submitting form');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col max-w-md mx-auto p-4 bg-black rounded-lg shadow-lg">
            <label className="mb-2 text-white">
                Name:
                <input
                    className="bg-red-900 text-white rounded-md border border-red-600 px-2 py-1 mt-1 focus:outline-none focus:ring-2 focus:ring-red-600"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </label>

            <label className="mb-2 text-white">
                Discovery:
                <input
                    className="bg-red-900 text-white rounded-md border border-red-600 px-2 py-1 mt-1 focus:outline-none focus:ring-2 focus:ring-red-600"
                    type="text"
                    value={discovery}
                    onChange={(e) => setDiscovery(e.target.value)}
                />
            </label>

            <label className="mb-2 text-white">
                Reason for Joining:
                <textarea
                    className="bg-red-900 text-white rounded-md border border-red-600 px-2 py-1 mt-1 focus:outline-none focus:ring-2 focus:ring-red-600"
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                />
            </label>

            <label className="mb-2 text-white">
                Date of Birth:
                <input
                    className="bg-red-900 text-white rounded-md border border-red-600 px-2 py-1 mt-1 focus:outline-none focus:ring-2 focus:ring-red-600"
                    type="date"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                />
            </label>

            <label className="mb-2 text-white">
                Additional Information:
                <textarea
                    className="bg-red-900 text-white rounded-md border border-red-600 px-2 py-1 mt-1 focus:outline-none focus:ring-2 focus:ring-red-600"
                    value={information}
                    onChange={(e) => setInformation(e.target.value)}
                />
            </label>

            <label className="mb-2 text-white">
                Member of Referral:
                <input
                    className="bg-red-900 text-white rounded-md border border-red-600 px-2 py-1 mt-1 focus:outline-none focus:ring-2 focus:ring-red-600"
                    type="text"
                    value={referral}
                    onChange={(e) => setReferral(e.target.value)}
                />
            </label>

            <label className="mb-2 text-white">
                Contact:
                <input
                    className="bg-red-900 text-white rounded-md border border-red-600 px-2 py-1 mt-1 focus:outline-none focus:ring-2 focus:ring-red-600"
                    type="email"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                />
            </label>

            <button
                className="bg-red-600 text-white rounded-md px-4 py-2 mt-4 hover:bg-red-700"
                type="submit"
            >
                Submit
            </button>
        </form>
    );

};

export default ApplicationForm;
