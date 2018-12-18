import React from 'react'
import {Grid, Row, Col} from 'react-bootstrap'

import TodoItem from './TodoItem'

class TodosList extends React.Component {
    render() {
        const {todos} = this.props;

        return (
            <Grid className={'listGrid'}>
                <Row className={'listHeader'}>
                    <Col md={4}>
                        Title
                    </Col>
                    <Col md={8}>
                        Description
                    </Col>
                </Row>
                {todos.map((item, i) => {
                    return (
                        <TodoItem key={i} title={item.title} description={item.description}/>
                    )
                })}
            </Grid>
        )
    }
}

export default TodosList