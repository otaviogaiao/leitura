import React, { Component } from 'react'

import { Button, FormControl, FormGroup, ControlLabel } from 'react-bootstrap'

class CommentForm extends Component {

    state = {
        email: '',
        body: ''
    }


    render(){
        return (<FormGroup controlId='comment'>
            <ControlLabel>Email</ControlLabel>
            <FormControl type="email" placeholder="Email" onChange={(e) =>
                this.setState({email: e.target.value})} value={this.state.email}/><br/>
            <ControlLabel>Comentário</ControlLabel>
            <FormControl componentClass="textarea" style={{ minHeight: 200 }} 
              onChange={(e) =>
                this.setState({body: e.target.value})}
              value={this.state.body}/><br/>
            <Button bsStyle="primary" style={{float: 'left'}} 
            disabled={this.state.email.length === 0 || this.state.body.length === 0}>Save</Button>
        </FormGroup>)
    }

}

export default CommentForm