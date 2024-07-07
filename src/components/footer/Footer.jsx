import React from 'react'
import "./Footer.css"
// import Aos from 'aos'
// import "aos/dist/aos.css"

const Footer = () => {

  // useEffect(()=>{
  //   Aos.init({duration:2000})
  // },[])

     const scrollWin = () => {
        window.scrollTo(0, 0);
       };

  return (
    <div className="pg-footer" id='footer'>
    <footer className="footer">
      <svg className="footer-wave-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 100" preserveAspectRatio="none">
        <path className="footer-wave-path" d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"></path>
      </svg>
      <div className="footer-content container">
       <div className="row">
          <div className="footer-content-column col-12  ">
            <div className="footer-logo">
              <a className="footer-logo-link" href="#">
                <img src="./images/logo.png" alt="logo" />
              </a>
              <p>Merhabalar, Ben <span className="title">Diyetisyen Sümeyye Top</span> <br/> 
                2018 yılında Muğla Sıtkı Koçman Üniversitesinden mezun oldum. 2018 -2021 yılları arasında online danışmanlık hizmeti verdim. 2021 yılında Ankara’da Bi Diyet Beslenme Danışmanlığında ofis diyetisyeni olarak devam etti. 2022 yılında İzmir’e dönerken online hizmeti sürdürmeye başladım. 
                2024 yılında arınma kampında diyetisyen olarak görev aldım. Şuan hala online olarak birçok kişiye beslenme hizmeti sunmaktayım.</p>
            </div>
            
          </div>
        
          <div className="footer-content-column col-12">
          <div class="container">
              <div>
                <p> E-posta göndermek için </p>
                <a className="footer-call-to-action-button button" href="#" target="_self">Tıkla </a> 
              </div>
              <form className='d-none'>
                <div class="field" tabindex="1">
                  <label for="username">
                    <i class="far fa-user"></i>Adınız
                  </label>
                  <input name="username" type="text" placeholder="e.g. john doe" required />
                </div>
                <div class="field" tabindex="2">
                  <label for="email">
                    <i class="far fa-envelope"></i>E-mail Adresiniz
                  </label>
                  <input name="email" type="text" placeholder="email@domain.com" required />
                </div>
                <div class="field" tabindex="3">
                  <label for="message">
                    <i class="far fa-edit"></i>Mesajınız
                  </label>
                  <textarea name="message" placeholder="Mesajınızı buraya yazınız" required></textarea>
                </div>
                <a className="footer-call-to-action-button button" href="#" target="_self"> Gönder </a> 
              </form>
            </div>
          </div>
       </div>
        <div className="footer-social-links"> <svg className="footer-social-amoeba-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 236 54">
            <path className="footer-social-amoeba-path" d="M223.06,43.32c-.77-7.2,1.87-28.47-20-32.53C187.78,8,180.41,18,178.32,20.7s-5.63,10.1-4.07,16.7-.13,15.23-4.06,15.91-8.75-2.9-6.89-7S167.41,36,167.15,33a18.93,18.93,0,0,0-2.64-8.53c-3.44-5.5-8-11.19-19.12-11.19a21.64,21.64,0,0,0-18.31,9.18c-2.08,2.7-5.66,9.6-4.07,16.69s.64,14.32-6.11,13.9S108.35,46.5,112,36.54s-1.89-21.24-4-23.94S96.34,0,85.23,0,57.46,8.84,56.49,24.56s6.92,20.79,7,24.59c.07,2.75-6.43,4.16-12.92,2.38s-4-10.75-3.46-12.38c1.85-6.6-2-14-4.08-16.69a21.62,21.62,0,0,0-18.3-9.18C13.62,13.28,9.06,19,5.62,24.47A18.81,18.81,0,0,0,3,33a21.85,21.85,0,0,0,1.58,9.08,16.58,16.58,0,0,1,1.06,5A6.75,6.75,0,0,1,0,54H236C235.47,54,223.83,50.52,223.06,43.32Z"></path>
          </svg>
          <a className="footer-social-link phone" href="#" target="_blank">
            <span className="hidden-link-text">Phone</span>
            <a className='tel-footer' href="tel:+90554 548 0291" >
              <i className="fa-solid fa-phone"></i>
            </a>
          </a>
          <a className="footer-social-link twitter" href="https://www.shopier.com/diyetisyensumeyyetop" target="_blank">
            <span className="hidden-link-text">Shopier</span>
            <i class="fa-solid fa-s"></i>
          </a>
          <a className="footer-social-link instagram" target="_blank"  href="https://www.instagram.com/dyt.sumeyyetop?igsh=MXVkM3c2eDEwYWJzbw%3D%3D&utm_source=qr">
            <span className="hidden-link-text">Instagram</span>
            <i class="footer-social-icon-svg footer-social-icon-path fa-brands fa-instagram " ></i>
          </a>
          <a className="footer-social-link whatsapp" href="#" target="_blank">
            <span className="hidden-link-text">Whatsapp</span>
            <a className="wp-m" target="_blank" href="https://api.whatsapp.com/send?phone=+905545480291&text=Merhaba bilgi almak istiyorum." >
                <i className="fab fa-whatsapp"></i>
            </a>
          </a>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="footer-copyright-wrapper">
          <p className="footer-copyright-text">
            <a className="footer-copyright-link" href="#" target="_self"> ©2024. | Designed By: Rabia ÖLKER. | All rights reserved. </a>
          </p>
        </div>
      </div>
      <div className="scroll-top">
      <div role="button" className="text-center" onClick={scrollWin} > <i className="fa-solid fa-chevron-up"></i> </div>
      </div>
    </footer>
  </div>
  )
}
{/* <a className="footer-call-to-action-button button"  href="mailto:rabia.olker@gmail.com" target="_self"> Mesaj Gönder</a>  */}
export default Footer
