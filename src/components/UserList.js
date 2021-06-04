import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchUsers, deleteUser } from './../actions'

class UserList extends React.Component {

    componentDidMount() {
        if(this.props.firstfetch) {
            this.props.fetchUsers()
        }
    }

    renderUsers()  {
        return this.props.users.map((user) => 
        <tr key={user.id}>
            <td>{user.first_name}</td>
            <td>{user.last_name}</td>
            <td>{user.email}</td>
            <td>
                <Link to={`/users/edit/${user.id}`} className="btn btn-success">Edit</Link>
                <button className="btn btn-danger ms-1" onClick={() => this.props.deleteUser(user)}>Delete</button>
            </td>
        </tr>)
    }

    render() {
        return (
            <>
                <div className="d-flex justify-content-between mb-3">
                    <h2>Manage Users</h2>
                    <Link to="/users/create" className="btn btn-primary">Add User</Link>
                </div>

                <div>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th></th>
                            </tr>
                        </thead>

                        <tbody>
                           {
                               this.renderUsers()
                           }
                        </tbody>
                    </table>
                </div>
            </>
        )
    }
}

const mapStateToProps = ( state ) => {
    return {
        users: state.users,
        firstfetch: state.fetchFirstTime
    };
}

export default connect(mapStateToProps, {
    fetchUsers,
    deleteUser
})(UserList);