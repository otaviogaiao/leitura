import React, { Component } from 'react'

import { Button, FormControl, FormGroup, ControlLabel } from 'react-bootstrap'
import '../styles/commentForm.css'

class CommentForm extends Component {

    state = {
        username: '',
        body: '',
        editing: false
    }

    componentDidMount(){
        let { username = '', body = '' } = this.props
        this.setState({
            username,
            body,
            editing: (username.length > 0 && body.length > 0)
        })
    }

    onSubmitHandle = () => {
        this.props.onSubmitAction(this.state.username, this.state.body)
        this.setState({
            username: '',
            body: '',
            editing: false
        })
    }

    render(){
        return (
            <FormGroup controlId='comment'>
                <ControlLabel>Username</ControlLabel>
                <FormControl type="text" placeholder="Username" onChange={(e) =>
                    this.setState({username: e.target.value})} disabled={this.state.editing} 
                    value={this.state.username}/><br/>
                <ControlLabel>Comentário</ControlLabel>
                <FormControl componentClass="textarea" style={{ minHeight: 200 }} 
                onChange={(e) =>
                    this.setState({body: e.target.value})}
                value={this.state.body}/><br/>
                <Button bsStyle="primary" style={{float: 'left'}} 
                disabled={this.state.username.length === 0 || this.state.body.length === 0}
                onClick={this.onSubmitHandle}>Save</Button>
            </FormGroup>
        )
    }

}

export default CommentForm