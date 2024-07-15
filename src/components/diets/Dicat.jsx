import React, {useContext, useEffect} from 'react'
import "./Diets.css"
import { DietContext } from '../../context/Diets'
import Aos from 'aos';
import "aos/dist/aos.css";

const Dicat = () => {
const diets=useContext(DietContext)

useEffect(()=>{
  Aos.init({duration:2000})
},[])

    return (
      <div className='dicat'id='paket' >
          <div className=" title">
          <h1 className="text-center my-2 fw-bolder">Online Diyet Paketleri</h1>
          <p>İhtiyacına uygun olacak beslenme planları şimdi seninle. Kendine uygun beslenme yöntemini seç ve hemen başla !</p>
          <div className="title-logo">
            <img src="/images/title-logo.png" alt="alt logo" />
          </div>
      </div>
        <div id="cmsmasters_row_66575934dcee86_49225579" className="cmsmasters_row cmsmasters_color_scheme_third cmsmasters_half_home cmsmasters_row_top_default cmsmasters_row_bot_default cmsmasters_row_boxed">
            <div className="cmsmasters_row_outer_parent">
              <div className="main">
                <ul className="cards">
                  {
                    diets.map((item, ind)=>(
                      <li key={ind} className="cards_item"  data-aos={ "fade-right" }>
                        <div className="card">
                          <div className="card_image"><img src={item.imgsUrl} alt="mixed vegetable salad in a mason jar. " /></div>
                          <div className="card_content">
                            <h2 className="card_title">{item.title} </h2>
                            <div className="card_text">{item.desc}</div>
                          </div>
                        </div>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </div>
        </div>
      </div>
    )
  }
  
  export default Dicat