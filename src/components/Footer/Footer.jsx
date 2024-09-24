import { FaFacebook, FaInstagram, FaLinkedin} from "react-icons/fa";
import { HiLocationMarker} from "react-icons/hi";
import { MdComputer } from "react-icons/md";
import FooterImg from "../../assets/footer.jpg"



const FooterBg={
  backgroundImage: `url(${FooterImg})`,
  backgroundRepeat:"no-repeat",
  backgroundSize:"cover",
  backgroundPosition:"bottom center",
}
const Footer = () => {
  return (
    <>
     <div style={FooterBg} className="rounded-t-3xl" >
     <div className="bg-primary/5">
     <div className="container">
      <div className="grid md:grid-cols-4 md:gap-4 ">
        {/* brand info section */}
        <div className="flex flex-col justify-center py-7 ">
          <div className="flex justify-start items-center gap-5 mb-5">
            <MdComputer className="text-3xl text-secondary "/>
            <p className="text-2xl font-bold uppercase">E-Tutor</p>
          </div>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab placeat quaerat doloribus odit perferendis autem blanditiis, nihil pariatur iusto accusamus.</p>
          <div className="flex justify-start items-center py-5 gap-3">
            <a href="#" className="hover:text-secondary duration-200">
            <HiLocationMarker className="text-3xl"/>
             </a>
             <a href="#" className="hover:text-secondary duration-200">
            <FaInstagram className="text-3xl"/>
             </a>
             <a href="#" className="hover:text-secondary duration-200">
            <FaFacebook className="text-3xl"/>
             </a>
             <a href="#" className="hover:text-secondary duration-200">
            <FaLinkedin className="text-3xl"/>
             </a>
          </div>
        </div>
        {/* footer links  */}
        <div className="grid grid-cols-2 md:grid-cols-3 md:col-span-3 md:ml-14">
        <div className="py-8 px-4">
         <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-5">Importants Links</h1>
         <ul className="flex flex-col gap-3 ">
      <li>
        <a href="#" className="hover:text-secondary duration-200">
          Home
        </a>
      </li>
      <li>
        <a href="#" className="hover:text-secondary duration-200">
          About
        </a>
      </li>
      <li>
        <a href="#" className="hover:text-secondary duration-200">
          Services
        </a>
      </li>
      <li>
        <a href="#" className="hover:text-secondary duration-200">
          Login
        </a>
      </li>
     </ul>
        </div>
         
        <div className="py-8 px-4">
         <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-5">Company Links</h1>
         <ul className="flex flex-col gap-3 ">
      <li>
        <a href="#" className="hover:text-secondary duration-200">
          Our Services
        </a>
      </li>
      <li>
        <a href="#" className="hover:text-secondary duration-200">
          Privacy Policy
        </a>
      </li>
      <li>
        <a href="#" className="hover:text-secondary duration-200">
          Contact
        </a>
      </li>
     </ul>
        </div>



        <div className="py-8 px-4">
         <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-5">Resources</h1>
         <ul className="flex flex-col gap-3 ">
      <li>
        <a href="#" className="hover:text-secondary duration-200">
          Home
        </a>
      </li>
      <li>
        <a href="#" className="hover:text-secondary duration-200">
          About
        </a>
      </li>
      <li>
        <a href="#" className="hover:text-secondary duration-200">
          Services
        </a>
      </li>
      <li>
        <a href="#" className="hover:text-secondary duration-200">
          Login
        </a>
      </li>
     </ul>
        </div>


        </div>
      </div>

       {/* copyright section  */}
       <div className="mt-8">
          <div className="text-center py-6 border-t-2 border-gray-800/10">
            <span>&copyright 2024 The Sky Technology.</span>
          </div>
        </div>
     </div>
     </div>
     </div> 
    </>
  )
}

export default Footer
