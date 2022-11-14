import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import certificate1PT from '../assets/pt/course1PT.png';
import certificate2PT from '../assets/pt/course2PT.png';
import certificate3PT from '../assets/pt/course3PT.png';
import certificate4PT from '../assets/pt/course4PT.png';
import certificate5PT from '../assets/pt/course5PT.png';
import certificate6PT from '../assets/pt/course6PT.png';
import certificate7PT from '../assets/pt/course7PT.png';
import certificate8PT from '../assets/pt/course8PT.png';
import certificate9PT from '../assets/pt/course9PT.png';
import '../pages/homepage/homepage.css';

let positionVertical;

const CanvaImgPT = () => {
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
    if (course === 'reiki-completo-pt-1') {
      const catImage = new Image();
      catImage.src = certificate1PT;
      catImage.onload = () => {
        setImage(catImage);
      };
      positionVertical = 810;
    } else if (course === 'reiki-completo-pt-2') {
      const catImage = new Image();
      catImage.src = certificate2PT;
      catImage.onload = () => {
        setImage(catImage);
      };
      positionVertical = 810;
    } else if (course === 'reiki-completo-pt-3') {
      const catImage = new Image();
      catImage.src = certificate3PT;
      catImage.onload = () => {
        setImage(catImage);
      };
      positionVertical = 860;
    } else if (course === 'consultorio-online-de-terapia-pt') {
      const catImage = new Image();
      catImage.src = certificate4PT;
      catImage.onload = () => {
        setImage(catImage);
      };
      positionVertical = 920;
    } else if (course === 'iniciacao-mistica-egipcia') {
      const catImage = new Image();
      catImage.src = certificate5PT;
      catImage.onload = () => {
        setImage(catImage);
      };
      positionVertical = 900;
    } else if (course === 'iniciacao-xamanica') {
      const catImage = new Image();
      catImage.src = certificate6PT;
      catImage.onload = () => {
        setImage(catImage);
      };
      positionVertical = 920;
    } else if (course === 'os-10-totems-xamanicos') {
      const catImage = new Image();
      catImage.src = certificate7PT;
      catImage.onload = () => {
        setImage(catImage);
      };
      positionVertical = 920;
    } else if (course === 'os-codigos-alienigenas-pt') {
      const catImage = new Image();
      catImage.src = certificate8PT;
      catImage.onload = () => {
        setImage(catImage);
      };
      positionVertical = 960;
    } else if (course === 'reiki-xamanico-inca') {
      const catImage = new Image();
      catImage.src = certificate9PT;
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
  const [counter, setCounter] = useState(6);

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
    window.location.href = 'https://meditacaoalienigena.com/pacote-completo/';
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
      <h1>Abaixe seu certificado</h1>
      <h3 className='show'>Abaixar em: {counter}</h3>
      <button
        onClick={downloadImg}
        className='btn'
        disabled={isActive ? false : true}
      >
        Baixar
      </button>
    </div>
  );
};

export default CanvaImgPT;
