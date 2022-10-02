import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'

export default function Navbar(){
    return(
        <nav className="navbar rounded-top" style={{backgroundColor: "#21222A"}}>
            <div className="d-flex align-items-center p-3">
                <a href="https://reactjs.org/" target="_blank"><FontAwesomeIcon icon={faReact} color="#61DAFB" className="fa-3x"/></a>
                <h1 className='px-1' style={{color: "#61DAFB"}}>ReactFacts</h1>
            </div>
            <h5 className='px-3' style={{color: "white"}}>React Course - Project 1</h5>
        </nav>
    )
}