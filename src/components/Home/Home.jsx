import Slider from "./Slider";
import slider1 from './facial.jpg';
import slider2 from './masajes.jpg';
import slider3 from './sauna.jpg';
import { Link } from "react-router-dom";
import { BsFillEmojiSmileFill } from "react-icons/bs";
export default function Home(){   
    return(
        <>
            <div className="w-full h-auto flex flex-col items-center">
                <div className="w-full static">
                    <Slider />
                </div>
                
                <div className="flex flex-col items-center sm:px-5 md:flex-row mt-20 sm:mb-20">
                <div className="w-full md:w-1/2 sm:mr-20">
                    <div className="block">
                    <img
                        src="https://www.gentleman.excelsior.com.mx/wp-content/uploads/2019/09/portadas-spas.jpg" className="object-cover rounded-lg max-h-64 sm:max-h-96 btn- w-full h-full ml-0"/>
                    </div>
                </div>
                <div className="flex flex-col items-start justify-center w-full h-full pt-6 pr-0 pb-6 pl-0 mb-6 md:mb-0 md:w-1/2">
                    <div className="flex flex-col items-start justify-center h-full space-y-3 transform md:pr-10 lg:pr-16
                        md:space-y-5">
                    <a className="text-4xl font-bold leading-none lg:text-5xl xl:text-6xl">Conoce nuestro SPA</a>
                    </div>
                </div>
                </div>

                <div className="w-full text-center pt-6 sm:pt-10 h-64 bg-white bg-pink-200">
                    <p className="mb-4 font-bold lg:text-5xl">SOMOS SPA BEAUTY</p>
                    <h1>Descubre un oasis de relajación y rejuvenecimiento en Spa Beauty, donde tus sentidos serán cautivados y tu bienestar será nuestra prioridad. Desde masajes terapéuticos hasta faciales revitalizantes, cada experiencia en Spa Beauty está diseñada para brindarte una escapada única. ¡Tu mereces este momento de auténtico cuidado personal!</h1>
                </div>
                <div className="w-full  grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-4 sm:grid-cols-2 place-items-center bg-white mt-10">
                    <div className="hover:animate-bounce h-72 rounded-lg text-center shadow-lg m-4 gap-4 items-center flex justify-center text-lg font-bold">
                        <img src={slider2} alt="not_fund" className="rounded-lg w-40"/>
                      <div className="flex flex-col justify-center">
                            <h1 className="m-4">Servicio de masajes</h1>  
                            <Link to={"/cita"}><button className="m-4 bg-pink-100 h-10 rounded-full font-semibold text-slate-100 ..."><p>Agendar</p></button></Link>
                        </div>                    </div>

                    <div className="hover:animate-bounce h-72 gap-4 rounded-lg text-center shadow-lg m-4 items-center flex justify-center text-lg font-bold">
                        <img src={slider1} alt="not" className="rounded-lg w-40" />
                        <div className="flex flex-col justify-center">
                            <span className="m-4">Servicio de limpieza facial</span>
                            <Link to={"/cita"}><button className="m-4 bg-pink-100 h-10 rounded-full font-semibold text-slate-100 ..."><p>Agendar</p></button></Link>
                        </div>
                    </div>


                    <div className="hover:animate-bounce h-72 gap-4 rounded-lg shadow-lg flex items-center m-4 justify-center text-lg font-bold">
                        <img src={slider3} alt="not" className="rounded-lg w-40" />
                        <div className="flex flex-col text-center justify-center">
                            <span className="m-4 text-center">Servicio de sauna</span>
                            <Link to={"/cita"}><button className="m-4 text-center bg-pink-100 h-10 rounded-full font-semibold text-slate-100 ..."><p>Agendar</p></button></Link>
                        </div>
                    </div>
                </div>

                {/*<Footer/>*/}
            </div>
            
        </>
    )
}