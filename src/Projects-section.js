import { Link } from "react-router-dom";
import img1 from "./assets/img1.png";
import img2 from "./assets/img2.png";

const ProjectsSection = () => {
    return ( <div className=" flex justify-center mt-10" id="Projects">
{/*projects section */}

<div className="flex flex-col gap-10 items-center px-3">

  

<div className="flex flex-col lg:flex-row gap-10 items-center px-3">
<Link to="/lpppage"> 
  <div className=" border-2 relative">
  <div className="darken1"></div>
  <div>
    <img src={img1} alt="img" className="w-full object-contain vertical border-none max-w-[600px]" />
  </div>
    <h1 className="absolute top-0 z-[2] left-0 p-5 text-2xl font-semibold">Landing pages projects</h1>
    </div>
</Link>


<Link to="/lpppage"> 
  <div className=" border-2 relative">
  <div className="darken1"></div>
  <div>
    <img src={img2} alt="img" className="w-full object-contain vertical border-none  max-w-[600px]" />
  </div>
    <h1 className="absolute top-0 z-[2] left-0 p-5 text-2xl font-semibold">Web Application projects</h1>
    </div>
</Link>
</div>

<div className="flex flex-col lg:flex-row gap-10 items-center px-3">
<Link to="/apppage"> 
  <div className=" border-2 relative">
  <div className="darken1"></div>
  <div>
    <img src={img1} alt="img" className="w-full object-contain vertical border-none max-w-[600px]" />
  </div>
    <h1 className="absolute top-0 z-[2] left-0 p-5 text-2xl font-semibold">Clone projects</h1>
    </div>
</Link>



<Link to="/apppage"> 
  <div className=" border-2 relative">
  <div className="darken1"></div>
  <div>
    <img src={img1} alt="img" className="w-full object-contain vertical border-none max-w-[600px]" />
  </div>
    <h1 className="absolute top-0 z-[2] left-0 p-5 text-2xl font-semibold">Landing pages projects</h1>
    </div>
</Link>
</div>



</div>



    </div> );
}
 
export default ProjectsSection

