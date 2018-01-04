import React, { Component } from 'react'
import {FormControl, Button, Grid, Row, Col, ControlLabel, FormGroup} from 'react-bootstrap'
import PropTypes from 'prop-types'

class PostForm extends Component {

    state = {
        title: '',
        body: '',
        category: '',
        author: '',
        id: null,
        timestamp: null
    }

    editing = false

    componentDidMount(){
        const { post } = this.props
        if(post){
            this.setState(post)
            this.editing = true
        }
    }

    //necessário por que as vezes o componente é inicializado sem a props post...
    componentWillReceiveProps(nextProps){
        const { post } = nextProps
        if(post){
            this.setState(post)
            this.editing = true
        }
    }

    onSubmitHandler = () => {
        let post = { ...this.state, timestamp: new Date().getTime()}
        if (!post.id) {
            post.id = new Date().getTime().toString()
        }
          
        this.props.onSubmitAction(post)
    }

    render(){
        const { categories, onCancelAction } = this.props
        let {title, author, category, body } = this.state
        return (
            <Grid>
                <Row>
                    <Col md={12} lg={12}>
                    <form>
                        <FormGroup>
                            <ControlLabel htmlFor="title" style={{float: 'left'}}>Title</ControlLabel>
                            <FormControl type="text" name="title" onChange={(event) => {
                                this.setState({title: event.target.value})
                            }} value={title}/>
                        </FormGroup>
                        
                        <FormGroup>
                            <ControlLabel htmlFor="conteudo" style={{float: 'left'}}>Text</ControlLabel>
                            <FormControl componentClass="textarea" name="conteudo" style={{ minHeight: 400 }} onChange={(event) => {
                                this.setState({body: event.target.value})
                            }} value={body}/>
                        </FormGroup>

                        <FormGroup controlId="formControlsSelect">
                            <ControlLabel style={{float: 'left'}}>Category</ControlLabel>
                            <FormControl componentClass="select" placeholder="select" onChange={(event) => {
                                this.setState({category: event.target.value})
                            }} value={category} disabled={this.editing}>
                                <option value="">Selecione..</option>
                                {categories.length > 0 && 
                                    categories.map((category) => <option key={category.name} value={category.name}>{category.name}</option>)}
                            </FormControl>
                        </FormGroup>

                        <FormGroup>
                            <ControlLabel htmlFor="author" style={{float: 'left'}}>Author</ControlLabel>
                            <FormControl type="text" name="author" onChange={(event) => {
                                this.setState({author: event.target.value})
                            }} value={author} disabled={this.editing}/>
                        </FormGroup>
                        
                        <br/>
                        <div>
                            <Button bsStyle="primary" onClick={this.onSubmitHandler}
                             disabled={!title || !body || !category || !author}>Save</Button> 
                            <Button bsStyle="warning" onClick={onCancelAction}>Cancel</Button>
                        </div>
                        
                    </form>
                    </Col>
                </Row>
            </Grid>
        )
    }

}

export default PostForm

PostForm.propTypes = {
    categories: PropTypes.array,
    onCancelAction: PropTypes.func.isRequired,
    onSubmitAction: PropTypes.func.isRequired,
    post: PropTypes.object
}