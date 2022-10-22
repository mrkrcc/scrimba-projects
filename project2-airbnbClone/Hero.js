import photo from "./images/hero.png"

export default function Hero(){
    return(
        <div className="container">
            <section className="d-flex flex-column p-3 mw-75 align-align-content-center">
                <img className="img-fluid align-self-center" src={photo} />
                <h1 className="mb-2">Online Experiences</h1>
                <p className="mt-0">Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.</p>
            </section>
        </div>
    )
}