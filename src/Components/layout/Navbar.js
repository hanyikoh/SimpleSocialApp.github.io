import React, { Component, Fragment } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/ToolBar'
import Button from '@material-ui/core/Button'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import MyButton from '../../util/MyButton'
import PostScream from '../scream/PostScream'
import Notifications from './Notifications'
//Icons
import HomeIcon from '@material-ui/icons/Home'
import Notification from '@material-ui/icons/Notifications'

export class Navbar extends Component {
    render() {
        const {authenticated} = this.props
        return (
            <AppBar>
                <Toolbar className ="nav-container">
                    {authenticated ?(
                        <Fragment>
                            <PostScream />
                            <Link to='/'>
                                <MyButton tip="Home">
                                    <HomeIcon color="primary"/>
                                </MyButton>
                            </Link>
                                <Notifications/>
                        </Fragment>
                    ):(
                        <Fragment>
                            <Button color="inherit" component={Link} to="/">Home</Button>
                            <Button color="inherit" component={Link} to="/login">Login</Button>
                            <Button color="inherit" component={Link} to="/signup">Sign Up</Button>
                        </Fragment>
                    )}
                    
                </Toolbar>
            </AppBar>
        )
    }
}

Navbar.propTypes = {
    authenticated: PropTypes.bool.isRequired
}

const mapStateToProps = state =>({
    authenticated : state.user.authenticated
})

export default connect (mapStateToProps)(Navbar)