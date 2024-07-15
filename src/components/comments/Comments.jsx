import React, {useEffect} from 'react'
import "./Comments.css"
import Aos from 'aos';
import "aos/dist/aos.css";

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

const Comments = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
  },[])

const client=[]

for (let i = 1; i < 9; i++) {
  client.push(`/images/comment/comment-${i}.jpg`)
}


  return (
    <div className='comments-title' id='comment'>
       <div className=" title">
          <h1 className="text-center my-2 fw-bolder">Sevgili Danışanlarım</h1>
          <p>Birlikte keyifli çalıştığımız ve güzel sonuçlar elde ettiğimiz danışanlarımın başarıları</p>
          <div className="title-logo">
            <img src="/images/title-logo.png" alt="alt logo" />
          </div>
      </div>
       <h1 className="text-center my-2 fw-bolder"></h1>
        <div className="comments">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6 offset-md-5" data-aos= "fade-left">
                <Swiper
                autoplay={{  delay: 2000,  disableOnInteraction: false,}}
                  pagination={{  dynamicBullets: true,}}
                  modules={[Pagination, Autoplay]}
                  className="mySwiper"
                >
                {
                  client.map((item, ind)=>(
                    <SwiperSlide key={ind}>
                      <img src={item} />
                  </SwiperSlide>
                  ))
                }
                </Swiper>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Comments