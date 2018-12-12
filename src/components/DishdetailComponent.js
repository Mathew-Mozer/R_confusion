import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Row, Col, Container,
        Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom'


    function RenderComments({comments}) {
        if (comments != null) {
            console.log(comments)
            return (
                <div className="col-12 col-md-5">
                    <h4>Comments</h4>
                    {comments.map((comment, index) => (
                        <ul className="list-unstyled">
                            <p>{comment.comment}</p>
                            <p>-- {comment.author} ,{new Intl.DateTimeFormat('en-US',{ year: 'numeric', month:'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                        </ul>
                    ))}
                </div>
            )
        }
        else {
            return (<div></div>);
        }

    }
    function RenderDish({dish}) {
        if (dish != null) {
            return (
                        <div className="col-12 col-md-5">
                            <Card>
                                <CardImg width="100%" object src={dish.image} alt={dish.name} />
                                <CardBody>
                                    <CardTitle>{dish.name}</CardTitle>
                                    <CardText>{dish.description}</CardText>
                                </CardBody>
                            </Card>
                        </div>
            )
        }
        else {
            return (
                <div></div>
            )
        }
    }

    const DishDetail = (props) => {
        return (
            <div class="container">
                            <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <RenderDish dish={props.dish}/>
                    <RenderComments comments={props.comments}/>
                </div>
            </div>
        )
    }

export default DishDetail