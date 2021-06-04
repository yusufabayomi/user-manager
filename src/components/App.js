import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../helper/history';
import UserCreate from './UserCreate';
import UserEdit from './UserEdit';
import UserList from './UserList';

const App = () => {
  return (
    <div className='container mt-5'>
      <Router history={history}>
        <Switch>
          <Route path='/' exact component={UserList} />
          <Route path='/users/create' component={UserCreate} />
          <Route path='/users/edit/:id' component={UserEdit} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
