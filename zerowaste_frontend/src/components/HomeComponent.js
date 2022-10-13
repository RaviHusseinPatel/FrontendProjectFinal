import { FaCloudMoonRain } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";
import { SiInstagram } from "react-icons/si";
import { FaEnvelope } from "react-icons/fa";






const HomeComponent = () =>{
    return(
        <>  
        <div className="aboutContact">
        <a  className="About-us" href="http://www.googlemaps.com"><strong>Find us:</strong> 
            
        <SiGooglemaps size={45}
                       onMouseOver={({target})=>target.style.color="white"}
                       onMouseOut={({target})=>target.style.color="black"}
                       />
        </a>   
        {/* <a  className="About-us" href="http://www.instagram.com"> 
            
            <SiInstagram size={45}
                           onMouseOver={({target})=>target.style.color="white"}
                           onMouseOut={({target})=>target.style.color="black"}
                           />
            </a>    */}

    
        <a  className="mail" href="mailto:zerowaste@gmail.com"><strong>Contact us: </strong> 
            
        <FaEnvelope size={40}
                       onMouseOver={({target})=>target.style.color="white"}
                       onMouseOut={({target})=>target.style.color="black"}
                       />
        </a> 
        </div>
       

        </>
    )
}

export default HomeComponent;