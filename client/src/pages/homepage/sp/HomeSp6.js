import React, { useState } from 'react';
import '../homepage.css';
import axios from 'axios';
import FormRow from '../../../components/FormRow';
import alien from '../../../assets/alien.png';

function HomepageSp6() {
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
    const course = 'Iniciacion-mistica-egipcia';
    const { name, surname, email } = values;
    const registerNewUser = { name, surname, email, course, message };

    try {
      const { data } = await axios.post(
        `/api/v1/auth/register6sp`,
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
        Escuela Internacional
        <br />
        Alien Meditation
      </h1>
      <h2 className={isActive ? null : 'hide'}>Obten tu certificado</h2>
      <h3 className={isActive ? null : 'hide'}>
        Asegurate que tu nombre este correcto,
        <br />
        tienes solo una oportunidad.
      </h3>
      <h2 className={isActive ? 'hide' : null}>
        Te enviamos un email para verificacion <br /> Por favor revisalo. Caso
        no lo veas en tu caja de entrada, por favor revisa en las secciones de
        spam de tu email.
        <br />
        <br />
        Por favor se paciente, esto puede tomar algunos minutos.
      </h2>
      <form
        className='form'
        onSubmit={onSubmit}
        className={isActive ? 'form' : 'hide'}
      >
        <label htmlFor='Nombre' className='form-label'>
          Nombre
        </label>
        <FormRow
          type='name'
          name='name'
          value={values.name}
          handleChange={handleChange}
        />

        {/* single form row */}
        <label htmlFor='Apellido' className='form-label'>
          Apellido
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
          Quejas, alagos o sugerencias?
        </label>
        <textarea
          className='input'
          type='text'
          value={message}
          placeholder='Escribe un mensaje'
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type='submit' className='submit' onClick={() => popup()}>
          Enviar
        </button>
      </form>
    </div>
  );
}

export default HomepageSp6;
