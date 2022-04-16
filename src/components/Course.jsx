

export default function Course(props){
    return ( 
        <div className="course">
            <img src={props.img} width="110px" alt="" />
            <h5>{props.title} </h5>

            <div className="card-footer">Duration: {props.duration}</div>
        </div>
    )
}
