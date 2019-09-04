import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {connect } from 'react-redux';
import PropTypes from 'prop-types';
import {logout} from '../../actions/auth'
import Button from 'react-bootstrap/Button'

class Headers extends Component {

static propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired
}

    render() {
        const {isAuthenticated, user} = this.props.auth

const authLinks = (
    <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                 <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <strong>{user ? `Welcome ${user.username}`: ""}</strong>
                </li>
                &nbsp;&nbsp;&nbsp;
                <li>
                <Button  onClick={this.props.logout}variant="light">Logout</Button>
                </li>
                </ul>
                </div>
)

const guestLinks = (
                 <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                 <ul className="navbar-nav ml-auto">
                     <li className="nav-item">
                     <Link to="/login" className="nav-link">Login</Link>
                     </li>
                     <li className="nav-item">
                     <Link to="/register" className="nav-link">Register</Link>
                     </li>
                 </ul>
             </div>
)
        return (
                        
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#"><strong>Full stack</strong></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                {isAuthenticated ? authLinks : guestLinks}
                   
            </div>
            </nav>

        )
    }
}


const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, {logout})(Headers);
