import reactLogo from "./images/react-icon-large.png"

export default function Main(){
    return(
        <div className="container-bg p-5" style={{backgroundColor: "#282D35", backgroundImage: "url(" + reactLogo + ")",
        backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: "right center" }}>
            <div className="container" style={{color: "white"}}>
                <h1>Fun facts about React</h1>
                <ul className="h5" >
                    <li className="py-1">Was first released in 2013</li>
                    <li className="py-1">Was originally created by jordan by Jordan Walke</li>
                    <li className="py-1">Has well over 100K stars on GitHub</li>
                    <li className="py-1">Is maintained by Facebook</li>
                    <li className="py-1">Powers thousands of enterprise apps, including mobile apps</li>
                </ul>
            </div>
        </div>
    )
}