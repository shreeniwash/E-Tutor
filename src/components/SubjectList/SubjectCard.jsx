import {motion} from "framer-motion";
import {FaComputer ,FaBook} from "react-icons/fa6"



const subjectList = [
    {
      id: 1,
      name: "Engineering",
      icon: <FaComputer />,
      color: "#0063ff",
      delay: 0.2,
    },
    {
      id: 2,
      name: "English",
      icon: <FaBook />,
      color: "#00c986",
      delay: 0.3,
    },
    {
      id: 3,
      name: "Programming",
      icon: <FaComputer />,
      color: "#922aee",
      delay: 0.4,
    },
    {
      id: 4,
      name: "Science",
      icon: <FaBook />,
      color: "#ea7516",
      delay: 0.5,
    },
    {
      id: 5,
      name: "History",
      icon: <FaBook />,
      color: "#075267",
      delay: 0.6,
    },
    {
      id: 6,
      name: "Psychology",
      icon: <FaBook />,
      color: "#986d1d",
      delay: 0.7,
    },
    {
      id: 7,
      name: "Web design",
      icon: <FaComputer />,
      color: "#b93838",
      delay: 0.8,
    },
    {
      id: 8,
      name: "See all",
      icon: <FaBook />,
      color: "#464646",
      delay: 0.9,
    },
  ];
const SubjectCard = () => {
  return (
    <>
      <div className="container py-14 md:py-24">
        {/* header section */}
        
            <div className="space-y-4 p-6 max-w-[600px] text-center mx-auto mb-5 ">
                <h1 className="uppercase font-semibold text-orange-600">Our tutor subjects</h1>
                <p className="font-semibold text-3xl">Find Online Tutor in Any Subject</p>
            </div>
        
        {/* card section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {subjectList.map((subject)=>{
                return (
                    <motion.div
                     key={subject.id}
                    initial={{ opacity:0, x:-200}}
                    whileInView={{opacity:1, x:0}}
                    transition={{type:"spring", stiffness:100,delay: subject.delay}}
                     className="border rounded-xl border-secondary/20 flex  p-4 justify-start items-center gap-4 hover:scale-110 hover:shadow-xl duration-300 cursor-pointer ">
                        <div style={{ color:subject.color,  backgroundColor:subject.color + "20"}} className="w-10 h-10 flex justify-center items-center rounded-md ">{subject.icon}</div>
                        <p>{subject.name}</p>
                    </motion.div>
                )
            })}
        </div>
      </div>
    </>
  )
}

export default SubjectCard
