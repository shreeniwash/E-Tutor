import  Slider  from "react-slick"


const TestimonialsData = [
    {
      id: 1,
      name: "John Doe",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
      img: "https://picsum.photos/101/101",
      delay: 0.2,
    },
    {
      id: 2,
      name: "Steve Smith",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
      img: "https://picsum.photos/102/102",
      delay: 0.5,
    },
    {
      id: 3,
      name: "Kristen",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
      img: "https://picsum.photos/104/104",
      delay: 0.8,
    },
    {
      id: 5,
      name: "Ariana",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
      img: "https://picsum.photos/103/103",
      delay: 1.1,
    },
  ];


const Testomonial = () => {
  const setting = {
    dots: true,
    arrow: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="py-14 mb-10">
        <div className="container">
            {/* header section */}
            <div className="text-center space-y-4 p-4 max-w-[600px] mx-auto mb-6">
                <h1 className="font-semibold uppercase text-orange-600">our Testimonials</h1>
                <p className="text-3xl font-semibold">What OUr Students Say About Us</p>
            </div>
            {/* testomonials cards section */}
            <div className="">
                <Slider {...setting}>
                  {TestimonialsData.map((item)=>{
                    return (
                      <div key={item.id} >
                        <div className="flex flex-col bg-secondary/10 p-8 mx-4 gap-4 shadow-xl rounded-xl">
                          {/* upper section */}
                          <div className="flex  justify-start items-center gap-5 ">
                            <img src={item.img} alt="" className="w-16 h-16 rounded-full"/>
                          </div>
                          <div>
                            <p className="text-xl text-black/80 font-bold ">{item.name}</p>
                            <p>{item.name}</p>
                          </div>
                          {/* lower section */}
                          <div className="py-6 space-y-4">
                            <p className="text-sm text-gray-500">{item.text}</p>
                            <p>⭐⭐⭐⭐⭐</p>
                          </div>
                        </div>
                      </div>
                    )
                  })}
               </Slider>
            </div>
        </div>

      </div>
    </>
  )
}

export default Testomonial
