import React, {Component} from 'react'

import {Grid, Row, Col} from 'react-bootstrap'

import LikeDislike from './LikeDislike.js'
import '../styles/headerPost.css'
import moment from 'moment'

class HeaderPost extends Component {

    render(){
        let date = moment(new Date(this.props.post.timestamp)).format('MMMM Do YYYY, h:mm:ss a')
        return (
            <Grid className="alinhar-esquerda">
                <Row>
                    <Col md={2} lg={2}>
                        <LikeDislike score={this.props.post.voteScore}/>
                    </Col>
                    <Col md={10} lg={10}>
                        <h1>{this.props.post.title}</h1>
                        <div>
                            <p>Submitted on {date} by {this.props.post.author}</p>
                            {this.props.showActions && <span><a className="link-black">2 comments</a> <a className="link-black" onClick={this.props.onEdit}>Edit</a> <a className="link-black">Delete</a></span>}
                        </div>
                    </Col>
                </Row>
            </Grid>

        )
    }
}

export default HeaderPost