import { Link } from "react-router-dom";
import logo from "./logo.png"


export default function Nav(){	
	return (
			<nav className="flex-col sm:flex-row w-full h-auto flex items-center justify-between bg-white">
				<Link to={'/'} className="text-2xl font-bold mt-6 sm:mt-0 sm:ml-8 rounded-lg px-2">
					<img src={logo} alt="notFund" className="w-28" />
				</Link>
				<section className="flex flex-col sm:flex-row p-5 items-center gap-5 sm:gap-10">
					<Link to={`/cita`} className="text-1xl font-bold">
						<h1 className="l2">CITA</h1>
					</Link>
					<Link to={'/consejos'} className="text-1xl font-bold">
					<h1 className="l2">CUIDADOS</h1>
					</Link>
					<Link to={'/reco'} className="text-1xl font-bold text-blue">
					<h1 className="l2">CLIENTES</h1>
					</Link>
				</section>	
            </nav>
	);
};
