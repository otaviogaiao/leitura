import React, {Component} from 'react'

import {FormControl, Button, Grid, Row, Col, ControlLabel, FormGroup} from 'react-bootstrap'
import {connect} from 'react-redux'
import {addNewPost} from '../actions'

class NewPost extends Component {

    constructor(props){
        super(props)
        this.savePost = this.savePost.bind(this)
    }

    state = {
        title: '',
        body: '',
        category: '',
        author: 'Otavio',
        id: '',
        timestamp: null
    }

    savePost(){
        console.log(this.state)
        this.setState({timestamp: Date.now(), id: Math.random() * 16})
        this.props.dispatch(addNewPost(this.state))
    }
    
    render(){
        return (
            <Grid>
                <Row>
                    <Col md={12} lg={12}>
                    <form>
                        <FormGroup>
                            <ControlLabel htmlFor="title" style={{float: 'left'}}>Title</ControlLabel>
                            <FormControl type="text" name="title" onChange={(event) => {
                                this.setState({title: event.target.value})
                            }}/>
                        </FormGroup>
                        
                        <FormGroup>
                            <ControlLabel htmlFor="conteudo" style={{float: 'left'}}>Text</ControlLabel>
                            <FormControl componentClass="textarea" name="conteudo" style={{ minHeight: 400 }} onChange={(event) => {
                                this.setState({body: event.target.value})
                            }}/>
                        </FormGroup>

                        <FormGroup controlId="formControlsSelect">
                            <ControlLabel style={{float: 'left'}}>Select</ControlLabel>
                            <FormControl componentClass="select" placeholder="select" onChange={(event) => {
                                this.setState({category: event.target.value})
                            }}>
                                <option value="">Selecione..</option>
                                {this.props.categories.length > 0 && 
                                    this.props.categories.map((category) => <option key={category.name} value={category.name}>{category.name}</option>)}
                            </FormControl>
                        </FormGroup>
                        
                        <br/>
                        <div>
                            <Button bsStyle="primary" onClick={this.savePost}>Save</Button> <Button bsStyle="warning" onClick={this.props.history.goBack}>Cancel</Button>
                        </div>
                        
                    </form>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

function mapStateToProps({categories}){
    return {categories}
}

export default connect(mapStateToProps)(NewPost)