import {motion} from "framer-motion";
import {SlideUp} from "../../utility/animation"


const Banner = ({image, title, subtitle,link, tag, reverse}) => {
  return (
    <>
      <div className="bg-[#f9fafc] pb-12">
        <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 ">
                {/* banner image section */}
                <div className={`flex justify-start items-center ${reverse && "md:order-last md:justify-end"}`}>
                    <motion.img
                    initial={{ opacity:0, scale:0.5}}
                    whileInView={{ opacity:1, scale:1}}
                    transition={{ type: "spring", stiffness:100, delay:0.2}}
                     src={image} alt="" className="w-[400px] h-full object-cover"/>
                </div>
                {/* banner text section */}
                <div className="flex flex-col justify-center text-center md:text-left lg:w-[400px] space-y-4">
                    <motion.p
                    variants={SlideUp(0.5)}
                    initial="hidden"
                    whileInView={"visible"}
                     className="text-sm text-orange-600 font-semibold capitalize">{tag}</motion.p>
                    <motion.p
                    variants={SlideUp(0.7)}
                    initial="hidden"
                    whileInView={"visible"}
                     className="text-xl lg:text-2xl font-semibold capitalize">{title}</motion.p>
                    <motion.p
                    variants={SlideUp(0.9)}
                    initial="hidden"
                    whileInView={"visible"}
                     className="text-sm text-slate-600">{subtitle}</motion.p>
                    <div className="flex justify-center md:justify-start">
                        <button className="primary-btn mt-5">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Banner
