import React from 'react';
import {Row, Col} from 'react-bootstrap';

class TodoItem extends React.Component {
    render() {
        return (
            <Row className="show-grid">
                <Col md={4}>
                    {this.props.title}
                </Col>
                <Col md={8}>
                    {this.props.description}
                </Col>
            </Row>
        )
    }
}

export default TodoItem;