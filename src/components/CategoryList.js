import React from 'react'
import {ListGroup, ListGroupItem} from 'react-bootstrap'
import {Link} from 'react-router-dom'

import {withRouter} from 'react-router'
import PropTypes from 'prop-types'

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

CategoryList.propTypes = {
    categories: PropTypes.array
}