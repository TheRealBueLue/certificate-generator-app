import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import certificate1SP from '../assets/sp/course1SP.png';
import certificate2SP from '../assets/sp/course2SP.png';
import certificate3SP from '../assets/sp/course3SP.png';
import certificate4SP from '../assets/sp/course4SP.png';
import certificate5SP from '../assets/sp/course5SP.png';
import certificate6SP from '../assets/sp/course6SP.png';
import certificate7SP from '../assets/sp/course7SP.png';
import certificate8SP from '../assets/sp/course8SP.png';
import certificate9SP from '../assets/sp/course9SP.png';
import '../pages/homepage/homepage.css';

let positionVertical;

const CanvaImgSP = () => {
  const location = useLocation();
  const firstName = location.state.name;
  const lastName = location.state.surname;
  const course = location.state.course;

  const strFirst = firstName.charAt(0).toUpperCase() + firstName.slice(1);
  const strLast = lastName.charAt(0).toUpperCase() + lastName.slice(1);

  const [image, setImage] = useState(null);

  const canvas = useRef(null);

  //------->

  useEffect(() => {
    if (course === 'reiki-completo-1') {
      const catImage = new Image();
      catImage.src = certificate1SP;
      catImage.onload = () => {
        setImage(catImage);
      };
      positionVertical = 810;
    } else if (course === 'reiki-completo-2') {
      const catImage = new Image();
      catImage.src = certificate2SP;
      catImage.onload = () => {
        setImage(catImage);
      };
      positionVertical = 810;
    } else if (course === 'reiki-completo-3') {
      const catImage = new Image();
      catImage.src = certificate3SP;
      catImage.onload = () => {
        setImage(catImage);
      };
      positionVertical = 860;
    } else if (course === 'consultorio-de-terapia') {
      const catImage = new Image();
      catImage.src = certificate4SP;
      catImage.onload = () => {
        setImage(catImage);
      };
      positionVertical = 920;
    } else if (course === 'Iniciacion-chamanica') {
      const catImage = new Image();
      catImage.src = certificate5SP;
      catImage.onload = () => {
        setImage(catImage);
      };
      positionVertical = 900;
    } else if (course === 'Iniciacion-mistica-egipcia') {
      const catImage = new Image();
      catImage.src = certificate6SP;
      catImage.onload = () => {
        setImage(catImage);
      };
      positionVertical = 920;
    } else if (course === 'los-10-totems-chamanicos') {
      const catImage = new Image();
      catImage.src = certificate7SP;
      catImage.onload = () => {
        setImage(catImage);
      };
      positionVertical = 920;
    } else if (course === 'los-codigos-alienigenas') {
      const catImage = new Image();
      catImage.src = certificate8SP;
      catImage.onload = () => {
        setImage(catImage);
      };
      positionVertical = 960;
    } else if (course === 'reiki-chamanico-inca') {
      const catImage = new Image();
      catImage.src = certificate9SP;
      catImage.onload = () => {
        setImage(catImage);
      };
      positionVertical = 920;
    }
  }, []);

  const getFullDate = () => {
    var d = new Date();

    var date = d.getDate();
    var month = d.getMonth() + 1; // Since getMonth() returns month from 0-11 not 1-12
    var year = d.getFullYear();

    var dateStr = date + '/' + month + '/' + year;
    return dateStr;
  };

  useEffect(() => {
    let unmounted = false;
    if (!unmounted) {
      if (image && canvas) {
        const ctx = canvas.current.getContext('2d');
        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, 600, 256 + 80);
        ctx.drawImage(image, 0, 0, 2000, 1414);

        ctx.font = '90px Merriweather, serif';
        ctx.textAlign = 'center';
        ctx.fillStyle = '#556C7A';
        ctx.fillText(`${strFirst} ${strLast}`, 980, positionVertical);

        ctx.font = '40px Merriweather, serif';
        ctx.textAlign = 'left';
        ctx.fillStyle = '#556C7A';
        ctx.fillText(getFullDate(), 390, 1130);
      }
    }
    return () => {
      unmounted = true;
    };
  }, [image, canvas]);

  const [isActive, setIsActive] = useState(false);
  const [counter, setCounter] = useState(8);

  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    if (counter <= 0) {
      setIsActive(true);
    }
  }, [counter]);

  const downloadImg = () => {
    var canvas = document.getElementById('canvas');
    var dataURL = canvas.toDataURL();

    var link = document.createElement('a');
    link.download = 'AlienMeditation_Certificado.png';
    link.href = dataURL;
    link.click();
    window.location.href = 'https://meditacionalienigena.com/paquete-completo/';
  };

  return (
    <div className='containerHomepage'>
      <canvas
        id='canvas'
        ref={canvas}
        width={2000}
        height={1414}
        style={{ display: 'none' }}
      />
      <h1>Descarga tu certificado</h1>
      <h3 className='show'>Descargar en: {counter}</h3>
      <button
        onClick={downloadImg}
        className='btn'
        disabled={isActive ? false : true}
      >
        Descargar
      </button>
    </div>
  );
};

export default CanvaImgSP;
