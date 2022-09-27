import Navbar from "./Navbar";
import ProjectsSection from "./Projects-section";
import Typed from "react-typed"
import About from "./AboutPage";
import pp from "./assets/profile-pic.png";



const Home = () => {
    return ( 
<div className="relative ">
    <div className="darken"></div>
    <div className="bg-hero-mobile lg:bg-hero-pc background z-[1]"></div>
    <div className="h-screen relative  z-[3]">
    
<Navbar />
{/*Intro page */}
<section className=" flex flex-col justify-start mt-2 items-center px-5">
    
    <div className="flex flex-col md:flex-row gap-8 lg:gap-36 lg:jusitfy-center  items-center">
<div>   
    <img src={pp} alt="Profile-pic" className="w-[90%] my-0 mx-auto"/>
</div>
<div className="flex flex-col gap-5 items-center">
<div>
    <h1 className="text-3xl text-white font-semibold">Hi! Im Funsho Ajayi</h1>
</div>
{/*Text animation */}
<div className="text-anim">
<Typed
      strings={[
            "I'm a Software Developer",
            "I'm a React Developer",
            "I use code to solve Problems"
          ]}
          typeSpeed={100}
          backSpeed={80}
          loop
        />


</div>

{/*Download cv */}
<div className="flex">
<button  className="flex items-center justify-center py-2 bg-white text-black text-2xl rounded-3xl px-5">Download CV  
<span className="material-icons-outlined">
file_download
</span>
</button>

</div>
</div>

</div>
<button className="flex items-center py-2 absolute bottom-5 text-xl">See my works below 
<span className="material-icons-outlined animate-bounce">
arrow_downward
</span>
</button>

</section>
</div>
<div className="z-[4]">
{/*projects section */}
<ProjectsSection />

{/*About section */}
<About />

<section className="bg-[#08021e] text-white h-[50vh] p-10 flex flex-col justify-center items-center gap-5" id="Contact"> 
<h1 className="text-3xl font-semibold">Socials</h1>

<div className="flex gap-10">
    <i className="fa fa-facebook"></i>
    <i className="fa fa-instagram"></i>
    <i className="fa fa-github"></i>
    <i className="fa fa-twitter"></i>
</div>
<div className="flex gap-2">
<span className="material-icons-outlined">
phone
</span>
<a href="tel:080-7855-9693">+ 80-7855-9693</a>
</div>

</section>
</div>
</div>

     );
}
 
export default Home;