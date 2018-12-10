import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Row, Col, Container } from 'reactstrap';



    function RenderComments({comments}) {
        if (comments != null) {
            console.log(comments)
            return (
                <div>
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
                <Container>
                    <Row>
                        <Col xs="12" md="5">
                            <Card>
                                <CardImg width="100%" object src={dish.image} alt={dish.name} />
                                <CardBody>
                                    <CardTitle>{dish.name}</CardTitle>
                                    <CardText>{dish.description}</CardText>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xs="12" md="5">
                            <RenderComments comments={dish.comments}/>
                        </Col>
                    </Row>
                </Container>
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
        <RenderDish dish={props.dish}/>
            )
    }

export default DishDetail