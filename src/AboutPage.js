import css from "./assets/css3-logo.png";
import html from "./assets/html5-logo.png";
import javaScript from "./assets/javascript.svg";
import tailwind from "./assets/tailwind-css.svg";
import react from "./assets/react.svg";


const About = () => {
    return ( 
     
        <div>
            
          
        <section className="py-3 px-5">
            <div className="py-5 px-1 flex flex-col items-center ">
          <h1 className="text-3xl font-semibold">About me</h1>    
          <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, repellendus incidunt? Pariatur veritatis earum autem porro alias, cumque ducimus dolorem, id error voluptatem praesentium eligendi reprehenderit harum possimus nisi libero!</p>  
            </div>
        
        <div className="flex flex-wrap justify-center">
        <div className="grow min-w-[200px] max-w-[500px] text-center flex flex-col items-center">
        <h2 className="text-xl font-semibold">Education</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta architecto numquam, debitis velit quidem odio, dolorem amet fugiat culpa nulla aliquam labore impedit, accusantium explicabo laudantium sunt quia deserunt voluptatem.</p>
        <p></p>
        </div>
        
        
        <div className="grow min-w-[200px] max-w-[500px] text-center flex flex-col items-center">
        <h2 className="text-xl font-semibold">Certifications</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia architecto, aut fugit quasi nam voluptatibus dolorum autem laborum porro tempora facere incidunt eaque dolore iste amet enim. Sapiente, sequi libero?</p>
        <p></p>
        </div>
        
        
        <div className="grow min-w-[200px] max-w-[500px]  text-center flex flex-col items-center">
        <h2 className="text-xl font-semibold">Skills</h2>
        <div className="flex gap-5">
            <div>
            <p>Html</p>
            <img className="h-14 w-10 " src={html} alt="html" />
            </div>

            <div>
            <p>Css  </p>
            <img className="h-14 w-10" src={css} alt="css" />
            </div>

            <div className="flex flex-col items-center">
            <p>JavaScript</p>
            <img className="h-14 w-10" src={javaScript} alt="Javascript" />
            </div>

            <div>
            <p>Tailwind</p>
            <img className="h-14 w-10" src={tailwind} alt="Tailwind" />
            </div>

            <div>
            <p>React</p>
            <img className="h-14 w-10" src={react} alt="react" />
            </div>
            
        </div>
        </div>

        </div>

    
        
        
        </section>
        </div>
        );
}
 
export default About;