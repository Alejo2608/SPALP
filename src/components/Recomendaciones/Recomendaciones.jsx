import { useState, useEffect } from "react";
import axios from "axios";
export default function Reco() {
   const [dataReco, setDataReco] = useState([]);
   const Reco = async()=>{
       try {
           const response  = await axios(`http://localhost:3000/reco`)
           const dataReco = Object.values(response.data);
           setDataReco(dataReco);
           console.log(dataReco);
   
       } catch (e){
           console.log(e);
       }
   }
   useEffect(() => {
       Reco();
   }, []);


   return (
      <div className="flex flex-col justify-center items-center gap-5 mb-40 sm:mb-20">
         <div className="flex flex-col justify-center m-8 mt-6">
            {
               dataReco.length>0?
               <div className="to">
                  {
                     dataReco.map((reco)=>(
                        <article className='flex flex-col justify-around mt-6 min-h-24 w-58 sm:w-[30rem] py-2 px-4 rounded-xl ring-1 ring-slate-500 p-20' key={reco._id}>
                        <img src={reco.imagen.secure_url} alt="not fund" className="rounded-lg" />
                        <h3 className='text-slate-300 border-b-[1px] border-slate-500'>{reco.nombre}</h3>
                        <p className='text-white text-sm pb-2 mb-2'>
                           {reco.reco}
                        </p>
                     </article>
                     ))
                  }
               </div>:
               <div className="lo">
                  <h1>Loading</h1>
               </div>
            }
         </div>
      </div>
   )
}


