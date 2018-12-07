import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Container, Row, Col } from 'reactstrap';

class Dishdetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dish: null
        };
    }
    renderComments(commentsArray) {
        if (commentsArray != null) {
            console.log(commentsArray)
            return (
                <div>
                    <h4>Comments</h4>
                    {commentsArray.map((comment, index) => (
                        <ul className="list-unstyled">
                            <li>{comment.comment}</li>
                            <li>-- {comment.author} , {comment.date}</li>
                        </ul>
                    ))}
                </div>
            )
        }
        else {
            return (<div></div>);
        }

    }
    renderDish(dish) {
        if (dish != null) {
            return (
                <div>
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
                            {this.renderComments(dish.comments)}

                        </Col>
                    </Row>
                </div>
            )
        }
        else {
            return (
                <div></div>
            )
        }
    }

    render() {
        const dish = this.props.selectedDish;
        console.log()
        return (this.renderDish(dish))
    }


}

export default Dishdetail