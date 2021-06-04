import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import UserCreate from './UserCreate';
import UserDelete from './UserDelete';
import UserDetail from './UserDetail';
import UserEdit from './UserEdit';
import UserList from './UserList';

const App = () => {
    return (
        <div className="container mt-5">
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={UserList} />
                    <Route path="/users/create" component={UserCreate} />
                    <Route path="/users/edit/:id" component={UserEdit} />
                    <Route path="/users/delete/:id" component={UserDelete} />
                    <Route path="/users/:id" component={UserDetail} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;