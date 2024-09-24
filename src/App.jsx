import Hero from "./components/Hero/Hero"
import NavabarBanner from "./components/Navbar/NavabarBanner"
import Navbar from "./components/Navbar/Navbar"
import NumberCounter from "./components/Number Counter/NumberCounter"
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs"
import img1 from "./assets/banner1.png";
import img2 from "./assets/banner2.png";
import Banner from "./components/Banner/Banner"
import SubjectCard from "./components/SubjectList/SubjectCard"
import Testomonial from "./components/Testomonial/Testomonial"
import Footer from "./components/Footer/Footer"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



const Banner1={
  image:img1,
  tag:"CUSTOMIZE WITH YOUR SCHEDULE",
  title:"Personalized Professional Online Tutor on Your Schedule",
  subtitle:"Our scheduling system allows you to select based on your free time. Lorem ipsum demo text for template. Keep track of your students class and tutoring schedules, and never miss your lectures. The best online class scheduling system with easy accessibility.Lorem ipsum is a placeholder text commonly used to demonstrate the visual form",
  link:"#"

}

const Banner2={
  image:img2,
  tag:"CUSTOMIZE WITH YOUR SCHEDULE",
  title:"Talented and Qualified Tutors to Serve You for Help",
  subtitle:"Our scheduling system allows you to select based on your free time. Lorem ipsum demo text for template. Keep track of your students class and tutoring schedules, and never miss your lectures. The best online class scheduling system with easy accessibility. Lorem ipsum is a placeholder text commonly used",
  link:"#"

}


const App = () => {
  return (
   <div className="overflow-x-hidden">
   <Navbar/>
   <NavabarBanner/>
   <Hero/>
   <NumberCounter/>
   <WhyChooseUs/>
   <Banner {...Banner1}/>
   <Banner {...Banner2} reverse={true}/>
   <SubjectCard/>
   <Testomonial/>
   <Footer/>

   </div>
  )
}

export default App
