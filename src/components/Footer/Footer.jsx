import logo from './logo.png'
import iconFacebook from './facebook.png'
import iconInstagram from './instagram.png'
import iconTiktok from './tiktok.png'
import iconTwitter from './twitter.png'


const Footer = () => {

	return (
        <div className='w-full flex-col items-center mt-6 justify-center'>
        <div className="w-full text-center flex-col py-8 space-y-8 lg:py-20 lg:space-x-16 lg:flex lg:w-full lg:flex-row lg:space-y-0">
            <div className="flex-1 flex flex-col items-center justify-center">
                <div className="items-center justify-center text-center rounded-lg mb-4 bg-cover h-14 w-20" style={{ backgroundImage: `url(${logo})` }}></div>

                <div className=' text-lg font-bold'>
                    <p className='l2'>SPA BEAUTY</p>
                </div>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center">
                <div className='text-lg font-bold mb-6'>
                    <p className='l2'>Siguenos en</p>
                </div>
                <div className='flex space-x-4'>
                    <a href="#"><img src={iconFacebook} alt="facebook" className='w-8' /></a>
                    <a href="#"><img src={iconInstagram} alt="instagram" className='w-8' /></a>
                    <a href="#"><img src={iconTiktok} alt="tiktok" className='w-8' /></a>
                    <a href="#"><img src={iconTwitter} alt="twitter" className='w-8' /></a>
                </div>
            </div>
        </div>

        <div className='w-full flex flex-col items-center justify-center pb-8 text-center'>
            Copyright 2023 Spa Beauty | Todos los derechos Reservados
        </div>
        </div>
	);
};

export default Footer;
