import Course from "./Course";
import img1 from '../image/1.jpg'
import img2 from '../image/2.jpg'
import img3 from '../image/3.jpg'
import img4 from '../image/4.jpg'
import img5 from '../image/5.jpg'

const CourseList = () => {
    return (
        <div className='course-name'>

        
        <h4> Our Courses</h4>
        <Course title="Python and Django" duration="3 Months" img={img1}/>
        <Course title="Php and Mysql" duration="6 Months" img={img2}/>
        <Course title="Data Science" duration="8 Months" img={img3}/>
        <Course title="Data structure and alogo" duration="2 Months" img={img4}/>
    
       
       


      </div>
    )
}

export default CourseList;