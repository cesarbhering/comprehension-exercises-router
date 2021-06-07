import React from 'react';
import { Redirect } from 'react-router-dom';


class StrictAccess extends React.Component {
  render() {
    const { user } = this.props;
    console.log(user.username)
    return user.username === 'joao' && user.password === '1234' ? <div><p>Welcome joao</p></div> : <Redirect to="/" /> ; 
  }
}

export default StrictAccess;