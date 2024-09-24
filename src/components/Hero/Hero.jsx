import HeroImg from "../../assets/hero.png"
import {FaPlay} from "react-icons/fa";
import {motion} from "framer-motion";
import { SlideRight } from "../../utility/animation";
const Hero = () => {
  return (
    <>
   <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative ">
    {/* brand information */}
    <div className="flex flex-col justify-center py-14 md:py-0 md:pr-16 xl:pr-40">
      <div className="text-center md:text-left space-y-4">
        <motion.p
        variants={SlideRight(0.4)}
        initial="hidden"
        animate="visible"
         className="text-orange-600 uppercase font-semibold">100% Satisfaction Guarantee</motion.p>
        <motion.h1
        variants={SlideRight(0.6)}
        initial="hidden"
        animate="visible"
         className="text-5xl font-semibold !leading-tight  ">Find Your Perfect <span className="text-primary">Tutor</span></motion.h1>
        <motion.p
         variants={SlideRight(0.8)}
        initial="hidden"
        animate="visible"
        >We help you find perfect tutor for 1-on-1 lessons. It is completely free and private</motion.p>
        {/* button section */}
       <motion.div
        variants={SlideRight(1)}
        initial="hidden"
        animate="visible"
        className="flex justify-center items-center gap-8 md:justify-start mt-8">
       <button className="primary-btn">Get Started</button>
       <button className="flex justify-end items-center font-semibold gap-2"><span className="w-10 h-10 bg-secondary/15 flex justify-center items-center rounded-full ">
        <FaPlay className="text-secondary"/>
       </span> See how it works</button>
       </motion.div>
      </div>
    </div>
    {/* image */}
    <div className="flex justify-center items-center">
      <motion.img
      initial={{ opacity:0, x:200}}
      animate={{ opacity:1, x:0}}
      transition={{type: "spring", stiffness: 100, delay:0.2}}
       src={HeroImg} alt="" className="w-[350px] md:w-[550px] xl:w-[700px]"/>
    </div>
   </div>
    </>
  )
}

export default Hero;
