import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import certificate1 from '../assets/certificate.png';
import certificate2 from '../assets/course2.png';
import certificate3 from '../assets/course3.png';
import certificate4 from '../assets/course4.png';
import certificate5 from '../assets/course5.png';
import certificate6 from '../assets/course6.png';
import certificate7 from '../assets/course7.png';
import certificate8 from '../assets/course8.png';
import certificate9 from '../assets/course9.png';
import certificate10 from '../assets/course10.png';
import certificate11 from '../assets/course11.png';
import certificate12 from '../assets/course12.png';
import '../pages/homepage/homepage.css';

let positionVertical;

const CanvaImg = () => {
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
    if (course === 'free-reiki-theoretical') {
      const catImage = new Image();
      catImage.src = certificate1;
      catImage.onload = () => {
        setImage(catImage);
      };
      positionVertical = 880;
    } else if (course === 'shamanic-ayahuasca') {
      const catImage = new Image();
      catImage.src = certificate2;
      catImage.onload = () => {
        setImage(catImage);
      };
      positionVertical = 880;
    } else if (course === 'shamanic-inca-reiki') {
      const catImage = new Image();
      catImage.src = certificate3;
      catImage.onload = () => {
        setImage(catImage);
      };
      positionVertical = 880;
    } else if (course === 'the-10-shamanic-totems') {
      const catImage = new Image();
      catImage.src = certificate4;
      catImage.onload = () => {
        setImage(catImage);
      };
      positionVertical = 880;
    } else if (course === 'shamanic-initiation') {
      const catImage = new Image();
      catImage.src = certificate5;
      catImage.onload = () => {
        setImage(catImage);
      };
      positionVertical = 900;
    } else if (course === 'starseed-fellowship') {
      const catImage = new Image();
      catImage.src = certificate6;
      catImage.onload = () => {
        setImage(catImage);
      };
      positionVertical = 780;
    } else if (course === 'holistic-therapy-online-consulting-room') {
      const catImage = new Image();
      catImage.src = certificate7;
      catImage.onload = () => {
        setImage(catImage);
      };
      positionVertical = 880;
    } else if (course === 'mystic-egiptian-initiation') {
      const catImage = new Image();
      catImage.src = certificate8;
      catImage.onload = () => {
        setImage(catImage);
      };
      positionVertical = 880;
    } else if (course === 'the-alien-codes') {
      const catImage = new Image();
      catImage.src = certificate9;
      catImage.onload = () => {
        setImage(catImage);
      };
      positionVertical = 900;
    } else if (course === 'reiki-usui-1') {
      const catImage = new Image();
      catImage.src = certificate10;
      catImage.onload = () => {
        setImage(catImage);
      };
      positionVertical = 780;
    } else if (course === 'reiki-usui-2') {
      const catImage = new Image();
      catImage.src = certificate11;
      catImage.onload = () => {
        setImage(catImage);
      };
      positionVertical = 780;
    } else if (course === 'reiki-usui-master') {
      const catImage = new Image();
      catImage.src = certificate12;
      catImage.onload = () => {
        setImage(catImage);
      };
      positionVertical = 880;
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
    link.download = 'AlienMeditation_Certificate.png';
    link.href = dataURL;
    link.click();
    window.location.href = 'https://www.alienmeditation.com/complete-package/';
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
      <h1>Download Your Certificate</h1>
      <h3 className='show'>Download in: {counter}</h3>
      <button
        onClick={downloadImg}
        className='btn'
        disabled={isActive ? false : true}
      >
        Download
      </button>
    </div>
  );
};

export default CanvaImg;
