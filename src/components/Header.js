import React, {useContext} from 'react';
// slidebar context
import { SlidebarContext } from '../contexts/SidebarContext';
// import icons
import {BsBag} from 'react-icons/bs';

const Header = () => {
    const {isOpen,setIsOpen} = useContext(SlidebarContext);
    return (
       <header className='bg-pink-200'>
        <div>Header</div>
        <div className='cursor-pointer flex relative' onClick={() => setIsOpen(!isOpen)}><BsBag className='text-2xl'></BsBag></div>
       </header>
    );
};

export default Header;