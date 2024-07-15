import React, {useState, useEffect, useContext} from 'react'
import { ServicesContext } from '../../context/Services';
import Aos from "aos";
import "aos/dist/aos.css";

import "./Header.css"

function Navbar() {
  const [header, setHeader] = useState("transparent")

  const listenScrollEvent = (event) => {
    if (window.scrollY < 73) {
      return setHeader("transparent")
    } else if (window.scrollY > 70) {
      return setHeader("#8ec038")
    } 
  }
  
  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
  
    return () =>
      window.removeEventListener('scroll', listenScrollEvent);
  }, []);

  useEffect(()=>{
    Aos.init({duration:2000})
  },[])

  const services = useContext(ServicesContext);


  return (
    <div className='header'>
       <div className='header-bg'>
        <nav className="navbar navbar-expand-lg  fixed-top" style={{background:header}}>
            <div className=" container">
              <a className="navbar-brand" href="/"><img src='./images/logo.png' alt='logo'  /></a>
              <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="offcanvas offcanvas-end text-bg-dark"  tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                <div className="offcanvas-header">
                  <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Diyetisyen Sümeyye TOP</h5>
                  <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                  <ul className="navbar-nav flex-grow-1 pe-3 ">
                    <li className="nav-item ">
                      <a className="nav-link"  href="#">Home</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#blogs">SSS</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#paket">Online Diyet Paketleri</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#comment">Yorumlar</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#footer">Hakkımda</a>
                    </li>
                    <li className='nav-item'>
                          <a className="nav-link" href='tel:+90552 152 7792'> <i class="fa-solid fa-phone " aria-hidden="true"></i> <span > 0552 152 7792</span></a>
                    </li>
                    <li className='nav-item'>
                      <a className='nav-link' target="_blank"  href="https://www.shopier.com/diyetisyensumeyyetop" >Shopier</a>
                    </li>
                    <li className='nav-item'>
                      <a className='nav-link' target="_blank"  href="https://www.instagram.com/dyt.sumeyyetop?igsh=MXVkM3c2eDEwYWJzbw%3D%3D&utm_source=qr" ><i class="fa-brands fa-instagram" ></i></a>
                    </li>
                    <li className='nav-item'>
                      <a className='nav-link' target="_blank"  href="https://api.whatsapp.com/send?phone=+905521527792&text=Merhaba bilgi almak istiyorum."><i class="fa-brands fa-whatsapp" ></i></a>
                    </li>
                  </ul>
                </div>
                
              </div>
            </div>
          </nav>
          <div className='banner-body container'>
            <div className='row'>
              {/* <div className='col-12 col-md-5'>
                <img src='/images/banner-me.png' />
              </div> */}
              <div className='col-12 text-center mt-5 title'>
                <h1> Merhaba, <br /> Ben Sümeyye, <br /> Senin Diyetisyenin </h1>
                <div className='subTitle'>Birlikte sürdürülebilir doğru beslenmeyi öğrenmeye hazır mısın? Bu süreçte sadece kilo vermeye odaklanmayacağız aynı zamanda hayat koşulları içinde kilomuzu nasıl koruyacağımızı da öğreneceğiz.</div>
              </div>
            </div>
          </div>
       </div>
       <div className='container'> 
            <div className='row boxs-area'>
              {
                services.map((item, ind)=>(

                    <div key={ind} className='col-12 col-md-4 '>
                      <div className='box' data-aos="fade-up">
                        <img src={item.imgsUrl} />
                        <h2>{item.title} </h2>
                        <p>{item.desc} </p>
                      </div>
                    </div>
                ))

              }
              
            </div>
          </div>
    </div>
  ) 
}

export default Navbar