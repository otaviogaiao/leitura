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

  
    render(){
        const { comment } = this.props
        return <Well>
            <div>
                <LikeDislike score={comment.voteScore}/>
                {this.state.editing && 
                <div>
                    <form>
                        <FormControl componentClass="textarea" style={{ minHeight: 200 }}
                        defaultValue={comment.body} />
                        <ButtonGroup>
                            <Button>Save</Button>
                            <Button onClick={this.edit}>Cancel</Button>
                        </ButtonGroup>
                    </form>
                </div>}
                {!this.state.editing && <div>
                    <p>{comment.body}</p></div>}
            </div>
           
            {!this.state.editing && <div>
                <a onClick={this.edit} className="link-black">Edit</a> <a className="link-black">Delete</a>
            </div>}
            
       </Well>
    }
}

export default Comment