import React,{useState,createContext} from 'react';

// create context
export const SlidebarContext = createContext()


const SidebarProvider = ({children}) => {
    // slidebar state
    const [isOpen,setIsOpen] = useState(false)
    const handleClose = ()=>{
        setIsOpen(false)
    }
    
    return (
        <SlidebarContext.Provider value={{isOpen,setIsOpen,handleClose}}>{children}</SlidebarContext.Provider>
    );
};

export default SidebarProvider;