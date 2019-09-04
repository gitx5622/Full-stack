import React, { Component } from 'react'
import { connect} from 'react-redux';
import PropTypes from 'prop-types';
import { addLead } from '../../actions/leads';
export class Form extends Component {
    state = {
        title : "",
        email:"",
        message : ""
}
static propTypes ={
    addLead: PropTypes.func.isRequired
}

onChange = e => this.setState({ [e.target.name]:
e.target.value });

onSubmit = e => {
    e.preventDefault();
    const {title, email,message} = this.state;
    const lead = {title, email, message};
    this.props.addLead(lead);
}

    render() {
        const {title, email, message} = this.state;
        return (
            <div className="card card-body mt-4 mb-4">
                <h1>Add Form</h1>
            <form onSubmit = {this.onSubmit}>
            <div className="form-group">
                <label>Title</label>
                <input 
                className="form-control"
                type="text"
                name="title"
                onChange={this.onChange}
                value={title}>
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
                <label>Message</label>
                <input 
                className="form-control"
                type="text"
                name="message"
                onChange={this.onChange}
                value={message}>
                </input>
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-primary">Submit</button>
        
            </div>
             </form>
            </div>
        )
    }
}

export default connect(null, { addLead })(Form);
