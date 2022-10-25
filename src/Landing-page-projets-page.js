import { Link } from "react-router-dom";
import { useState } from "react";
import img1 from "./assets/img1.jpeg";
import img2 from "./assets/img2.jpg";



const LppPage = () => {
const [modal, setModal] = useState(false)
    
    
    
    
    
    
    return ( <div>
<header className="bg-image h-[60vh] relative bg-no-repeat bg-cover bg-top" >
    <div className="darken3"></div>
    <header className="flex py-0  px-4 justify-start z-[2] absolute top-0">
<Link to="/"><span className="material-icons-outlined text-4xl  text-black">
arrow_back
</span></Link>

</header>

<hr className="absolute top-20 h-10 z-[5]"/>


<div className="flex justify-center flex-col p-3 text-left absolute bottom-0 z-[1]">
<h2 className="text-3xl font-semibold">Landing Page Projects</h2>
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quos nesciunt sapiente dicta est quam sequi sint porro possimus vitae beatae voluptate, consequuntur tenetur iste facere. Sed illo ex reiciendis.</p>
</div>
</header>  
<div> 
    
    {/*Modals for each page*/}
{ modal && <div className="fixed top-0 left-0 right-0 bottom-0 bg-black">
   <nav className="flex py-0  px-4 justify-start" >
<span className="material-icons-outlined text-4xl text-white" onClick={()=>setModal(!modal)}>
arrow_back
</span>
</nav>  
    </div>}


<div className="mt-5 flex justify-between px-2">

  <div className=" border-2 relative">
  <div className="darken1"></div>
  <div>
    <img src={img2} alt="img" className="w-full object-contain vertical border-none max-w-[600px]" />
  </div>
    <h1 className="absolute top-0 z-[2] left-0 p-5 text-2xl font-semibold">Landing pages projects</h1>
    </div>


   

    <div className=" border-2 relative">
  <div className="darken1"></div>
  <div>
    <img src={img2} alt="img" className="w-full object-contain vertical border-none max-w-[600px]" />
  </div>
    <h1 className="absolute top-0 z-[2] left-0 p-5 text-2xl font-semibold">Landing pages projects</h1>
    </div>

</div>

<div className="mt-5 flex justify-between px-2">
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
 
export default LppPage;