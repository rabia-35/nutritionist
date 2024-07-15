import React,{ useContext } from 'react';
import { SssContext } from '../../context/Sss'
import "./Blog.css"
import Aos from 'aos';
import "aos/dist/aos.css";


function Blog() {


const sss=useContext(SssContext);

  return (
    <div className="blogs" id='blogs'>
        <div className='container'>
             <div className=" title">
              <h1 className="text-center my-2 fw-bolder">Sıkça Sorulan Sorular </h1>
              <p> Online diyet paketleri hakkında detaylı bilgi almak için whatsapp üzerinden iletişime geçebilirsiniz </p>
              <div className="title-logo">
                <img src="/images/title-logo.png" alt="alt logo" />
              </div>
            </div>
        </div>
    <div className="blog-elements-holder ">
      {
        sss.map((item ,ind)=>(
          <div key={ind} className="blog-info-box-holder"   >
            <div className="blog-info-box-inner">
              <div className="blog-ib-front-holder">
                  <div  className="blog-ib-top-holder"  >
                    <div className="blog-ib-icon-holder">
                      <i className={`blog-icon-linear-icon  blog-icon  ${item.icon}`} ></i>
                    </div>
                    <div className="blog-ib-title-holder">
                      <h2 className="blog-ib-title">{item.title}</h2>
                    </div>
                  </div>
                  <div  className="blog-ib-bottom-holder" >
                    <div className="blog-ib-text-holder"><p> {item.desc} </p></div>
                    <div className="blog-ib-button-holder"><a  href="#" target="_self"  className="blog-btn" data-bs-toggle="modal" data-bs-target="#blog-1" ><span className="blog-btn-text">Daha Fazla Oku..</span></a></div>
                  </div>
              </div>
              <div className="blog-ib-overlay" style={{backgroundImage: "url(" + item.imgsUrl + ")"}}></div>
            </div>
            <div className='modal fade text-dark' id="blog-1" tabindex="-1" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header text-center">
                    <h1 className="modal-title fs-5 " id="exampleModalLabel">{item.title}</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">{item.modal}</div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Kapat</button>
                    </div>
                    </div>
                </div>
            </div>
           </div>
        ))
      }
    </div>
  </div>
  )
}

export default Blog