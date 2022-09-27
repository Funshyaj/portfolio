import { Link } from "react-router-dom";
import { useState } from "react";



const LppPage = () => {
const [modal, setModal] = useState(false)
    
    
    
    
    
    
    return ( <div>
<header className="bg-red-100 h-[60vh]" >
    <nav className="flex py-0  px-4 justify-start">
<Link to="/"><span class="material-icons-outlined text-4xl">
arrow_back
</span></Link>
</nav>

<hr className="bg-black"/>
<div className="flex justify-center flex-col p-3 text-center">
<h2 className="text-3xl font-semibold">Landing Page Projects</h2>
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quos nesciunt sapiente dicta est quam sequi sint porro possimus vitae beatae voluptate, consequuntur tenetur iste facere. Sed illo ex reiciendis.</p>
</div>
</header>  
<div> 
<div className="-mt-16 flex justify-between px-2">
<div className="h-44 w-36 border-2">
    <h1>Landing pages projects</h1>
    </div>

    <div className="h-44 w-36 border-2">
    <h1>Landing pages projects</h1>
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


{/*Modals for each page*/}
{ modal && <div className="fixed top-0 left-0 right-0 bottom-0 bg-black">
    
    </div>}

</div>

    </div> );
}
 
export default LppPage;