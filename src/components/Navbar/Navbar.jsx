import {MdComputer ,MdMenu} from "react-icons/md";
import {motion} from "framer-motion";
import { NavbarMenu } from "../../mockData/data";
import { useState } from "react";
import ResponsiveMenu from "./ResponsiveMenu";

const Navbar = () => {
    const [isOpen , setIsOpen]=useState(false)
  return (
    <>
     <motion.div 
     initial={{ opacity:0}}
     animate={{ opacity:1}}
     transition={{ duration: 0.5 ,delay:0.5}}
     >
        <div className="container flex justify-between items-center py-6">
           <div className="text-2xl font-bold flex items-center gap-2 ">
           <MdComputer className="text-3xl text-secondary"/>
           <p>E-Tutor</p>
           </div>
           
           <div className="hidden lg:block">
            <ul className="flex items-center gap-6">
                {NavbarMenu.map((item)=>{
                    return(
                        <li key={item.id}  >
                         <a href={item.link} className="inline-block  text-gray-600 font-semibold text-sm xl:text-base py-1 px-2 xl:px-3 hover:text-secondary transition-all duration-300" >{item.title}</a>
                        </li>
                    )
                })}
            </ul>
           </div>

           <div className="hidden lg:block space-x-5">
            <button className="font-semibold text-gray-600">Sign in</button>
            <button className="text-white bg-secondary font-semibold px-6 py-2 rounded-full ">Register</button>
           </div>

           <div className="lg:hidden" onClick={()=> setIsOpen(!isOpen)}>
            <MdMenu className="text-4xl" />
           </div>

        </div>
     </motion.div>
     <ResponsiveMenu isOpen={isOpen}/>
    </>
  )
}

export default Navbar
