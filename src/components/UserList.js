import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from './../actions'

class UserList extends React.Component {

    componentDidMount() {
        this.props.fetchUsers()
    }

    render() {
        console.log(this.props.users);
        return <div>User List</div>
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