import React, { Component } from 'react';
import UserTemplate from './user_template';

import PropTypes from 'prop-types';

class User extends Component {
  state = {
    name: 'Ernest',
    lastname: 'Roca',
    age: 32,
    hobbies: ['run', 'jump'],
    spanish: false,
    message() { console.log('message') },
    car: { brand: 'Ford', model: 'Focus' }
  }

  render() {
    return (
      <div>
        <UserTemplate {...this.state} />
      </div>
    );
  }
}

export default User;