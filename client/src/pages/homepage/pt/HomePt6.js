import React, { useState } from 'react';
import '../homepage.css';
import axios from 'axios';
import FormRow from '../../../components/FormRow';
import alien from '../../../assets/alien.png';

function HomepagePt6() {
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
    const course = 'iniciacao-xamanica';
    const { name, surname, email } = values;
    const registerNewUser = { name, surname, email, course, message };

    try {
      const { data } = await axios.post(
        `/api/v1/auth/register6pt`,
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
        Escola Internacional <br />
        Alien Meditation
      </h1>
      <h2 className={isActive ? null : 'hide'}>Obtenha seu certificado</h2>
      <h3 className={isActive ? null : 'hide'}>
        Verifique que seu nome esteja correto,
        <br />
        voce tem apenas uma chance
      </h3>
      <h2 className={isActive ? 'hide' : null}>
        Enviamos um email para verificação <br /> Por favor revisa-lo. Se voce
        não encontrar ele na caixa de entrada, por favor verifique na sua pasta
        de spam.
        <br />
        <br />
        Por favor tenha paciencia, isto pode levar alguns minutos.
      </h2>
      <form
        className='form'
        onSubmit={onSubmit}
        className={isActive ? 'form' : 'hide'}
      >
        <label htmlFor='Nome' className='form-label'>
          Nome
        </label>
        <FormRow
          type='name'
          name='name'
          value={values.name}
          handleChange={handleChange}
        />

        {/* single form row */}
        <label htmlFor='Sobrenome' className='form-label'>
          Sobrenome
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
          Reclamar, elogiar ou sugerir?
        </label>
        <textarea
          className='input'
          type='text'
          value={message}
          placeholder='Escreva uma mensagem'
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type='submit' className='submit' onClick={() => popup()}>
          Enviar
        </button>
      </form>
    </div>
  );
}

export default HomepagePt6;
