import React, { Component } from 'react'
import {Link, Redirect} from  "react-router-dom";
import { connect} from 'react-redux';
import {login} from '../../actions/auth';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'



export class Login extends Component {
    state = {
        username: "",
        email: "",
        password: "",
        password2: ""
    }
static propTypes ={
    login: PropTypes.func.isRequired,
    isAuthenticated : PropTypes.bool
}

onSubmit = e => {
        e.preventDefault();
        this.props.login(
            this.state.username,
            this.state.password
            )};


onChange = e => this.setState({ [e.target.name]:
        e.target.value });
            
    render() {
        if(this.props.isAuthenticated){
            return <Redirect to="/"/>
        }
        const {username, password } = this.state;
        return (
            <Container>
            
            
             <Row>
             <Col md={{ span: 4, offset: 4 }}>{    
            <div className="card card-body mt-4 mb-4">
                <center><h1>Login Form</h1></center>
            <form onSubmit = {this.onSubmit}>
            <div className="form-group">
                <label>Username</label>
                <input 
                className="form-control"
                type="text"
                name="username"
                onChange={this.onChange}
                value={username}>
                </input>
            </div>
            <div className="form-group">
                <label>Password</label>
                <input 
                className="form-control"
                type="password"
                name="password"
                onChange={this.onChange}
                value={password}>
                </input>
            </div>
           
            <div className="form-group">
            <Button variant="primary"type="submit" size="sm" value="Submit" block>
            Login
            </Button>
            </div>
            Don't Have an Account<Link to="/register">
            <Button variant="primary" size="sm" block>
                Register
            </Button>
            </Link>
           </form>
            </div>}</Col>
           </Row>
         </Container>
        )
    }
}


const mapStateToProps = state => ({
     isAuthenticated: state.auth.isAuthenticated});
 
export default connect(mapStateToProps, {login})(Login);
