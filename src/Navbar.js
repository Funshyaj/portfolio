import { Link } from "react-router-dom";

const Navbar = () => {
    return ( <div>
<ul className="bg-transparent text-white flex gap-10 px-5 py-3 justify-end shadow-2xl">
    <li className="text-xl"><Link to="/about">About</Link></li>
    <li className="text-xl"><a href="#Contact">Contact</a></li>
    <li className="text-xl"><a href="#Projects">Projects</a></li>
</ul>

        
    </div> );
}
 
export default Navbar;