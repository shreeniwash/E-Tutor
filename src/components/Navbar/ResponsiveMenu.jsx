import {motion , AnimatePresence} from "framer-motion";

const ResponsiveMenu = ({ isOpen }) => {
  return (
    <>
      <AnimatePresence mode="wait">
        {isOpen && (
            <motion.div 
            initial={{ opacity:0, y: -100}}
            animate={{ opacity: 1, y:0}}
            exit={{ opacity:0, y: -100}}
            transition={{ duration: 0.3}}
            className=" absolute top-20 left-0 w-full max-h-screen z-20 lg:hidden "
            >
                <div className="text-2xl font-semibold bg-primary  py-10 m-6 rounded-3xl">
                <ul className="flex flex-col items-center justify-center gap-8">
                    <li>Home</li>
                    <li>About</li>
                    <li>Service</li>
                    <li>Contact</li>
                </ul>

                </div>
            </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default ResponsiveMenu
