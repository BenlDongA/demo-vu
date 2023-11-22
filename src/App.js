// App.js

import React from 'react';
import './App.css';
import PhimHot from './componatn/phimhot';
import image1 from './componatn/img/img1.png';
import image2 from './componatn/img/img2.png';
import image3 from './componatn/img/img3.png';
import Banner from './componatn/banner';

function App() {
  return (
    <div className="App">
      <div className="fim">
        <h2>Phim Hot</h2>
        <div className="bocuc">
          <PhimHot  img={image1} />
          <PhimHot  img={image2}/>
          <PhimHot  img={image3}/>  
        </div>
      </div>
      <div className="Banne"> 
      <Banner/>
      </div>
     
    </div>
  );
}

export default App;
