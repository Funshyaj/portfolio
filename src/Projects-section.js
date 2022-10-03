import { Link } from "react-router-dom";
import img1 from "./assets/img1.jpeg";

const ProjectsSection = () => {
    return ( <div className=" flex items-center mt-10" id="Projects">
{/*projects section */}

<div className="flex flex-col lg:flex-row gap-5 items-center px-3">

  


<Link to="/lpppage"> 
  <div className=" border-2 relative">
  <div className="darken1"></div>
  <div>
    <img src={img1} alt="img" className="w-full object-contain vertical border-none" />
  </div>
    <h1>Landing pages projects</h1>
    </div>
</Link>


<Link to="/lpppage"> 
  <div className=" border-2 relative">
  <div className="darken1"></div>
  <div>
    <img src={img1} alt="img" className="w-full object-contain vertical border-none" />
  </div>
    <h1>Landing pages projects</h1>
    </div>
</Link>



<Link to="/apppage"> 
  <div className=" border-2 relative">
  <div className="darken1"></div>
  <div>
    <img src={img1} alt="img" className="w-full object-contain vertical border-none" />
  </div>
    <h1>Landing pages projects</h1>
    </div>
</Link>



<Link to="/apppage"> 
  <div className=" border-2 relative">
  <div className="darken1"></div>
  <div>
    <img src={img1} alt="img" className="w-full object-contain vertical border-none" />
  </div>
    <h1>Landing pages projects</h1>
    </div>
</Link>




</div>



    </div> );
}
 
export default ProjectsSection

