import { useState } from "react"
function SomaliQuotes(){
    const[index , setIndex]= useState(0)
    const maahmaah=[
        "1.Aaddane eed ma waayo",
        "2.Iskaashato ma kufto",
        "3.Abeesadii lix jir kugu qaniintaa lixdan jir bay kugu dishaa",
        "4 Af daboolan waa dehab",
        "5 Talo xumo tog baas bay kaa riddaa ",
        "6 Af jooga looma adeego",
        "7 Af macaan garan macaan baa dhaanta ",
        "8 Hadday degdegsiinyo door dhalaan, kaadsiinyana kiish lacagay dhalaan",
        "9 Biyo sacabbadaada ayaa looga dhergaa",
        "10 Far kaliya fool madhaqo"

    ]
    const nextBtn =()=>{
       if(index < maahmaah.length -1){
        setIndex(index +1 )
       }
    }
    const prBtn =()=>{
        if(index > 0){
         setIndex(index -1 )
        }
     }
    
    return <div className="text-center">
        <h1 style={{display : index == maahmaah.length-1 ? "block" : "none"}} className="font-bold text-red-600 text-3xl">Dhamaad</h1>
        <p style={{color : index == maahmaah.length-8 ?  "red" : ""}}  className="my-20 text-3xl">{maahmaah[index]}</p>
       
        <button onClick={prBtn} className="bg-blue-500 px-8 py-3 text-white rounded">Previous</button>
        <button onClick={nextBtn} className="bg-blue-500 px-8 py-3 text-white rounded ml-3">Next</button>
    </div>
}
export default SomaliQuotes