

function Student(props){
    return (
        <div className="card">
            <img src="1.jpg" width="110px" alt="" />
            <h5>{props.name}</h5>
            <h6>{props.post}</h6>
            <h6><small>@{props.company}</small></h6>
      </div>
    )
}

function StudentList(){
    return (
        <div className='student'>
        <h4> Student Achivement</h4>
        <Student name="Sumant Kumar" post="React Developer" company="Meta"/>
        <Student name="Johnson " post="Firebase Developer" company="Google"/>
       
       </div>
    )
}

export default StudentList;