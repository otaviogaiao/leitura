import React from 'react'
import {ListGroup, ListGroupItem} from 'react-bootstrap'
import {Link} from 'react-router-dom'

import {withRouter} from 'react-router'

const CategoryList = ({categories}) => {
    return (
        <ListGroup>
            {categories.length > 0 && categories.map((category) => {
                return (<ListGroupItem key={category.name}>
                    <Link to={`/${category.path}`}>{category.name}</Link>
                  </ListGroupItem>)
            })} 
        </ListGroup>
    )
}

export default withRouter(CategoryList)