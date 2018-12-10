import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Row, Col, Container } from 'reactstrap';

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
                            <li>-- {comment.author} ,{new Intl.DateTimeFormat('en-US',{ year: 'numeric', month:'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</li>
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
                            {this.renderComments(dish.comments)}
                        </Col>
                    </Row>
                </Container>
            )
        }
        else {
            console.log("no dish")
            return (
                <div>f</div>
            )
        }
    }

    render() {
        const dish = this.props.dish;
        console.log(this.props)
        return (this.renderDish(dish))
    }


}

export default Dishdetail