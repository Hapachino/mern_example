import React, { Component } from 'react';
import axios from 'axios';

class Test extends Component {
  async componentDidMount() {
    const message = {
      text: 'This is a message from the client, Hello!',
      name: 'Kim K.',
      test: {
        test: 'test',
      }
    };

    const res = await axios.post('api/send-message', message);

    console.log('Send message response:', res);

    // const res = await axios.get('/api/test');

    // console.log('Test Response:', res);

    // const user = await axios.get('/api/user');

    // console.log('User Response:', user);
  }

  render() {
    return (
      <div>
        <h1>Test Component</h1>
      </div>
    );
  }
}

export default Test;
