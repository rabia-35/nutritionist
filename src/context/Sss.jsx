import React, { createContext} from "react";

export const SssContext=createContext();

const SssPro = ({children}) => {
    let Sss=[
        {
            id:"1",
            title:"Kilo Verme Diyeti Dışında Uygulanan Programlar Nelerdir?",
            desc:"Candida Diyeti - Eliminasyon Diyeti - Fodmap Diyeti - Detoks ve Arınma - Ketojenik Diyet - Akdeniz Diyeti",
            imgsUrl:"/images/sss/info-box-1.jpg",
            modal:"Kilo verme programlarına ek olarak gebe diyeti, candida diyeti, emziren anne diyeti, eliminasyon diyeti, ketojenik diyet, detoks programları uygulanmaktadır.",
            icon:"leaf"
        },
        {
            id:"2",
            title:"Kan tahlili gerekli midir?",  
            desc:"Sürece başlamadan önce danışan elinde muhakkak en az altı aylık bir genel bir kan testi olmalıdır.",
            imgsUrl:"/images/sss/info-box-2.jpg",
            modal:" Sürece başlamadan önce danışan elinde muhakkak en az altı aylık bir genel bir kan testi olmalıdır.Özellikle insülin direnci geçmişi veya hipotroid gibi kilo verme sürecini zorlaştıran sağlık etkenleri varsa muhakkak yaptırmalıdır. Bu tahlillerde diğer bir önemli husus vitamin ve minarel eksikliğidir.Unutmalıdır ki fizyolojik durumlarda sıkıntı olması halinde kilo verme süreci olumsuz etkilenmektedir.Olaylara genel bir bütün olarak yaklaşmak için buna dikkat edilmelidir.",
            icon:"diamond",
         },
        {
            id:"3",
            title:"Yağ Kaybı Nasıl Anlaşılır? ",
            desc:"Online diyetlerde yağdan kilo kaybını nasıl anlarız? ",
            imgsUrl:"/images/sss/info-box-3.jpg",
            modal:"Online diyetlerde yağdan kilo kaybını nasıl anlarız? Bu sorunun cevabı mezura ölçümleri olacaktır. Her görüşmenin sabahı danışan tartı ve mezura ölçümlerini gerçekleştiri. Bu verilere göre genel bir değerlendirme yapılır.  Ağırlık antrenmanı yapan kişilerde tartıda eksilme yüksek olmayacağı için muhakkak mezura ölçümü yapması gereklidir.",
            icon:"alarm",
        },
        
       
    ]
  return (
    <SssContext.Provider value={Sss}>{children}</SssContext.Provider>
  )
}

export default SssPro