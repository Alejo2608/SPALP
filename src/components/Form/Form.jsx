import React, { useEffect } from "react";
import { useState } from "react";
import { useModal } from "../Modal/useModal"
import Modal from "../Modal/Modal";
import axios from "axios";
import { FiSun } from "react-icons/fi";
import { FaSpinner } from "react-icons/fa";
export default function Form(){
    const [error,setError]=useState('')
    const [isOpenAlert, openAlert, closeAlert] = useModal(false);
    const [clima,setClima]=useState({})
    const url=`https://api.openweathermap.org/data/2.5/weather?lat=10.48&lon=-66.87&appid=2e0dd53c8c28ad741eae3d106a47492e`
    const [data, setData] = useState({
        imagen:null,
		nombre: "",
		apellido: "",
        correo:"",
        numero:""
	});
    const getCl=async()=>{
        const cl=await axios(url)
        setClima(cl.data)
    }
    console.log(clima)
    const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
		console.log(data)
	};
    const handleImg = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.files[0] });
		// console.log(data)
	};
    useEffect(() => {
        getCl();
    }, []);
 
    const handleSubmit = async (e) => {
        if (data.nombre,data.apellido,data.numero,data.correo==="") {
            e.preventDefault()
            setError("Hay campos vacios, todos tienen que llenarse para crear una Pocion")
        }else{
            e.preventDefault();
        console.log(data);
        let body = new FormData()
        data.imagen = data.imagen !== null && (body.append('imagen', data.imagen))
        data.nombre = data.nombre !== '' && (body.append('nombre', data.nombre))
        data.apellido = data.apellido !== '' && (body.append('apellido', data.apellido))
        data.numero = data.numero !== '' && (body.append('numero', data.numero))
        data.correo = data.correo !== '' && (body.append('correo', data.correo))

		try {
            console.log(body)
			const url = "http://localhost:3000/create-potions"
			const { data: res } = await axios.post(url, body);
            console.log(res)
            openAlert()
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 404 &&
				error.response.status <= 500
			) {
				setError(error.response.data.messageError);
			}
		}
        }
        
	};
    return(
        <div className="flex flex-col justify-center m-10 mb-80 sm:mb-10  ...">
                <Modal isOpen={isOpenAlert} onClose={closeAlert}>
                    <h2>SU CITA HA SIDO SOLICITADA CON EXITO</h2>
                </Modal>
                <div className='h-[31rem] m-8 grid sm:grid-cols-5 rounded-lg shadow-md shadow-black/20'>
                <div className='col-span-2 flex flex-col bg-white mt-4 rounded-l-lg'>
                    <h1 className="text-2xl self-center text-white mb-3 pb-20">MIRA EL CLIMA DE HOY</h1>
                        {
                            clima.name?
                            <div className="col-span-3 bg-white flex flex-col justify-center items-center rounded-r-lg h-60">
                                <p>{clima.name}</p>
                                <div className="grid grid-cols-2 justify-items-center mt-10">
                                    <h1>{clima.main.temp}</h1>
                                    <h1 className="su"><FiSun className="w-32 h-32 hover:animate-spin"/></h1>
                                </div>
                                <div className="w-full h-60 text-center mt-4 grid grid-cols-2 mb-20 sm:mb-2 rounded-b-lg">
                                    <h1>Temperatura min {clima.main.temp_min}</h1>
                                    <h1>Temperatura max {clima.main.temp_max}</h1>
                                </div>
                            </div>:
                            <div className="col-span-3 bg-white flex flex-col justify-center items-center rounded-r-lg h-60">
                                <h1 className='text-center text-slate-300'><FaSpinner className='w-32 h-32 animate-spin'/></h1>
                            </div>
                        }
                </div>
                <div className='col-span-3 bg-pink-100  flex flex-col justify-center items-center rounded-r-lg'>
                    <form className="flex flex-col sm:p-2 rounded-lg ..." onSubmit={handleSubmit}>
                        <div className="flex justify-center m-2 ...">
                            <h1 className="text-xl font-semibold ...">AGENDA TU CITA</h1>
                        </div>
                        <div className="items-center justify-center text-center">
                        <h1>Si tienes un cupon de descuento agregalo aqui</h1>
                            <input 
                            type="file" 
                            name="imagen"
                            onChange={handleImg}
                            className="m-4"
                            />
                        </div>
                        <div className="m-4 gap-6 ...">
                            <input
                                    type="text"
                                    placeholder="Nombre"
                                    name="nombre"
                                    onChange={handleChange}
                                    value={data.nombre}
                                    className="h-10 mr-2 bg-slate-100 rounded-lg ..."
                                />
                            <input
                                type="text"
                                placeholder="Apellido"
                                name="apellido"
                                onChange={handleChange}
                                value={data.apellido}
                                className="h-10 ml-2 bg-slate-100 rounded-lg ..."
                            />
                        </div>
                        <input
                            type="text"
                            placeholder="numero"
                            name="numero"
                            onChange={handleChange}
                            value={data.numero}
                            
                            className="h-10 mx-4 mb-8 bg-slate-100 rounded-lg ..."
                        />
                        <input
                            type="text"
                            placeholder="correo"
                            name="correo"
                            onChange={handleChange}
                            value={data.correo}
                            className="h-10 mx-4 mb-8 bg-slate-100 rounded-lg ..."
                        />
                        {error && <div className='w-98 p-4 my-2 text-sm text-white bg-red-500 text-center rounded-lg justify-center text-center'>{error}</div>}
                        <button type="submit" className="m-4 bg-white h-10 rounded-full text-white font-semibold text-white-500 ...">
                            Agendar
                        </button>
                    </form>
                </div>
        </div>
    </div>
    )
}