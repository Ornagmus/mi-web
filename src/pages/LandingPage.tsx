//import React from 'react';
import '../imagenes/css/LandingPage.css';
import NavBar from '../components/atoms/NavBar';

const LandingPage = () => {
  return (
    <div className="landing-page">
      
      <div className="landing-container">
      <NavBar />
        <div className="color-band"></div>
        <h1 className="landing-title">Bienvenido a la página de José María Ramiro</h1>
        <div className="landing-content">
          <div className="landing-graphic">
            <h2 className="landing-subtitle">Diseño gráfico</h2>
            <img src="https://xn--diseadores-w9a.extremaduraempresarial.es/wp-content/uploads/gravity_forms/5-c831bbbd0af63beb37d644609f811a6f/11/2017/Nueva%20York%20salvaje-ebook.jpg" alt="Diseño gráfico" />
            <a className="landing-link" href="https://diseñadores.extremaduraempresarial.es/empresa/jose-maria-ramiro-carballo/" target="_blank" rel="noopener noreferrer">Ver su trabajo de diseño gráfico</a>
          </div>
          <div className="landing-illustration">
            <h2 className="landing-subtitle">Ilustración / Cómic</h2>
            <div className="illustration-gallery">
              <img src="https://live.staticflickr.com/8321/29386996975_1ff8674fd7_z.jpg" alt="Ilustración 1" />
              <img src="https://live.staticflickr.com/8508/29098140760_5b52b87967_z.jpg" alt="Ilustración 2" />
              <img src="https://live.staticflickr.com/8372/28765648983_03b4c5b086_c.jpg" alt="Ilustración 3" />
            </div>
            <a className="landing-link" href="https://www.flickr.com/photos/142706684@N08/with/28763203454/" target="_blank" rel="noopener noreferrer">Ver más ilustraciones y cómics</a>
          </div>
          </div>
      </div>
    </div>
  );
};

export default LandingPage;
