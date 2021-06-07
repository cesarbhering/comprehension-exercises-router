import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <h2>Home</h2>
        <p> My awesome Home component </p>
        <Link to="/users">Users Comp</Link>
        <Link to="/about">About Comp</Link>
        <Link to="/StrictAccess">Strict Access</Link>
      </div>
    );
  }
}

export default Home;
