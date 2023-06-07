import React, { useState } from 'react';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

const Contact = () => {
  const [name, setName] = useState('');
  const [discovery, setDiscovery] = useState('');
  const [reason, setReason] = useState('');
  const [dob, setDob] = useState('');
  const [information, setInformation] = useState('');
  const [referral, setReferral] = useState('');
  const [contact, setContact] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'discovery':
        setDiscovery(value);
        break;
      case 'reason':
        setReason(value);
        break;
      case 'dob':
        setDob(value);
        break;
      case 'information':
        setInformation(value);
        break;
      case 'referral':
        setReferral(value);
        break;
      case 'contact':
        setContact(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name,
      discovery,
      reason,
      dob,
      information,
      referral,
      contact,
    };

    setLoading(true);

    try {
      // For creating an application
      const response = await fetch('https://zurgngz.xyz/application', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

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

    setLoading(false);
  };

  const redirectToApplication = () => {
    window.location.href =
      'https://docs.google.com/forms/d/e/1FAIpQLSf0J6f2VnAAxudw64x6LN-78L7GR6H3crUQGR7c64iY2QdY3A/viewform';
  };

  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Interested in becoming a member?</p>
        <h3 className={`${styles.sectionHeadText} red-black-text-header-gradient`}>Join Here.</h3>

        <form onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8'>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Discovery</span>
            <input
              type='text'
              name='discovery'
              value={discovery}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Reason for Joining</span>
            <textarea
              rows={7}
              name='reason'
              value={reason}
              onChange={handleChange}
              placeholder='What is your reason for joining?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Date of Birth</span>
            <input
              type='date'
              name='dob'
              value={dob}
              onChange={handleChange}
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Additional Information</span>
            <textarea
              rows={7}
              name='information'
              value={information}
              onChange={handleChange}
              placeholder='Provide any additional information'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Member of Referral</span>
            <input
              type='text'
              name='referral'
              value={referral}
              onChange={handleChange}
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Contact</span>
            <input
              type='email'
              name='contact'
              value={contact}
              onChange={handleChange}
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
        <button
          className='bg-tertiary py-3 px-8 rounded-xl outline-none w-full text-white font-bold shadow-md shadow-primary mt-5'
          onClick={redirectToApplication}
          type='text'
        >
          Apply for membership
        </button>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
