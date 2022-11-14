import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeCourse1 from './pages/homepage/HomeCourse1';
import HomeCourse2 from './pages/homepage/HomeCourse2';
import HomeCourse3 from './pages/homepage/HomeCourse3';
import HomeCourse4 from './pages/homepage/HomeCourse4';
import HomeCourse5 from './pages/homepage/HomeCourse5';
import HomeCourse6 from './pages/homepage/HomeCourse6';
import HomeCourse7 from './pages/homepage/HomeCourse7';
import HomeCourse8 from './pages/homepage/HomeCourse8';
import HomeCourse9 from './pages/homepage/HomeCourse9';
import HomeCourse10 from './pages/homepage/HomeCourse10';
import HomeCourse11 from './pages/homepage/HomeCourse11';
import HomeCourse12 from './pages/homepage/HomeCourse12';
import Resultpage from './pages/resultpage/Resultpage';
// Spanish
import HomeSp1 from './pages/homepage/sp/HomeSp1';
import HomeSp2 from './pages/homepage/sp/HomeSp2';
import HomeSp3 from './pages/homepage/sp/HomeSp3';
import HomeSp4 from './pages/homepage/sp/HomeSp4';
import HomeSp5 from './pages/homepage/sp/HomeSp5';
import HomeSp6 from './pages/homepage/sp/HomeSp6';
import HomeSp7 from './pages/homepage/sp/HomeSp7';
import HomeSp8 from './pages/homepage/sp/HomeSp8';
import HomeSp9 from './pages/homepage/sp/HomeSp9';
import ResultpageSp from './pages/resultpage/ResultpageSp';
// Portuguese
import HomePt1 from './pages/homepage/pt/HomePt1';
import HomePt2 from './pages/homepage/pt/HomePt2';
import HomePt3 from './pages/homepage/pt/HomePt3';
import HomePt4 from './pages/homepage/pt/HomePt4';
import HomePt5 from './pages/homepage/pt/HomePt5';
import HomePt6 from './pages/homepage/pt/HomePt6';
import HomePt7 from './pages/homepage/pt/HomePt7';
import HomePt8 from './pages/homepage/pt/HomePt8';
import HomePt9 from './pages/homepage/pt/HomePt9';
import ResultpagePt from './pages/resultpage/ResultpagePt';

import Home from './App';

import HomePageInfo from './pages/homepage/HomepageInfo';
import HomePageInfoSp from './pages/homepage/HomepageInfoSp';
import HomePageInfoPt from './pages/homepage/HomepageInfoPt';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      {/*Spanish*/}
      <Route path='reiki-completo-1-ln863h1dr539qrfi8' element={<HomeSp1 />} />
      <Route path='reiki-completo-2-12b0l8hdf63gs8d3' element={<HomeSp2 />} />
      <Route path='reiki-completo-3-k7b5des53j89snpag4' element={<HomeSp3 />} />
      <Route
        path='consultorio-de-terapia-y63fs492cas26j3b6'
        element={<HomeSp4 />}
      />
      <Route
        path='iniciacion-chamanica-i6be471m9hd6ffs3'
        element={<HomeSp5 />}
      />
      <Route
        path='iniciacion-mistica-egipcia-8j43fs42w221atd9j'
        element={<HomeSp6 />}
      />
      <Route
        path='los-10-totems-chamanicos-29nt0te28sj36sw2kb'
        element={<HomeSp7 />}
      />
      <Route
        path='los-codigos-alienigenas-h63fs499sk36sbss1'
        element={<HomeSp8 />}
      />
      <Route
        path='reiki-chamanico-inca-u63gs5233sd992fz'
        element={<HomeSp9 />}
      />
      {/*Portuguese*/}
      <Route
        path='reiki-completo-pt-1-d24e0bc3b5834bb495a4490ac02ccb58'
        element={<HomePt1 />}
      />
      <Route
        path='reiki-completo-pt-2-2990cd7cfc0b4b7ba2103944be8f4130'
        element={<HomePt2 />}
      />
      <Route
        path='reiki-completo-pt-3-2e0fd3af5b074852b8001c28046f4d1e'
        element={<HomePt3 />}
      />
      <Route
        path='consultorio-online-de-terapia-pt-8153a359b66d406bb142202038ee0cf5'
        element={<HomePt4 />}
      />
      <Route
        path='iniciacao-mistica-egipcia-1c5fe2c085314af2bbbd7fa6fe29917e'
        element={<HomePt5 />}
      />
      <Route
        path='iniciacao-xamanica-9201d87fe2744127a12b0fa13333d9ee'
        element={<HomePt6 />}
      />
      <Route
        path='os-10-totems-xamanicos-7230242208e447d38380a2e15e2d9d63'
        element={<HomePt7 />}
      />
      <Route
        path='os-codigos-alienigenas-pt-1935f0e19ced4241b9711fef36ff5fbf'
        element={<HomePt8 />}
      />
      <Route
        path='reiki-xamanico-inca-74d239ef6bd54b6b98fcd0327891bb91'
        element={<HomePt9 />}
      />

      {/*English*/}
      <Route
        path='free-reiki-theoretical-1b3jjs846hdg6382hdfd'
        element={<HomeCourse1 />}
      />
      <Route
        path='shamanic-ayahuasca-38dh3652vjsk99jwj'
        element={<HomeCourse2 />}
      />
      <Route
        path='shamanic-inca-reiki-77hd63g8ofw1h003'
        element={<HomeCourse3 />}
      />
      <Route
        path='the-10-shamanic-totems-8ksj380n1s02sn'
        element={<HomeCourse4 />}
      />
      <Route
        path='shamanic-initiation-7gfpn036sfui6s3'
        element={<HomeCourse5 />}
      />
      <Route
        path='starseed-felloship-6hsk39shat6638djwt'
        element={<HomeCourse6 />}
      />
      <Route
        path='holistic-therapy-online-consulting-room-63op7eds42gbdh0'
        element={<HomeCourse7 />}
      />
      <Route
        path='mystic-egiptian-initiation-w652b9skhidi739'
        element={<HomeCourse8 />}
      />
      <Route path='the-alien-codes-g6dd23ab937bs08' element={<HomeCourse9 />} />
      <Route path='reiki-usui-1-lot3n45ba5cc34s' element={<HomeCourse10 />} />
      <Route path='reiki-usui-2-u73g5rsug73mji' element={<HomeCourse11 />} />
      <Route
        path='reiki-usui-mastery-hb73gd39bsov3s4ssml37gs'
        element={<HomeCourse12 />}
      />
      <Route path='register' element={<HomePageInfo />} />
      <Route path='register-sp' element={<HomePageInfoSp />} />
      <Route path='register-pt' element={<HomePageInfoPt />} />

      <Route path='result' element={<Resultpage />} />
      <Route path='result-sp' element={<ResultpageSp />} />
      <Route path='result-pt' element={<ResultpagePt />} />
      {/* <Route path='*'>
        <h1>404 - Not found</h1>
      </Route> */}
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
