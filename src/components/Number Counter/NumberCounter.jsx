import CountUp from "react-countup";

const NumberCounter = () => {
  return (
    <>
      <div className="bg-secondary text-white py-12">
       <div className="container grid grid-cols-1 md:grid-cols-4">
         <div className="flex flex-col justify-center items-center">
            <p className="text-3xl font-semibold">
                <CountUp
                    start={0}
                    end={898}
                    duration={3}
                    enableScrollSpy={true}
                    scrollSpyOnce={true}
                />
            </p>
            <p>Expert tutors</p>
         </div>
         <div className="flex flex-col justify-center items-center">
            <p className="text-3xl font-semibold">
            <CountUp
                    end={20000}
                    separator=","
                    suffix="+"
                    duration={3}
                    enableScrollSpy={true}
                    scrollSpyOnce={true}
                />
            </p>
            <p>Hours content</p>
         </div>
         <div className="flex flex-col justify-center items-center">
            <p className="text-3xl font-semibold">
            <CountUp
                    start={0}
                    end={298}
                    duration={3}
                    enableScrollSpy={true}
                    scrollSpyOnce={true}
                />
            </p>
            <p>Subject and courses</p>
         </div>
         <div className="flex flex-col justify-center items-center">
            <p className="text-3xl font-semibold">
            <CountUp
                    end={72878}
                    separator=","
                    suffix="+"
                    duration={3}
                    enableScrollSpy={true}
                    scrollSpyOnce={true}
                /></p>
            <p>Active students</p>
         </div>
       </div>
      </div>
    </>
  )
}

export default NumberCounter
