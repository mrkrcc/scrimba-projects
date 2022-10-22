import { faAirbnb } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Navbar(){
    return(
        <div className="navbar shadow rounded-top">
            <div className="navbar-brand px-4 text-danger d-flex align-items-center">
                <FontAwesomeIcon icon={faAirbnb} color="#red" className="fa-2x"/>
                <span className="px-2 font-weight-bold">airbnb</span>
            </div>
        </div>
    )
}