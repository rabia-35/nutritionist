import React,{useState} from 'react'
import "./Calculation.css"

const Calculation = () => {
    const [gender, setGender]=useState("")
    const [form, setForm] = useState({ old:0, height:0,weight:0 });
    const [BMH, setBMH]=useState(0)
  
    const onChangeInput=(e)=>{
        setForm({...form, [e.target.name]: e.target.value})
    }


const onSubmit=()=>{
    if (gender=="kadın" && form.weight) {
    
        setBMH(655.1+(9.56*form.weight)+(1.85*form.height)-(4.68*form.old))
   
   } else if( gender=="erkek" && form.weight) {
       
        setBMH(66.5+(13.75*form.weight)+(5*form.height)-(6.75*form.old))
   }
}
const onReset=()=>{
    setBMH(0);
    setForm({old:0, height:0,weight:0 })
}



  return (
    <div className="calculation">
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-8">
                    <fieldset>
                        <h1 className='text-center my-2 fw-bolder'>Bazal Metabolizma Hızı Hesaplama Aracı</h1>
                        <div className="notlar"><em>*</em> Doldurulması zorunlu alanlar.</div>
                        <ol className="narrowest">
                            <li id="li_cinsiyet">
                            <label><em>*</em> Cinsiyetiniz:</label>
                            <fieldset>
                                <label for="cinsiyet"><input id="cinsiyet" type="radio" name="gender" value={form.gender} onClick={()=>setGender("kadın")} /> Kadın</label> <label for="cinsiyetB"><input id="cinsiyetB" type="radio" name="gender" value={form.gender}  onClick={()=>setGender("erkek")} /> Erkek</label></fieldset>
                            </li>
                            <li id="li_yas">
                            <label for="yas"><em>*</em> Yaşınız:</label>
                            <fieldset><input type="number" id="yas" name="old" value={form.old} step="1" className="iw3" onChange={onChangeInput} /> Örn. 32 </fieldset> 
                            </li>
                            <li id="li_boy">
                            <label for="boy"><em>*</em> Boyunuz:</label>
                            <fieldset><input type="number" id="boy" name="height" value={form.height} step="1" className="iw3" onChange={onChangeInput} /> cm (Örn. 172)</fieldset> 
                            </li>
                            <li id="li_kilo">
                            <label for="kilo"><em>*</em> Kilonuz:</label>
                            <fieldset><input type="number" id="kilo" name="weight" value={form.weight} step="1" className="iw3" onChange={onChangeInput}/> kg (Örn. 69)</fieldset> 
                            </li>
                        </ol>
                        <div className="buttons">
                            <button type="submit" onClick={()=>onSubmit()} >Hesapla</button>
                            <button id="rcbtn" type="reset" onClick={()=>onReset()}>Sıfırla</button>
                         </div>
                        {
                            BMH > 0 &&(
                                <div className='result'>
                                    <div><strong>BMH Hesaplaması Yapılan Kişi:</strong> {form.old} yaşında, {form.height} cm boy ve {form.weight} kg ağırlığa sahip bir {gender} </div>
                                    <div><strong>Bazal Metabolik Hız (BMH):</strong> <span>{Math.floor(BMH)} kcal/gün </span></div>
                                </div>
                            )
                            
                        }
                    </fieldset>
                </div>
            </div>
        </div>
    </div>
   
  )
}

export default Calculation;





