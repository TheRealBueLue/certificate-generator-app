import React, { useState } from 'react';
import './homepage.css';
import axios from 'axios';
import FormRow from '../../components/FormRow';
import alien from '../../assets/alien.png';

function Homepage() {
  const [message, setMessage] = useState('');
  const [values, setValues] = useState({
    name: '',
    surname: '',
    email: '',
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const course = 'free-reiki-theoretical';
    const { name, surname, email } = values;
    const registerNewUser = { name, surname, email, course, message };

    try {
      const { data } = await axios.post(
        `/api/v1/auth/register`,
        registerNewUser
      );
      setValues({ name: '', surname: '', email: '', message: '' });
    } catch (error) {
      const { msg } = error.response.data;
    }
  };

  const [isActive, setActive] = useState('false');
  const popup = () => {
    if (values.name !== '' && values.surname !== '' && values.email !== '') {
      setActive(!isActive);
    }
  };

  return (
    <div className='containerHomepage'>
      <img src={alien} alt='' className='logo' />
      <h1 className={isActive ? null : 'hide'}>
        International school <br />
        Alien Meditation
      </h1>
      <h2 className={isActive ? null : 'hide'}>Get Your Certificate</h2>
      <h3 className={isActive ? null : 'hide'}>
        Make sure your name is correct,
        <br />
        you have only one chance
      </h3>
      <h2 className={isActive ? 'hide' : null}>
        We sent you a verification email <br /> Please check it. If you don't
        see it in your inbox, please check the spam and junk folders.
        <br />
        <br />
        Please be a little patient, it might take a few minutes.
      </h2>
      <form
        onSubmit={onSubmit}
        className={isActive ? 'form' : 'hide'}
      >
        <label htmlFor='First Name' className='form-label'>
          First Name
        </label>
        <FormRow
          type='name'
          name='name'
          value={values.name}
          handleChange={handleChange}
        />

        {/* single form row */}
        <label htmlFor='Last Name' className='form-label'>
          Last Name
        </label>
        <FormRow
          type='surname'
          name='surname'
          value={values.surname}
          handleChange={handleChange}
        />

        {/* single form row */}
        <label htmlFor='Email' className='form-label'>
          Email
        </label>
        <FormRow
          type='email'
          name='email'
          value={values.email}
          handleChange={handleChange}
        />
        {/* single form row */}

        <label htmlFor='Test' className='form-label'>
          Complaints, Compliments or Suggestions?
        </label>
        <textarea
          className='input'
          type='text'
          value={message}
          placeholder='Enter a message'
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type='submit' className='submit' onClick={() => popup()}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Homepage;
