import React, { Component } from 'react';
import {Link, Redirect} from  "react-router-dom";
import { connect} from 'react-redux';
import {register} from '../../actions/auth';
import { Alert } from 'reactstrap';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'


export class Register extends Component {
    state = {
        username: "",
        email: "",
        password: "",
        password2: ""
    }
    static propTypes ={
        register: PropTypes.func.isRequired,
        isAuthenticated : PropTypes.bool
    }
    onSubmit = e => {
        e.preventDefault();
        const{username, email, password,password2}= this.state;
        if(password !== password2){
            <Alert color="primary">
            Password does not match
          </Alert>
        } else {
        const newUser= {
            username,
            email,
            password
        };
        this.props.register(newUser);
        }
    }

    onChange = e => this.setState({ [e.target.name]:
        e.target.value });
            
    render() {

        if(this.props.isAuthenticated){
            return <Redirect to="/"/>
        }
        
        const {username, email, password, password2 } = this.state;
        return (
            <Container>
            
            
             <Row>
             <Col md={{ span: 4, offset: 4 }}>{   
            <div className="card card-body mt-4 mb-4">
                <h1>Sign Up Form</h1>
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
                <label>Email</label>
                <input 
                className="form-control"
                type="text"
                name="email"
                onChange={this.onChange}
                value={email}>
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
                <label>Confirm Password</label>
                <input 
                className="form-control"
                type="password"
                name="password2"
                onChange={this.onChange}
                value={password2}>
                </input>
            </div>
            <div className="form-group">
            <Button variant="primary"type="submit" size="sm" value="Submit" block>
            Register
            </Button>
                 Aready Have an Account<Link to="/login">
                 <Button variant="primary" size="sm" block>
                Login
            </Button></Link>
           </div>
            </form>
            </div>}</Col>
           </Row>
         </Container>
        )
    }
}


const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated});


export default connect(mapStateToProps, {register})(Register);
