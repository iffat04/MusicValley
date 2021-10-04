import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Carousel, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import HomeCourse from '../HomeCourse/HomeCourse';

const Home = () => {
  
    const [courses,setCourses] = useState([]);
    useEffect(()=>{
        fetch('./data.json')
        .then(res=>res.json())
        .then(data=>setCourses(data))
    },[]);
    console.log(courses);
    return (
        
        <div className="container">
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="./images/home1.jpg"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>Learn And Earn</h3>
                        <p>Every month we organise Musical instrumental Contest with a honourable prize money at various area of instruments. <span style={{color:"yellow"}}>Check this Below..</span></p>
                        <Link to="/contest">
                        <Button className="btn btn-info">Upcoming Contest</Button>
                        </Link>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="./images/home2.jpg"
                        alt="Second slide"
                        />
                        <Carousel.Caption>
                        <h5>Unlimited support through</h5>
                        <h3 style={{color:"yellow"}}>Online Support Session</h3>
                        <p>We provide online support from 10 am to 12pm</p>
                        </Carousel.Caption>

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="./images/home3.jpg"
                        alt="Third slide"
                        />

                        <Carousel.Caption >
                        <h5>Buy Best Quality Instruments from</h5>
                        <h3 style={{color:"yellow"}}>our shop</h3>
                        <Link to="/">
                        <Button className="btn btn-info">Visit Shop</Button>
                        </Link>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>

            <div className="my-5">
                <h1>Most <span style={{color:"tomato"}}>Popular</span> Coursres</h1>
                {
                        
                        <Row xs={1} md={2} className="g-4">
                        {
                            courses.slice(0,4).map(course=> <HomeCourse course={course} key={course.id}></HomeCourse>)
                        }

                        </Row>
                }
            </div>
           

        </div>
    );
};

export default Home;