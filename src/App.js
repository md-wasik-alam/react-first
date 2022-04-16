import './App.css';

import Navbar from './components/Navbar';
import Banner from './components/Banner'
import CourseList from './components/CourseList';
import StudentList from './components/StudentList';
import Footer from './components/Footer'
function App() {
  return (
    <>
    <Navbar/>
    <Banner/>
    <CourseList/>
    <StudentList/>
    <Footer/>
    </>
  );
}

export default App;
