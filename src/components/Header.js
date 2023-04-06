import React, {useContext, useEffect, useState} from 'react';
// slidebar context
import { SlidebarContext } from '../contexts/SidebarContext';

// cart context
import { CartContext } from '../contexts/CartContext';



// import icons
import {BsBag} from 'react-icons/bs';

// import link
import { Link } from 'react-router-dom';

// import logo
import Logo from '../img/logo.svg'

const Header = () => {
    const [isActive, setIsActive] = useState(false)
    const {isOpen,setIsOpen} = useContext(SlidebarContext);
    const {itemAmount} = useContext(CartContext)
    // event Listener
    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            window.scrollY > 60 ? setIsActive(true) : setIsActive(false)
        })
    })
    return (
       <header className={`${isActive? 'bg-white py-4 shadow-md ' : 'bg-none py-6'} fixed w-full z-10 transition-all`}>
            <div className='container mx-auto flex items-center justify-between h-full'>
                {/* logo */}
                <Link to={'/'}>
                    <div>
                        <img className='w-[40px]' src={Logo} alt="" />
                    </div>
                </Link>
                {/* cart */}
                <div className='cursor-pointer flex relative' onClick={() => setIsOpen(!isOpen)}>
                    <BsBag className='text-2xl'></BsBag>
                    <div className='bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] rounded-full text-white flex justify-center items-center'>{itemAmount}
                    </div>
                </div>
            </div>
       </header>
    );
};

export default Header;