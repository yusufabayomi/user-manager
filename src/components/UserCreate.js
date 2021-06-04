import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import UserForm from './UserForm';
import { createUser } from './../actions'

class UserCreate extends React.Component {

    render() {
        return (
            <>
                <div className="d-flex justify-content-between mb-3">
                    <h2>Create User</h2>
                    <Link to="/" className="btn btn-primary">Go Back</Link>
                </div>

                <UserForm onSubmit={this.props.createUser} />
            </>
        )
    }
}

export default connect(null, {
    createUser
})(UserCreate);