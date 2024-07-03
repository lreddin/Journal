export default function Card(props) {
    console.log(props)
    return (
        <div>
            <div className="card">
                {props.visited && <div className="banner">Visited</div>}
                <img className="card--img" src={props.img}></img>
                <div className="card--info">
                    <div className='card--location'>
                    <i className ="fa-solid fa-location-dot"></i>
                    <p className = "card--city">{props.city}</p>
                     <a className= 'card--google'href={props.googleMapsURL}>Visit on Google</a>
                    </div>
                <h1 className='card--title'>{props.title}</h1>
                <h3 className='card--days'>Days on market: {props.daysOnMarket}</h3>
                <p  className = 'card--desc'>{props.summary}</p>  
                </div>
            </div>
            
            <hr/>
        </div>
    )
}