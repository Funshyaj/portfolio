import Navbar from "./Navbar";
import ProjectsSection from "./Projects-section";
import Typed from "react-typed"

const Home = () => {
    return ( 
<div>
<Navbar />
{/*Intro page */}
<section className="h-[95vh] flex flex-col justify-center items-center px-5 relative">
    
    <div className="flex flex-col lg:flex-row gap-16 lg:gap-40  items-center">
<div>   
    <img src="" alt="Profile-pic" />
</div>
<div className="flex flex-col gap-10 items-center">
<div>
    <h1>Hi! Im Funsho Ajayi</h1>
</div>
{/*Text animation */}
<div className="text-anim">
<Typed
      strings={[
            "I'm a Software Developer",
            "I am a react developer",
          ]}
          typeSpeed={50}
          backSpeed={40}
          loop
        />


</div>

{/*Download cv */}
<div className="flex ">
<button  className="flex items-center justify-center py-2 ">Download CV 
<span className="material-icons-outlined">
file_download
</span>
</button>

</div>
</div>

</div>
<button className="flex items-center py-2 absolute bottom-10">See my works below 
<span className="material-icons-outlined animate-bounce">
arrow_downward
</span>
</button>

</section>

{/*projects section */}
<ProjectsSection />

{/*About section */}
<section className=" py-3 px-5" id="About">
    <div className="py-5 px-1 flex flex-col items-center">
  <h1 className="text-3xl font-semibold">About me</h1>    
  <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, repellendus incidunt? Pariatur veritatis earum autem porro alias, cumque ducimus dolorem, id error voluptatem praesentium eligendi reprehenderit harum possimus nisi libero!</p>  
    </div>


<div >
<h2 className="text-xl font-semibold">Education</h2>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta architecto numquam, debitis velit quidem odio, dolorem amet fugiat culpa nulla aliquam labore impedit, accusantium explicabo laudantium sunt quia deserunt voluptatem.</p>
<p></p>
</div>


<div>
<h2 className="text-xl font-semibold">Certifications</h2>
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia architecto, aut fugit quasi nam voluptatibus dolorum autem laborum porro tempora facere incidunt eaque dolore iste amet enim. Sapiente, sequi libero?</p>
<p></p>
</div>


<div>
<h2>Skills</h2>
<div className="flex">
    <img src="" alt="html" />
    <img src="" alt="css" />
    <img src="" alt="javascript" />
    <img src="" alt="react" />
    <img src="" alt="tailwind" />
</div>
<div>

</div>
</div>


</section>


<section className="bg-black text-white h-[50vh] p-10 flex flex-col justify-center items-center gap-5" id="Contact"> 
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

     );
}
 
export default Home;