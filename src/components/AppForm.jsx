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
            const response = await fetch('http://localhost:3000/application', {
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
        <form onSubmit={handleSubmit} className="flex flex-col ">
            <label>
                Name:
                <input className="bg-[#883838]" type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>

            <label>
                Discovery:
                <input className="bg-[#883838]" type="text" value={discovery} onChange={(e) => setDiscovery(e.target.value)} />
            </label>

            <label>
                Reason for Joining:
                <textarea className="bg-[#883838]" value={reason} onChange={(e) => setReason(e.target.value)} />
            </label>

            <label>
                Date of Birth:
                <input className="bg-[#883838]" type="date" value={dob} onChange={(e) => setDob(e.target.value)} />
            </label>

            <label>
                Additional Information:
                <textarea className="bg-[#883838]" value={information} onChange={(e) => setInformation(e.target.value)} />
            </label>

            <label>
                Member of Referral:
                <input className="bg-[#883838]" type="text" value={referral} onChange={(e) => setReferral(e.target.value)} />
            </label>

            <label>
                Contact:
                <input className="bg-[#883838]" type="email" value={contact} onChange={(e) => setContact(e.target.value)} />
            </label>

            <button className="bg-[#883838]" type="submit">Submit</button>
        </form>
    );

};

export default ApplicationForm;
