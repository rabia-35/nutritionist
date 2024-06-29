import React, { createContext} from "react";

export const ServicesContext=createContext();

const ServicesPro = ({children}) => {
    let Services=[
        {
            id:"1",
            title:"Liste İçeriği",
            desc:" Listeler kişiye özgü olacak şekilde hazırlanır. Seçilen paket türüne göre listelerde  keyifli ve sağlıklı tariflere,smoothielere,detoks sularına yer verilir.",
            imgsUrl:"/images/service/service-1.png",
            
           

        },
        {
            id:"2",
            title:"Öğün Takibi",  
            desc:"Süre zarfında gün içerisinde yediklerimiz ve içtiklerimiz whatsapp üzerinden yazılı veya fotoğraflanmış şekilde gönderilir. Bu şekilde beslenmede varsa yanlışlar düzeltilir.",
            imgsUrl:"/images/service/service-2.png",
           
            
         },
        {
            id:"3",
            title:"Egzersiz",
            desc:"Kilo verme sürecinde yağdan kilo kaybı sağlamak adına sana özel hazırlanan beslenme listelerine egzersiz videosu ekleyeceğiz.",
            imgsUrl:"/images/service/service-3.png",
            
        },    
       ]

  return (
   <ServicesContext.Provider value={Services} >{children}</ServicesContext.Provider>
  )
}

export default ServicesPro