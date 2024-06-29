import React from 'react'
import "./Email.css"
const Email = () => {
  return (
    <div className='email'>
        <div className="container">
           <div className="email-box">
           <div className="email-img">
           <form method="post">
                <div className="email-input"><input type="text" placeholder='Adınızı ve Soyadınızı Giriniz.' name='name' /></div>
                <div className="email-input"><input type="email" placeholder='Mail Adresinizi Giriniz.' name='email' /></div>
                <div className="email-text"><textarea name="message" id="message" cols="30" rows="5" placeholder='Mesajınızı Yazınız.'></textarea></div>
                <button type="submit">Gönder</button>
            </form>
           </div>
           </div>
        </div>
    </div>
  )
}

export default Email