import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'; 
import { editUser } from './../actions';
import UserForm from './UserForm';

class UserEdit extends React.Component {
    render() {
        return (
            <>
                <div className="d-flex justify-content-between mb-3">
                    <h2>Edit User</h2>
                    <Link to="/" className="btn btn-primary">Go Back</Link>
                </div>

                <UserForm initialValues={this.props.user} onSubmit={this.props.editUser} />
            </> 
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.users.find(user => user.id === ownProps.match.params.id)
    }
}

export default connect(mapStateToProps, {
    editUser
})(UserEdit);