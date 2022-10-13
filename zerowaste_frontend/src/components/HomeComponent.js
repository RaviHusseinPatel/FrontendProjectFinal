import { FaCloudMoonRain } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";





const HomeComponent = () =>{
    return(
        <>  
        <div className="aboutContact">
        <h3 className="About-us" href="www.youtube.com">Find us
            
        <SiGooglemaps size={45}
                       onMouseOver={({target})=>target.style.color="white"}
                       onMouseOut={({target})=>target.style.color="black"}
                       />
        </h3>   

        



        <h3 className="Contact-Info">Contact us
        <FaPhoneAlt size={45}
                       onMouseOver={({target})=>target.style.color="white"}
                       onMouseOut={({target})=>target.style.color="black"}/>
                       
        </h3>
        </div>
       

        </>
    )
}

export default HomeComponent;