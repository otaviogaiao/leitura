import React, {Component} from 'react'

import {Grid, Row, Col} from 'react-bootstrap'

import LikeDislike from './LikeDislike.js'
import '../styles/headerPost.css'

class HeaderPost extends Component {

    render(){
        return (
            <Grid className="alinhar-esquerda">
                <Row>
                    <Col md={2} lg={2}>
                        <LikeDislike />
                    </Col>
                    <Col md={10} lg={10}>
                        <h1>Title</h1>
                        <div>
                            <p>Submitted on October, 1th, 2017 by Otávio Gaião</p>
                            <a className="link-black">2 comments</a> <a className="link-black" onClick={this.props.onEdit}>Edit</a> <a className="link-black">Delete</a>
                        </div>
                    </Col>
                </Row>
            </Grid>

        )
    }
}

export default HeaderPost