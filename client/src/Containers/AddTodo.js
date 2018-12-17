import React from 'react';
import axios from 'axios';
import {Modal, Button, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';
import config from '../config';

class AddTodo extends React.Component {
    constructor(props) {
        super(props);

        this.handleClose = this.handleClose.bind(this);
        this.addTodo = this.addTodo.bind(this);

        this.handleTItleChanged = this.handleTItleChanged.bind(this);
        this.handleDescriptionChanged = this.handleDescriptionChanged.bind(this);

        this.state = {
            title: '',
            description: '',
            show: this.props.state
        }
    }

    handleClose() {
        this.setState({ show: false });
    }

    componentWillReceiveProps(props) {
        console.log(props)
        this.setState({
            title: '',
            description: '',
            show: props.show
        })
    }


    handleTItleChanged(event) {
        this.setState({
            title: event.target.value
        })
    }

    handleDescriptionChanged(event) {
        this.setState({
            description: event.target.value
        })
    }
    
    addTodo() {
        axios.post(`${config.url}/addTodo`, {
            title: this.state.title,
            description: this.state.description
        })
            .then((result) => {
                this.props.onChangeFunction(this.state.title, this.state.description);
                this.handleClose();
            })
    }

    render() {
        return (
            <Modal show={this.state.show} className={this.props.show ? 'show' : ''}>
                <Modal.Header>
                    <Modal.Title>Add new Todo</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <FormGroup
                        id="title"
                    >
                        <ControlLabel>Title</ControlLabel>
                        <FormControl type="text" placeholder="Enter title"  onChange={this.handleTItleChanged} />
                    </FormGroup>

                    <FormGroup controlId="description">
                        <ControlLabel>Description</ControlLabel>
                        <FormControl componentClass="textarea" placeholder="description" onChange={this.handleDescriptionChanged} />
                    </FormGroup>
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={this.handleClose}>Close</Button>
                    <Button bsStyle="primary" onClick={this.addTodo}>Save changes</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default AddTodo;
