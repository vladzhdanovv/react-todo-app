import React from 'react'
import {Grid} from 'react-bootstrap'

import TodoItem from './TodoItem'

class TodosList extends React.Component {
    render() {
        const {todos} = this.props;

        return (
            <Grid>
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