import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Course.css'

const Course = (props) => {
    //console.log(props.course)
    const {name,id,image,price,rating,duration,about,title}=props.course;
    return (
        <div>
          
            { <Col>
                <Card className="h-100">
                  <Card.Img className="p-4 " height="300px" variant="top" src={image} />
                  <div className="mx-4  pt-2 d-flex justify-content-between align-items-center">
                    <h5 className="fs-6"><button className="btn btn-secondary">Preview</button></h5> 
                    
                    <h5 className="fs-6">Rating: {rating}</h5>


                  </div>
                  <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <h5>Instructor: <span style={{color:"blue"}}>{name}</span></h5>
                    <Card.Text>
                      {about}<small style={{color:"tomato"}}>Learn More.</small>
                    </Card.Text>
                    <div>
                       <p>Price: ${price}</p>
                       <p>Duration: {duration} Weeks</p>
                    </div>
                    <button className="btn btn-warning">Enroll Now</button>
                  </Card.Body>
                </Card>
              </Col>
            }

        </div>
    );
};

export default Course;