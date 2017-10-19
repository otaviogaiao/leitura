import React, {Component} from 'react'

import {FormControl, Button, Grid, Row, Col, ControlLabel, FormGroup} from 'react-bootstrap'

class NewPost extends Component {
    
    render(){
        return (
            <Grid>
                <Row>
                    <Col md={12} lg={12}>
                    <form>
                        <FormGroup>
                            <ControlLabel htmlFor="title" style={{float: 'left'}}>Title</ControlLabel>
                            <FormControl type="text" name="title"/>
                        </FormGroup>
                        
                        <FormGroup>
                            <ControlLabel htmlFor="conteudo" style={{float: 'left'}}>Text</ControlLabel>
                            <FormControl componentClass="textarea" name="conteudo" style={{ minHeight: 400 }}/>
                        </FormGroup>
                        
                        <br/>
                        <div>
                            <Button bsStyle="primary">Save</Button> <Button bsStyle="warning" onClick={this.props.history.goBack}>Cancel</Button>
                        </div>
                        
                    </form>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default NewPost