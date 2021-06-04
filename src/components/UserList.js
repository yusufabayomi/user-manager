import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchUsers } from './../actions'

class UserList extends React.Component {

    componentDidMount() {
        this.props.fetchUsers()
    }

    renderUsers()  {
        return this.props.users.map(({id, first_name, last_name, email}) => 
        <tr key={id}>
            <td>{first_name}</td>
            <td>{last_name}</td>
            <td>{email}</td>
            <td></td>
        </tr>)
    }

    render() {
        console.log(this.props.users);
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
        users: state.users
    };
}

export default connect(mapStateToProps, {
    fetchUsers
})(UserList);