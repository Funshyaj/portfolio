import { Link } from "react-router-dom";

const ProjectsSection = () => {
    return ( <div className="h-[400px] flex items-center" id="Projects">
{/*projects section */}

<div className="flex flex-col lg:flex-row gap-5 items-center px-3">

  
<div className="flex gap-5 ">

<Link to="/lpppage"> 
  <div className="h-44 w-36 border-2">
    <h1>Landing pages projects</h1>
    </div>
</Link>

<Link to="/apppage"> 
  <div className="h-44 w-36 border-2">
    <h1>Landing pages projects</h1>
    </div>
</Link>
</div>

 
<div className="flex gap-5 ">
  <div className="h-44 w-36 border-2">
    <h1>Landing pages projects</h1>
    </div>

    <div className="h-44 w-36 border-2">
    <h1>Landing pages projects</h1>
    </div>
</div>


</div>



    </div> );
}
 
export default ProjectsSection

