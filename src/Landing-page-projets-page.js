import { Link } from "react-router-dom";
import { useState } from "react";
import img2 from "./assets/img2.png";



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
{ modal && <div className="fixed top-0 left-0 right-0 bottom-0 bg-black overflow-y-scroll z-[5]">
   <nav className="flex pt-4  px-4 justify-start" >
<span className="material-icons-outlined text-4xl text-white" onClick={()=>setModal(!modal)}>
arrow_back
</span>
</nav>  

<div>
    <h2>Perkyscent store landing page</h2>
    <h4>Technologies used</h4>
    <p>Html, css, Vanilla Javascript</p>
</div>

<button className="bg-white text-black px-3 py-1 text-lg font-semibold rounded-[5px] flex justify-center">Live preview</button>
    <div>
    <h2>Pc</h2>
    <img src={img2} alt="img" className="w-full object-contain vertical border-none max-w-[600px]" />
    <img src={img2} alt="img" className="w-full object-contain vertical border-none max-w-[600px]" />
    </div>

    <div>
    <h2>mobile</h2>
    <img src={img2} alt="img" className="w-full object-contain vertical border-none max-w-[600px]" />
    <img src={img2} alt="img" className="w-full object-contain vertical border-none max-w-[600px]" />
    </div>

    <div>
    <h2>tablet</h2>
    <img src={img2} alt="img" className="w-full object-contain vertical border-none max-w-[600px]" />
    <img src={img2} alt="img" className="w-full object-contain vertical border-none max-w-[600px]" />
    </div>
    
    
    
    </div>}


<div className="mt-5 flex justify-around px-2 gap-5">

  <div className=" border-2 relative  rounded" onClick={()=>setModal(!modal)}>
  <div className="darken1"></div>
  <div>
    <img src={img2} alt="img" className="w-full object-contain vertical border-none max-w-[600px]" />
  </div>
    <p className="absolute top-0 z-[2] left-0 pt-2 pl-2 md:pt-5 md:pl-5 md:text-2xl text-lg font-semibold">Landing pages projects</p>
    </div>


   

    <div className=" border-2 relative rounded">
  <div className="darken1"></div>
  <div>
    <img src={img2} alt="img" className="w-full object-contain vertical border-none max-w-[600px]" />
  </div>
    <p className="absolute top-0 z-[2] left-0 pt-2 pl-2 md:pt-5 md:pl-5 md:text-2xl text-lg font-semibold">Landing pages projects</p>
    </div>

</div>

<div className="mt-5 flex justify-around px-2 gap-5">

  <div className=" border-2 relative  rounded">
  <div className="darken1"></div>
  <div>
    <img src={img2} alt="img" className="w-full object-contain vertical border-none max-w-[600px]" />
  </div>
    <p className="absolute top-0 z-[2] left-0 pt-2 pl-2 md:pt-5 md:pl-5 md:text-2xl text-lg font-semibold">Landing pages projects</p>
    </div>


   

    <div className=" border-2 relative rounded">
  <div className="darken1"></div>
  <div>
    <img src={img2} alt="img" className="w-full object-contain vertical border-none max-w-[600px]" />
  </div>
    <h3 className="absolute top-0 z-[2] left-0 pt-2 pl-2 md:pt-5 md:pl-5 md:text-2xl text-lg font-semibold">Landing pages projects</h3>
    </div>

</div>

</div>

    </div> );
}
 
export default LppPage;