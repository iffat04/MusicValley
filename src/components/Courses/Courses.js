import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import Course from '../Course/Course'
const Courses = () => {

    const [courses,setCourses] = useState([]);
    useEffect(()=>{
        fetch('./data.json')
        .then(res=>res.json())
        .then(data=>setCourses(data))
    },[]);
    console.log(courses);
    return (
        <div className="container mt-4">
          
            {
                    courses.length===0 ?
                    <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                    </Spinner>
                    :
                    <Row xs={1} md={3} className="g-4">
                    {
                        courses.map(course=> <Course course={course} key={course.id}></Course>)
                    }

                    </Row>
            }

        </div>
    );
};

export default Courses;