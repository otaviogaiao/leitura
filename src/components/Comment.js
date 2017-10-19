import React, {Component} from 'react'

import {Well, Button, ButtonGroup, FormControl} from 'react-bootstrap'

import LikeDislike from './LikeDislike.js'

import '../styles/comment.css'

class Comment extends Component {

    state = {
        editing: false
    }

    edit = () => {
        this.setState((oldState) => {
            return {editing: !oldState.editing}
        })
    }

    texto = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis ullamcorper odio vitae euismod. 
    Donec nec velit ac urna suscipit tempor. Vivamus quis posuere justo. Mauris fermentum lacinia tellus at rhoncus. 
    Etiam molestie iaculis tortor, id viverra tellus. 
    Proin rutrum pellentesque nisi, at viverra erat malesuada ut. Donec quis elit tortor. In porta egestas ultrices.`


    render(){
        return <Well>
            <div>
                <LikeDislike />
                {this.state.editing && 
                <div>
                    <form>
                        <FormControl componentClass="textarea" style={{ minHeight: 200 }}
                        defaultValue={this.texto} />
                        <ButtonGroup>
                            <Button>Save</Button>
                            <Button onClick={this.edit}>Cancel</Button>
                        </ButtonGroup>
                    </form>
                </div>}
                {!this.state.editing && <div>
                    <p>{this.texto}</p></div>}
            </div>
           
            {!this.state.editing && <div>
                <a onClick={this.edit} className="link-black">Edit</a> <a className="link-black">Delete</a>
            </div>}
            
       </Well>
    }
}

export default Comment