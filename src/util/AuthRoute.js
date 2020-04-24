import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

const AuthRoute = ({component: Component, authenticated,...rest}) => (
<Route
{...rest}
render = {(props) =>
    authenticated === true? <Redirect to='/' /> :<Component {...props} />}
/>
)

const mapStateToProps = (state) =>({
    authenticated : state.user.authenticated
    //set authenticated into props so nothing change in above code
})

AuthRoute.propTypes = {
    user: PropTypes.object
}

export default connect(mapStateToProps)(AuthRoute)