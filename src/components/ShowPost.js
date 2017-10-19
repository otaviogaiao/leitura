import React, {Component} from 'react'


import {Grid, Row, Col, ButtonToolbar, Button, FormControl} from 'react-bootstrap'

import {Link} from 'react-router-dom'

import CommentList from './CommentList.js'
import HeaderPost from './HeaderPost.js'


class ShowPost extends Component {

    state = {
        editing: false
    }

    edit = () => {
        this.setState((oldState) => {
            return {editing: !oldState.editing}
        })
    }

    texto = ` <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lorem massa, porttitor vitae turpis id, 
    condimentum tristique augue. Praesent erat mauris, gravida eu mollis eu, finibus at neque. Sed risus 
    est, vulputate nec orci hendrerit, luctus condimentum est. Aenean tempor, lorem vitae posuere tempus, 
    metus velit dapibus turpis, id cursus lectus sem eu nisl. Mauris efficitur metus ac justo convallis 
    faucibus. Phasellus odio sem, consectetur sit amet massa nec, blandit vehicula nunc. Ut dapibus 
    vulputate metus vehicula dignissim. Sed eget dapibus nibh.</p>

    <p>Nulla eget viverra ipsum. Praesent neque sapien, tempor eu elit non, bibendum consequat mauris. Duis 
    sed orci massa. Nulla eget eros ultricies, aliquam ex in, venenatis quam. Vestibulum viverra imperdiet
     mattis. Proin consequat nisi convallis orci sollicitudin elementum. Nulla gravida porta rutrum. 
     Quisque rhoncus nisi vitae sem efficitur, ac posuere nulla pretium. Phasellus dictum justo non 
     massa interdum molestie. Morbi sit amet felis justo. Suspendisse vel rutrum ipsum. Aenean in est 
     ante. Morbi libero diam, cursus quis eleifend vel, consectetur ac nibh. Morbi venenatis nec eros at 
     molestie. Aenean semper enim vel erat volutpat pretium. Vestibulum euismod nisi quis libero fermentum 
     gravida.</p>

    <p>Vivamus condimentum sit amet est sed placerat. Nam sed luctus dui, eget vestibulum libero. Nam aliquet 
    placerat tellus, et mattis massa commodo ut. Sed vitae vestibulum purus. Donec non tellus quis lorem 
    luctus luctus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis 
    egestas. Phasellus auctor nunc mi, et interdum enim sodales eu. Pellentesque habitant morbi tristique 
    senectus et netus et malesuada fames ac turpis egestas. Maecenas aliquam mi non arcu bibendum, vitae 
    bibendum sapien rutrum.</p>

    <p>Vestibulum dui mauris, dapibus a enim vel, varius eleifend orci. Sed congue at libero nec porta. Sed 
    facilisis urna ut volutpat egestas. Donec a felis et enim tincidunt placerat quis ut lectus. Nulla 
    lobortis odio varius, consequat tellus eget, hendrerit nibh. Curabitur iaculis et purus id rutrum. 
    Vestibulum nunc nisl, rhoncus ac rutrum et, placerat blandit metus. Nulla condimentum feugiat eleifend.
    Vivamus augue velit, luctus a lorem sed, mollis auctor neque. Nam tincidunt efficitur dui sit amet 
    efficitur. Nullam justo orci, porta sed augue quis, gravida laoreet sem. Cras ut tortor a lectus 
    laoreet condimentum. Aliquam gravida accumsan felis, sagittis dapibus sapien egestas vitae.</p>

    <p>Nam eu nulla metus. Curabitur vehicula dignissim nulla at vehicula. Suspendisse blandit mi nulla, 
    ut aliquam enim dignissim iaculis. Donec posuere orci viverra ligula pharetra, at pellentesque lacus
    hendrerit. Pellentesque rutrum, erat sed viverra faucibus, nisi urna tempor quam, quis semper arcu 
    lorem condimentum nulla. Aliquam erat volutpat. Aenean a semper neque. Aenean ut lectus et justo 
    aliquet suscipit ac non nisi. Donec viverra, risus quis elementum gravida, ex lectus ultricies lectus,
    ac ultrices velit dolor posuere purus. Fusce eu risus eleifend, rutrum nibh ut, vehicula nisi. Nam 
    hendrerit dolor felis, non lobortis felis consectetur ac.</p>

    <p>Vivamus hendrerit, mauris euismod pellentesque sollicitudin, massa est tempor dui, in consectetur 
    sapien ipsum vel eros. Fusce vel lacus mi. Etiam sit amet tortor non purus sodales eleifend. 
    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Curabitur 
    quis maximus urna. Morbi sed convallis massa. Proin faucibus efficitur purus, nec tempor nulla 
    lobortis eget. Nullam sit amet augue sit amet dui cursus aliquam a nec dolor.</p>

    <p>Duis nec est sed orci imperdiet porttitor in ut leo. Sed malesuada ex ut massa mattis consectetur. 
    Phasellus risus mauris, ultricies non tellus id, dignissim fringilla elit. Interdum et malesuada 
    fames ac ante ipsum primis in faucibus. Nam ut feugiat eros. Duis sit amet bibendum nulla, eu 
    molestie quam. Duis ac ante neque. Aenean commodo neque ut est lacinia molestie. Morbi fringilla, 
    enim venenatis tempus lobortis, nulla arcu congue ligula, at congue turpis neque vitae metus. Ut 
    accumsan magna non sem euismod convallis. Nulla vitae nisl quis nisi interdum condimentum non ac lacus.
    Vivamus condimentum pharetra nisl vitae cursus. Donec tortor felis, faucibus quis convallis eget, 
    eleifend aliquet urna.</p>`
    
    render(){
        return (
           <Grid>
               <Row>
                   <Col md={9} lg={9}>
                      <div>
                          {!this.state.editing &&
                           ([<HeaderPost key='header' onEdit={this.edit}/>,
                            <div key='text' dangerouslySetInnerHTML={{__html: this.texto}}></div>])
                           }
                           {this.state.editing &&
                            <form>
                                <FormControl type="text" defaultValue={'Title'}/>
                                <FormControl componentClass="textarea" defaultValue={this.texto} style={{ minHeight: 400 }}/>
                                <br/>
                                <div>
                                    <Button bsStyle="primary">Save</Button> <Button bsStyle="warning" onClick={this.edit}>Cancel</Button>
                                </div>
                                
                            </form>
                           }
                      </div>
                     <hr />
                      <form>
                          <h3>Add Comment</h3>
                          <FormControl componentClass="textarea" style={{ minHeight: 200 }} /><br/>
                          <Button bsStyle="primary" style={{float: 'left'}}>Save</Button>
                      </form>
                      <br />
                      <CommentList />
                   </Col>

                   <Col md={3} lg={3}>
                        <ButtonToolbar>
                        <Link to="/posts/new" style={{":hover": {textDecoration: 'none', color: 'inherit'}, 
                         textDecoration: 'none', color: 'inherit'}}>
                            <Button bsStyle="primary">                        
                                    New Post
                            </Button>
                        </Link>
                        </ButtonToolbar>
                   </Col>
               </Row>
          </Grid>
        )
    }
}

export default ShowPost