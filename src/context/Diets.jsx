import React, { createContext} from "react";

export const DietContext=createContext();

const DietPro = ({children}) => {
    let Diet=[
        {
            id:"1",
            title:"ON GÜNDE BİR GÖRÜŞME PAKETİ",
            desc:"Aylık toplam 3 online görüşme - Aylık 3 liste hakkı - Spor videosu desteği - Whatsapptan öğün takibi - Sağlıklı ve keyifli tarifler",
            imgsUrl:"/images/diets/diet-1.jpg",
           

        },
        {
            id:"2",
            title:"HAFTALIK GÖRÜŞME PAKETİ",  
            desc:"Aylık toplam 4 online görüşme  - Aylık 4 liste hakkı  - Spor videosu desteği  - Whatsapptan öğün takibi  - Sağlıklı ve keyifli tarifler ",
            imgsUrl:"/images/diets/diet-2.jpg",
           
         },
        {
            id:"3",
            title:"CANDİDA DİYETİ -DENEME PROGRAMI",
            desc:"Candida diyeti bağırsak sağlığını iyileştirmek, iltihabı azaltmak ve bağışıklığı artırmaktadır. Bu diyet listesi tamamen Candida problemine yönelik özel bir beslenme programıdır. Programın içeriği;  - Bu program on günlük kişiye özel beslenme programı içerir  - Öğün takibi  - Spor videosu desteği  ",
            imgsUrl:"/images/diets/diet-3.jpg",
           
 
        },
        {
            id:"4",
            title:"ELİMİNASYON DİYETİ – DENEME PROGRAMI",
            desc:"Eliminasyon diyeti kilo vermeye yardımcı olurken diğer taraftan kronik ve ciddi rahatsızlıklardan kurtulmak için uygulanan bir diyet yöntemidir.Eliminasyon kabızlık,şişkinlik,ishal ve gaz gibi sindirim problemlerin iyileşmesini, ibs semptomlarının hafifletilmesine yardımcı olur. Egzema ve migren ataklarına iyi gelmektedir. Programın içeriği;  - Bu liste on günlük kişiye özel beslenme programı içerir. - Bu programda bazı besin grupları elenir. - Bu programda eliminasyona uygun tarifler yer verilir. - Öğün takibi  - Spor videosu desteği",
            imgsUrl:"/images/diets/diet-4.jpg",
           
 
        },
        {
            id:"5",
            title:"KETOJENİK DİYET - DENEME PROGRAMI",
            desc:"Ketojenik diyet özellikle polikistik problemi yaşayanlarda, insülin direncini sahiplerde, kolesterol problemi yaşayanlarda etkili bir beslenme yöntemidir. Programın içeriği;  - Bu programda ketoya uygun olacak şekilde on günlük beslenme programı uygulanır.  - On günlük liste içeriğinde tarifler  yer almaktadır.  - Öğün takibi  - Spor videosu desteği ",
            imgsUrl:"/images/diets/diet-5.jpg",
           
 
        },
        {
            id:"6",
            title:"GEBE BESLENMESİ",
            desc:" Gebelerde ilk üç ay kilo verme sürecinde çok önemlidir. Üç ay sonrasında kişi artık yavaştan kilo almaya başlamaktadır.Bu programla birlikte kişiye sağlıklı beslenme listesi hazırlanmaktadır. Bu sayede kişi kontrollü kilo alımı sağlarken diğer taraftan bebeğin sağlığı desteklenmektedir.Programın içeriği; - Kişiye özel yedi günlük beslenme programı  - Sağlıklı ve keyifli tarifler  - Haftalık görüntülü görüşme  - Öğün takibi Spor önerileri",
            imgsUrl:"/images/diets/diet-6.jpg",
           
 
        },
        {
            id:"7",
            title:"7 GÜNLÜK DETOKS KAMPI",
            desc:"Detoks; vücudu toksinlerden arındırmayı ve kilo vermeye yardımcı olur. Bu program sayesinde kişi kısa sürede kendini daha hafif hissetmesini sağlar. Programın içeriği;  - 2 adet detoks programı listesi Spor videosu desteği - Öğün takibi  - Yağ yakıcı smoothieler,tarifler içerir.  ",
            imgsUrl:"/images/diets/diet-7.jpg",      
        },
        {
            id:"8",
            title:"FODMAP DİYETİ-DENEME PROGRAMI",
            desc:"Özellikle İBS teşhisi alışmış danışanlarda uygulanan bir beslenme programıdır. Bu programda yüksek fermente ürünler elenir. Programın içeriği; 10 günlük kişiye özel beslenme programı - Öğün takibi  - Spor videosu desteği ",
            imgsUrl:"/images/diets/diet-8.jpg",      
        },
    ]
  return (
    <DietContext.Provider value={Diet}>{children}</DietContext.Provider>
  )
}

export default DietPro