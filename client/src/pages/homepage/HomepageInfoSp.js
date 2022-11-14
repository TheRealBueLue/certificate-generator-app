import React, { useState, useEffect } from 'react';
import './homepage.css';
import axios from 'axios';
import FormRow from '../../components/FormRow';
import alien from '../../assets/alien.png';
import { useNavigate } from 'react-router-dom';

const verifyUser = async (code) => {
  try {
    const { data } = await axios.post(`/api/v1/auth/verify-user-sp`, code);
    return data;
  } catch (error) {}
};

function HomepageInfoSp() {
  useEffect(() => {
    setValues({
      firstname: 'Por favor verifica el codigo',
      surname: 'Por favor verifica el codigo',
    });
  }, []);

  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: '',
    surname: '',
    course: '',
  });

  const [code, setCode] = useState({
    code: '',
  });

  const handleChangeCode = (e) => {
    setCode({ ...code, [e.target.name]: e.target.value });
  };

  const test = async (e) => {
    e.preventDefault();
    verifyUser(code);
    const verify = await verifyUser(code);
    popup(verify.userId.name);
    setValues({
      firstname: verify.userId.name,
      surname: verify.userId.surname,
      course: verify.userId.course,
    });
    return verify;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const { firstname, surname, course } = values;

    try {
      navigate('/result-sp', {
        state: { id: 1, name: firstname, surname: surname, course: course },
      });
      setValues({ firstname: '', surname: '', course: '' });
    } catch (error) {
      const { msg } = error.response.data;
    }
  };

  const [isActive, setActive] = useState('false');
  const popup = (isTrue) => {
    if (isTrue) {
      setActive(!isActive);
    }
  };

  return (
    <div className='containerHomepage'>
      <img src={alien} alt='' className='logo' />
      <h1>Por favor verifica el codigo</h1>
      <form className='form' onSubmit={onSubmit}>
        <FormRow
          type='code'
          name='code'
          value={code.code}
          handleChange={handleChangeCode}
        />
        <button onClick={test} className='verifyBtn'>
          Verificar
        </button>

        <div className={isActive ? 'hide' : 'show'}>
          {/* single form row */}
          <FormRow type='firstname' name='firstname' value={values.firstname} />

          {/* single form row */}
          <FormRow type='surname' name='surname' value={values.surname} />
        </div>
        <button type='submit' className={isActive ? 'hide' : 'submit'}>
          Siguiente
        </button>
      </form>
    </div>
  );
}

export default HomepageInfoSp;
