import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Card(props){
    let badgeText
    if (!props.openSpots){ 
        badgeText = "SOLD OUT"
    } else if( props.location == "Online"){
        badgeText = "ONLINE"
    }
    return(
        <div className="card border-0 px-2" style={{width: "175px", fontSize: "12px"}}>
            <img src={props.coverImg} className="card-img-top rounded-4" alt="..." style={{position: "relative"}}/>
            {badgeText && <span className='badge rounded-1 m-2 bg-light text-dark' style={{position: "absolute"}}>{badgeText}</span>}
            <div className="card-block py-2">
                <div>
                    <FontAwesomeIcon icon={props.star} color="red" />
                    <span> {props.stats.rating} <span className="text-muted">({props.stats.reviewCount}) {'\u00B7'} {props.location}</span></span>
                </div>
                <p className='py-1 m-0'>{props.title}</p> 
                <p className="fw-bold">From ${props.price} <span className="fw-normal">/ person</span></p>
            </div>
        </div>
        /* <div className="card border-0 px-3">
            <img src={katie} className="card-img-top rounded-4" alt="..."/>
            <div>
                <FontAwesomeIcon icon={faStar} color="red" />
                <span> 5.0 <span className="text-muted">(6) {'\u00B7'} USA</span></span>
            </div>
            <span>Life lessons with Katie Zaferes</span>
            <span className="fw-bold">From $136 <span className="fw-normal">/ person</span></span>
        </div> */
    )
}