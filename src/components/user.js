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
    car: { brand: 'Ford', model: 'Focus' },
    mother: 'Jane',
    color: 'red'
  }

  changeColor = () => {
    this.refs.myColor.style.color = 'blue'
  }

  render() {
    const style = {
      color: this.state.color,

    }
    return (
      <div>
        <h4 style={style} ref='myColor'>{this.state.mother}</h4><br />
        <div onClick={this.changeColor}>Change color</div>
        <UserTemplate {...this.state} />
      </div>
    );
  }
}

export default User;